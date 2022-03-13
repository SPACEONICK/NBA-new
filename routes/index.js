var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/admin', function(req, res, next) {
  res.render('admin', );
});
router.get('/visitors', function(req, res, next) {
  res.render('visitors', );
});
router.get('/teams', function(req, res, next) {
  res.render('teams', );
});

module.exports = router;
