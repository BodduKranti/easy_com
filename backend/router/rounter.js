const router = require('express').Router();

router.get('/get', (req, res) => {
    res.send('Hello we are working fine, no issue')
})

module.exports = router