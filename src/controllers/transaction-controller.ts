
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

export async function findTransaction (req: Request, res: Response){
    const { value, description, id } = req.body;
    let type = req.params.id

    const newtransaction = await transactionService.createTransaction(value, description, id, type);
    res.status(httpStatus.CREATED).send(newtransaction);



try{
    //const transactions = (await db.collection('transactions').find({userID: res.locals.sessions.userID}).toArray()).reverse();
    
    //res.status(200).send((transactions));

} catch (error) {
        console.log(error);
        res.sendStatus(401);
    }
}


