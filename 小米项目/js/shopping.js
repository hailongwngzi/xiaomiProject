//(function(){
//				$(".gowu").on("mouseover",function(){
//					$(".che").show(500);
//				})
//				$(".gowu").on("mouseleave",function(){
//					$(".che").hide(500);
//				})
//				//logo图
//				$(".logo").on("mouseover",function(){
//					$('.gid').attr('src',"images/relation4.png");
//				})
//				$(".logo").on("mouseleave",function(){
//					$(".gid").attr("src","images/mi_07.png")
//				})
//				/*全部商城分类*/
//				$(".nav p").on("mouseover",function(){
//					$(".nav ul").show(100)
//				})
//				$(".menu02").on("mouseleave",function(){
//					$(".nav ul").hide(100)
//				})
//				//下载app
//				$(".ma").on("mouseover",function(){
//					$(".span").show(100)
//				})
//				$(".span").on("mouseleave",function(){
//					$(".span").hide(100)
//				})
//				//关闭立即登陆
//				$("#login_warp i").on("click",function(){
//					$("#login_warp").hide(200);
//				})
//				/*轮播图*/
//				var $li = $(".particular_warp_left ul li").size();
//				var index = 0;
//				var $liAll = $(".particular_warp_left ul");
//				var timer = setInterval(function(){
//					if(index==$li-1){
//						index=1;
//						$liAll.css({
//						left:0+"px",
//					})
//					}else{
//						index++;
//					}
//					$liAll.animate({
//						left:-560*index,
//					})
//					$(".olBiao li").eq(index-1).addClass("active").siblings().removeClass("active");
//					$(".olBiao").on("click","li",function(eve){
//						var target = $(eve.target);
//						target.addClass("active");
//						target.siblings().removeClass("active");	
//					})
//				},2000)
//				$('.left_img').on("click",function(){
//					if(index == 6){
//						index = 0;
//						$liAll.css({
//						left:0+"px",
//					})
//					}else if(index == 0){
//						index = 0;
//					}else{
//						index--;
//					}
//				})
//				$(".right_img").click(function(){
//					if(index == 6){
//						index =0 ;
//						$liAll.css({
//						left:0+"px",
//					})
//					}else if(index == 5){
//						index =5;
//					}else{
//						index++;
//					}
//				})
//				/*选择版本*/
//				$(".versions ul").on("click","li",function(){
//					$(this).addClass("color_warp").siblings().removeClass("color_warp");
//					$(".top h2").text($(this).children(0).text());
//					skuVer = $(".top h2").text();
//					$(".list .li1").text(skuVer);
//					$(".list .li2").text(skuPrice);
//					//$('.list .li1_span').text(skuColor);
//					countId();
//				})
//				//选择颜色
//				$(".select ul").on("click","li",function(){
//					$(this).addClass("color_warp").siblings().removeClass("color_warp");
//					$('.p_color').text($(this).text());
//					skuColor = $('.p_color').text();
//          		$(".li1_span").text(skuColor);
//          		$(".list .li2").text(skuPrice);
//          		$('.list .li1_span').text(skuColor);
//          		 $(".list ul .li2").text(skuPrice);
//    				 /* $(".list ul .li2").text(skuId);*/
//          		countId();
//				})
//				//加入购物车
//				//选择不同版本号
//				var skuId = "";
//				var skuPrice = "小米官方版";
//				var skuVer = "石默模";
//				var skuColor = "标准版"
//				function countId(){
//			        switch (true) {
//			            case skuVer=="石默默" && skuColor=="石默默":
//			                skuId = 999999;skuPrice = 199;
//			                break;
//			            case skuVer=="酒红" && skuColor=="酒红":
//			                skuId = 111111;skuPrice = 299;
//			                break;
//			            case skuVer=="热力橙" && skuColor=="热力橙":
//			                skuId = 222222;skuPrice = 399;
//			                break;
//			            case skuVer=="深空蓝" && skuColor=="深空蓝":
//			                skuId = 333333;skuPrice = 499;
//			                break;
//			            case skuVer=="石默默" && skuColor=="石默默":
//			                skuId = 444444;skuPrice = 599;
//			                break;
//			            case skuVer=="酒红" && skuColor=="酒红":
//			                skuId = 555555;skuPrice = 699;
//			                break;
//			            case skuVer=="热力橙" && skuColor=="热力橙":
//			                skuId = 666666;skuPrice = 899;
//			                break;
//			            case skuVer=="全息幻彩" && skuColor=="全息幻彩":
//			                skuId = 777777;skuPrice = 999;
//			                break;
//			            case skuVer=="复石默默" && skuColor=="石默默":
//			                skuId = 888888;skuPrice = 188;
//			                break;
//			            case skuVer=="酒红" && skuColor=="酒红":
//			                skuId = 999999;skuPrice = 288;
//			                break;
//			            case skuVer=="热力橙" && skuColor=="热力橙":
//			                skuId = 101010;skuPrice = 388;
//			                break;
//			            case skuVer=="全息幻彩" && skuColor=="全息幻彩":
//			                skuId = 101111;skuPrice = 488;
//			                break;
//      }
//  }
//				/*购物车*/
//				util = {
//  setStorage:function(json){
//      window.localStorage.setItem('cart',JSON.stringify(json));
//  },
//  getStorage:function(json){
//      return JSON.parse(window.localStorage.getItem('cart') || '[]');
//  }
//}
////购物车执行函数
//var shopCart = function(){
//  var prodList = util.getStorage();
//  
//  function product(id,name,pic,num,price,proColor){
//      this.id = id;
//      this.name = name;
//      this.pic = pic;
//      this.num = num;
//      this.price = price;
//      this.proColor = proColor;
//  }
//  
//  //点击加入购物车，增加商品
//  function addCartEvent(){
//      $(".add").on("click",function(){
//          var id = skuId;
//          var pic = $('.versions ul li').eq(0).children().attr('src');
//          var num = parseInt($(".versions ul li p").text());
//          var name = $(".sku_contain_right h2").text();
//          var price = skuPrice;
//          var proColor = skuColor;
//
//          addProduct(id,name,pic,num,price,proColor);
//      })
//  }
//  addCartEvent();
//
//  //加入购物车
//  function addProduct(id,name,pic,num,price,proColor){
//      var prodList = util.getStorage();
//      for(var i=0;i<prodList.length;i++){
//          if(prodList[i].id == id ){
//              var temp = prodList[i].num;
//                  prodList[i].num;
//                  util.setStorage(prodList);
//                  return;
//          }
//      }
//
//      var prod = new product(id,name,pic,num,price,proColor); 
//      prodList.push(prod);
//      util.setStorage(prodList);
//      //加入购物车重新加载购物车列表
//  }
//
//}();
//})()
//	window.onscroll = function(){
//		//浏览器的滚动条
//		var main_warp = document.querySelector(".main_warp")
//		var stop = document.documentElement.scrollTop || document.body.scrollTop;
//		if(stop > 60){
//			main_warp.style.position = "fixed";
//			main_warp.style.top = 0;
//			main_warp.style.left = 60+"px";
//		}else{
//			main_warp.style.position = "static";
//		}
//	}
//$(document).scroll(function(){
//  // var contTop = $("#contain_fix").offset().top - $(document).scrollTop();
//  var contBot = $(window).height()-$(".particular_warp").height()-[$(".particular_warp_right").offset().top - $(document).scrollTop()];
//  var docTop = $(document).scrollTop();
//  if ( (248-docTop) > 20) {
//      $("#contain_fix").css({
//          "top":248-docTop,
//          position:"fixed"
//      });
//  }else if ((248-docTop) <= 20 && contBot < 0){
//      $("#contain_fix").css({
//          position:"fixed",
//          "top":20
//      });
//  }else{
//      $("#contain_fix").css({
//          "position":"absolute",
//          top:0
//      });
//  }
//})

