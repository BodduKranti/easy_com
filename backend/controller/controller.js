const loginRegisterUser = require("../modules/userAuth");
const { BcryptPwd } = require("../utility/PasswordBycrpt");


// below function for create and signup for new user
const registerController = async (req, res) => {
    try {
        const { email } = req.body;

        // check the already existing user
        const existingUser = await loginRegisterUser.findOne({ email: email })
        if (existingUser) {
            return res.status(401).send({
                message: "This email is already registerd..."
            })
        }

        // change the input password to hash password
        const hashPwd = await BcryptPwd(req.body.password)

        // save the register user in data base
        const usersRegister = await new loginRegisterUser({ ...req.body, password: hashPwd });
        usersRegister.save();

        return res.status(200).send({
            message: "Successfully Registered...",
            success: 1
        })

    } catch (error) {
        res.status(404).send({
            message: "Something went wrong..."
        })
    }
}

module.exports = { registerController }