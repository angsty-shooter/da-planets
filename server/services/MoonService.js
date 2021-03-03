import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonService {
    async create(body){
        return await dbContext.Moon.create(body)
    }

    async find(query = {}){
        return await dbContext.Moon.find(query).populate()
    }

    async findById(id){

    }
}
export const moonService = new MoonService()