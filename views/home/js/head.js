

$(function(){

    $('.body-nav li').on('click',function(){
        //siblings  代表其他同级元素
        $(this).addClass("navdown").siblings().removeClass("navdown");

    })

})