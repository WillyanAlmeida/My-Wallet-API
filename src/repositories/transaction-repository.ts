
import { prisma } from '../config';
import { Prisma } from '@prisma/client';
import dayjs from "dayjs";


export async function createTransaction(value, description, userId, type){


    const response = await prisma.transactions.create({
        data: {
            userId: userId,
            value, description, type, createdAt: dayjs().format('MM/DD')
        }
    });

    return response
}

export async function findTransaction(userId) {
    const response = await prisma.transactions.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    return response

}

export const transactionRepository = {
    findTransaction,
    createTransaction,
};



