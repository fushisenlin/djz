// JavaScript Document

$(function(){
	//轮播图
	var $ban=$("div.bannar"); //轮播图盒子
	var $banTab=new Tab($ban);

	//tab项
	var $tab=$("div[id*='floor']");

	//楼层导航
	var floor=$("a[href*='#floor']");//筛选出所有楼层导航的a标签
	var floorUl=$("ul.LocationFloorList");//楼层导航条
	var floorHeight=[];

//---------------------------   轮播图   ---------------------------------------------------------------------------------------------------------

	//轮播图 手动切换 自动切换 上一张图切换 下一张图切换
	$banTab.changeTab().autoRun().prevBtn().nextBtn1();

//---------------------------   tab项   ---------------------------------------------------------------------------------------------------------
	$tab.each(function(){
		var $subTab=new Tab($(this));
		$subTab.changeTab();
	});
	
//---------------------------   楼层导航   ---------------------------------------------------------------------------------------------------------

	//存储每个楼层对应显示的滚动条高度
	$tab.each(function(index){
		floorHeight[index]=$(this).offset().top-300
	});

	$(window).on("scroll", function () {
		if($(document).scrollTop()>0){
			$("a.gototop").show();
		}else{
			$("a.gototop").hide();
		};

		//判断滚动条高度,到达1楼离屏幕顶端300像素时,楼层导航显示
		if($(document).scrollTop()>=floorHeight[0]){
			floorUl.show();
			//判断滚动条高度,到达相应楼离屏幕顶端300像素时,相应楼层导航显示
			$tab.each(function(index){
				if($(document).scrollTop()>=floorHeight[index]){
					floorUl.find("li").eq(index).addClass("ac").siblings("li").removeClass("ac");
				};
			});
		}else{
			floorUl.hide();
		};
	});

	//点击楼层导航到达相应锚点
	floor.on("click", function () {
		var id=this.hash;
		$("html,body").finish().animate({scrollTop:$(id).offset().top},1000);
	});

	//gototop
	$("a.gototop").on("click", function () {
		var id=this.hash;
		$("html,body").finish().animate({scrollTop:0},1000);
	});
});