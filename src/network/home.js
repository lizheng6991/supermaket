import { request } from "./requier";

export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })            
}