const Nota = require("../db/skema");

const Obt = async(req,res)=>{
    try {
        const notas = await Nota.find();
        res.status(200).json({msg:"succeful",notas})
    } catch (error) {
        res.status(404).json({msg:error.message});
    }
}

const Postear = async(req,res)=>{
    try {
        const {nombre,nota} = req.body;
        const nuevaNota = await new Nota({
            nombre,nota
        });
        await nuevaNota.save();
        res.status(200).json({msg:"succeful",nuevaNota});
    } catch (error) {
        res.status(500).json({msg:error.message});
    };
};

const Actualizar = async(req,res)=>{
    try {
        const {_id,nombre,nota} = req.body;
        const usuario = await Nota.findOne({_id});
        if(usuario){
            usuario.nombre=nombre;
            usuario.nota=nota;
            const actualizado = await usuario.save();
            res.status(200).json({msg:"succefull",actualizado})
        }else{
            res.status(200).json({msg:"usuario no encontrado"})
        }
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

const Borrar = async(req,res)=>{
    try {
        const {id} = req.params;
        const borrado = await Nota.deleteOne({"_id":id});
        if(borrado.deletedCount==0){
            res.status(200).json({msg:"no existe"})
        }else{
            res.status(200).json({msg:"succeful","usuario-borrado":borrado})
        }
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

module.exports = {Obt,Postear,Borrar,Actualizar};