const router = require('express').Router()
const userController = require('../controllers/userController')
const { protect } = require('../controllers/userController')


router.post('/user/create', userController.Create)



router.post('/admin/login', userController.login)
router.get('/admin/userList',userController.userList)

router.get('/admin/getUser/:id',userController.getUser)


router.get('/me', protect,userController.me)


module.exports = router