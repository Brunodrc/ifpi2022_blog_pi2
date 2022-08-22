import { Request, Response, NextFunction } from "express";

export function AuthMiddleware(request: Request, 
    response: Response, next: NextFunction){

        const auth = request.headers.authorization

        if(!auth){
            return response.status(401).json('Credenciais inválidas.')
        }

        const [authType, authValue] = auth.split(' ')

        if(authType === 'Basic'){
            let buff = Buffer.from(authValue, 'base64')
            let [email, password] = buff.toString('ascii').split(';')
            console.log(email, password);
            
        }

        //fazer outro tipo de checagem de autorização 
        //checagem do tipo bearer

        console.log(`Auth Middleware 🧐 -> ${authType} --> ${authValue}`)

        return next()
        

}