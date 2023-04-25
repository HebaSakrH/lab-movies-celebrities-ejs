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
      const movie = new Movie({
        title: req.body.title,
        genere: req.body.genere,
        plot: req.body.plot,
        // cast: req.body.cast
      });
      await movies.save();
      res.redirect('/movies');
    } catch (error) {
      res.render('movies/new-movie', { error: 'Error creating movie. Please try again.' });
    }
  });
  
  
  router.get('/', async (req, res) => {
    try {
      const movies = await Movie.find();
      res.render('movies/movies', { movies });
    } catch (error) {
      console.log(error);
      res.render('error');
    }
  });
  
module.exports = router