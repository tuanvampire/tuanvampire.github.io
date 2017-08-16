var SCORE = 100;// Score Begin
var HEART = 3;// Turn Player
var ARR_SPEED = [2, 4, 10];// array speed
var SPEED = ARR_SPEED[0];// speed of game
var MONSTER_SIZE = 70;// size monter
var LEVEL_GAME = 1;// level begin of game
var COUNT_MONSTER = 0;// count monter show in display
var COUNT_BOOM = 3;// Count the number of user-pressed booms
var COUNT_BLOOD = 5;// Count blood
var END_GAME = false;// check gameover to only click menu
var PAUSE_GAME = false;// check pause
var RAMDOM = (Math.floor(Math.random()*3)+1) * 100;// random to determine the coordinates of the monster
/* get element canvas */
var canvas = $("canvas")[0];
canvas.width = 800;
canvas.height = 450;
var context = canvas.getContext("2d");

// set image to background
var backGround = new Image();
backGround.src = "image/background1.png";
// set image to background GameOver
var backGroundGameover = new Image();
backGroundGameover.src = "image/over.gif";
// set image to pause
var pauseIcon = new Image();
pauseIcon.src = "image/pauseIcon.png";
// set image to restart
var refreshIcon = new Image();
refreshIcon.src = "image/restart1.png";
// set image to boom icon 
var boomIcon = new Image();
boomIcon.src = "image/boomIcon.png";
// set image to boom
var boom = new Image();
boom.src = "image/boom.png";
// set image to heal
var bloodIcon = new Image();
bloodIcon.src = "image/heal.png";

/*==============Image Monter=================*/
// set image to monter1
var monter1Image = new Image();
monter1Image.src = "image/monster1.png";
// set image to monter2
var monter2Image = new Image();
monter2Image.src = "image/monster2.png";
// set image to monter3
var monter3Image = new Image();
monter3Image.src = "image/monster3.png";
// set image to monter4
var monter4Image = new Image();
monter4Image.src = "image/monster4.png";
// set image to monter5
var monter5Image = new Image();
monter5Image.src = "image/monster5.png";
// set image to monter6
var monter6Image = new Image();
monter6Image.src = "image/monster6.png";
// set image to monter7
var monter7Image = new Image();
monter7Image.src = "image/monster7.png";
// set image to monter8
var monter8Image = new Image();
monter8Image.src = "image/monster8.png";
// set image to monter9
var monter9Image = new Image();
monter9Image.src = "image/monster9.png";
/**
 * Class Monster
 * @param {number} position beginX monter
 * @param {number} position beginY of monter
 * @param {number} position X of monter
 * @param {number} position Y of monter
 * @param {number} position moveToX of monter
 * @param {number} position moveToY of monter
 * @param {number} position finishX of monter (default X max monter)
 * @param {number} position finishY of monter (default Y max monter)
 * @param {number} position die of monter
 * @param {boolean} show or hiden monter
 */
 function monter(beginX, beginY, x, y, moveToX, moveToY, finishX, finishY, isShow, ImageMonter) { // SỰ KIỆN XUNG QUANH MONSTER
	this.beginX = beginX;
	this.beginY = beginY;
	this.x = x;
	this.y = y;
	this.moveToX = moveToX;
	this.moveToY = moveToY;
	this.finishX = finishX;
	this.finishY = finishY;
	this.isShow = isShow;
	this.ImageMonter = ImageMonter;
 }
 /*==============Create Monter=================*/
var monter1 = new monter(610 ,370, 710, 60, 600, 150, 710, 70, true, monter1Image);
var monter2 = new monter(270 ,390, 710, 260, 600, 20, 710, 70, false, monter2Image);
var monter3 = new monter(270 ,390, 710, 260, 600, 150, 710, 70, false, monter3Image);
var monter4 = new monter(270 ,390, 710, 260, 600, 220, 710, 70, false, monter4Image);
var monter5 = new monter(670 ,360, 710, 60, 500, 220, 710, 60, false, monter5Image);
var monter6 = new monter(288 ,10, 710, 260, 600, 320, 710, 60, false, monter6Image);
var monter7 = new monter(288 ,10, 710, 260, 600, 320, 710, 60, false, monter7Image);
var monter8 = new monter(288 ,10, 710, 60, 600, 150, 710, 60, false, monter8Image);
var monter9 = new monter(288 ,10, 710, 60, 600, 20, 710, 60, false, monter9Image);
/* Create array save 9 monter */
var monters = [monter1, monter2, monter3, monter4, monter5, monter6, monter7, monter8, monter9];
/* Create requestAnimationFrames for browers */
var reqAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
/* Create sessionStrage to save highscore for browers */
sessionStorage.setItem("highscore","0");
/**
 * function init before start game
 */
 function startGame() {  
	if (SCORE < 10 || HEART < 0) {
		if (SCORE < 0) {
			SCORE = 0;
		}
		PAUSE_GAME = true;
		END_GAME = true;
		gameOver();
	} 
	if (PAUSE_GAME == false) {
		END_GAME = false;
   		drawMenu();
   		drawBlood();
    	drawGame();
    }
    reqAnimation(startGame);
 }
