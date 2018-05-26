//获取应用实例
const app = getApp()

Page({
  data: {
    careList: {},
    imgServer: app.globalData.flowerServer
  },
  getDetail: function (event) {
    console.log("detail:" + event.target.id)
    wx.redirectTo({
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
        console.log("dataList:" + res.data);
        this.setData({
          careList: res.data
        })
      }
    })
  }
})
