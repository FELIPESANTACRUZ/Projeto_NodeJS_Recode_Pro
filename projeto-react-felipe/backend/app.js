const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

//models
require("./src/models/Comentario");
const Comentario = mongoose.model("comentarios");

require("./src/models/Produto");
const Produto = mongoose.model("produtos");

//connection
require("./src/db/connection");

app.use(express.json())
app.use(cors())

app.get("/mostrar", async(req, res) => {
    const comentariosResponse = await Comentario.find()
    const comentariosJson = await comentariosResponse;

    res.json(comentariosJson)
})

app.get("/produtos", async(req, res) => {
    const produtoResponse = await Produto.find()
    const produtoJson = await produtoResponse;

    res.json(produtoJson)
})

app.post("/comentarios", async(req, res) => {
    const novoComentario = new Comentario({
        nome: req.body.nome,
        msg: req.body.msg,    
    })
    novoComentario.save()
    res.json({message: "Cadastro feito com sucesso!", comentario:novoComentario })
})

app.listen(5000);
