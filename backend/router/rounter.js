const { registerController } = require('../controller/controller');

const router = require('express').Router();

router.post('/register', registerController)

router.get('/get', (req, res) => {
    res.send('Hello we are working fine, no issue')
})

module.exports = router