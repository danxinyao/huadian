//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    //向模板传入数据
    // 轮播
    index_index_scroll_tmpl: {
      images: [
        '/comment/img/l1.jpg',
        '/comment/img/l2.jpg',
        '/comment/img/l3.jpg',         
        '/comment/img/l4.jpg',         
       '/image/2.jpg',
       '/image/1.jpg',
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
      navs: [
        {
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
        }
      ]
    },
  },


  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '13213754205',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },

  onShareAppMessage: function () {
    return {
      title: 'XXXXX企业',
      desc: '企业的领军者!',
      path: '/page/user?id=123'
    }
  },

  go: function(event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  }
})
