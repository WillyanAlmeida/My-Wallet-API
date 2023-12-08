import { invalidDataError, notFoundError } from '../errors';
import { participantsRepository } from '../repositories'
import { Participant } from '@prisma/client';
import { CreateParticipantsParams } from '../protocols';
import { transactionRepository } from '../repositories/transaction-repository';


async function createTransaction(value, description, id, type) {

  const participants = await transactionRepository.createTransaction(value, description, id, type)

 return participants
}



export const transactionService = {
    createTransaction,
};