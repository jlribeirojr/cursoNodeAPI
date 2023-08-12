import { Router } from 'express';

const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/', function (req, res) {
    res.send('Hello world USER AGORA');
});

router.get('/:nome', function (req, res) {
    res.send('Nome do usuario');
});

export default userRouter;