// pages/chooseAll/chooseAll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[
      {id:1,name:"卫龙辣条",guige:"大份",price:80,count:0,checked:false},
      {id:2,name:"小当家",guige:"一箱",price:40,count:0,checked:false},
      {id:3,name:"南京板鸭",guige:"十包",price:30,count:0,checked:false},
      {id:4,name:"真心瓜子",guige:"一箱",price:60,count:0,checked:false},
    ],
    totalMoney:0,
    isSelectAll:false
  },
  //点击按钮变为选中状态
  chooseItem(e){
    let id = e.currentTarget.dataset.id;
    //find方法用于找出第一个符合条件的数组成员，然后返回该成员 （如下一行代码是：找到goodsList中id恒等于e.currentTarget.dataset.id的数组成员）
    let goods = this.data.goodsList.find(r => r.id===id);
    goods.checked = !goods.checked;
    //every方法是判断数组中是否每个元素都满足条件，只有都满足条件才会返回true
    let isSelectAll = this.data.goodsList.every(r => r.checked);
    this.setData({
      goodsList:this.data.goodsList,
      isSelectAll
    })
  },
  //增加商品数量
  addNumber(e){
    let id = e.currentTarget.dataset.id;
    let goods = this.data.goodsList.find(r => r.id===id);
    goods.count += 1;
    if(goods.count >= 10){
      goods.count = 10;
    }
    this.setData({
      goodsList:this.data.goodsList
    })
  },
  //减少商品数量
  reduceNumber(e){
    let id = e.currentTarget.dataset.id;
    let goods = this.data.goodsList.find(r => r.id===id);
    goods.count -= 1;
    if(goods.count <= 0){
      goods.count = 0;
    }
    this.setData({
      goodsList:this.data.goodsList
    })
  },
  //是否全选
  selectAll(e){
    this.data.isSelectAll = !this.data.isSelectAll;
    this.data.goodsList.forEach(r => r.checked = this.data.isSelectAll);
    this.setData({
      goodsList:this.data.goodsList,
      isSelectAll:this.data.isSelectAll
    })
  }
})