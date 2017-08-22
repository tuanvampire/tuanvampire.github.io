/* Javascript DINH TUAN */
/**
* Options of module chart
*/
var options = {
    canvas : myCanvas,
};
/**
* Function main of Chart
*/
var Chart = (function() {
    // Private
    var canvas = options.canvas;
    var ctx = canvas.getContext("2d");
    canvas.height = 1000;
    canvas.width = 1000;
    
    /**
     * Funtion to draw Arc shape
     * @param {canvas} ctx
     * @param {number} point startX
     * @param {number} point startY
     * @param {number} point stopX
     * @param {number} point stopY
     * @param {number} width of line
     * @param {color} color of line
     */
    drawLine = function(ctx,startX, startY, stopX, stopY, width, color) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(stopX, stopY);
    ctx.lineWidth= width;
    ctx.strokeStyle = color;
    ctx.stroke();
    } 
    /**
     * Funtion to draw Arc shape
     * @param {canvas} ctx
     * @param {pixel font} font text
     * @param {number} point startX
     * @param {number} point startY
     * @param {color} color of text
     */
    drawText = function(ctx,font, text, startX, startY, color) {
      ctx.font= font;
      ctx.fillStyle= color;
      ctx.fillText(text,startX,startY);
    }
    /**
     * Function to draw chart2
     */
    function drawChart2() {
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
        }
    /**
     * Function to draw coordinate axis in chart2
     */
    function drawLineChart2() {
        drawLine(ctx,60,450,500,450,2,"black");
        drawLine(ctx,60,450,60,20,2,"black");
    }
    /**
     * Function to draw text in chart2
     */
    function drawTextChart2() {
        drawText(ctx,"40px Arial", 0, 20, 450, "black");
        drawText(ctx,"40px Arial", 1, 20, 360, "black");
        drawText(ctx,"40px Arial", 2, 20, 270, "black");
        drawText(ctx,"40px Arial", 3, 20, 180, "black");
        drawText(ctx,"40px Arial", 4, 20, 90, "black");
        drawText(ctx,"30px Arial"," RANK SCORE RANK", 120, 40, "black");
        drawText(ctx,"30px Arial"," QUY LAM VIEC", 120, 510, "black");
    }
    //Return value for function draw
    return {
        draw: drawLineChart2,
        drawChart: drawChart2,
        drawText: drawTextChart2,
    }
})();
$(document).ready(function() {
    Chart.draw();
    Chart.drawChart();
    Chart.drawText();
});
 