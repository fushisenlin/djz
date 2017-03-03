/**
 * Created by hxsd on 2016/12/30.
 */
//banner轮播图
$(function(){
    //点击对应编号切换至对应的图片
    var n;
    $(".banner").find("ol").find("li").on("click",function(){
        $(this).siblings().removeClass("ac");
        $(this).addClass("ac");
        n=$(this).index();
        $(".banner").find("ul").find("li").eq(n).show();
        $(".banner").find("ul").find("li").eq(n).siblings().hide();
    })
    var timerBanner;
    var j=0
    function auto(){
        timerBanner=setInterval(function(){
            if(j==6) j=0
            $(".banner").find("ol").find("li").eq(j).siblings().removeClass("ac");
            $(".banner").find("ol").find("li").eq(j).addClass("ac");
            $(".banner").find("ul").find("li").eq(j).show();
            $(".banner").find("ul").find("li").eq(j).siblings().hide();
            j++
        },2000)
    }
    auto()
    $(".banner").find("ul").find("li").on("mouseenter",function(){
        clearInterval(timerBanner)
    });
    $(".banner").find("ul").find("li").on("mouseleave",function(){
        j=n;
        auto()
    })

});

    //---------------弹出菜单------------------------------------------
$(function() {
    var time = null;
    $(".list-nav").find("ul").find("li").on("mouseenter", function () {
        var j = $(this).index();
        $("#focus_first").css("display", "block");
        //$("#focus_first").find(".first").eq(j).show();
        //$("#focus_first").find(".first").eq(j).siblings().hide();
        $("#focus_first").find(".first").eq(j).css("display", "block");
        $("#focus_first").find(".first").eq(j).siblings().css("display", "none");
    });
    $(".list-nav").on("mouseleave", function () {
        timer = setInterval(function () {
            clearInterval(timer)
            $("#focus_first").css("display", "none");
        }, 400)
    });
    $("#focus_first").on("mouseenter", function () {
        clearTimeout(timer);
        this.style.display = "block";
    });
    $("#focus_first").on("mouseleave", function () {
        this.style.display = "none";
    });
});

//----------侧边导航-----------------
window.onscroll=function() {
    //var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrolltop =$(document).scrollTop();
    if (scrolltop > 800) {
        $(".jd_elevator").css("display","block");
    } else {
        $(".jd_elevator").css("display","none");
    }

};
$(function(){

    /*if($("html,body").scrollTop>=400){
     $(".jd_elevator").css("display","block");
        }else{
            $(".jd_elevator").css("display","none");
        }*/
        // 为站内链接绑定click事件处理函数
        // 排除外部链接和空链接
        $("a[href*='#']:not([href='#'])").on("click",function(){
            // 获得hash值
            var id = this.hash;
//                    console.log("id:" + id);
            // 距离浏览器顶部的距离
//                    console.log($(id).offset().top);
            $("html,body").animate({
                // 以hash值为id选择器
                scrollTop:$(id).offset().top
            },600);
        });
});

//---------------------选项卡-------------

$(function(){
    $("#three").find(".title").find("ul").find("li").on("mouseenter",function(){
        var k=$(this).index()
        $("#three").find(".main").find(".main_wrap").find(".m_inner").eq(k).show();
        $("#three").find(".main").find(".main_wrap").find(".m_inner").eq(k).siblings().hide();


    })
});


//---------------天气数组---------------------------
$(function(){
    // 为按钮绑定单击事件处理函数
    $("#btn").on("click",function(){
        // 请求的url
        var url = "js/index.json";
        $.getJSON(url,function(data){
            var a=$(".dizhi").find("select").val();
            //alert(data.上海[0])
            if(a=='上海'){
                $("#wendu").html(data.上海[0]);
                $("#tubiao").html('<img src="images/'+data.上海[1]+'">')
            }else if(a=='北京'){
                $("#wendu").html(data.北京[0]);
                $("#tubiao").html('<img src="images/'+data.北京[1]+'">')
            }else if(a=='广东'){
                $("#wendu").html(data.广东[0]);
                $("#tubiao").html('<img src="images/'+data.广东[1]+'">')
            }else if(a=='四川'){
                $("#wendu").html(data.四川[0]);
                $("#tubiao").html('<img src="images/'+data.四川[1]+'">')
            }else if(a=='云南'){
                $("#wendu").html(data.云南[0]);
                $("#tubiao").html('<img src="images/'+data.云南[1]+'">')
            }else if(a=='南京'){
                $("#wendu").html(data.南京[0]);
                $("#tubiao").html('<img src="images/'+data.南京[1]+'">')
            }
            //$("#wendu").html(data.a[0]);
            //$("#tubiao").html("data.a[1]");
        });
    });
});