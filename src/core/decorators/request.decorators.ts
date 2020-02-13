import "reflect-metadata";
import directiveModel from '../utils/directive.utils';
import { Axios } from '../dao/index.dao';
import { config } from '../config/index.config';
let api = new Axios();

export function GET(URL: string) {
    return (target: any, propertyKey: string, descriptor: any) => {
        const method = descriptor.value;
        descriptor.value = async function (...args: any) {
            let result:{ [key:string]: any } = await api.get({
                url: URL,
                data: args[0]
            });
            await method.apply(this, result);
            return result.data;
        }
    }
}

export function POST(URL: string) {
    return (target: any, propertyKey: string, descriptor: any) => {
        const method = descriptor.value;
        descriptor.value = async function (...args: any) {
            let result:{ [key:string]: any }= await api.post({
                url: URL,
                data: args[0]
            });
            await method.apply(this, result);
            return result.data;
        }
    }
}