var koa = require('koa');
var app = koa();
app.keys = ['im a newer secret', 'i like turtle'];
app.use(function * () {
    // this.throw(404, 'name required')
    var controller = this.request.path;
    if (controller == "/test/" || controller == "/test") {
        this.body = {
            test: "ok"
        }
    } else if (controller == "/index" || controller == "/index/") {
        this.body = 'Hello World';
        this.cookies.set('name',this.request.query.name,{signed:true});
        console.log(this.request.query);
    } else {
        this.throw(404, '当前内容并未找到~');
    }
    console.log(this.request.path);
});
app.listen(11011);