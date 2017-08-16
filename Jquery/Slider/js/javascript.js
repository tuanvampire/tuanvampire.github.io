/*function hide all photos except first image*/
$('.slideshow img:gt(0)').hide();
/*function to set time move image*/
setInterval(function(){
	/*function show image*/
  $('.slideshow :first-child').fadeOut()
     .next('img').fadeIn()
     .end().appendTo('.slideshow');}, 
  3000);//3s


