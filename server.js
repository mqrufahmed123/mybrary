const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')

app.set('view engine', 'ejs')
app.set('views', __dirname + "/views")  
if(process.env.NODE_ENV !== 'production'){
    require('dotenv')
}

app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public')) 

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server started at port 3000`)
})
