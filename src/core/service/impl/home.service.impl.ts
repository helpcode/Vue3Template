import { HomeService } from "../Home.service";
import { GET, POST, GlobalMethod } from 'vue3decorators';

class HomeServiceImpl implements HomeService {

    //【废弃】@GET(config.AjaxConfig.ApiList.index) 参数必须传入最后的key名称：index
    @GET('index')
    public async index(data: object, header: object): Promise<any> {}

    //【废弃】@POST(config.AjaxConfig.ApiList.haha) 参数必须传入最后的key名称：haha
    @POST('haha')
    public async HaHa(data: object): Promise<any> {}

}

export default new HomeServiceImpl();