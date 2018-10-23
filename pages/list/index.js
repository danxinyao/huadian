var util = require('../../utils/util.js')
Page({
  data: {
    title: '',
    lists: []
    //向模板传入数据
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

  //事件处理函数
  onLoad: function(options) {
    var that = this
    this.title = options.type || '鲜花列表'
    that.setData({
      lists: util.lists
    })
  },
  onReady: function() {
    wx.setNavigationBarTitle({
      title: this.title
    })
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
  }
})