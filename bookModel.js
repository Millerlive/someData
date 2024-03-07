
// 导入 express mongoose
const mongoose = require('mongoose')
// 连接mongodb服务
mongoose.connect('mongodb+srv://pro-3-6:pro-3-6@cluster0.6ylglz3.mongodb.net/')
// 定义文档结构类型
let BookSchema =new mongoose.Schema({
    name:String,
    author:String,
    price:Number,
    is_hot:Boolean,
})
// 创建模型对象
const BookModel = mongoose.model('books',BookSchema)
// 向集合中添加内容
// BookModel.create(data.novals)

module.exports =BookModel
