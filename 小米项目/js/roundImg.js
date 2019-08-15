$(function(){
    var index=0;//当前的图片序号
    var $len = $(".banner li").size();//获取图片的数量
//  console.log($len)
    var toggle = true;
    var timer;//设置定时定时器的名字，方便后面关闭
 
    autoplay();  //自动轮播
 
//增加鼠标移上去暂停功能
    $(".banner img").hover(function(){
        clearTimeout(timer);
        
    },function(){
        index = index >0 ? (--index) : ($len-1);//后退一个
        toggle = true;
        autoplay();  
    });
    
	
	$(".banner img").on("mouseover",function(){
		$("#toLeft").css({opacity:1});
        $("#toRight").css({opacity:1});
	})
	
	
    //鼠标移出箭头隐藏
    $(".banner img").on("mouseout",function(){
    	$("#toLeft").css({opacity:0});
    	$("#toRight").css({opacity:0});
    })
    
    $("#toLeft").on("mouseover",function(){
    	$("#toLeft").css({opacity:1});
    	$("#toRight").css({opacity:1});
    })
    
    $("#toRight").on("mouseover",function(){
    	$("#toRight").css({opacity:1});
    	$("#toLeft").css({opacity:1});
    })
    
    
    
    
    //点击下标 圆点
    $(".dotted").on("click","li",function(){
        clearTimeout(timer);
        index = $(this).index(".dotted li");
        toggle = false;
        autoplay();  
    });
 
 
    //点击向左图标根据cur进行上一个图片处理
    $("#toLeft").click(function(){
//      $("#toLeft").opacity()
        $(".banner img").show();
        index = index > 0 ? (--index) : ($len-2);
        changeTo( index );
    });
 
    //点击向右图标根据cur进行上一个图片处理
    $("#toRight").click(function(){
//       clearTimeout(timer);
         $(".banner img").show();
        changeTo( index );
         index = index<( $len-2 ) ? (++index) : 0;
    });
    
    //自动轮播函数
     function autoplay() {
     	$(".banner img").eq(index).fadeIn(300).siblings().fadeOut(300)
        $(".banner img").hide();
        $(".banner img:eq("+index+")").show();
        $(".dotted li").css('background-color','rgba(52, 52, 52, 0.3)');
        $(".dotted li:eq("+index+")").css('background-color','rgba(255,255,255,1)');
        if(toggle){
            timer = setTimeout(autoplay,3000);
        }
         index = index < ( $len-2 ) ? (++index) : 0;//当加到6时再把index变为0，也就是第一张图片
     }
 
		
     //点击左右箭头图片切换函数
    function changeTo( num ){
        $(".banner img").hide();
        $(".banner img:eq("+num+")").show();
        $(".dotted li").css('background-color','rgba(52, 52, 52, 0.3)');
        $(".dotted li:eq("+num+")").css('background-color','rgba(255,255,255,0.8)');
    }
 
 
 
 	//热门 ，电影影音 鼠标移入切换效果
 	$(".list_two").on("mouseover",function(){
 		
 		$(".movie_two").show();
 		$(".movie_one").hide();
 	})
 	
 	$(".list_one").on("mouseover",function(){
 		$(".movie_two").hide();
 		$(".movie_one").show();
 	})
 	
 	
 	
 	//热门出现，切换效果
 	$(".topic_one").on("mouseover",function(){
 		$(".home_list_two").show();
 		$(".home_one").hide();
 	})
 	

 	$(".topic_two").on("mouseover",function(){
 		$(".home_list_two").hide();
 		$(".home_one").show();
 	})
 	
 });
 window.onload = function(){
		var shi = document.getElementById("shi");
		var min = document.getElementById("min");
		var mz = document.getElementById("mz");
		var nowDate = new Date();//活动开始时间
	    var endDate = new Date("2020/7/6 17:57:00");
		var s = getDiffTime(nowDate,endDate);
		  
		function playGame(){
		var hours = s/60/60;
		var d = parseInt((hours/24));
		var h = parseInt((hours/24-d)*24);
		var m = parseInt(((hours/24-d)*24-h)*60);
		var miao = parseInt((((hours/24-d)*24-h)*60-m)*60);
//					showTime.innerHTML = "距商品结束还剩"+d+"天"+h+"时"+m+"分"+miao+"秒";
		shi.innerHTML = h;
		min.innerHTML = m;
		mz.innerHTML = miao;
	    }
		
		var timer = setInterval(function(){
		s--;
		playGame();
		if(s<0){
			clearInterval(timer);
		}
	   },1000);
 }
