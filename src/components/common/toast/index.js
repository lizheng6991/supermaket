import Toast from './Toast.vue'
const obj ={}

obj.install = function (Vue) {
  //创建组件构造器    
  const toastContructor = Vue.extend(Toast)
  //通过组件构造器创建一个组件对象
  const toast = new toastContructor()
  //通过$mount 将toast手动挂载到某个元素上
  toast.$mount(document.createElement('div'));
  //将tosat挂载的元素添加到body中
  document.body.appendChild(toast.$el)
  //将Toast组件天骄到Vue原型上去
  Vue.prototype.$toast = toast           
}

export default obj