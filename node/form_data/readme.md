1. Backend 
    web Server 硬件服务器 | php java 等语言 后端服务器应用程序
    提供http访问 http：//127.0.0.1:3000/index?a=1&b=2
    protocol http://
    127.0.0.1  IP => domain baidu.com
    3000 端口 伺服
    /path
    ?querystring
2. 类事件的概念
    http.createServer((req,res)=>{

    })
    server.listen(port,ip,() => {})
3. 使用nodemon 实现热更新  进行实时编译
