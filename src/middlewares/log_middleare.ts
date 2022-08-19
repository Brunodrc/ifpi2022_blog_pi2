import { Request, Response, NextFunction } from "express";

const LogMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    console.log(`log middleware ${Date.now()}`)
    return next()
    
}