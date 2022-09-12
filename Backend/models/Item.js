const mongoose = require('mongoose')
const Item = new mongoose.Schema({
    name:{type:String},
    price:{type:Number}, 
    time-slot:{
             start:{type:Date}, 
             end:{type:Date}
           }
})
exports.Item = mongoose.model('item',Item)
