// pages/tabtest/tabtest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    activeIndex:0,
    list:["最新热卖","特价清仓","附近好物"]
  },
  clickTab(e){
    let index = e.currentTarget.dataset.index
    this.setData({
      activeIndex:index
    })
  },
  onLoad(){
    this.setData({
      isShow:true
    })
  },
  isShowModal(){
    this.setData({
      isShow:false
    })
  },
  //扫一扫功能
  saoMa(){
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ['qrCode','barCode','datamatrix','pdf417'],
      success: (result)=>{
        console.log(result);
      },
    });
  }
  
  
})