import express from 'express';

//controllers
import { TestUser } from '@Controllers/userController';

const router = express.Router();

router.route('/test').get(TestUser);

export default router;
