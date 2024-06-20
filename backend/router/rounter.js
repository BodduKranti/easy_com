const { registerController, loginController } = require('../controller/controller');

const router = require('express').Router();

// register post
router.post('/register', registerController)

// login post
router.post('/login', loginController)

router.get('/get', (req, res) => {
    res.send('Hello we are working fine, no issue')
})

module.exports = router