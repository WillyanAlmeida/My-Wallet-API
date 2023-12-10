import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { userService } from '../services';

export async function usersPost(req: Request, res: Response) {
  const { name, email, password } = req.body;

  const user = await userService.createUser({ name, email, password });

  return res.status(httpStatus.CREATED).json({
    id: user.id,
    email: user.email,
  });
}
