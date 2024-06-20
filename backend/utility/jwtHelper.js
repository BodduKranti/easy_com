const jwt = require('jsonwebtoken');
const loginRegisterUser = require('../modules/userAuth');
require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET

const generateToken = (id) => {
    return jwt.sign({ id }, SECRET_KEY, {
        expiresIn: 3 * 24 * 60 * 60,
    });
}


const verfifyToken = (req, res) => {
    const token = req.cookies.token
    if (!token) {
        return res.json({ status: false })
    }
    jwt.verify(token, SECRET_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            const user = await loginRegisterUser.findById(data.id)
            if (user) return res.json({ status: true, user: user.name })
            else return res.json({ status: false })
        }
    })
}

module.exports = { generateToken, verfifyToken } 