const studentRouter = require('express').Router();
const controller = require('../controllers/student');
const authMiddleware = require('../middlewares/auth/auth');

studentRouter.use(authMiddleware);

studentRouter.get('/', controller.getAll);
studentRouter.get('/:id', controller.getById);
studentRouter.post('/create', controller.create);
studentRouter.post('/update', controller.update);
studentRouter.post('/delete', controller.delete);

module.exports = studentRouter;