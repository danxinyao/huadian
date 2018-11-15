//index.js
//获取应用实例
var util = require('../../utils/util.js')
let index_index_scroll_tmpl = {
  images: [
    '/comment/img/l1.jpg',
    'http://b305.photo.store.qq.com/psb?/V139cQJB0axwVi/1Xkx.CQHEjSl*ala6OlG3zU3vFBZrHCO7PJlF87fRjg!/b/dDEBAAAAAAAA&bo=gAeAAwAAAAAAACI!&rf=viewer_311',
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
    index_index_scroll_tmpl: {},
    markers: [{
      //iconPath: "/image/list-selected-icon.png",
      id: 0,
      latitude: 32.699800,
      longitude: 111.796982,
      width: 20,
      height: 20,
      // label: {
      //   content: '渠首芳韵花艺',
      //   color: '#FD3D6B',
      //   fontSize: 14,
      //   borderRadius: 5,
      //   borderColor: '#ccc',
      //   padding: 10,
      //   textAlign: 'center',
      // },
      callout: {
        content: '渠首芳韵花艺',
        color: '#FD3D6B',
        fontSize: 16,
        borderRadius: 5,
        borderColor: '#ccc',
        display: 'ALWAYS',
        textAlign: 'center',
      }
    }],
    controls: [{
      id: 1,
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
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
      if (index > 3 && index < 8) {
        obj.images.push(item.url)
      }
    })
    that.setData({
      lists: util.lists,
      index_index_scroll_tmpl: obj
    })
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo,
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

  go: function(event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
  },
  showBigBox: function(e) {
    //console.log(e.currentTarget.dataset.url)
    wx.previewImage({
      urls: [e.currentTarget.dataset.url] // 需要预览的图片http链接列表
    })
  }
})