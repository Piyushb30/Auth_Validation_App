const {SignupValidation, LoginValidation} = require('../Midllewares/AuthValidation')
const {signup, login} = require('../Controllers/AuthController')
const router = require('express').Router()


router.post('/login', LoginValidation, login)
router.post('/signup', SignupValidation, signup)

module.exports = router;