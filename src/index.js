const express = require('express');
const morgan = require('morgan');
const path=require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route=require('./routes')

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
//Http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
extname: '.hbs'
}));
        app.set('view engine', 'hbs');
// Views and view engine
app.set('           views', path.join(__dirname, '/reasource/views'));

//Route init
route(app);

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})