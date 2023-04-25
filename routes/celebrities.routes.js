
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model');

router.get('/create', (req, res) => {
res.render('celebrities/newCelebrity');
  });

  router.post('/create', async (req, res) => {
    try {
      const celebrity = new Celebrity({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
      });
      
      await celebrity.save();
      
      res.redirect('/celebrities');
    } catch (error) {
      res.render('celebrities/new-celebrity', { error: 'Error creating celebrity. Please try again.' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const celebrities = await Celebrity.find();
      res.render('celebrities/celebrities', { celebrities });
    } catch (error) {
      console.log(error);
      res.render('error');
    }
  });
    

  
// all your routes here

module.exports = router