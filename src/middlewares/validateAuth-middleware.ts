import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { unauthorizedError } from '../errors';
import { authenticationRepository } from '../repositories';
require('dotenv').config();

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};

const secretOrPrivateKey: jwt.Secret | undefined = process.env.JWT_SECRET;

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.header('Authorization');
  if (!authHeader) throw unauthorizedError();
  const token = authHeader.split(' ')[1];
  if (!token) throw unauthorizedError();
  if (!secretOrPrivateKey)  throw new Error('JWT_SECRET not found in process.env');
  try {
    const { userId } = jwt.verify(token, secretOrPrivateKey) as jwt.JwtPayload;

    const session = await authenticationRepository.findUser(userId);
    if (!session) throw unauthorizedError();

    req.userId = userId;
    next();
  } catch (error) {
    throw unauthorizedError();
  }
}
