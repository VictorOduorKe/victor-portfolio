import express from 'express';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const validateContact = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').trim().isEmail().withMessage('Invalid email address'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ max: 500 }).withMessage('Message must not exceed 500 characters'),
];

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit each IP to 3 requests per windowMs
  message: { message: 'Too many requests from this IP, please try again after an hour' },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

router.post('/', contactLimiter, validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;
  const token = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_CHAT_ID;

  const formattedMessage = `
<b>New Portfolio Contact </b>

 <b>Name:</b> ${name}
 <b>Email:</b> <code>${email}</code>


 <b>Message:</b>
${message}

 <b>Date:</b> ${new Date().toLocaleString()}
  `;

  try {
    if (!token || !chatId) {
      console.log('Simulation Mode Message:', formattedMessage);
      return res.status(200).json({ message: 'Message received (Simulation mode)' });
    }

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: formattedMessage,
          parse_mode: 'HTML',
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.description || 'Telegram API Error');
    }

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Telegram Error:', error.message);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
});

export default router;
