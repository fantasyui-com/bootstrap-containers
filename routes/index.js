var express = require('express');
var generator = require('container-generator');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const containers = [];
  for(let i=0;i<10;i++){
    containers.push(generator())
  }

  res.render('index', { title: 'Bootstrap Containers', containers });
});

module.exports = router;
