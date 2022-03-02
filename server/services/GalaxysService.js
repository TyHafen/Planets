import { dbContext } from "../db/DbContext"




class GalaxysService {
    async create(newGalaxy) {
        const galaxy = await dbContext.Galaxys.create(newGalaxy)
        return galaxy
    }


    async getAll(query = {}) {
        const galaxys = await dbContext.Galaxys.find(query)
        return galaxys
    }



}






export const galaxysService = new GalaxysService()