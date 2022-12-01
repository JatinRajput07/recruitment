const router = require('express').Router()
const userController = require('../controllers/userController')
const { protect } = require('../controllers/userController')


router.post('/create', userController.adminCreate)
router.post('/login', userController.login)


router.get('/me', protect,userController.me)


module.exports = router