//-------图片选项卡---------------
$(function(){
    $(".small").find("ul").find("li").on("click",function(){
        var k=$(this).index()
        $(".fig").find(".fig_img").eq(k).css("display","block");
        $(".fig").find(".fig_img").eq(k).siblings().css("display","none");
    })
});



//-------------返回顶部-------------
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

//--------------添加商品------------------
$(function(){
        $.getJSON("js/products.json",function(products){

            for(var i= 0;i<products.length;i++){
                //取出其中个的每一个元素（每一个商品）
                var produc=products[i];

                var $div=$("<div/>");
                $("<td/>").append('<img src="images/'+produc.imgsrc+'">').appendTo($div);
                $("<h2/>").append(produc.title).appendTo($div);
                $("<p/>").append(produc.desc).appendTo($div);
                $("<div/>").addClass("price").append("￥"+produc.price).appendTo($div);

                $(".bottom").append($div);
                $(".bottom").find("div").addClass("pic")

            }
        })

})


