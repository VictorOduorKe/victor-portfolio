import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());    
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL, // Allow all for now or specific client
    methods: ['GET', 'POST']
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api/contact', contactRoutes);

//get serer health status
app.get('/health', (req, res) => {
    //check if the server is running
    if (!app) {
        return res.status(500).json({ message: 'Server is not running' });
    }
    res.send('Portfolio API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
