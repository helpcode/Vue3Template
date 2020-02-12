import { HomeService } from "../Home.service";
import { Axios } from "../../dao/index.dao";
import { Inject } from '../../decorators/Ioc.decorators';
import { config } from "../../config/index.config";

class HomeServiceImpl implements HomeService {

    @Inject()
    public axios!: Axios;

    public async index(data: object): Promise<Object> {
        return await this.axios.get({
            url: config.AjaxConfig.ApiList.index,
            data: data
        });
    }
}

export default new HomeServiceImpl()