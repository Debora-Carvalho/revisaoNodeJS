const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

//recebendo parametros
app.get("produtos/:item", function(req,res){
    res.send("Item: " + req.params.item + "<br>Quantidade: " + req.params.quantidade)
})

//criando o servidor web com a porta 8081
app.listen(8081, function(){
    console.log("Servidor Ativo na porta 8081!");
}) 


