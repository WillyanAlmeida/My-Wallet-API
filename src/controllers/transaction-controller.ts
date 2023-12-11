
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { transactionService } from "../services";

import dayjs from "dayjs";


export async function createTransaction(req: Request, res: Response) {
    const { value, description, id } = req.body;
    let type = req.params.id

    const newtransaction = await transactionService.createTransaction(value, description, id, type);
    res.status(httpStatus.CREATED).send(newtransaction);
}

export async function findTransaction(req: Request, res: Response){
    const userId = res.locals.sessions.userId;

    const newtransaction = await transactionService.findTransaction(userId);
    res.status(httpStatus.CREATED).send(newtransaction);

}


