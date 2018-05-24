
Page({
  data: {
    careList: {}
  },
  getDetail: function (event) {
    console.log("detail:" + event.target.id)
    wx.redirectTo({
      url: '/pages/index/index?id=' + event.target.id
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
      success: res => {
        console.log("dataList:" + res.data);
        this.setData({
          careList: res.data
        })
      }
    })
  }
})
