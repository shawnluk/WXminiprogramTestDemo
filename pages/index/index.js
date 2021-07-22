//Page Object
import { request } from "../../request/request.js"

Page({
  data: {
    //轮播图数组
    swiperList:[],
    cateList:[],
    floorList:[]
  },
  //options(Object)
  onLoad: function(options) {
    //发送请求
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata', 

    //   success: (result) => {
    //     console.log(result);
        // this.setData({
        //   swiperList:result.data.message
        // })
    //   },
    // });

    // request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    // .then(result=>{
    //   this.setData({
    //     swiperList:result.data.message
    //   })
    // })
        this.getSwiper();
        this.getCateList();
        this.getFloorList();
  },

  getSwiper(){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    .then(result=>{
      this.setData({
        swiperList:result.data.message
      })
    })
  },

  getCateList(){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'})
    .then(result=>{
      this.setData({
        cateList:result.data.message
      })
    })
  },

  getFloorList(){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'})
    .then(result=>{
      this.setData({
        floorList:result.data.message
      })
    })
  },



  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  