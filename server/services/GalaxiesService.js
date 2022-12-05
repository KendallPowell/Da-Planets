import { dbContext } from "../db/DbContext.js"
import { GalaxySchema } from "../models/Galaxy.js"
import { BadRequest } from "../utils/Errors.js"


class GalaxiesService {
  async getAll() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }

  async create(galaxyData) {
    const newGalaxy = await dbContext.Galaxies.create(galaxyData)
    return newGalaxy
  }

  // async remove(galaxyId, userInfo){
  //   const galaxyRemoval = await dbContext.Galaxies.findById()
  //   if(!galaxyRemoval) throw new BadRequest(`no galaxy ${}`)
  // }
}

export const galaxiesService = new GalaxiesService()