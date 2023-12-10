import { Router } from "express";
import { schemasignin, schemasignup } from "../schemas";
import { singInPost, usersPost } from "controllers";
import { validateBody } from "middlewares";



const userRouter = Router()


userRouter.post("/sign-up", validateBody(schemasignup), usersPost);
userRouter.post("/sign-in", validateBody(schemasignin), singInPost);

export  {userRouter}