//获取应用实例
const app = getApp()

Page({
  data: {
    careList: {},
    imgServer: app.globalData.flowerServer
  },
  getDetail: function (event) {
    app.globalData.backSign = true
    wx.navigateTo({
      url: '/pages/index/index?id=' + event.target.id
    })
  },
  onLoad: function () {
    wx.request({
      url: app.globalData.flowerServer + '/care/wx/list',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        this.setData({
          careList: res.data
        })
      }
    })
  }
})
