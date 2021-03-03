import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetService {
    async create(body){
        return await dbContext.Planet.create(body)
    }

    async find(query = {}){
        return await dbContext.Planet.find(query).populate()
    }

    async findById(id){

    }
}
export const planetService = new PlanetService()