const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
})

module.exports = mongoose.model("Item", itemSchema);