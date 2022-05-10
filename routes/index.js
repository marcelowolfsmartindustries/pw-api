const router = require('express').Router();
const studentRouter = require('./student');
const authRouter = require('./auth')

router.use('/auth', authRouter);
router.use('/students', studentRouter);

module.exports = router;