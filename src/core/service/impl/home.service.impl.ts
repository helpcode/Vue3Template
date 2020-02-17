import { HomeService } from "../Home.service";
import { GET, POST, GlobalMethod } from 'vue3decorators';

class HomeServiceImpl implements HomeService {

    // 直接用方法名index作为 ApiList 中对象key名称去寻找请求地址
    @GET()
    public async index(data: object): Promise<any> {}

    @POST()
    public async haha(data: object): Promise<any> {}

}

export default new HomeServiceImpl();