/**
 * Function draw first image position 
 */
  function drawMenu() { 
    context.drawImage(backGround, 0, 0, 800, 450);
    context.drawImage(pauseIcon, 420, 25, 40, 30);
    context.drawImage(refreshIcon, 490, 20, 40, 40);
    context.fillStyle = "#fffaf8";
	context.font = "40px Forte";
    context.fillText(SCORE, 120, 285);
    context.fillStyle = "#ffcd05";
    context.fillText(HEART, 135, 320);
    if (COUNT_BOOM > 0) {
    	context.drawImage(boomIcon, 545, 8, 60, 55);
    	context.fillStyle = "white";
    	context.fillText(COUNT_BOOM, 570, 30);
    }
 }
/**
 * Function draw game position
 */
 function drawGame() {
	var temp = 0; // save count monter
	for (var i = 0; i < 9; i++) {
		if (monters[i].isShow) {
			temp ++;
    		context.drawImage(monters[i].ImageMonter, monters[i].x, monters[i].y, MONSTER_SIZE, MONSTER_SIZE);
    		monters[i].move();
		}
	}
	COUNT_MONSTER = temp+1;
 }
 /**
 * Function click true monster 
 */
 function drawBlood() { 
	for (var i = 0; i < bloodList.length; i++) {
    	context.drawImage(bloodIcon, bloodList[i].x, bloodList[i].y, MONSTER_SIZE, MONSTER_SIZE);
	}
 }
 /**
 * Function click false monster 
 */
 canvas.addEventListener("click",function(e) { 
	var mouseX = e.pageX - canvas.offsetLeft;
	var mouseY = e.pageY - canvas.offsetTop;
	clickMenu(mouseX, mouseY);
	if (PAUSE_GAME == false) {
		HEART--;
		for (var i = 0; i < 9; i++) {
			clickMonter(mouseX, mouseY, monters[i]);
		}
	}
 });

 /**
 * Function handle event click monter
 * @param {number} position mouse X
 * @param {number} position mouse Y
 * @param {monterCurrent} position of monter current
 */
 function clickMonter(mouseX, mouseY, monterCurrent) { 
	if (mouseX > monterCurrent.x && mouseX <= monterCurrent.x + MONSTER_SIZE && mouseY > monterCurrent.y && mouseY <= monterCurrent.y + MONSTER_SIZE && monterCurrent.isShow == true) {
		var sound = new Audio('audio/god.mp3');
 	    sound.play();	
		HEART++;
		SCORE += 10 * LEVEL_GAME;
		monterCurrent.isShow = false;
		monterCurrent.x = monterCurrent.beginX;
		monterCurrent.y = monterCurrent.beginY;
		monterCurrent.moveToX = monterCurrent.finishX;
		monterCurrent.moveToY = monterCurrent.finishY;
		var tempBlood = new blood(mouseX, mouseY);
		bloodList.push(tempBlood);
		/* set again speed and level*/
		var TEMP_LEVEL = Math.floor(SCORE/100);
		if (LEVEL_GAME < TEMP_LEVEL && TEMP_LEVEL <= 3) {
			setDefaultMonter();
			monter9.isShow = true;
			LEVEL_GAME = TEMP_LEVEL;
			SPEED = ARR_SPEED[LEVEL_GAME-1];
		}
		/* Create new monter when monter current die*/
		for (var i = 0; i < LEVEL_GAME; i++) {
			randomMonter();
		}
	}
 }
/**
 * Function show random monter
 */
 function randomMonter() { 
 	var number = Math.floor((Math.random()*6)+1);
 	monters[number].isShow = true;
 }
 /**
 * Class blood
 * @param {number} position X of blood
 * @param {number} position Y of blood
 */
 function blood(x, y) {
	this.x = x;
	this.y = y;
 }
 var bloodList = [];

