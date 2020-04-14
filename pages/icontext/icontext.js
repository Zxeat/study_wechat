// pages/icontext/icontext.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:'',
    list:[
      {id:0,name:"🍎",value:"apple"},
      { id: 1, name: "🍇", value: "grape" },
      { id: 2, name: "🍌", value: "bananer" }
    ],
    itemList:[]
  },

  //单选框的选中事件
  handleChange(e){
    // console.log(e);
    if(e.detail.value=="male"){
      this.setData({
        gender:'男'
      })
    }else{
      this.setData({
        gender: '女'
      })
    }
  },

  //复选框的选中事件
  handleItemChange(e){
    // console.log(e);
    let itemList = e.detail.value;
    this.setData({
      itemList: itemList
    })
  },
  
})