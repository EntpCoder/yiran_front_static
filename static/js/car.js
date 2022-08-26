$(".order-button-del").bind("click",function(){
    layer.msg('你确定扔出购物车么？', {
        time: 0 //不自动关闭
        ,btn: ['必须啊', '我还要']
        ,yes: function(index){
          layer.close(index);
          layer.msg('删除操作');
        }
    });
})
$("#st-tips").bind("mouseover",function(){
  layer.tips('好商品需要精挑细选，特意为你留足20分钟考虑时间。', '#st-tips-text', {
    tips: [3, '#3595CC'],
    time: 3000
  });
})