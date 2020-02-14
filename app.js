const express = require ('express');
const path = require ('path');
const morgan = require ('morgan');
const bodyParser = require ('body-parser');

const app = express();



//configuracion del puerto
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
//configurando motor de plantillas (ejs)
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
require('./routes/index')(app);

app.listen(3000, ()=>{
    console.log(`servidor en puerto ${app.get('port')} `);
});