const express = require('express');
const port = 8080;
const animalRoutes = require('./Routes/animalRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const authRoutes = require('./Routes/authRoutes');
const doacaoRoutes = require('./Routes/doacaoRoutes');
const pedidoRoutes = require('./Routes/pedidoRoutes');
const questionarioRoutes = require('./Routes/questionarioRoutes');
const tutorRoutes = require('./Routes/tutorRoutes');

const api = express();

api.use(express.json());

api.use('/animal', animalRoutes);
api.use('/admin', adminRoutes);
api.use('/auth', authRoutes);
api.use('/doacao', doacaoRoutes);
api.use('/pedido', pedidoRoutes);
api.use('/questionario', questionarioRoutes);
api.use('/tutor', tutorRoutes);

api.listen(port, () => {

    console.log(`Servidor funcionando em ${port}`);

})

module.exports = api;