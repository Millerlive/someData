
// 模块化路由
const express = require('express');
const routes = express.Router()
routes.get('/',(req,res)=>{
    res.send('module /')
})
routes.get('/shop',(req,res)=>{
    res.send('module /shop')
})

module.exports = routes