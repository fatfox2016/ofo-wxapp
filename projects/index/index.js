// projects/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0,
    longitude:0
  },
  bindcontroltap:function(e){
    // console.log(e)
    switch(e.controlId){
      case 1:
        this.movetoCenter();
        break;
      case 2:
        wx.scanCode({
          success:()=>{
            wx.showLoading({
              title:'正在获取'
            })
            wx.request({
              url:'https://www.easy-mock.com/mock/5b750f2765ae78220feeee33/password',
              success:(res)=>{
                console.log(res);
                wx.hideLoading();
                wx.redirectTo({
                  url:'../scanReasult/index?password='+res.data.data.password+'&number='+res.data.data.number,
                  success:()=>{
                    wx.showToast({
                      title:'获取密码成功',
                      duration:1000
                    })
                  }
                })
              }
            })
          },
          fail:()=>{

          }
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      success:(res) => {
        // console.log(res);
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude
        })
      },
    })
    wx.getSystemInfo({
      success:(res)=>{
        this.setData({
          controls:[{
            id:1,
            iconPath:"/images/location.png",
            position:{
              width:40,
              height:40,
              left:20,
              top:res.windowHeight - 80
            },
            clickable:true
          },{
            id:2,
            iconPath:"/images/use.png",
            position:{
              width: 120,
              height: 120,
              top: res.windowHeight -120,
              left: res.windowWidth / 2 - 60 
            },
            clickable:true
          },{
            id:3,
            iconPath:"/images/warn.png",
            position:{
              width:30,
              height:30,
              top:res.windowHeight - 80,
              left:res.windowWidth - 50,
            },clickable:true
          },{
            id:4,
            iconPath:"/images/avatar.png",
            position:{
              width:40,
              height:40,
              top:res.windowHeight - 155,
              left:res.windowWidth - 60
            },
            clickable:true
          },{
            id:5,
            iconPath:"/images/marker.png",
            position:{
              width:30,
              height:30,
              top:res.windowHeight/2 - 30,
              left:res.windowWidth/2 - 15
            }
          }
          ]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  movetoCenter:function(){
    this.mapctx.moveToLocation();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.mapctx = wx.createMapContext("ofo-map");
    this.movetoCenter();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})