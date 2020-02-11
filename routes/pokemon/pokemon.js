const express = require('express');
const router = express.Router();
const axios = require('axios');


/* GET route to Pokemon list */
router.get('/', (req, res, next) => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(allPokemon => {
      res.render('pokemon/pokemon-list', {
        allPokemon
      });
    })
    .catch(err => next(err));
});

module.exports = router;