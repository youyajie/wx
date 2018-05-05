//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    care: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.request({
      url: 'http://localhost:8080/care/wx/list',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res=>{
        console.log("data:" + res.data + res.data.name);
        this.setData({
          care: res.data
        })
      }
    })  
  }
})
