var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var mongoURL = 'mongodb://localhost:27017/project_surl';
var db = mongojs(mongoURL,['url']);
var urlCollection = db.collection('url');
var randomstring = require('randomstring');

router.get('/:id', function(req, res, next) {
    var { id } = req.params;
    urlCollection.findOne({
        surl:id
    },(err,docs)=>{
        if(docs == null){
            res.redirect('/404')
        }
        else{
            res.redirect(docs.lurl)
        }
    })
});

module.exports = router;