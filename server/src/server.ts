import express from 'express';

const app = express();
app.use(express.json());

const users = [
    'Antonio',
    'Ana',
    'Fulano'
];

app.get('/users', (request, response)=>{
    const search = String(request.query.search);
    
    const filterUsers = search ? users.filter(user =>user.includes(search)) : users;

    return response.json(filterUsers);
})

app.get('/users', (request, response)=>{
    console.log('Teste');
    return response.json(users);
})

app.get('/users/:id', (request, response)=>{
    const id = Number(request.params.id);
    return response.json(users[id]);
})

app.post('/users', (request, response)=>{

    const data = request.body
    const user = {
        nome: data.name,
        email: data.email
    };
    console.log(user);

    return response.json(user);
});

app.listen(3333, ()=>{
    console.log('Server on http://localhost:3333');
});