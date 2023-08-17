import { Response, Router, response } from 'express';

const productRouter = Router();

const router = Router();

productRouter.use('/product', router);

router.get('/', function (_, res: Response): void {
  res.send('PRODUTO');
});
export default productRouter;
