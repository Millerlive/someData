// 使用express 搭建web服务  使用mongoose连接mongodb数据库
// 引入模块化路由
const routes = require('./moduleRoutes')
// 引入操作book集合的对象
const BookModel = require('./bookModel')
const express = require('express')
// 导入cors 中间件 解决跨域问题
const cors = require('cors')
// 引入 bodyParser 解析 req.body
const bodyParser = require('body-parser')

// 创建web服务
const app = express() 
// 使用cors 解决跨域问题
app.use(cors())
// bodyParser 是node.js的一个中间件，用来处理http请求的请求体
// 可以解析不同格式的请求体数据，包括JSON url编码格式
app.use(bodyParser.json())
// 使用模块化路由-
app.use('/api',routes)

// 配置路由
// 获取数据
app.get('/', async(req, res) => {
    res.send('请输入正确的路径')
})
app.get('/get', async(req, res) => {
    let data=await BookModel.find()
    console.log(data);
    res.send(data)
})
app.post('/add', async(req, res) => {
    console.log('req.body:',req.body);
    let data=await BookModel.insertMany(req.body.data)
    console.log(data);
    res.send({
        msg:'添加成功',
        status:'200',
        statusText:'OK'
    })
})
// 监听端口，启动服务
app.listen(8080,()=>{
    console.log('listening on port 8080');
})