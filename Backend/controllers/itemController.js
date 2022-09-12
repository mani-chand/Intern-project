const {Item} = require('./../models/Item.js')
const createItem = async(req,res,next)=>{
 const {name,price} = req.body
 const newItem =await Item({
    name,
    price,
 }).save()
 res.json(newItem)
}

exports.createItem=createItem;