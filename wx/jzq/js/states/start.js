function addStartBtn(callback){
    //画按钮
    const config={
      type:'Image',
      image:'images/btn_start.png',
      style:{
        left:248/SCALE,
        top:870/SCALE,
        width:245/SCALE,
        height:91/SCALE
      }
    }
    //获取用户信息按钮
    const startBtn =wx.createUserInfoButton(config);
    startBtn.onTap(res=>{
      if(res.userInfo){
        callback(res.userInfo)
      }
    })
    return startBtn;
  }
  class Start extends Phaser.State{
    //第一页·预加载资源
    preload(){
      this.scale.pageAlignHorizontally = true;
      this.scale.pageALignVertically = true;
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  
      // console.log('preload')
      this.load.image('bg_menu','images/bg_menu.png');
      this.load.image('bg_playing','images/bg_playing.png');
      this.load.image('bg_rank','images/bg_rank.png');
      this.load.image('bg_waiting','images/bg_waiting.png');
      this.load.image('btn', 'images/btn_menu.png');
    }
    //向场景添加spirits
    create(){
      // console.log('create')
      //指定资源id，向场景添加内容
      this.game.add.image(0,0,'bg_menu');
      //添加开始游戏按钮-->既要开始游戏，又要完成game.state切换，还要获取玩家信息
      const startBtn=addStartBtn((userInfo)=>{
        go.userInfo=userInfo;
        startBtn.destroy();
        if(go.userInfo.avatarUrl !==''){
          this.load.image(go.userInfo.avatarUrl, go.userInfo.avatarUrl);
          this.load.start();
          this.game.state.start('menu');
        }
      })
    }
  }
  
  module.exports=Start