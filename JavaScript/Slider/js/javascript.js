var IMAGE_CURRENT = 0;//defaule image current is image0
var TIME_AUTO_SLIDE = 3000;//3s
var TIME_OUT;// Variable contains auto slice
var CHECK_MOUSE = true;// check mouseover and mouseout at mini image


var image = document.getElementsByClassName("slide");
var image_mini = document.getElementsByClassName("slide-mini");
var s= document.getElementById("pause").innerHTML;

// Contructer, auto run when website open
ShowImage(IMAGE_CURRENT);

/* Function for event click button previous  or next */
function BtnClick(n) {
	ShowImage(IMAGE_CURRENT += n);
}

/* Function for event click button pause  or next */
function BtnClick1(n) {
	
	if(s="pause")
	{
		Pau(n);
	}
}

/* Function for click image mini */
function ClickImageMini(n) {
	ShowImage(IMAGE_CURRENT = n);
	image[IMAGE_CURRENT].style.display = "block";
	image_mini[IMAGE_CURRENT].style.opacity = "1";
	clearTimeout(TIME_OUT);
}

/* Function for event mouseover image mini */
function mOver(n) {
	CHECK_MOUSE = false;
	//dim all mini image
	for (var i = 0; i < image_mini.length; i++) {
		image_mini[i].style.opacity = "0.2";
		console.log("over");
	}
	image_mini[n].style.opacity = "1";
}
function mOut() {
	CHECK_MOUSE = true;
	for (var i = 0; i < image_mini.length; i++) {
		image_mini[i].style.opacity = "0.2";
		console.log("out");
	}
	image_mini[IMAGE_CURRENT].style.opacity = "1";
}
/* Function for show image for events */
function Pau(n) {
    ShowImage(n);
	image[IMAGE_CURRENT].style.display = "block";
	image_mini[IMAGE_CURRENT].style.opacity = "1";
    clearTimeout(TIME_OUT);
}
function ShowImage(n) {
     
	// Consider whether n out of the threshold
	if (n > image.length-1) {
		IMAGE_CURRENT = 0;
	}
	if (n < 0) {
		IMAGE_CURRENT = image.length-1;
	}

	// loop to all image hidden and dim all mini image
	var i;
	for (i = 0; i < image.length; i++) {
		image[i].style.display = "none";
		if (CHECK_MOUSE) {
		    image_mini[i].style.opacity = "0.2";
		}
		console.log("none");
	}

	// then show image current
	image[IMAGE_CURRENT].style.display = "block";
	if (CHECK_MOUSE) {
	image_mini[IMAGE_CURRENT].style.opacity = "1";
	}
   	// reset time_auto_slide and call new showImage
	clearTimeout(TIME_OUT);
	var r = Math.random(); 
    var N=3;
	TIME_OUT = setTimeout(function() {ShowImage(IMAGE_CURRENT += Math.round(r*N));},TIME_AUTO_SLIDE);
}

