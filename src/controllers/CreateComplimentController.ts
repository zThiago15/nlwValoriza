import { Request, Response } from "express";
import { CreateComplimenteService } from "../services/CreateComplimentsService";


class CreateComplimenteController {

    async handle(request: Request, response: Response) {
        const { tag_id, user_sender, user_receiver, message } = request.body;
        const createComplimentService = new CreateComplimenteService();

        const compliment = await createComplimentService.execute({
            tag_id, 
            user_sender, 
            user_receiver, 
            message
        })

        return response.json(compliment);
    }
}   


export { CreateComplimenteController }