import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    //Receber o token 
    const authToken = request.headers.authorization


    // Validar se token está preenchido
    if(!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")
    console.log(token);

    try {
        // Validar se token é valido
        const { sub } = verify(token , "107811f1ffc7ee3b816b136c71f54ecb") as IPayload;

        // Recuperar informações do usuário
        request.user_id = sub;

        return next();
    } catch(err){
        return response.status(401).end();
    }

    // Recuperar informação do usuário
}

