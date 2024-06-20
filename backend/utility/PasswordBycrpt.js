const bcrypt = require('bcrypt')
const saltRounds = 10;

const BcryptPwd = async (inputPassword) => {
    const hashPwd = await bcrypt.hash(inputPassword, saltRounds)
    return hashPwd
}

const CompairBcryptPwd = async (inputPwd, dbPwd) => {
    const MatchedPwd = await bcrypt.compare(inputPwd, dbPwd)
    return MatchedPwd
}

module.exports = { BcryptPwd, CompairBcryptPwd }