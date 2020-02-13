import { HomeService } from "../Home.service";
import { GET, POST } from 'vue3decorators';
import { config } from "../../config/index.config";

class HomeServiceImpl implements HomeService {

    //【废弃】@GET(config.AjaxConfig.ApiList.index) 参数必须传入最后的key名称：index
    @GET('index')
    public async index(data: object) {}

    //【废弃】@POST(config.AjaxConfig.ApiList.haha) 参数必须传入最后的key名称：haha
    @POST('haha')
    public async HaHa(data: object) {}

}

export default new HomeServiceImpl()