// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // //要接收的数据的名称
    // aaa:{
    //   //要接收的数据的类型
    //   type:String,
    //   value:""
    // }
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // tabs:[
    //   {id:0,name:"首页",isActive:true},
    //   { id: 1, name: "原创", isActive: false },
    //   { id: 2, name: "分类", isActive: false },
    //   { id: 3, name: "关于", isActive: false },
    // ]
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    //1.用户点击哪一个标题（绑定点击事件）
    handleItemTap(e) {
      //2.获取被点击的索引
      const {index} = e.currentTarget.dataset;
      //5.触发父组件中的自定义事件 同时传递参数（itemChange父组件中自定义事件的名称 index要传递的参数）
      this.triggerEvent("itemChange",{index});
      // //3.获取原数组(data中的数组)
      // // 解构 对复杂类型进行解构的时候 复制了一份变量的引用而已
      // let {tabs} = this.data; //相当于 let tabs = this.data.tabs
      // //4.循环数组
      // //[].foreach 遍历数组的时候 修改了v 也会导致原数组被修改
      // tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      // this.setData({
      //   tabs:tabs
      // })
    },
  }
})
