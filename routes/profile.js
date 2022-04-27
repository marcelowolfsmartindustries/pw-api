const profileRouter = require('express').Router();
const controller = require('../controllers/profile');

profileRouter.get('/', controller.getMyProfile);

module.exports = profileRouter;