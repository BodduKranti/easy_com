const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    userimgUrl: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    confirm_password: {
        type: String,
        require: true
    }
})

const loginRegisterUser = mongoose.model('user', userSchema)
module.exports = loginRegisterUser