const express = require("express");
const router = express.Router();
const {Obt,Postear,Borrar,Actualizar} = require("./funciones");

router.route("/").get(Obt).post(Postear).patch(Actualizar);
router.route("/:id").delete(Borrar);

module.exports=router;
