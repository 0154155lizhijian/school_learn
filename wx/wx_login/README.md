1. wx.getSetting 
    用户授权范围里查询基本信息使用权利 scope.userInfo
    接着做别的事情， 高阶函数
    success  fail 
2. 未授权 则进行授权  弹出授权询问框 分支一
   已授权 分支二
    => 去登录 => this.getUserInfo
    

