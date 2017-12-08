require('colors');
const express = require('express');
const mongoose = require('mongoose');
const util = require('util');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use('/', bodyParser.json());
app.use(cors())
app.options('*', cors());
app.use(morgan('dev'));

const cv = require('./Controllers/CVController');


/*
Routing
*/ 

app.get('/', cv.list);
app.post('/cv/create', cv.create);
app.put('/cv/update/:id', cv.update);
app.get('/cv/generator/:id', cv.findById);
app.delete('/cv/:id', cv.delete);

/*
 Config
*/

app.set('ip', '192.168.0.47');
app.set('port', 3002);

mongoose.Promise = global.Promise;

const appListen = (app, port, ip) => {
    return new Promise((resolve, reject) => {
        app.listen(port, ip, resolve)
    })
};

mongoose
    .connect('mongodb://localhost:27017/cvgenerator', {useMongoClient:true})
    .then( () => console.log('MongoDB : Connexion établie'.trap.bgGreen) )
    .then( appListen(app, app.get('port'), app.get('ip')) )
    .then( () => console.log(` App Started on http://${app.get('ip')}:${app.get('port')} `.trap.bgGreen) )
    .catch(err => console.log(err.message.red));



