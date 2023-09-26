const express = require('express')
const {getMe,login,logout,register,getUser} = require('../controller/auth');

const router = express.Router()


router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', getMe);
router.get('/users',getUser)

module.exports = router