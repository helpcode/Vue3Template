import { HomeService } from "../Home.service";
import { Axios } from "../../dao/index.dao";
import { Inject } from '../../decorators/Ioc.decorators';
import { GET, POST } from '../../decorators/request.decorators';
import { config } from "../../config/index.config";

class HomeServiceImpl implements HomeService {

    @Inject()
    public axios!: Axios;

    @GET(config.AjaxConfig.ApiList.index)
    public async index(data: object) {}

}

export default new HomeServiceImpl()