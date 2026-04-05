import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';
import sitemapRoutes from './routes/sitemap.route.js';
import googleFileRoutes from './routes/google-file.route.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());    
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL, 
    methods: ['GET', 'POST']
}));
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100 
});
//app.use(limiter);

app.use('/api/contact',limiter, contactRoutes);
app.use('/', sitemapRoutes);
app.use('/', googleFileRoutes);

app.get('/health', (req, res) => {
    if (!app) {
        return res.status(500).json({ message: 'Server is not running' });
    }
    res.send('Portfolio API is running...');
});

app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send("User-agent: *\nAllow: /\nSitemap: https://victor-portfolio-qqer.onrender.com/sitemap.xml");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
