const loginRegisterUser = require("../modules/userAuth");
const { BcryptPwd, CompairBcryptPwd } = require("../utility/PasswordBycrpt");
const { generateToken } = require("../utility/jwtHelper");


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


const loginController = async (req, res, next) => {
    const { password, email } = req.body;
    try {
        const user = await loginRegisterUser.findOne({ email })
        if (!user) {
            return res.status(401).send({
                message: "Invalid Login credential..."
            })
        }

        const isMatch = await CompairBcryptPwd(password, user.password)
        if (!isMatch) {
            return res.status(401).send({
                message: "Invalid Login credential..."
            })
        }

        const token = generateToken(user._id)
        console.log(token)

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(200).send({
            message: "Login Successfull...",
            user,
            token
        })
        next()

    } catch (error) {
        res.status(500).send({
            message: 'Something went wrong with api....'
        })
    }
}

module.exports = { registerController, loginController }