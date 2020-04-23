// pages/deleteList/deleteList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:['aaa','bbb','ccc']
  },
  del(e){
    // console.log(e.currentTarget.dataset.index);
    wx.showModal({
      title: '友情提示',
      content: '确定要删除吗',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if(result.confirm){
          //获取到要删除元素的下标
          let index = e.currentTarget.dataset.index;
          //利用splice方法，删除该元素
          this.data.list.splice(index,1)
          //重新为list数组赋值
          this.setData({
            list:this.data.list
          })
        }
      },
    });
  }
 
})