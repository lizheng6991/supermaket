//防抖函数
export function debounce(func,delay){
      //重置时间函数
      let timr = null
      //返回一个函数
      return function(...args){ // 闭包
        //如果有定时器，则清除
        if(timr) clearTimeout(timr)
        //没有 则设置新的定时器函数
        timr = setTimeout(() =>{
          //apply函数和call方法相似 自定义调用对象
          func.apply(this,args)
        },delay)
      }
    };

//时间格式化
export function formatDate(data){
  const date = new Date(data*1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (year + '/' + month + '/' + day + " " + hour + ":" + minute + ":" + second)
}