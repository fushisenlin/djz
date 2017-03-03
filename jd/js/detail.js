// JavaScript Document

$(function(){
	//图片切换
	var oPage2Tab=$("div.page2").find("div.tab");
	var tab=new Tab(oPage2Tab);
	//手动切换 上一张图 下一张图
	tab.changeTab().prevBtn().nextBtn1();

});

/*documentReady(function(){
	//图片切换区
	var oPage2=document.getElementsByClassName("page2")[0];
	var oPage2Tab=oPage2.getElementsByClassName("tab");
	
	//放大镜	
	var oBox1=oPage2.getElementsByClassName("s_img");
	var oBox2=oPage2.getElementsByClassName("zoom_img");
	
	//选择切换
	var selUl=oPage2.getElementsByClassName("select")[0].getElementsByTagName("ul")[0];
	var selLi=selUl.getElementsByTagName("li");
	var selGoods=new selTab(selLi,oPage2Tab);	
	
	//数量增减
	var numInput=oPage2.getElementsByTagName("input")[0];
	var addBtn=oPage2.getElementsByClassName("add")[0];
	var redBtn=oPage2.getElementsByClassName("reduce")[0];
	var lastVal=numInput.value; //记录最后一次输入的有效值
	var maxNum=199; //库存数
	
	//商品组合切换
	var oPage3=document.getElementsByClassName("page3")[0];
	var oPage3Tab=oPage3.getElementsByClassName("tab")[0];
	var page3Tab=new Tab(oPage3Tab);
	
	
	
//---------------------------   放大镜   ---------------------------------------------------------------------------------------------------------	
	
	//遍历每张图片,调用放大镜函数
	for(var i=0;i<oBox1.length;i++){
		var oSpan=oBox1[i].getElementsByTagName("span")[0];
		var bigImg=oBox2[i].getElementsByTagName("img")[0];
		tools.zoom(oBox1[i],oBox2[i],bigImg,oSpan);
	};
	
//---------------------------   图片切换区   ---------------------------------------------------------------------------------------------------------
	//遍历所有图片样式
	for(var i=0;i<oPage2Tab.length;i++){
		var tab=new Tab(oPage2Tab[i]);
		tab.changeTab();//手动切换
		tab.prevBtn(); //上一张图
		tab.nextBtn1();//下一张图
	};
	
	
//---------------------------   选择切换样式   ---------------------------------------------------------------------------------------------------------

	selGoods.changeTab();
	
	
//---------------------------   数量增减   --------------------------------------------------------------------------------------------------------

	//判断是不是数字
	function isNum(str){   //字符
		var re=/^[1-9]\d*$/; //验证是否有效数字
		return re.test(str);
	};
	
	//判断按钮状态
	function btnStauts(num){
		//判断数值是否小于1
		if(num<=1){
			redBtn.className="reduce dis";
			redBtn.disabled=true;
		}else{
			redBtn.className="reduce";
			redBtn.disabled=false;
		};
		//判断数值是否大于库存
		if(num>=199){
			addBtn.className="add dis";
			addBtn.disabled=true;
		}else{
			addBtn.className="add";
			addBtn.disabled=false;
		};
	};
	
	//验证输入框是否为有效数字
	numInput.onkeyup=function(){
		var val=numInput.value;
		if(isNum(val)){ //判断输入是否为有效数字
			lastVal=val;
			if(val>maxNum){ //判断是否大于库存
				lastVal=numInput.value=maxNum;				
			};
			btnStauts(lastVal);
		}else{
			numInput.value=lastVal;
		};		
	};
	
	//增加按钮点击事件
	addBtn.onclick=function(){
		lastVal++;
		numInput.value=lastVal;	
		btnStauts(lastVal);
	};
	
	//减少按钮点击事件
	redBtn.onclick=function(){
		lastVal--;
		numInput.value=lastVal;	
		btnStauts(lastVal);
	};
	
//---------------------------   商品组合切换区   ---------------------------------------------------------------------------------------------------------
	page3Tab.changeTab();//手动切换
	
});

//---------------------------   封装tab对象 用于商品选择切换 ------------------------------------------------------------------------------------------------------	
function selTab(tab,tabItem){
	this.aLi=tab;
	this.tabItem=tabItem;	
	this.lastIndex=0;		
};

//tab点击切换
selTab.prototype.changeTab=function(){
	for(var i=0;i<this.aLi.length;i++){
		var _this=this;
		this.aLi[i].index=i;
		this.aLi[i].onclick=function(){				
			_this.aLi[_this.lastIndex].className="";	
			_this.tabItem[_this.lastIndex].style.display="none";
			this.className="active";	
			_this.tabItem[this.index].style.display="block";
			_this.lastIndex=this.index;
		};
	};	
	return this;	
};*/
