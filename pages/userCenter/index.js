//index.js
//获取应用实例
var app = getApp()
Page({
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  calling: function() {
    wx.makePhoneCall({
      phoneNumber: '15670215100',
      success: function() {
        console.log("拨打电话成功！")
      },
      fail: function() {
        console.log("拨打电话失败！")
      }
    })
  },

  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
  },
  onShareAppMessage: function() {
    return {
      title: '渠首芳韵花艺',
      desc: '鲜花的领跑者!',
      imageUrl: 'http://b307.photo.store.qq.com/psb?/7c2813a2-4828-443c-8bed-e3430af2b340/*uBeHgh8LnUVaT4mHSlZgCxU9QyTjgRt0NiSCCKz74c!/b/dDMBAAAAAAAA&bo=ygHKAQAAAAARFyA!&rf=viewer_4',
      path: '/pages/index/index?id=123'
    }
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
  },
  save: function () {
    wx.saveImageToPhotosAlbum({
      success(res) { }
    })
  }
})
