var express = require("express");
const { check, validationResult } = require('express-validator/check');

var router = express();

router.get('/', function(req,res){ 
    res.render('index',{error: []});
});


router.post('/', [
  check('userid', 'UserID is required').not().isEmpty(),
  check('fname', 'First Name is required').not().isEmpty(),
  ], function(req, res){
  
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.mapped());
      res.render('index', {error:errors.mapped()}); 
    }else{
     var info = {
     	userid: req.body.userid,
     	fname: req.body.fname
     }
     res.render('home/index', {info: info}); 
  }
});


module.exports = router;




/*[
  check('userid', 'UserID is required').isEmpty(),
  check('fname', 'First Name is required').isEmpty(),
  
  ] ,*/

  //var errors = validationResult(req);
    //console.log('Student Add requested!');


    /*errors.mapped()*/