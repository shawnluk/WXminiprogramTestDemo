// pages/category/index.js
import { request } from "../../request/request.js"


Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightContent:[],

    currentIndex:0,
    scrollTop:0
  },

  CatesData:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates();
  },

  getCates(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'})
    .then(result=>{
      
      this.CatesData=result.data.message
     
      let leftMenuList = this.CatesData.map(v=>v.cat_name);

      let rightContent = this.CatesData[0].children;
      this.setData({
        leftMenuList,
        rightContent
      })
    })
    
  },

  handleItemTap(e){
    const {index} = e.currentTarget.dataset;
    let rightContent = this.CatesData[index].children;    

    this.setData({
      currentIndex:index,
      rightContent,
      scrollTop:0
    })
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