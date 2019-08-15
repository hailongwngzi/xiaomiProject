 // 获取id
		function $id(id){
			return document.getElementById(id);
		}


// 随机生成一个16进制的颜色
		function getColor(){
		var str = "0123456789abcdef";
		var color = "#";
		for (var i = 0; i <6 ; i++){
					var rand = getRand(0,15);
					color += str.charAt(rand);
					}
		 return color;
		}
		
		
		// 随机生成一个验证码
		function getYZM(num){
			var yzm = "";
			//yxm = 数字字母
			//数字字母从ASCII码表来
			for(var i = 0; i < num; i++){
				var rand = getRand(48,122);
				//排除不需要的 字符 
				if((rand >= 58 && rand <= 64) || (rand >= 91 && rand <= 96)){
					i--;
				}else{
					yzm += String.fromCharCode(rand);
				}
				
			}
			return yzm;
			
		}
		for (var i = 0; i < 10; i++) {
			// console.log(getYZM(4));
		}
		
		
		
				 // 生成一个随机数
	  function getRand(min,max){
			return parseInt(Math.random()*(max-min+1)+min);
		 } 
		 
		
						//自定义中国本地化的时间,如 2019年6月16日 10:30:20 星期天
		function dateToString(date){
			var str = "";
			var week = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]
			//2019年6月15日 10:44:23 星期六
			var y = date.getFullYear();
			var m = date.getMonth()+1;
			var d = date.getDate();
			var h = date.getHours();
			var mi = date.getMinutes();
			var s = date.getSeconds();
			var w = date.getDay();//0-6 ["星期天","星期一"]
			
			str += y + "年" + db(m) + "月" + db(d) + "日 ";
			str += db(h) + ":" + db(mi) + ":" + db(s) + " ";
			str += week[w];
			
			return str;
		}
		function db(num){
			return num < 10 ? "0" + num : num;
		}
		
		// document.write(dateToString(new Date()))
		
						// 计算时间差
		function getDiffTime(startTime,endTime){
			return (endTime.getTime() - startTime.getTime())/1000;
		}
		
		
		
		
		// 跨浏览器兼容Ie8 阻止事件冒泡
	function stopProp(e){
		if(e.stopPropagation){//现代浏览器
			e.stopPropagation();
		}else{//ie8
			e.cancelBubble = true;
		}
	}
		
		
			
 		//跨浏览器兼容ie8阻止事件默认行为。
		function preventDef(e){
			//e.preventDefault ? e.preventDefault() : e.returnValue = false;
			if(e.preventDefault){
				e.preventDefault();
			}else{
				e.returnValue = false;
			}
		}
		
		
				// 事件监听的兼容问题
	function addEvent(obj,eve,callBack){
		//obj.addEventListener(eve,callBack);
		//console.log(obj.addEventListener)
		if(obj.addEventListener){//现代浏览器
			obj.addEventListener(eve,callBack);
		}else{//ie8
			obj.attachEvent("on"+eve,callBack);
		}
	}
	
	
	
		//兼容ie8获取事件对象的button属性
	function getButton(eve){
		if(eve){//现代浏览器
			return eve.button;
		}else{//eve == undefined说明是ie8浏览器下运行
			var button =  window.event.button;
			switch(button){
				case 1: 
					return 0;
				case 4: 
					return 1;
				case 2: 
					return 2;
				
			}
		}
	}
	
	
	
//兼容ie8获取事件对象的page属性
function getPage(e){
	var sTop = document.documentElement.scrollTop || document.body.scrollTop;
	var sLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	return {
		x : e.clientX + sLeft,
		y : e.clientY + sTop
	}
}