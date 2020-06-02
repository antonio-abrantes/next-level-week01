import express from "express";

const app = express();

app.get('/users', (request, response)=>{
    console.log('Listagem de usuários');
    response.json([
        'Antonio',
        'Ana',
        'Fulano'
    ]);
})

app.listen(3333, ()=>{
    console.log('Server on http://localhost:3333');
});