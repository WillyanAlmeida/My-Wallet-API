import { Router } from 'express';
import { validateBody } from '../middlewares';
import { createTransaction, postBets } from '../controllers';
import { betsSchema, schemastransaction } from '../schemas';

const transactionRouter = Router();

transactionRouter.post("/nova-transacao/:id", validateBody(schemastransaction), createTransaction)
//transactionRouter.get("/home", validateAuth, findTransaction);


export { transactionRouter };
