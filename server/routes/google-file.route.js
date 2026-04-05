import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/google9ab1428fc166b0be.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'google9ab1428fc166b0be.html'));
});
export default router;