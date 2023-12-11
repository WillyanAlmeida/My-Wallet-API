import { Router } from 'express';
import { validateBody } from '../middlewares';
import { createTransaction, findTransaction } from '../controllers';
import { schemastransaction } from '../schemas';
import { authenticateToken } from '../middlewares';

const transactionRouter = Router();

transactionRouter.post("/nova-transacao/:id", authenticateToken, validateBody(schemastransaction), createTransaction)
transactionRouter.get("/home", authenticateToken, findTransaction);


export { transactionRouter };
