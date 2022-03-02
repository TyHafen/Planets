import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxysService } from "../services/GalaxysService";
import BaseController from "../utils/BaseController";



export class GalaxysController extends BaseController {
    constructor() {
        super('api/galaxys')
        this.router
            .get('', this.getAll)


            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)

    }
    async getAll(req, res, next) {
        try {
            const galaxys = await galaxysService.getAll(req.query)
            return res.send(galaxys)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const galaxy = await galaxysService.create(req.body)
            return res.send(galaxy)

        } catch (error) {
            next(error)
        }
    }


}