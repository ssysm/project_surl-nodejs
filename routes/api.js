var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var mongoURL = 'mongodb://localhost:27017/project_surl';
var db = mongojs(mongoURL,['url']);
var urlCollection = db.collection('url');
var randomstring = require('randomstring');
var validUrl = require('valid-url');
router.get('/', function(req, res, next) {
    var id = req.query.request
    var lurl = id
    if(validUrl.isUri(lurl)){
    var dbJson = {
        lurl:lurl,
        surl:randomstring.generate(7)
    }
    urlCollection.save(dbJson,(err,docs)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        console.log(docs)
        res.setHeader('Content-Type', 'application/json');
        var sendJSON = '{"requset":{"status":"OK","url":"'+docs.lurl+'"},"response":{"surl":"'+docs.surl+'"}}'
        res.send(JSON.parse(sendJSON))
    })
}else{
    var sendJSON = '{"request":{"status":"Failed","url":"'+id+'"},"response":"Error"}'
}
});

module.exports = router;
