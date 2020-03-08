export interface HomeService {
  index(data: object): Promise<any>;
  haha(data: object): Promise<any>;
  Login(data: object): Promise<any>;
}