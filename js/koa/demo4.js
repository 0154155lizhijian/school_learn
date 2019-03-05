const Koa = require('koa')
const app = new Koa();
const fs = require('fs.promised')

const main = async function(ctx,next){
    ctx.response.type = 'html';
    ctx.response.body = await fs.readFileSync('./template.html','utf8');
}

app.use(main);
app.listen(8080);