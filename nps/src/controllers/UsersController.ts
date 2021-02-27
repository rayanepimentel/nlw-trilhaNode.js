import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User'

class UserController {
    async create(req: Request, res: Response) {
        const { name, email } = req.body;

        const usersRespository = getRepository(User);
        
        const user = usersRespository.create({
            name, email
        })

        await usersRespository.save(user);

        return res.json(user);
    }
}

export { UserController }