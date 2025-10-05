import express from 'express';
import animalRoutes from './Src/Routes/animalRoutes';
import loginRoutes from './Routes/loginRoutes';
import doacaoRoutes from './Src/Routes/doacaoRoutes';
import pedidoRoutes from './Src/Routes/pedidoRoutes';
import questionarioRoutes from './Src/Routes/questionarioRoutes';
import tutorRoutes from './Src/Routes/tutorRoutes';

const app = express();

app.use(express.json());

app.use('/animal', animalRoutes);
app.use('/login', loginRoutes);
app.use('/doacao', doacaoRoutes);
app.use('/adocao', pedidoRoutes);
app.use('/questionario', questionarioRoutes);
app.use('/tutor', tutorRoutes);

app.listen(8080, () => {

    console.log(`Servidor funcionando na porta 8080`);

});

