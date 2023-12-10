import { invalidDataError, notFoundError } from '../errors';
import { Participant } from '@prisma/client';
import { transactionRepository } from '../repositories';


async function createTransaction(value, description, id, type) {

  const participants = await transactionRepository.createTransaction(value, description, id, type)

 return participants
}



export const transactionService = {
    createTransaction,
};