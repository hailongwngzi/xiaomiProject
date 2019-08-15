$(function(){
	var $len = $("#img-list li").size();
	var index = 0 ;
	var imgList = $("#img-list li")
//	console.log($len)
	
	setInterval(function(){
		index++;
		if(index>$len){
			index = 0;
		}
	})
	
	 function playImage(n){
        $('#imgList li').removeClass('current').siblings().eq(n).addClass('current');
        $('#banner-nav-list li').removeClass('active').siblings().eq(n).addClass('active');
       }
	
 })

