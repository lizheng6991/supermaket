import axios from 'axios'
 
export function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/hy66',
        timeout:5000
    })     
    
    //拦截器
    //请求拦截
    instance.interceptors.request.use(config =>{
        return config
    },err =>{
        console.log(err + "请求失败" + err.log);
        
    })
    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    },err =>{
        console.log("响应请求失败：" + err);
    })
 

    //返回axios实例（promise对象）
    return instance(config)
}