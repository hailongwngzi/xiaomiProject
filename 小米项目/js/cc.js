$(function(){
	
	//显示下拉列表
	$(".nav").on("mousemove",function(eve){
		var e = eve || event;
		var target = e.target || e.srcElement;
		if(target.nodeName == "A" && target.getAttribute("name") != "xmPhone"){
			$(".hide_nav").stop().slideDown();
		}
	})
	
	$(".nav").on("mouseout",function(eve){
		var e = eve || event;
		var target = e.target || e.srcElement;
		if(target.nodeName == "A" && target.getAttribute("name") != "xmPhone"){
			$(".hide_nav").stop().slideUp();
		}
	})
	
	//显示二级菜单
	/*$(".menu02").on("mousemove",function(eve){
		
		var e = eve || event;
		var target = e.target || e.srcElement;
		
		if(target.getAttribute("name") == "xmPhone"){
			$(".secondMenu").show();
		}
	})
	
	$(".menu02").on("mouseout",function(eve){
		
		var e = eve || event;
		var target = e.target || e.srcElement;
		
		if(target.getAttribute("name") == "xmPhone"){
			var timer = setTimeout(function(){
				$(".secondMenu").hide();
			},5000)
		}
	$(".secondMenu").on("mousemove",function(eve){
			
			var e = eve || event;
			var target = e.target || e.srcElement;
			
			if(target.className == "secondMenu"){
				clearTimeout(timer)
			}	
	})
})*/
	
	//显示三级图片
	$(".secondMenu").on("mousemove",function(eve){
		
		var e = eve || event;
		var target = e.target || e.srcElement;
		
		if(target.nodeName == "LI"){
			$(target).addClass("secondMenued").siblings().removeClass("secondMenued");
			$(target).children("img").show();
		}
	})
	
	$(".secondMenu").on("mouseout",function(eve){
		
		var e = eve || event;
		var target = e.target || e.srcElement;
		
		if(target.nodeName == "LI"){
			var timer = setTimeout(function(){
				$(target).children("img").hide();
			},500)
		}	
		$(".secondMenu").on("mousemove",function(eve){
			var e = eve || event;
			var target = e.target || e.srcElement;
			
			if(target.nodeName == "IMG"){
				clearTimeout(timer);
			}	
		})
	})
	$(".secondMenu").on("mouseout",function(eve){
		var e = eve || event;
		var target = e.target || e.srcElement;
			
		if(target.nodeName == "IMG"){
			$(target).hide();
		}	
	})
	
	//固定导航栏
	$(window).on("scroll",function(){
		
		var dis = $(document).scrollTop();
		
		if(dis >= 204){
			$(".addCart1").addClass("addCart2");
		}else{
			$(".addCart1").removeClass("addCart2");
		}
	})

	//轮播图1
	action1();
	function action1(){
		
		var length = $(".ban1 li").size();
		var index = 0;
		
		var timer = setInterval(auto,2000);		
		function auto(){
			index++;
			if(index == length){
				index = 1;
				$(".ban1").css({
					"left":0
				})
			}
			$(".ban1").animate({
				"left":-index*1349
			})
			$(".subscript1 li").eq(index-1).addClass("active").siblings().removeClass("active")
		}
		$("#banner_one").on("mousemove",function(){
			clearInterval(timer);
		})
		$("#banner_one").on("mouseout",function(){
			timer = setInterval(auto,2000);	
		})
		$(".subscript1 li").on("click",function(){			
			$(".ban1").animate({
				"left":-2*1349
			})
		})
	}
	
	//轮播图2
	action2();
	function action2(){
		
		var length = $(".ban2 li").size();
		var index = 0;
		var timer = setInterval(auto,5000);
		
		function auto(){
			index++;
			if(index == length){
				index = 1;
				$(".ban2").css({
					"left":0
				})
			}
			$(".ban2").animate({
				"left":-index*1349
			})
			$(".subscript li").eq(index-1).addClass("active").siblings().removeClass("active")
		}
	}
	
	//轮播图3
	action3();
	function action3(){
		
		var length = $(".video_wrap .video1").size();
		var index = 0;
		var timer = setInterval(auto,5000);
		
		function auto(){
			index++;
			if(index == length){
				index = 1;
				$(".video_wrap").css({
					"left":0
				})
			}
			$(".video_wrap").animate({
				"left":-index*1228
			})
		}
	}
})
