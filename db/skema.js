const mongoose = require("mongoose");

const notasSkema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    nota:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("Nota",notasSkema);