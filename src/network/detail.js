import {request} from './requier' 
//请求详情页数据
export function getDetail(iid) {
    return request({
        url:'/detail',
        params:{
            iid        
        }
    })            
}

export function getRecomend() {
    return request({
        url:'/recommend'
    })
}
//创建商品类，整合接口数据
export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title ,
        this.desc = itemInfo.desc,
        this.price = itemInfo.price,
        this.oldPrice = itemInfo.oldPrice,
        this.discount = itemInfo.discountDesc,
        this.columns = columns,
        this.services = services,
        this.readPrice = itemInfo.lowNowPrice
    }
}
//创建商品信息类
export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo,
        this.name = shopInfo.name,
        this.fans = shopInfo.cFans,
        this.sells = shopInfo.cSells,
        this.score = shopInfo.score,
        this.goodsCount = shopInfo.cGoods,
        this.shopURL = shopInfo.shopUrl
    }
}
//创建商品参数类
export class GoodsParam{
    constructor(info,rule){
        this.image = info.image ? info.image : '';//image可能为空
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}