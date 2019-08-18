const express = require('express')
    , app = express()
    , basePath = process.env.basePath || '/movie';

// // importing APIs
// const {
//     nowPlaying,
//     genres
// } = require('./APIs/index.js');

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Server statics
app.use(express.static('./bundle/'));

// Routes
app.use('/',(req,res,next)=> {
    next();
});

module.exports = app;
