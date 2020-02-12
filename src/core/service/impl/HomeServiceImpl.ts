import { HomeService } from "../HomeService";
import { Axios } from "../../dao";
import { Inject } from '../../decorators/Ioc';
import { config } from "../../config";

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