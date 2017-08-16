$(window).resize(function(){
 
    var width = $(window).width();
    console.log(width);
    if (width <= 768){
        $('.left, .right').addClass('responsive_768');
    }
    else{
        $('.left, .right').removeClass('responsive_768');
    }
});