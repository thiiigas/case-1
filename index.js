const fs = require('fs')
const conteudo =fs.readFileSync('log.txt')
// console.log(conteudo.toString())


// const linha = `{"env": "prod", "path": "/api/path3", "method": "PUT", "duration": "678", "statusCode": "1", "statusMessage": "status message 3", "host": "queroteste.com", "level": "LEVEL 1", "message": "message 2", "timestamp": "1679339588.667372"}`

    
    const str=conteudo.toString()
const partes =str.split ('\n');

const p = "partes"
console.log(p.replaceAll(/'''/, '"'));


for (let linha of partes) {
    const obj = JSON.parse(linha)
    const numero = Number.parseInt(obj.statusCode)
    console.log(numero)
    if(numero>=200 && numero<=399) {
        console.log("sucesso")
    }

    else if(numero>=400 && numero<=599){
        console.log("erro")}
}
const obj =resultados("sucesso","erro")

const resultados = {
  '/path1': {
    sucessos: 124,
    erros: 12
  },
  '/api/path2': {
    sucessos: 125152,
    erros: 0
  },
  '/api/path3': {
    sucessos: 122,
    erros: 0
  }
}
