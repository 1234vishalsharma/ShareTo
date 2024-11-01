
const jwt = require('jsonwebtoken')

const ensureAuthenicated = (req, res, next) => {
    const auth = req.header['authorization'];
    if (!auth) {
        return res.status(403)
            .json({ message: 'Unautorized, JWT Token is require' });
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403)
            .json({message:'Unautorized, JWT Token wrong or expired'})
    }
}

module.exports= ensureAuthenicated;