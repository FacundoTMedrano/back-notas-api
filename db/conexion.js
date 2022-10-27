const mongoose = require("mongoose");
const {PORT,URI} = require("../confing");

const conexion = async(app)=>{
    return mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>app.listen(PORT,()=>console.log("base de datos y servidor conectados")))
        .catch((error)=>console.log(error.message));
}

module.exports=conexion;