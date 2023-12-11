import { invalidDataError, notFoundError } from '../errors';
import { transactionRepository } from '../repositories';
import { Prisma } from '@prisma/client';


async function createTransaction(value, description, userId, type) {
    const participants = await transactionRepository.createTransaction(value, description, userId, type)

    return participants
}
async function findTransaction(userId) {
    const participants = await transactionRepository.findTransaction(userId)

    return participants
}

export const transactionService = {
    createTransaction,
    findTransaction
};