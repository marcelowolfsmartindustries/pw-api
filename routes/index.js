const router = require('express').Router();
const myprofileRouter = require('./myprofile');
const profileRouter = require('./profile');
const studentRouter = require('./student');

router.use('/students', studentRouter);
router.use('/profile', profileRouter);
router.use('/myprofile', myprofileRouter);

module.exports = router;