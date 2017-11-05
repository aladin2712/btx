var __lc = {};
__lc.license = 2003491;

<!-- FA Mouseflow tracking -->
var _mfq = _mfq || [];

$(function() {
	var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
			lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);


	$('.chat-link, .help-chat').click(function(e){
	        e.preventDefault();
	        LC_API.open_chat_window();
	 });


var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true;
	        mf.src = "//cdn.mouseflow.com/projects/d4ae6f40-1892-40e0-8226-f2295c5eef47.js";
	        document.getElementsByTagName("head")[0].appendChild(mf);

});
