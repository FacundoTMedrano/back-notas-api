const express = require("express");
const app = express();
const cors = require("cors");

const conexion = require("./db/conexion");
const router = require("./router/router");

//cors para ser usados por otros puertos

//base de datos y servidor conectados
conexion(app)

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use("/api",router);
app.use("/api/*",(req,res)=>{
    res.status(404).json({msg:"no encontrado desvio generico"});
});