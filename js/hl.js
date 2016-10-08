$(document).ready(function(){

//导航
jQuery("#nav").slide({ 
	defaultIndex:0,
	type:"menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
	titCell:".nLi", //鼠标触发对象
	targetCell:".sub", //titCell里面包含的要显示/消失的对象
	effect:"slideDown", //targetCell下拉效果
	delayTime:300 , //效果时间
	triggerTime:0, //鼠标延迟触发时间（默认150）
	returnDefault:true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
});
//banner
	jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
	
//安装实例动画


		$(".example-img").mouseenter(function(){
		   $(this).stop(true,false).animate({
		     right:'-6px',
		   },300);
		 });
		$(".example-img").mouseleave(function(){
		   $(this).stop(true,false).animate({
		     right:'0px',
		   },300);
		 });


//产品中心//美食
		$(".product-main-con img,.food-con img").mouseenter(function(){
			$(this).stop(true,false).animate({
				opacity:'0.8',
			},500);
		});
		$(".product-main-con img,.food-con img").mouseleave(function(){
			$(this).stop(true,false).animate({
				opacity:'1',
			},"slow");
		});

//导航
		    // $(".nav li>h3>a").each(function(){  
		    //     $this = $(this);  
		    //     if($this[0].href==String(window.location)){  
		    //     	alert(this);
		    //         $this.parents('li').addClass("on");  
		    //     }  
		    // });  

//留言板
		jQuery(".sideMen").slide({titCell:"h3 em",targetCell:"ul",trigger:"click"});
//map
	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(120.389013,36.073168), 11);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("青岛");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放


	//底部地图
	$('.call-map').click(function(){
		$('.foot-map').toggle("slow");
	});

	//login

	
});