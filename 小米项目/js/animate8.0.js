// 8.0 版本，链式调用

function animate(ele,param,timeSpeed,callback){//接收以对象形式传递的属性和目标值
			/*
				 * var callback = function(){
				 * 		animate(box,{height:300},10);
				 * }
				 */
			clearInterval(ele.timer);
			ele.timer = setInterval(function(){
				
				var flag = true;//所有属性都到达 了目标值
				for(var attr in param){
					var current = 0;
					if(attr == "opacity"){
						current = getStyle(ele,attr) * 100;
					}else{
						current = Math.ceil(parseFloat(getStyle(ele,attr)));
					}
					var speed = (param[attr] - current)/10;
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					if(current != param[attr]){//未到达 目标值
						flag = false;
					}
					if(attr == "opacity"){
						ele.style[attr] = (current + speed) / 100;
					}else if(attr == "zIndex"){
						ele.style[attr] = param[attr];
					}else{
						ele.style[attr] = current + speed + "px";
					}
				}
				if(flag){//true
					clearInterval(ele.timer);
					if(callback){//callback没有传递是undefined，不需要调用函数 ，
						callback();
					}
				}
			},timeSpeed);
		}
		function getStyle(ele,attr){//获取的样式值是一个字符串
			return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
		}
		