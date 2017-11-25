var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/:visaType/:country', function(req, res, next) {

  var visaType = req.params['visaType'];
  var country = req.params['country'];
  var messageProperties = {
    'visa-du-lich':'du lịch',
    'visa-tham-than':'thăm thân',
    'visa-cong-tac':'công tác',
    'visa-dinh-cu':'định cư'

  };
  var desMap = {
    'visa-du-lich':'Bạn muốn xin visa du lịch {0} mà không rõ thủ tục hay đã bị từ chối? Bạn là khách hàng thông thái, hãy để BTX giúp bạn tiết kiệm thời gian và tiền bạc.',
    'visa-tham-than':'Bạn muốn thăm con hoặc người thân ở {0} nhưng đang bối rối trong quá trình làm hồ sơ, thủ tục thăm thân? Hãy để chúng tôi giúp bạn.',
    'visa-cong-tac':'Bạn đang có nhu cầu xin visa công tác {0} để làm ăn với đối tác của mình tại {0} mà không biết thủ tục, hồ sơ như thế nào? hãy để BTX giúp bạn.',
    'visa-dinh-cu':'Gia đình bạn đang có kế hoạch chuyển sang {0} định cư? Bạn xin visa định cư {0} nhưng chưa làm được? Hãy để BTX giúp bạn.'
  }
  var title = "Visa đi "+ country + " "+ messageProperties[visaType] +" | Hỗ trợ thủ tục | BTX.VN" ;
  var des = desMap[visaType].replace(new RegExp('\\{0\\}', 'g'), country);
  var sideVideos = {
    'anh':'yTBCaIEF3VE',
    'phap':'QWC_W_ZOGdc',
    'ha-lan':'VNZO8W9QzmE',
    'duc':'KFnDzsr-5ac',
    'uc':'CgmQoMjZ-Z4',
  }
  var model = {
    visaType:messageProperties[visaType],
    country:country,
    title:title,
    des:des
  };
  var specialCoutries = [
    {'html':'canada','display':'canada'},
    {'html':'ha-lan','display':'Hà Lan'},
    {'html':'anh','display':'Anh Quốc'},
    {'html':'uc','display':'Úc'}
  ];
  var specialCountry = '';
  for(var i = 0 ; i < specialCoutries.length; i ++){
    console.log(country);
    if(country.toUpperCase() == specialCoutries[i].display.toUpperCase()){
      specialCountry = '-'+specialCoutries[i].html;
      model.sidevideo = sideVideos[specialCoutries[i].html];
    }
  }
  var page = 'page/'+visaType+specialCountry+'.html';

  res.render(page,model);
  //console.log(__dirname);
  //res.sendFile(path.join(__dirname + '/../index.html'));
});
module.exports = router;
