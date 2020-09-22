const express = require('express')
const app = express()

const PORT=3001

app.get("/",(browser, resposta)=>{
resposta.send(`OK, vamos lá ver... estamos na porta ${PORT} e o request foi o '${browser.path}', não sei?`);

});

app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`);
})