
import { Prisma } from '@prisma/client';
import { prisma } from '../config';


async function findUser(userId: number) {
    return prisma.users.findFirst({
      where: {
        userId,
      },
    });
  }
  
  export const authenticationRepository = {
    findUser,
  };
  

