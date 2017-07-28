var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var mongoURL = 'mongodb://localhost:27017/project_surl';
var db = mongojs(mongoURL,['url']);
var urlCollection = db.collection('url');
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.surl){
    res.render('index',{
      surl: req.query.surl,
      get:'1',
      domain: req.headers.host
    });
  }
  res.render('index');
});

module.exports = router;
