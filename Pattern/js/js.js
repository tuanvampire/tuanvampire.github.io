/*MODULE PATTERN*/
var slide = (function() {

	var IMAGE_CURR = 0; // Set initial value for image current
	var TIME_SLIDE = 3000; // Set time show slide 3s
	var TIMEOUT; // Initialization variable time slide
	var IMAGE = $(".slide");
	var ICON_SHOW = $(".icon-show");
	var SLIDE_WIDTH = $(".content").width();
	var SLIDE_SHOW = $(".slide-show");

	/**
	 * Function when click mouse on button Next
	 */
	 function ClickButtonNext() {
	 	IMAGE_CURR++;
	 	if (IMAGE_CURR > IMAGE.length - 1) {
	 		IMAGE_CURR = 0;
	 		SLIDE_SHOW.animate({left: "+=" + (SLIDE_WIDTH * IMAGE.length - SLIDE_WIDTH)}, 700);
	 	} else {
	 		SLIDE_SHOW.animate({left: "-=" + SLIDE_WIDTH}, 700);
	 	}
	 }

	 /**
	  * Function when click mouse on button Previous
	  */
	 function ClickButtonPre() {
	 	IMAGE_CURR--;
	 	if (IMAGE_CURR < 0) {
	 		IMAGE_CURR = IMAGE.length - 1;
	 		SLIDE_SHOW.animate({left: "+=" + (SLIDE_WIDTH * IMAGE.length - SLIDE_WIDTH)}, 700);
	 	} else {
	 		SLIDE_SHOW.animate({left: "-=" + SLIDE_WIDTH}, 700);
	 	}
	 }

	/**
	 * Function when click mouse on Icon
	 */
	 function ClickIcon(poin) {
	 	console.log("index = " + poin);
	 	SLIDE_SHOW.animate({left: "+=" + (SLIDE_WIDTH * (IMAGE_CURR - poin))}, 700);
	 	IMAGE_CURR = poin;
	 }

	/**
	 * Function hide and show Icon by constitute CSS
	 */
	 function IconShow() {
	 	ICON_SHOW.css("opacity","0.3");
	 	ICON_SHOW.eq(IMAGE_CURR).css({ "opacity":"1",
	 		                           "border-color": "yellow", 
                                       "border-weight":"1px", 
                                       "border-style":"solid"});
	 }

	/**
	 * Function hide and show Image by constitute CSS
	 */
	 function ShowImage() {
	 	IMAGE.css("opacity","0");
	 	IMAGE.eq(IMAGE_CURR).css("opacity","1");
	 }

	/**
	 * Function reset Timeout for slide show
	 */
	function resetTimeout() {
		clearTimeout(TIMEOUT);
		TIMEOUT = setTimeout(function() {ChoseNext();}, TIME_SLIDE);
	}

	/* Processing functions in the program */ 
	function ChoseNext() {
		ClickButtonNext();
		IconShow();
		ShowImage();
		resetTimeout();
	}

	function ChosePre() {
		ClickButtonPre();
		IconShow();
		ShowImage();
		resetTimeout();
	}
	
	function ChoseIcon(poin) {
		ClickIcon(poin);
		IconShow();
		ShowImage();
		resetTimeout();
	}

	/* Return */
	return {
		show: ChoseNext,
		next: ChoseNext,
		previous: ChosePre,
		showicon: ChoseIcon,
	};

})();

$(document).ready(function() {
	    slide.show();
	$("#prev").click(function() {
		slide.previous();
	});
	$("#next").click(function() {
		slide.next();
	});
	$(".icon-show").click(function () {
		console.log($(".icon-show").index(this));
		slide.showicon($(".icon-show").index(this));
	});
});