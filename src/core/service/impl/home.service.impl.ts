import { HomeService } from "../Home.service";
import { GET, POST, PUT } from 'vue3decorators';

export class HomeServiceImpl implements HomeService {
    /**
     * @GET 被打上这些注解的Service可以在Vue组件中使用。
     * 1: 方法内部不需要任何的处理逻辑，留空即可。
     * 2: 方法调用的时候只接受请求需要的参数
     * 3: 现在V3版本的注解例如@GET()是不需要传入请求地址参数的，方法名就是接口地址的key名称
     * 例如：index.config.ts 中 ApiList 的key名称
     * {
     *   DevUrl: 'http://localhost:9000',
     *   ProdUrl: 'http://127.0.0.1:3000',
     *   ApiList: {
     *     index: '/test',
     *     haha: '/haha'
     *   },
     * }
     * 这里的key名称：index，haha，直接作为 ServiceImpl 的方法名即可。
     * 注解内部会自动去根据方法名，例如 index 去寻找 ApiList 下的key，从而拿到请求地址 /test
     * 然后注解会自动调用用户配置好的Axios，来发送请求，注意请求处理的所有逻辑交给用户。注解只负责
     * 调用用户配置好的Axios而已。请求成功后，注解会自动调用被注解的方法，然后直接将数据返回给Vue组
     * 件调用者，这也就是这里为什么方法内部不需要处理逻辑的原因。因为一切都在注解内部实现，并遵守
     * 约定大于配置  的原则。
     * @param data object 请求参数
     */
    @GET()
    public async index(data: object): Promise<any> {}

    @GET()
    public async about(data: object): Promise<any> {}

    @POST()
    public async haha(data: object): Promise<any> {}

    @PUT()
    public async Login(data: object): Promise<any> {}
}

export default new HomeServiceImpl();