$(function() {
	
	//写入本地存储
	var init = {
		setStorage : function(json) {
			window.localStorage.setItem("cart", JSON.stringify(json));
		},
		getStorage : function() {
			return JSON.parse(window.localStorage.getItem("cart") || "[]");
		}
	}
	
//	var list = [];
	//点击添加到本地存储
	var flag = true;
	$(".add").on("click",function(){
		var list1 = init.getStorage();
		var id = 5;
		var name = $(".li1").html();
		var price = $(".li1_span").html();
		var sum = 0;
		var operate = "X";
		var src = $(".aaa").attr('src');
		var count = (sum+1) * $(".li1_span").html();
		var productList = new Product(id,src,name,price,sum,count,operate)
		/*$(list1).each(function(index,val){			
			if(list1[index].id == id){
				list1[index].sum ++;
			}
		})*/
		if(flag){	
			list1.push(productList);
			flag = false;
		}
		for(var i = 0; i < list1.length; i++){
			list1[i].count = (sum+1) * $(".li1_span").html();
			if(list1[i].id == id){
				list1[i].sum ++;
				list1[i].count *= list1[i].sum
				init.setStorage(list1);
				return;
			}
		}
	})
	
	//点击添加到本地存储构造函数
	function Product(id,src,name,price,sum,count,operate){
		this.id = id,
		this.src = src,
		this.name = name,
		this.price = price,
		this.sum = sum,
		this.count = count,
		this.operate = "X"
	}
	
	
	
	/*选择版本*/
	$(".versions ul").on("click","li",function(){
		$(this).addClass("color_warp").siblings().removeClass("color_warp");
		$(".top h2").text($(this).children(0).text());
		skuVer = $(".top h2").text();
		$(".list .li1").text(skuVer);
		$(".list .li2").text(skuPrice);
		//$('.list .li1_span').text(skuColor);
		countId();
	})
	//选择颜色
	$(".select ul").on("click","li",function(){
		$(this).addClass("color_warp").siblings().removeClass("color_warp");
		$('.p_color').text($(this).text());
		skuColor = $('.p_color').text();
		$(".li1_span").text(skuColor);
		$(".list .li2").text(skuPrice);
		$('.list .li1_span').text(skuColor);
		 $(".list ul .li2").text(skuPrice);
		 /* $(".list ul .li2").text(skuId);*/
		countId();
	})
	
	//鼠标滚动事件
	window.onscroll = function() {
		//浏览器的滚动条
		var main_warp = document.querySelector(".main_warp")
		var stop = document.documentElement.scrollTop || document.body.scrollTop;
		if(stop > 60) {
			main_warp.style.position = "fixed";
			main_warp.style.top = 0;
			main_warp.style.left = 60 + "px";
			$(main_warp).addClass("main_warped");
		} else {
			main_warp.style.position = "static";
			$(main_warp).removeClass("main_warped");
		}
	}
	
	$(document).scroll(function() {
		// var contTop = $("#contain_fix").offset().top - $(document).scrollTop();
		var contBot = $(window).height() - $(".particular_warp").height() - [$(".particular_warp_right").offset().top - $(document).scrollTop()];
		var docTop = $(document).scrollTop();
		if((248 - docTop) > 20) {
			$("#contain_fix").css({
				"top": 248 - docTop,
				position: "fixed"
			});
		} else if((248 - docTop) <= 20 && contBot < 0) {
			$("#contain_fix").css({
				position: "fixed",
				"top": 20
			});
		} else {
			$("#contain_fix").css({
				"position": "absolute",
				top: 0
			});
		}
	})
	

//轮播图
	$(".gowu").on("mouseover", function() {
		$(".che").show(500);
	})
	$(".gowu").on("mouseleave", function() {
		$(".che").hide(500);
	})
	//logo图
	$(".logo").on("mouseover", function() {
		$('.gid').attr('src', "images/relation4.png");
	})
	$(".logo").on("mouseleave", function() {
		$(".gid").attr("src", "images/mi_07.png")
	})
	/*全部商城分类*/
	$(".nav p").on("mouseover", function() {
		$(".nav ul").show(100)
	})
	$(".menu02").on("mouseleave", function() {
		$(".nav ul").hide(100)
	})
	//下载app
	$(".ma").on("mouseover", function() {
		$(".span").show(100)
	})
	$(".span").on("mouseleave", function() {
		$(".span").hide(100)
	})
	//关闭立即登陆
	$("#login_warp i").on("click", function() {
		$("#login_warp").hide(200);
	})
	/*轮播图*/
	var $li = $(".particular_warp_left ul li").size();
	var index = 0;
	var $liAll = $(".particular_warp_left ul");
	var timer = setInterval(function() {
		if(index == $li - 1) {
			index = 1;
			$liAll.css({
				left: 0 + "px",
			})
		} else {
			index++;
		}
		$liAll.animate({
			left: -560 * index,
		})
		$(".olBiao li").eq(index - 1).addClass("active").siblings().removeClass("active");
		$(".olBiao").on("click", "li", function(eve) {
			var target = $(eve.target);
			target.addClass("active");
			target.siblings().removeClass("active");
		})
	}, 2000)
	$('.left_img').on("click", function() {
		if(index == 6) {
			index = 0;
			$liAll.css({
				left: 0 + "px",
			})
		} else if(index == 0) {
			index = 0;
		} else {
			index--;
		}
	})
	$(".right_img").click(function() {
		if(index == 6) {
			index = 0;
			$liAll.css({
				left: 0 + "px",
			})
		} else if(index == 5) {
			index = 5;
		} else {
			index++;
		}
	})
})