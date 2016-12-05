// 导入koa
const Koa = require('koa');
// 创建一个Koa对象
const app = new Koa();
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello wechat</h1>';
});

// 监听3000端口
app.listen(3000);
console.log('app started at port 3000...');