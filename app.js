
const { response } = require('express');
const express      = require('express');
const handlebars   = require('express-handlebars');
const { request }  = require('http');
const bodyParser   = require('body-parser');
const mongoose     = require("mongoose");
const path         = require('path');
const session      = require("express-session");
const flash        = require("connect-flash");
<<<<<<< HEAD





//## ------------CONFIGURAÇÕES -----------------##

// Sessão 

/* ############PROBLEMA NA FLASH() ######################
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}))
app.use(flash())
//Middleware
app.use((resquet, response, next ) =>{
  response.locals.success_msg = request.flash("success_msg")  
  response.locals.error_msg = request.flash("error_msg")
  next()
})
#######################################*/

// config express
=======
>>>>>>> 7650c5b817b136b96a60ca0b609ea96580e0bdb5
const app          = express()


//## ------------CONFIGURAÇÕES -----------------##

// Sessão 

/*
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));
app.use(function() {
    
    app.use(express.session({ cookie: { maxAge: 60000 }}));
    app.use(flash());
  });

//Middleware
app.use((resquet, response, next ) =>{
  response.locals.success_msg = request.flash("success_msg")  
  response.locals.error_msg = request.flash("error_msg")
  next()
})
*/
// config porta do servidor
const portaHttp = 9999;

<<<<<<< HEAD
=======
// config express
>>>>>>> 7650c5b817b136b96a60ca0b609ea96580e0bdb5


// config handlebars
app.engine('handlebars', handlebars ({
    defaultLayout: 'main'
}));

// Config Body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Config MongoDb Mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/db_base", ).then(() => {
    console.log("Banco Conectado");
}).catch((err) =>{
    console.log("Erro na conexão" + err)
});

<<<<<<< HEAD



// ######### Model - Eventos ##############
=======
// Model - Eventos 
>>>>>>> 7650c5b817b136b96a60ca0b609ea96580e0bdb5

const eventoSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    
    local: {
        type: String,
        require: true
    },

    data: {
        type: Date,
        require: true
    },

    horario: {
        type: String,
        require: true

    }
})
 
mongoose.model("eventos", eventoSchema )
const novoEvento = mongoose.model("eventos")


// public
app.use(express.static(path.join(__dirname, "public")))



<<<<<<< HEAD
=======



>>>>>>> 7650c5b817b136b96a60ca0b609ea96580e0bdb5
//## -------------ROTAS -----------------##

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

<<<<<<< HEAD
=======
// rota post Evento Cadastrado 
app.get("/cadastrado", (request, response)=>{

    
});

app.post("/cadastrado", (request,response) => {
    response.render('eventoCadastrado.handlebars')
   

    let nomeE = request.body.nomeEvento;
    let localE = request.body.localEvento;
    let dataE = request.body.dataEvento;
    let horaE = request.body.horaEvento; 
    var erros = []

    if(!nomeE || typeof nomeE == undefined || nomeE == null){
        erros.push({texto: "Nome Inválido"})
    }

    if(!localE || typeof localE == undefined || localE == null){
        erros.push({texto: "Local Inválido"})
    }

    if(!dataE || typeof dataE == undefined || data == null){
        erros.push({texto: "Data Inválido"})
    }

    if(erros.length>0){
      response.render("cadastroEvento")
    }else{
        new novoEvento({
            nome: nomeE,
            local: localE,
            data: dataE,
            horario: horaE
        }).save().then(() => {
            console.log("Evento criado com sucesso")
        }).catch((err) => {
            console.log("Erro ao adicionar evento" +err)
        })
    }





    

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

>>>>>>> 7650c5b817b136b96a60ca0b609ea96580e0bdb5
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

// rota post Evento Cadastrado 

app.post("/cadastrado", (request,response) => {
    response.render('cadastroEvento.handlebars')
   

    let nomeE = request.body.nomeEvento;
    let localE = request.body.localEvento;
    let dataE = request.body.dataEvento;
    let horaE = request.body.horaEvento; 
    

        new novoEvento({
            nome: nomeE,
            local: localE,
            data: dataE,
            horario: horaE
        }).save().then(() => {
            
            console.log("Evento cadastrado")
            response.redirect("buscarEvento")
        }).catch((err) => {
            console.log("Erro ao adicionar evento" +err)
        })



    

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
});



// rota get para buscar evento
app.get('/buscarEvento', (request,response) => {
   novoEvento.find().lean().then((eventos) =>{
        response.render('buscarEvento.handlebars', {eventos:eventos})
    }).catch((err) =>{
        console.log("Erro ao listar eventos")
    })
    
});
// rota post para buscar evento
app.post('/buscarEvento', (request, response) => {
    let nomeEvento = request.body.nomeEvento;
    let dataEvento = request.body.dataEvento;
    console.log(nomeEvento + ' -- ' + dataEvento);
});

//rota Editar Evento
app.get('/editarEvento:id', (request, response) =>{
    novoEvento.findOne({_id:request.params.id}).lean().then((eventos) =>{
        response.render('editarEvento.handlebars', {eventos: eventos})
    }).catch((err) =>{
        alert("Erro ao editar");
        response.redirect("/buscarEvento")
    })
   
})

<<<<<<< HEAD
app.post('/eventoEditado', (request, response) =>{
    novoEvento.findOne({_id: request.body.id}).then((eventos) =>{
        eventos.nome = request.body.nomeEvento
        eventos.local = request.body.localEvento
        eventos.data = request.body.dataEvento
        eventos.horario = request.body.horarioEvento

        eventos.save().then(() =>{
            console.log("Evento Editado Salvo")
            response.redirect("/buscarEvento")
        }).catch((err) =>{
            console.log("Erro ao salvar a evento editado")
        })
    }).catch((err) =>{
        console.log("Erro ao editar o evento ")
        response.redirect("/buscarEvento")
    })
})

//Deletar Evento
app.get('/deletarEvento:id', (request, response) =>{
    novoEvento.findOneAndDelete({_id: request.params.id}).then(() =>{
        response.redirect("/buscarEvento")
    }).catch((err) =>{
        response.redirect("/buscarEvento")
    })
})


=======
>>>>>>> 7650c5b817b136b96a60ca0b609ea96580e0bdb5


// servidor
app.listen(portaHttp, () => {
    console.log('servidor funcionando em: ' + portaHttp)
});