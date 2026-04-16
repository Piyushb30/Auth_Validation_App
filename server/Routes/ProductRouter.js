const ensureAuthenticated = require('../Midllewares/AfterLogin');

const router = require('express').Router()

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json({
        items: [
            {
                name: 'Mobile',
                price: 10000
            },
            {
                name: 'Tv',
                price: 20000
            },
            {
                name: 'Computer',
                price: 15000
            }
        ]
    })
})

module.exports = router;