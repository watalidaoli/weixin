// // 云函数入口文件
// const cloud = require('wx-server-sdk')
// cloud.init()
// // 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()
//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }
//--- 云函数getmovielist ------------------
//向豆瓣网发送请求获取最新电影列表
//1. 引入第三方ajax库
var rp=require("request-promise");
//2. 创建main函数
exports.main = async(event, context) => {
  //3. 创建变量url 请求地址
  var url =`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${event.start}&count=${event.count}`;
  //4. 调用rp(url) 发送请求并且返回数据
  return rp(url).then(res=>{
    return res; //返回结果
  }).catch(err=>{
    console.log(err); //错误
  })
};

