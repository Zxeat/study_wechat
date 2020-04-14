// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:0,name:'猪八戒'},
      { id: 1, name: '孙悟空' },
      { id: 2, name: '沙和尚' }
    ],
    person:{
      name:'白骨精',
      age:200,
      gender:'女'
    },
    num:0
  },
  //输入框的点击事件
  handleInput(e){
    // console.log(e.detail.value);
    this.setData({
      num: e.detail.value
    })
  },
  //加一、减一事件
  handleTap(e){
    const operation = e.currentTarget.dataset.operation
    this.setData({
      num: this.data.num + operation
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})