const { response } = require('express');
const express = require('express');
const handlebars = require('express-handlebars');
const { request } = require('http');
const bodyParser = require('body-parser');

// config porta do servidor
const portaHttp = 9999;

// config express
const app = express()

// config handlebars
app.engine('handlebars', handlebars ({
    defaultLayout: 'main'
}));

// Config Body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// rotas
app.get('/', (request,response) => {
    response.render('home.handlebars')
});

// rota para cadastro usando o render p renderizar a pagina criada (carregar pagina)
app.get('/cadastrar', (request,response) => {
    response.render('cadastroUsuario.handlebars')
});

// rota post do formulario de cadastro (pegar dados de volta para o servidor)
app.post('/cadastrar', (request,response) => {
    let nome = request.body.nome;
    let email = request.body.email;
    let senha = request.body.senha;
    let senhaA = request.body.senhaA;
    console.log(nome + ' -- ' + email + ' -- ' + senha + ' -- ' + senhaA);
});

// servidor
app.listen(portaHttp, () => {
    console.log('servidor funcionando em: ' + portaHttp)
});