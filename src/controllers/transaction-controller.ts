
import { db } from "../database/databaseconnections.js";
import httpStatus from 'http-status';

import dayjs from "dayjs";
import { transactionService } from "../services/transaction-service.js";


export async function createTransaction(req, res) {
    const { value, description, id } = req.body;
    let type = req.params.id

    const newtransaction = await transactionService.createTransaction(value, description, id, type);
    res.status(httpStatus.CREATED).send(newtransaction);
}

export async function transactionget (req, res){

try{
    const transactions = (await db.collection('transactions').find({userID: res.locals.sessions.userID}).toArray()).reverse();
    
    res.status(200).send((transactions));

} catch (error) {
        console.log(error);
        res.sendStatus(401);
    }
}


