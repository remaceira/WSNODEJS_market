const express = require('express');

const globalConstants = require('./const/globalConstants');
const routerConfig = require('./routes/index.routes');

const configuracionApi = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.rutas_init());
}

const init = () => {
    const app =  express(); //Crea una instancia de express

    configuracionApi(app); //Llama a configuracionApi

    configuracionRouter(app); //Llama a configuracionRouter

    app.listen(globalConstants.PUERTO);

    console.log('La aplicacion market se esta ejecutando en el puerto: ' + globalConstants.PUERTO);
}

init();