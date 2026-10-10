const protectAdmin = (req, res, next) => {
    // হেডার থেকে API Key বা Bearer Token রিড করা
    const apiKey = req.headers['x-api-key'];
    const adminSecret = process.env.ADMIN_SECRET_KEY || 'clce-secret-key-123';

    if (apiKey && apiKey === adminSecret) {
        next(); // পাস হলে পরবর্তী স্টেপে (Controller) নিয়ে যাবে
    } else {
        res.status(401).json({ message: 'Unauthorized: Admin access required' });
    }
};

module.exports = { protectAdmin };