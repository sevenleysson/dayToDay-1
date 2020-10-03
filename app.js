const { response } = require('express');
const express = require('express');
const handlebars = require('express-handlebars');
const { request } = require('http');
const bodyParser = require('body-parser');
const path = require('path')

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

// public
app.use(express.static(path.join(__dirname, "public")))

// rota get p renderizar a home
app.get('/', (request,response) => {
    response.render('home.handlebars')
});
// rota post p barra de pequisa da home
app.post('/', (request,response) => {
    let nomeEvento = request.body.nomeEvento;
    let dataEvento = request.body.dataEvento;
    console.log(nomeEvento + ' -- ' + dataEvento);
})

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

// rota get para login p renderizar a pagina
app.get('/login', (request,response) => {
    response.render('login.handlebars')
});
// rota post p login 
app.post('/login', (request, response) => {
    let email = request.body.email;
    let senha = request.body.senha;
    console.log(email + ' -- ' + senha);
})

// rota get para cadastrar evento
app.get('/addEvento', (request,response) => {
    response.render('cadastroEvento.handlebars')
});
// rota post para cadastrar evento
app.post('/addEvento', (request, response) => {
    let nomeEvento = request.body.nomeEvento;
    let local = request.body.local;
    let dataEvento = request.body.dataEvento;
    let horario = request.body.horario;
    console.log(nomeEvento + ' -- ' + local + ' -- ' + dataEvento + ' -- ' + horario);
})

// rota get para buscar evento
app.get('/buscarEvento', (request,response) => {
    response.render('buscarEvento.handlebars')
});
// rota post para buscar evento
app.post('/buscarEvento', (request, response) => {
    let nomeEvento = request.body.nomeEvento;
    let dataEvento = request.body.dataEvento;
    console.log(nomeEvento + ' -- ' + dataEvento);
})

// servidor
app.listen(portaHttp, () => {
    console.log('servidor funcionando em: ' + portaHttp)
});