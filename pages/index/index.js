//index.js
//获取应用实例
var util = require('../../utils/util.js')
let index_index_scroll_tmpl = {
  images: [
    '/comment/img/l1.jpg',
    '/comment/img/l2.jpg',
  ],
  indicatorDots: true,
  vertical: false,
  autoplay: true,
  interval: 3000,
  duration: 1200
};
var app = getApp()
Page({
  data: {
    lists: [],
    //向模板传入数据
    // 轮播
    index_index_scroll_tmpl: {
      images: [
        '/comment/img/l1.jpg',
        '/image/1.jpg',
        '/comment/img/l2.jpg',
        '/image/2.jpg',
        '/image/3.jpg',
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
    },



    // nav
    index_index_navs_tmpl: {
      navs: [{
        image: '/image/i1.png',
        text: '鲜花'
      }, {
        image: '/image/i2.png',
        text: '鲜花树'
      }, {
        image: '/image/i3.png',
        text: '花朵'
      }, {
        image: '/image/i4.png',
        text: '结婚'
      }]
    },
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
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function() {
    var that = this
    let obj = index_index_scroll_tmpl;
    util.lists.forEach((item, index) => {
      if (index > 3) {
        obj.images.push(item.url)
      }
    })
    that.setData({
      lists: util.lists,
      index_index_scroll_tmpl: obj
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
      })
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

  go: function(event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
  }

})