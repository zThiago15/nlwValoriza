import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        // Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect")
        }
        // Verificar se senha é correta
        // senha passada do usuário / senha hash cadastrada no banco
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        // Gerar token
        const token = sign({
            email: user.email
        }, "107811f1ffc7ee3b816b136c71f54ecb", {
            subject: user.id,
            expiresIn: "1d"
        }
    );

    return token;
    }
}

export { AuthenticateUserService }