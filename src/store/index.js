import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCart(state,payload){
      payload.checked = true
      state.cartList.push(payload)
    },
    addCount(state,payload){
      payload.count++
    },
    caclCount(state,check){
      state.cartList[check.index].checked = check.ischeck
    }
  },
  actions: {
    addCart(context,payload){
      //将结果返回为一个promise对象
     return new Promise((resolve,reject) => {
        //添加商品
      //判断商品是否已存在
      let product = context.state.cartList.find(item => item.iid === payload.iid)
       //存在 则该商品count + 1
      if(product){
        context.commit('addCount',product)
        resolve('当前商品数量 +1')
      }else{
        //不存在则创建 count = 1  并将商品添加到数组中
        payload.count = 1
        context.commit('addCart',payload)
        reject('商品成功添加')
      }
     })
    }
  },
  modules: {
  }
})

export default store