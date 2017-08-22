var c=document.getElementById("myCanvas");
    c.height = 1000;
    c.width = 1000;
var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(90, 300);
	ctx.quadraticCurveTo(100, 310, 150, 160)
	ctx.bezierCurveTo(220, -10, 180, 550, 280, 150);
	ctx.quadraticCurveTo(300, 90, 330, 180)
	ctx.quadraticCurveTo(350, 200, 400, 170)
	ctx.quadraticCurveTo(420, 155, 440, 150)
	ctx.lineTo(450, 150);
	ctx.lineJoin = 'round';
	ctx.lineWidth = 4;
	ctx.strokeStyle = '#00aeef';
	ctx.stroke();