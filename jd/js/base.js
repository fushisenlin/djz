// JavaScript Document

$(function(){
//---------------------------   左侧导航列表   ----------------------------------------------------------------------------

	var aListNav=$("div.page1").find("div.listnav").find("li");//所有左侧导航列表子项
	var oPopup=$("div.page1").find("div.popup");//弹框区块
	var aPopupCont=oPopup.find("div.section");//所有的弹框内容
	var popupTimer;//用于左侧导航的定时器
	var index=0;//列表项索引值

	aListNav.hover(
		function(){
			clearTimeout(popupTimer);
			index=$(this).attr("data-index"); //取得每个导航条的索引值
			//给当前悬停的li增加样式类，同时删除其他所有兄弟li的样式类
			$(this).addClass("li_ac").siblings("li").removeClass("li_ac");
			//对应的弹框区块显示，同时隐藏其他所有弹框区块
			oPopup.show();
			aPopupCont.eq(index).show().siblings("div.section").hide();
		},
		function(){
			popupTimer=setTimeout(function(){//鼠标移出时,清除样式类，隐藏弹框区块
				aListNav.removeClass("li_ac");
				oPopup.hide();
				aPopupCont.hide();
			},300);
		}
	);

	oPopup.hover(
		function(){//弹框区块移入时
			clearTimeout(popupTimer);
			oPopup.show();
		},
		function(){//弹框区块移出时
			aListNav.removeClass("li_ac");
			oPopup.hide();
		}
	);

//---------------------------   天气   ----------------------------------------------------------------------------

	getWeather();

	//城市切换
	$("select.city").on("change",function(){
		getWeather();
	});

	function getWeather(){
		var url="http://wthrcdn.etouch.cn/weather_mini?city="+$("select.city").val();
		$.getJSON(url,function(data){
			$("span.date").html(data.data.forecast[0].date);
			$("span.weather").html(data.data.forecast[0].type);
			$("span.wendu").html(data.data.wendu);
		});
	};
});

//---------------------------   封装tab对象   ---------------------------------------------------------------------------------------------------------
function Tab($obj){
	this.obj=$obj;
	this.aLi=$obj.find("ul").find("li");
	this.tabItem=$obj.find(".tabItem");
	this.preBtn=$obj.find("a.prevBtn");
	this.nextBtn=$obj.find("a.nextBtn");
	this.index=0;
};

//tab悬停切换
Tab.prototype.changeTab=function(){
	var _this=this;
	$(this.aLi).on("mouseenter",function(){
		_this.index=$(this).attr("data-index"); //取得每个按钮的索引值
		//给当前悬停的li增加样式类，同时删除其他所有兄弟li的样式类
		$(this).addClass("active").siblings("li").removeClass("active");
		//对应的图片显示，同时隐藏其他所有图片
		$(_this.tabItem).eq(_this.index).show().siblings(".tabItem").hide();
	});
	return this;
};

//tab自动轮播
Tab.prototype.autoRun=function(){
	var _this=this;
	var timer;
	function auto(){
		timer=setInterval(function(){
			_this.index++;
			if(_this.index==_this.aLi.length){
				_this.index=0;
			};
			//给当前悬停的li增加样式类，同时删除其他所有兄弟li的样式类
			$(_this.aLi).eq(_this.index).addClass("active").siblings("li").removeClass("active");
			//对应的图片显示，同时隐藏其他所有图片
			$(_this.tabItem).eq(_this.index).show().siblings(".tabItem").hide();
		},1000);
	};
	auto();
	$(this.obj).hover(
		function(){
			clearInterval(timer);
		},
		function(){
			auto();
		}
	);
	return this;
};

//切换上一张图片
Tab.prototype.prevBtn=function(){
	var _this=this;
	if(this.preBtn){
		$(this.preBtn).on("click",function(){
			_this.index--;
			if(_this.index<0){
				_this.index=0;
			};
			//给当前悬停的li增加样式类，同时删除其他所有兄弟li的样式类
			$(_this.aLi).eq(_this.index).addClass("active").siblings("li").removeClass("active");
			//对应的图片显示，同时隐藏其他所有图片
			$(_this.tabItem).eq(_this.index).show().siblings(".tabItem").hide();
		});
	};
	return this;
};

//切换下一张图片
Tab.prototype.nextBtn1=function(){
	var _this=this;
	if(this.nextBtn){
		$(this.nextBtn).on("click",function(){
			_this.index++;
			if(_this.index>=_this.aLi.length){
				_this.index=_this.aLi.length;
			};
			//给当前悬停的li增加样式类，同时删除其他所有兄弟li的样式类
			$(_this.aLi).eq(_this.index).addClass("active").siblings("li").removeClass("active");
			//对应的图片显示，同时隐藏其他所有图片
			$(_this.tabItem).eq(_this.index).show().siblings(".tabItem").hide();
		});
	};
	return this;
};
