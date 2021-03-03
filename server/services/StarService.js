import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarService {
    async create(body){
        return await dbContext.Star.create(body)
    }

    async find(query = {}){
        return await dbContext.Star.find(query).populate()
    }

    async findById(id){

    }
}
export const starService = new StarService()