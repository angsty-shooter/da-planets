import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxyService {
    async create(body){
        return await dbContext.Galaxy.create(body)
    }

    async find(query = {}){
        return await dbContext.Galaxy.find(query).populate()
    }

    async findById(id){

    }
}
export const galaxyService = new GalaxyService()