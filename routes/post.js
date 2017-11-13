var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
var pageInfos = {};
pageInfos['top-10-quoc-gia-dang-song'] = {
  title:'Top 10 quốc gia đáng sống - Visa Canada Bầu Trời Xanh'
};
pageInfos['11-canh-tuyet-dep-canada'] = {
  title:'11 CẢNH ĐẸP TUYỆT VỜI TẠI CANADA MÀ BẠN NHẤT ĐỊNH PHẢI ĐẾN - Visa Canada Bầu Trời Xanh'
};
pageInfos['kham-pha-6-canh-dep-toronto-canada'] = {
  title:'KHÁM PHÁ 6 CẢNH ĐẸP TORONTO CANADA - Visa Canada Bầu Trời Xanh'
};
pageInfos['cung-nhau-tim-hieu-ve-thanh-pho-ottawa-canada'] = {
  title:'CÙNG NHAU TÌM HIỂU VỀ THÀNH PHỐ OTTAWA CANADA - Visa Canada Bầu Trời Xanh'
};
pageInfos['ottawa-thanh-pho-dep-nhu-mo'] = {
  title:'Ottawa thành phố đẹp như mơ - Visa Canada Bầu Trời Xanh'
};

router.get('/:page', function(req, res, next) {
  var page = req.params['page'];
  var pageInfo = pageInfos[page];
  var title = pageInfo.title;
  res.render('page/'+page,{title:title});
  //console.log(__dirname);
  //res.sendFile(path.join(__dirname + '/../index.html'));
});

module.exports = router;
