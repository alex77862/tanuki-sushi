const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});



// Connect to Mongo
// mongoose.connect('mongodb+srv://test:1234@cluster0.483bg.mongodb.net/tanukiDatabase?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'));


app.post('/api/demo', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});


app.use('/api/stuff', (req, res, next) => {
  const stuff = [{
      _id: 'oeihfzeoi',
      title: 'Velo rouge',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Ballon de foot',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/4_24.jpg?itok=J1I1YC40',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});



app.use(bodyParser.json());

module.exports = app;