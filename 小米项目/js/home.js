window.onload = function(){
	$(function(){
		var pReg = /^1[3-9]\d{9}$/;
		var $btn = $('#button');
		var $phone = $('#phone');
		var $show = $('.show');
		var $err1 = $('#err1');
		var $err2 = $('#err2');
		var $err3 = $('#err3');
		var flag = false;
		$phone.on("focus",function(){
			$phone.css("border","1px solid #f66");
		})
		$phone.on('blur',function(){
			$phone.css("border","");
//				console.log($phone.val())
			if($phone.val() == ""){
				$err1.show();
				$err2.hide();
				$err3.hide();
			}else if(!checkPhone()){
				$err1.css('display',"none");
				$err2.css('display',"block");
				$err3.css('display',"none");
			}else{
				$err1.css('display',"none");
				$err2.css('display',"none");
				$err3.css({'display':"block",'color':"green"});
				flag = true;
//					$err3.css('color',"green");
			}
		})
		function checkPhone(){
			var pVal = $phone.val();
			if(pReg.test(pVal)){
				return true;
			}
			return false;
		}
		$btn.on('click',function(e){
			if(flag == true){
				window.open('../login/index.html');
				$phone.val('');
				$err3.css('display','none');
			}
		})
	})	
}
