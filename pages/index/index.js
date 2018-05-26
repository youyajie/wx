//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    care: {},
    info: {},
    imgServer: app.globalData.flowerServer
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getList: function () {
    wx.redirectTo({
      url: '/pages/list/list'
    })
  },
  onLoad: function (option) {
    info: option
    var id = option.id != null ? option.id : ''
    wx.request({
      url: app.globalData.flowerServer + '/care/wx/detail?id=' + id,
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log("data:" + res.data + res.data.name);
        this.setData({
          care: res.data
        })
      }
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: care.name + '养护方式',
      path: '/pages/index/index?id=' + info.id
    }
  }
})
