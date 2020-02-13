import { HomeService } from "../Home.service";
import { GET, POST } from '../../decorators/request.decorators';
import { config } from "../../config/index.config";

class HomeServiceImpl implements HomeService {

    @GET(config.AjaxConfig.ApiList.index)
    public async index(data: object) {}

}

export default new HomeServiceImpl()