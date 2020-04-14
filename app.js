//app.js
App({
  //1.应用第一次启动的时候就会触发的事件
  onLaunch(){
    // 在应用第一次启动的时候 获取用户的个人信息
    
    // console.log("onLaunch");
    
    //以下这个方式不能触发onPageNotFound事件
    // wx.navigateTo({
    //   url: '../hello/hello',
    // })
  },

  //2.应用 被用户看到的时候触发的事件
  onShow(){
    //对应用的数据或者页面效果进行重置
    // console.log("onShow");
  },

  //3. 应用被隐藏的时候触发的事件
  onHide(){
    //暂停或清除定时器
    // console.log("Hide");
  },

  //4.应用的代码发生了报错的时候就会触发
  onError(err){
    //在应用发生代码报错的时候，收集用户的错误信息，通过异步请求 将错误的信息发送到后台去
    // console.log("onError");
  },

  //5.页面找不到就会触发的事件
  //页面第一次启动的时候，如果找不到第一个入口页面 才会触发
  onPageNotFound(){
    //如果页面不存在 可通过js的方式重新跳转页面 跳到第二个页面
    // console.log("onPageNotFound");
  }
})