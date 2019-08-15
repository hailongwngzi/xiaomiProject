(function(){
				$(".gowu").on("mouseover",function(){
					$(".che").show(500);
				})
				$(".gowu").on("mouseleave",function(){
					$(".che").hide(500);
				})
				$(".logo").on("mouseover",function(){
					$('.gid').attr('src',"images/relation4.png");
				})
				$(".logo").on("mouseleave",function(){
					$(".gid").attr("src","images/mi_07.png")
				})
				//轮播图
				var $li = $(".img_list li").size();
				var index = 0;
				var $liAll = $(".img_list");
				setInterval(function(){
					if(index==$li-1){
						index=1;
						$liAll.css({
						left:0+"px",
					})
					}else{
						index++;
					}
					$liAll.animate({
						left:-1226*index,
					})
					$(".banner-nav-list li").eq(index-1).addClass("active").siblings().removeClass("active");
					$(".banner-nav-list").on("click","li",function(eve){
						var target = $(eve.target);
						target.addClass("active");
						target.siblings().removeClass("active");	
					})
				},2000)
				//全部商城分类
				$(".nav p").on("mouseover",function(){
					$(".nav ul").show(100)
				})
				$(".menu02").on("mouseleave",function(){
					$(".nav ul").hide(100)
				})
				//选项卡
				$(".control_header li").click(function(){
					$(this).addClass("hover").siblings().removeClass();
					var index = $(this).index();
					$(".control_warp").eq(index).show().siblings().hide();
				})
				//下载app
				$(".ma").on("mouseover",function(){
					$(".span").show(100)
				})
				$(".span").on("mouseleave",function(){
					$(".span").hide(100)
				})
			})()