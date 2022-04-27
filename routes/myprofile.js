const myprofileRouter = require('express').Router();
const controller = require('../controllers/myprofile');

myprofileRouter.get('/', controller.getAll);
myprofileRouter.get('/:id', controller.getById);
myprofileRouter.post('/create', controller.create);
myprofileRouter.post('/update', controller.update);
myprofileRouter.post('/delete', controller.delete);

module.exports = myprofileRouter;