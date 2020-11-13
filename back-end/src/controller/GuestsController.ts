import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Guests} from "../entity/Guests";

export class GuestsController {

    private guestsRepository = getRepository(Guests);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.guestsRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.guestsRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.guestsRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.guestsRepository.findOne(request.params.id);
        await this.guestsRepository.remove(userToRemove);
    }

}
