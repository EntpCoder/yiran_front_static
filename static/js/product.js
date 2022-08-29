//将页码的classname放进数组里
var page_index =  ["page-1", "page-2", "page-3"];
//点击下一页按钮
document.querySelector(".layui-laypage-next").onclick = nextPage;
function nextPage(){
    //先将所有的页面 display=none
    for(var i = 0;i<page_index.length;i++){
        page_index[i].style.display = "none";
    }
    page_index[1].style.display="block";
}