
// =================固定导航栏=================================
$(function(){
    //windows对象出发滚动事件
    $(window).scroll(function(){

        if($(document).scrollTop() >= $(".top").height()){
            console.log("超过了");
            $(".filter").css({"position":"fixed","top":0,"margin-left":"148px"});
             $(".pro-show-page").css("marginTop",$(".filter").height());
        } else{
            $(".filter").css({"position":"static"});
            $(".pro-show-page").css({".margin-top":"0px"}) ;    
        }
    });
});

// ===================================分页======================

window.onload = function(){
document.querySelector("#demo1 .layui-laypage").onclick = function(event){
    var value = event.target.innerText;
    console.log("点击第"+value+"页")
    $(".pro-show-page").css({"display" : 'none'});
    $(".page-"+value).css({"display" : 'block'});
    }
}