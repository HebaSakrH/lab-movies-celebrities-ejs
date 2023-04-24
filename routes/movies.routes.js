// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

router.get('/create', async (req, res) => {
    try {
        const celebrities = await Celebrity.find();
        res.render('movies/new-movie', { celebrities });
      } catch (error) {
        console.error(`Error fetching celebrities: ${error}`);
        res.redirect('/movies/create');
      }

  })
  
  router.post('/create', async (req, res) => {
    try {
      const celebrities = await Celebrity.find();
      res.render('movies/new-movie', { celebrities });
    } catch (error) {
      console.error(`Error fetching celebrities: ${error}`);
      res.redirect('/movies');
    }
  });
  
  

// all your routes here

module.exports = router