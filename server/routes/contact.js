import express from 'express';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const validateContact = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').trim().isEmail().withMessage('Invalid email address'),
  body('phone').trim().isLength({ min: 10 }).withMessage('Phone number must be at least 10 characters').isLength({ max: 15 }).withMessage('Phone number must not exceed 15 characters'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ max: 500 }).withMessage('Message must not exceed 500 characters'),
];

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 3,
  message: { message: 'Too many requests from this IP, please try again after an hour' },
  standardHeaders: true, 
  legacyHeaders: false, 
});

router.post('/', contactLimiter, validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message, phone } = req.body;
  const token = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_CHAT_ID;

const formattedTime = new Date().toLocaleString("en-KE", {
  timeZone: "Africa/Nairobi",
  dateStyle: "medium",
  timeStyle: "short",
});


 const formattedMessage = `
<b>New Portfolio Contact Submission</b>
────────────────────────────

<b>Contact Details</b>
<b>Name:</b> ${name}
<b>Email:</b> <code>${email}</code>
<b>Phone:</b> <code>${phone}</code>

<b>Message</b>
${message}

────────────────────────────
<b>Submitted on:</b> ${formattedTime}
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