/**
 * add funtion move give monster
 */
 monter.prototype.move = function () { 
	// when monter move maximun
	if (this.x == this.moveToX && this.y == this.moveToY) {
		this.x = this.moveToX;
		this.y = this.moveToY;
		this.moveToX = this.beginX;
		this.moveToY = this.beginY;
	}
	// move following X
	if (this.x == this.moveToX) {
			this.x = this.moveToX;
	} else {
		if (this.x > this.moveToX) {
			this.x -= SPEED;
		} else {
			this.x += SPEED;
		}
	}
	// move following Y
	if (this.y == this.moveToY) {
		this.y = this.moveToY;
	} else {
		if (this.y > this.moveToY) {
			this.y -= SPEED;
		} else {
			this.y += SPEED;
		}
	}
	// when monster return position begin and revise the original value
	if (this.x == this.beginX && this.y == this.beginY) {
		SCORE -= 10 * LEVEL_GAME;
		this.isShow = false;
		this.x = this.beginX;
		this.y = this.beginY;
		this.moveToX = this.finishX;
		this.moveToY = this.finishY;
		randomMonter();
	}
 }

/**
 * Function handle event click restart
 * @param {number} position mouse X
 * @param {number} position mouse Y
 */
 function clickMenu(mouseX, mouseY) {
	if (END_GAME) {
		clickRestart(mouseX, mouseY);
	}
	else {
		clickRestart(mouseX, mouseY);
		clickPause(mouseX, mouseY);
		if (PAUSE_GAME == false && COUNT_BOOM > 0) {
			clickBoom(mouseX, mouseY);
		}
	}
 }
function clickRestart(mouseX, mouseY) {
	if (mouseX > 490 && mouseX <= 540 && mouseY > 20 && mouseY <= 60) {
		setDefaultMonter();
		PAUSE_GAME = false;
		SPEED = ARR_SPEED[0];
		bloodList = [];
		COUNT_BOOM = 3;
		SCORE = 100;
		HEART = 4;
		LEVEL_GAME = 1;
		randomMonter();
	}
 }
/**
 * Function handle event click pause
 * @param {number} position mouse X
 * @param {number} position mouse Y
 */
 function clickPause(mouseX, mouseY) {
	if (mouseX > 440 && mouseX <= 480 && mouseY > 20 && mouseY <= 60) {
		PAUSE_GAME = !PAUSE_GAME;
		if(PAUSE_GAME == false) {
			HEART++;
		}
	}
 }
/**
 * Function handle event click boom
 * @param {number} position mouse X
 * @param {number} position mouse Y
 * Function will delay 2s to draw boom
 */
 function clickBoom(mouseX, mouseY) { 
	if (mouseX > 540 && mouseX <= 580 && mouseY > 20 && mouseY <= 60) {
		var sound = new Audio('audio/Aced1.mp3');
		sound.play();	
		COUNT_BOOM--;
		setDefaultMonter();
		SCORE += COUNT_MONSTER*10*LEVEL_GAME;
		var temp = Math.floor(SCORE/100);
		if (LEVEL_GAME < temp && temp <= 3) {
			LEVEL_GAME = temp;
			SPEED = ARR_SPEED[LEVEL_GAME-1];
		}
		clickPause(450, 30);
		context.drawImage(boom, 160, 5, 500, 500);
		setTimeout(function() {
			randomMonter();
			PAUSE_GAME = !PAUSE_GAME;
		}, 1000);
	}
 }

 
/**
 * Function gameover
 */
 function gameOver() {	
	for (var i = 0; i < 8; i++) {
		monters[i].isShow = false; 
	}
	//function to highscore
	if (SCORE > Number(sessionStorage.getItem("highscore"))) {
		sessionStorage.setItem("highscore", SCORE);
	}
	context.drawImage(backGroundGameover, 0, 0, 800, 450);
	context.fillStyle = "#e8f6f7";
    context.font = "40px Ravie";
    context.fillText(SCORE, 440, 196);
    context.fillText(sessionStorage.getItem("highscore"), 420, 238);
 }
/**
 * set default monter go to status start
 */
 function setDefaultMonter() { 
 	for (var i = 0; i < 9; i++) {
		monters[i].x = monters[i].beginX;
		monters[i].y = monters[i].beginY;
		monters[i].moveToX = monters[i].finishX;
		monters[i].moveToY = monters[i].finishY;
		monters[i].isShow = false;
	}
 }