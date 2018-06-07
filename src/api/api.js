'use strict';

const router = require('../lib/router.js');

const SINGERS_URL = '/api/v1/singers';
/**
 * GET Route (/)
 * Accepts an optional "name" query string parameter and says Hello
 * test with httpie:
 *     http http://localhost:8080
 *     http http://localhost:8080?name=John
 */
router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});


router.get(SINGERS_URL, (req, res) => {
  res.write(`singer with id of ${req.query.id}`);
  res.end();
});

router.post(SINGERS_URL, (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

router.put(SINGERS_URL, (req, res) => {
  res.write(JSON.stringify(Object.assign(req.body, {id:req.query.id})));
  res.end();
});

router.delete(SINGERS_URL, (req, res) => {
  res.write(`delete singer with id of ${req.query.id}`);
  res.end();
});

/**
 * POST Route (/data)
 * Accepts a JSON object and simply regurgitates it back to the browser
 * test with httpie:
 *     echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:8080/data
 */
router.post('/data', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write( JSON.stringify(req.body) );
  res.end();
});

module.exports = {};
