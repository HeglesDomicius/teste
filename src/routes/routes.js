import UsersController from '../controllers/users';
import express from 'express';

const router = express.Router();

const usersController = new UsersController();

router.get('/api/websites', usersController.getWebsites.bind(UsersController));
router.get('/api/users', usersController.getAll.bind(UsersController));
router.get('/api/suites', usersController.getSuite.bind(UsersController));

module.exports = router;
