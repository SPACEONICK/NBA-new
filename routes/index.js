var express = require('express');
var router = express.Router();
let {Team}=require('../models')
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
router.get('/detail', function(req, res, next) {
  res.render('detail', );
});
router.get('/teams', async function(req, res, next) {
  let teams = await Team.findAll();

  console.log(teams);
  res.render('teams',{teams});
});
module.exports = router;
