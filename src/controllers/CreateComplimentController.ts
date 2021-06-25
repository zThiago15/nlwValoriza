import { Request, Response } from "express";
import { CreateComplimenteService } from "../services/CreateComplimentsService";


class CreateComplimenteController {

    async handle(request: Request, response: Response) {
        const { tag_id, user_receiver, message } = request.body;
        const { user_id } = request;

        const createComplimentService = new CreateComplimenteService();

        const compliment = await createComplimentService.execute({
            tag_id, 
            user_sender: user_id, 
            user_receiver, 
            message
        })

        return response.json(compliment);
    }
}   


export { CreateComplimenteController }