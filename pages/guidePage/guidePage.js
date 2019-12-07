//

//先导页

const app = getApp()






Page({
  data: {
    defaultSize: 'default',//按钮size属性默认大小
    loading_f: false,//true按钮图标前显示一个不停加载的圆圈
    plain: false,//背景色透明
    disabled: false,// 按钮可用
    motto: '',
    store_name_chengxi: '舒城城西店',
    store_name_chengd: '舒城城东店',
    slogen: '源于自然 · 纯正鲜肉',
    brand: '金佰味猪肉',
    phone: '联系电话:10101010101',
    userInfo: {},//当前页面用户信息对象 
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 设置 wxml里面这个对象的disable属性 相反
   * 只要控件有这个disabled属性
   * disabled="{{disabled}}"
   */
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },



  //点击头像 跳转事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      //url: '../logs/logs'
      url: '../logs/logs' 
    })
    //wx.showTabBar();
  },


  //跳转主页区域
  logBtn: function (options) {

    wx.switchTab({
      url: '../main/main' 
    })
  },


  onLoad: function () {

    //wx.hideTabBar();

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**bindgetuserinfo回调中获取到用户信信息 这是自定义的回调方法
   * 
   * 登录按钮获取用户信息  */
  getUserInfo: function (e) {
    //提示
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    //当前页面对象赋值 
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  


})//pages对象结束

/**
var types = ['default', 'primary', 'warn']
for (var i = 0; i < types.length; ++i) {
  (function (type) {
    Page[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
} */