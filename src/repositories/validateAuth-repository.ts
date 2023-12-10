
//import { Prisma } from '@prisma/client';
import { prisma } from '../config';


async function findUser(token: number) {
    return prisma.session.findFirst({
      where: {
        token,
      },
    });
  }
  
  export const authenticationRepository = {
    findUser,
  };
  

