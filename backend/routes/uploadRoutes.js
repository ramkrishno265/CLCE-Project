const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinary'); // পাথ ঠিক আছে কিনা দেখুন

router.post('/upload', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        res.status(200).json({ url: req.file.path });
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        res.status(500).json({ error: 'Image upload failed' });
    }
});

module.exports = router;