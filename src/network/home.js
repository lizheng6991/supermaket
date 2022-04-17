import { request } from "./requier";

//获取轮播图、导航栏数据
export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })            
}
//获取主页数据
export function getHomeGoods(type,page) {
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })            
}
