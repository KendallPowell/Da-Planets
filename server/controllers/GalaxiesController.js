import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll()
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const newGalaxy = await galaxiesService.create(req.body)
      return res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }

  // async remove(req,res,next){
  //   try {
  //     const message = await galaxiesService.remove(req.params.id, req.userInfo)
  //     return res.send(message)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}