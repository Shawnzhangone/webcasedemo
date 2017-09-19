/**
 * Created by zhang on 2017/6/23.
 */
$(function () {

    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $("#main-slider > .carousel-inner > .item").each(function (i, item) {
            var $item = $(item); //拿到是DOM对象 需要转换
            if(isSmallScreen){
                var bgImage = $item.data('image-sm'); //data属性获得图片地址
                $item.html('<img src="' + bgImage + '"/>' ); //动态生成img标签
                $item.css('backgroundImage','url()'); //清除背景图
            }
            else {
                $item.empty(); //清除img标签
                $item.html('<a class="s-link" href="javascript:;"></a>')
                $item.css('backgroundImage','url("' + $item.data('image-lg') + '")'); //设置背景图
            }
        });
    }
    $(window).on('resize',resize).trigger('resize'); //添加屏幕变化事件，一开始就执行一次
});