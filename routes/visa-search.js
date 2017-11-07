var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/:country', function(req, res, next) {

  var country = req.params['country'];
  var countryMap = {
    'duc':'71',
    'ha-lan':'74',
    'anh-quoc':'60',
    'nhat':'29',
    'han':'11',
    'phap':'92',
    'canada':'109',
    'uc':'47'
  }
  var model = {
    country:countryMap[country]
  };
  var page = 'page/visa-search.html';
  res.render(page,model);
  //console.log(__dirname);
  //res.sendFile(path.join(__dirname + '/../index.html'));
});
module.exports = router;
