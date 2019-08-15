window.onload = function(){
	$(function(){
		var zReg1 = /^\w{4,}@[1-9a-zA-Z]{2,6}(\.[a-zA-Z]{2,3}){1,2}$/;//邮箱验证
		var zReg2 = /^1[3-9]\d{9}$/;//手机号验证
		var pReg = /[0-9a-zA-Z]{6,20}/;//密码为6到20的大小写字母加数字
		var $btn = $('#btn');
		var $err1 = $('.err1');
		var $err2 = $('.err2');
		var $err3 = $('.err3');
		var $err4 = $('.err4');
		var $text = $('#text');
		var $password = $('#password');
		var flag = false;
		$btn.on('click',function(){
			if($text.val() == ""){
				$text.css("border","1px solid #f66");
				$password.css('border','');
				$err1.css('display','block');
				$err2.css('display','none');
				$err3.css('display','none');
				$err4.css('display','none');
			}else if($text.val() != "" && $password.val() == ''){
				$text.css("border","");
				$password.css("border","1px solid #f66");
				$err2.css('display','block');
				$err1.css('display','none');
				$err3.css('display','none');
				$err4.css('display','none');
			}else if($text.val() != "" && $password.val() != '' && !checkText()){
				$text.css("border","1px solid #f66");
				$password.css('border','');
				$err1.css('display','none');
				$err2.css('display','none');
				$err3.css('display','block');
				$err4.css('display','none');
			}else if($text.val() != "" && $password.val() != '' && checkText() && !checkPassword()){
				$text.css("border","1px solid #f66");
				$password.css('border','');
				$err1.css('display','none');
				$err2.css('display','none');
				$err3.css('display','none');
				$err4.css('display','block');
			}else{
				flag = true;
				$text.css("border","");
				$password.css('border','');
				$err1.css('display','none');
				$err2.css('display','none');
				$err3.css('display','none');
				$err4.css('display','none');
			}
		})
		function checkText(){
			var tVal = $text.val();
			if(zReg1.test(tVal) || zReg2.test(tVal)){
				return true;
			}
			return false;
		}
		function checkPassword(){
			var pVal = $password.val();
			if(pReg.test(pVal)){
				return true;
			}
			return false;
		}
		$btn.on('click',function(e){
			if(flag == true){
				window.open('../sign/home.html');
				$password.val('');
				$text.val('');
			}
		})
	})
}
