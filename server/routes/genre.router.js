const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log(req.query.id);
  const query = `SELECT * FROM movies 
                JOIN movies_genres ON movies.id=movies_genres.movie_id
                JOIN genres ON movies_genres.genre_id=genres.id
                WHERE movies.id=${req.query.id}
                ORDER BY "title" ASC;`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

module.exports = router;