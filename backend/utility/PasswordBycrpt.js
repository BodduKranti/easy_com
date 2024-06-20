const bcrypt = require('bcrypt')
const saltRounds = 10;

const BcryptPwd = async (inputPassword) => {
    const hashPwd = await bcrypt.hash(inputPassword, saltRounds)
    return hashPwd
}

module.exports = { BcryptPwd }