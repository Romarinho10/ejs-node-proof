module.exports= (app) =>{

    let entries=[];
app.locals.entries= entries;

//routes
app.get('/',(req, res)=>{
    //res.send('Hola mundo');
    res.render('index', {
        title: 'Inicio'
    });
});

app.get('/new-entry',(req, res)=>{
    //res.send('Hola mundo');
    res.render('new-entry', {
        title: 'Nueva Entrada'
    });
});

app.post('/new-entry', (req, res)=>{
    if(!req.body.title || !req.body.bodt){
        res.send(400).send('La entradas deben tener un titulo y cuerpo');
    }

    let newEntry={
        title: res.body.title,
        content: req.body.body,
        published: new Date()
    }
    entries.push(newEntry);
    res.redirect('/');
});

}