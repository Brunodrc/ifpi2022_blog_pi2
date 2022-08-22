import { Request, Response, NextFunction } from "express";

//o middleware irá descrever a data de acesso, o método utilizado e o endereço da requisição
export const LogMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    const method = req.method
    console.log(`log middleware ${Date.now()}; ${method}; ${req.originalUrl}`)
    return next()
    
}