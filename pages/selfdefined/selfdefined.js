// pages/selfdefined/selfdefined.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { id: 0, name: "首页", isActive: true },
      { id: 1, name: "原创", isActive: false },
      { id: 2, name: "分类", isActive: false },
      { id: 3, name: "关于", isActive: false },
    ]
  },

  handleItemChange(e){
    //接收传递过来的参数
    const {index} = e.detail;
    let {tabs} = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs:tabs
    })
  }

})