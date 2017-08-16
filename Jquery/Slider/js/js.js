$(document).ready(function() {
    var $gal_item = $('.slideshow').children();
/*function calculate the length slide*/
    var $gal_size = $('.slideshow img').length;
/*function hide all photos except first image*/
    $('.slideshow img:gt(0)').hide();
    /*function to set time move image*/
    setInterval(function(){
        /*function show image*/
      $('.slideshow :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.slideshow');}, 
      3000);//3s
    $current_img = 0;
    $gal_item.attr("id", function (arr) {
        return "galleryitem" + arr;
    });
/*function click previous image*/
    $('#previous').click(function () { 
        if ($current_img > 0 && $current_img < 5) {
            previmg($current_img);
            $current_img = $current_img - 1;
        }
        else
            {
              $current_img=0;
            }
    });
/*function click next image*/
    $('#next').click(function () { 
        if ($current_img < $gal_size - 1) {
            nextimg($current_img, $gal_size);
            $current_img = $current_img + 1;
            
        }
        else
            {
              $current_img=0;
            }
    });
});
/*function condition next image*/
function nextimg($img, $size) {
    $n_img = $img + 1;
    if ($n_img < $size) {
        $('#galleryitem' + $img).fadeOut();
        $('#galleryitem' + $n_img).fadeIn();
    }
}
/*function condition previous image*/
function previmg($img) {
    $p_img = $img - 1;
    if ($p_img >= 0) {
        $('#galleryitem' + $img).fadeOut();
        $('#galleryitem' + $p_img).fadeIn();
    }
}