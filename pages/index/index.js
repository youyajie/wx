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
    if (app.globalData.backSign) {
      wx.navigateBack({
        url: '/pages/list/list'
      })
    } else {
      wx.redirectTo({
        url: '/pages/list/list'
      })
    }
  },
  onLoad: function (option) {
    this.setData({
      info: option
    })
    var id = option.id != null ? option.id : ''
    wx.request({
      url: app.globalData.flowerServer + '/care/wx/detail?id=' + id,
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
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
