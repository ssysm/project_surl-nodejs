var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var mongoURL = 'mongodb://localhost:27017/project_surl';
var db = mongojs(mongoURL,['url']);
var urlCollection = db.collection('url');
var randomstring = require('randomstring');
var validUrl = require('valid-url');
router.post('/',(req,res,next)=>{
    var dbJson = {
        lurl:req.body.lurl,
        surl:randomstring.generate(8)
    }
    urlCollection.save(dbJson,(err,docs)=>{
        if(err){
            console.log(err)
            res.redirect('?surl='+err)
        }
        console.log(docs)
        res.redirect('/?surl='+docs.surl)
    })
})

module.exports = router;
