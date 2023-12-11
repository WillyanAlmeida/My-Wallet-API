import { users } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { invalidCredentialsError } from '../errors';
import { userRepository } from '../repositories';
import { exclude } from '../utils/prisma-utils';

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user = await getUserOrFail(email);
  if (!user) throw invalidCredentialsError()

  await validatePasswordOrFail(password, user.password);
  const token = await createSession(user.id);

  return {
    user: exclude(user, 'password'),
    token,
  };
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await userRepository.findByEmail(email, { id: true, email: true, password: true });
  if (!user) throw invalidCredentialsError();

  return user;
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET) as undefined;
  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}

export type SignInParams = Pick<users, 'email' | 'password'>;

type SignInResult = {
  user: Pick<users, 'id' | 'email'>;
  token: string;
};

type GetUserOrFailResult = Pick<users, 'id' | 'email' | 'password'>;

export const authenticationService = {
  signIn,
};
