import { users } from '@prisma/client';
import bcrypt from 'bcrypt';
import {  duplicatedEmailError } from '../errors';
import { userRepository } from '../repositories';

export async function createUser({ name, email, password }: CreateusersParams): Promise<users> {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    name,
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export type CreateusersParams = Pick<users, 'email' | 'password' | 'name'>;

export const userService = {
  createUser,
};
