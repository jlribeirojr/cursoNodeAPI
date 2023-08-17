import { Request, Response, Router } from 'express';
import { creatUser, getUsers } from './user.service';
import * as core from 'express-serve-static-core';
import { UserInsertDTO } from 'src/user/dtos/user-isert.dto';

const userRouter = Router();
const router = Router();

userRouter.use('/user', router);

router.get('/', async (_, res: Response): Promise<void> => {
  const users = await getUsers();
  res.send(users);
});

router.post(
  '/',
  async (req: Request<undefined, undefined, UserInsertDTO>, res: Response): Promise<void> => {
    const user = await creatUser(req.body);
    res.send(user);
  },
);

export default userRouter;
