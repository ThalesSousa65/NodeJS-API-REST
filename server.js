const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/api",
    { useUnifiedTopology: true,
      useNewUrlParser: true }

);

require('./src/models/Product');

//rotas
app.use('/nodeapi', require('./src/routes'));

app.listen(3001);

//para starta o mongodb e so da docker start mongodb no terminal
//para ativar o nodemon e so ir no terminal e colocar npm run dev