$(function(){
	var list = [
		/*{
			id:1,
			src:'images/1.jpg',
			name:"Redmi充电宝 20000mAh 白色 ",
			price:99,
			sum:1,
			count:99
		},
		{
			id:2,
			src:'images/7.jpg',
			name:"小米手环",
			price:139,
			sum:1,
			count:139
		},
		{
			id:3,
			src:'images/3.jpg',
			name:"小米手环",
			price:139,
			sum:1,
			count:139
		},
		{
			id:4,
			src:'images/4.jpg',
			name:"小米手环",
			price:139,
			sum:1,
			count:139
		},
		{
			id:5,
			src:'images/5.jpg',
			name:"小米手环",
			price:139,
			sum:1,
			count:139
		}*/
	]
	//写入到本地存储内
	var init = {
		setStorage : function(json){
			window.localStorage.setItem("cart",JSON.stringify(json));
		},
		getStorage : function(){
			return JSON.parse(window.localStorage.getItem("cart") || "[]");
		}
	}

//定义一个构造函数，用来创建商品对象
	function Product(id,pic,name,price,sum,count){
		this.id = id;
		this.src = src;
		this.name = name;
		this.price = price;
		this.sum = sum;
		this.count = count;
	}

//封装一个函数，用来渲染页面
	function refresh(){
		var main = $(".main")[0];//将jq对象转为dom对象；
		 	var list = init.getStorage();
	//var main = document.querySelector(".main")
		var mainContent = '';
		mainContent = `
		<table border="0" cellspacing="0" cellpadding="0">
			<tr class="topic">
				<th>全选</th>
				<th></th>
				<th>商品名称</th>
				<th>单价</th>
				<th>数量</th>
				<th>小计</th>
				<th>操作</th>
			</tr>`;
			$(list).each(function(index,val){		
				mainContent += `
					<tr class="content">
						<td>${list[index].id}</td>
						<td><img src="${list[index].src}"/></td>
						<td> ${list[index].name} </td>
						<td class="price">${list[index].price}</td>
						<td>
							<div class="btn">
								<a href=" Javascript:;" class="subtract"> - </a>
								<span> ${list[index].sum} </span>
								<a href="Javascript:;" class="add"> + </a>
							</div>
						</td>
						<td class="count">${list[index].count}</td>
						<td class="operate"> X </td>
					</tr>
				`;			
			})
			mainContent += `</table>`;
			main.innerHTML = mainContent;//将内容渲染到页面上去；
		addDelEvent()//删除按钮；
		totalNum();
		changeNum()//增加或减少
	}
	refresh();

//获取购物车内的商品总信息；
	function totalNum(){
		var continue1 = $(".continue1>ul>li i:eq(0)")[0];//将购物车内的商品总个数渲染到页面
		var continue2 = $(".continue1>ul>li i:eq(1)")[0];//将购物车内的商品总个数渲染到页面
		var span = $(".content td span");//获取购物车内的商品总个数
		var con_right = $(".con_right span")//将购物车内的总价格渲染到页面
		var price = document.querySelectorAll(".price");
		var span = document.querySelectorAll(".content td span");
		var a = 0;
		var b = 0;
		var c = 0;
		var d = 0;
		var e = 0;
		var f = 0;
		for(var i = 0; i < price.length; i++){//商品单价
			a = price[i].innerHTML;
			for(var j = 0; j < span.length; j++){//商品数量
				b = span[i].innerHTML;
			}
			d = a*b
			e += d
		}		
		$(span).each(function(index,val){
//			var val = val.html();
			f += Number($(span).eq(index).html())
		})
		/*for(var z = 0; z < count.length; z++){
			var g = count[z].innerHTML;
			console.log(g)
		}*/
		continue1.innerHTML = f;//获取购物车内商品总件数
		$(con_right).html(e);//获取购物车内所有商品总价格
	}
	

//封装新增商品到购物车事件函数,这里暂时用不上；要在其他页面使用
addCartEvent();
	function addCartEvent(selector){
		var add = $(".selector");
		$(add).each(function(index,val){
			$(add).eq(index).on("click",function(){
				var tr = this.parentNode.parentNode.parentNode;
				var id = tr.children[0].innerHTML;
				var pic = tr.children[1].src;
				var name = tr.children[2].innerHTML;
				var price = tr.children[3].innerHTML;
				var sum = tr.children[4].innerHTML;
				var count = tr.children[5].innerHTML;
				var operate = tr.children[6].innerHTML;
				var list = init.getStorage();
				$(list).each(function(index,val){
					if($(list)[index].id == id){
						$(list)[index].sum++;
						init.setStorage(list);
						refresh();
						return;
					}
				})
			})
			var productList = new Product(id,pic,name,price,sum,count);
			list.push(productList);
			setStorage(list);
			refresh();
		})
	}
	
//点击删除按钮
	function addDelEvent(){
//		var operate = $(".operate");
		$(".operate").each(function(index,val){
			$(".operate").eq(index).on("click",function(){
				var tr = this.parentNode;
				var id = tr.children[0].innerHTML;
				//this.parentNode.parentNode.removeChild(this.parentNode)
//				refresh();
				removing(id)
			})
		})
	}
	
	function removing(id){
		var list = init.getStorage();
		list = list.filter(function(Product){
			return Product.id != id;
		})
		init.setStorage(list);
		refresh();
	}

//封装点击增加或减少事件函数
	function changeNum(){
		var count = document.querySelectorAll(".count");
		var add = document.querySelectorAll(".add");//获取所有添加按钮
		var subtract = document.querySelectorAll(".subtract");
		var index = 0;
		for(var i = 0; i < add.length; i++){
			add[i].index = i;
			add[i].onclick =function(){		
				var list = init.getStorage();
				var _this = Number(this.parentNode.children[1].innerText)+1;
				var tr = this.parentNode.parentNode.parentNode;
				var id = tr.children[0].innerHTML;
				var price = this.parentNode.parentNode.parentNode.children[3].innerHTML;
				price = _this * price;
				console.log(price);
				list[this.index].count = price;
				init.setStorage(list);
				event1(this.className,id)
			}
		}
		for(var i = 0; i < subtract.length; i++){
			subtract[i].index = i;
			subtract[i].onclick =function(){	
				var list = init.getStorage();
				var _this = Number(this.parentNode.children[1].innerText)-1;
				var tr = this.parentNode.parentNode.parentNode;
				var id = tr.children[0].innerHTML;
				var price = this.parentNode.parentNode.parentNode.children[3].innerHTML;
				price = _this * price	
				list[this.index].count = price
				init.setStorage(list);
				event1(this.className,id)
			}
		}	
	}
	
	function event1(type,id){
		var callBack = {
			"add":function(id){
				var list = init.getStorage();
				for(var i = 0; i < list.length; i++){
					if(list[i].id == id){
						list[i].sum += 1;
						init.setStorage(list);//重新获取本次存储数据；
						init.getStorage();
						refresh();
					}
				}
			},
			"subtract":function(id){
				var list = init.getStorage();
				for(var i = 0; i < list.length; i++){
					if(list[i].id == id){
						list[i].sum --;
						if(list[i].sum < 1){
							removing(id)
							return;							
						}
						init.setStorage(list);
						refresh();
					}
				}
			}
		}
		callBack[type](id);
	}
})