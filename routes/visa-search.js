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
    'uc':'47',
    'y':'79',
    'dan-mach':'70',
    'thuy-dien':'101',
    'thuy-si':'102',
    'new-zealand':'52',
    'phan-lan':'91',
    'na-uy':'89',
    'iceland':'77'
  };
  var unicodeCountryMap = {
    'duc':'Đức',
    'ha-lan':'Hà Lan',
    'anh-quoc':'Anh Quốc',
    'nhat':'Nhật',
    'han':'Hàn',
    'phap':'Pháp',
    'canada':'Canada',
    'uc':'Úc',
    'y':'ý',
    'dan-mach':'Đan mạch',
    'thuy-dien':'Thụy Điển',
    'thuy-si':'Thụy Sĩ',
    'new-zealand':'New Zealand',
    'phan-lan':'Phần Lan',
    'na-uy':'Na Uy',
    'iceland':'Iceland'
  };
  var countryInTittle = (unicodeCountryMap[country] != null) ? unicodeCountryMap[country] : "nước ngoài";

  var title = "Dịch vụ xin visa đi "+ countryInTittle +" chuyên nghiệp, tận tâm, không phát sinh chi phí";
  var model = {
    country:countryMap[country],
    title:title,
    countryName:country
  };
  var page = 'page/visa-search.html';
  res.render(page,model);
  //console.log(__dirname);
  //res.sendFile(path.join(__dirname + '/../index.html'));
});
module.exports = router;
