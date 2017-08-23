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
     * Funtion to draw Arc shape
     * @param {canvas} ctx
     * @param {number} point startX
     * @param {number} point startY
     * @param {color} color of text
     */
    drawChart = function(ctx,startX,startY,stopX,stopY,color) {
        ctx.fillStyle= color;
        ctx.fillRect(startX,startY,stopX,stopY);
    }
    /**
     * Function to draw coordinate axis in chart2
     */
    function drawLineChart4() {
        drawLine(ctx,73,550,680,550,2,"black");
        drawLine(ctx,73,460,680,460,1,"grey");
        drawLine(ctx,73,370,680,370,1,"grey");
        drawLine(ctx,73,280,680,280,1,"grey");
        drawLine(ctx,73,190,680,190,1,"grey");
    }
    /**
     * Function to draw text in chart2
     */
    function drawTextChart4() {
        drawText(ctx,"20px Arial", 0, 20, 560, "black");
        drawText(ctx,"20px Arial", 1, 20, 470, "black");
        drawText(ctx,"20px Arial", 2, 20, 380, "black");
        drawText(ctx,"20px Arial", 3, 20, 290, "black");
        drawText(ctx,"20px Arial", 4, 20, 200, "black");
        drawText(ctx,"20px Arial", "A", 100, 580, "black");
        drawText(ctx,"20px Arial", "B", 220, 580, "black");
        drawText(ctx,"20px Arial", "C", 340, 580, "black");
        drawText(ctx,"20px Arial", "E", 460, 580, "black");
        drawText(ctx,"20px Arial", "F", 580, 580, "black");
        drawText(ctx,"40px Arial"," BIỂU ĐỒ LỊCH SỬ LEVEL OF POSITION", 20, 40, "black");
        drawText(ctx,"28px Arial"," LEVEL", 700, 260, "black");
        drawText(ctx,"28px Arial"," OF", 700, 300, "black");
        drawText(ctx,"28px Arial"," POSITION", 700, 340, "black");
        drawText(ctx,"30px Arial"," TÊN DỰ ÁN", 280, 650, "gray");
    }
    function drawChart4() {
        drawChart(ctx,73,370,73,179,"#3366cc");
        drawChart(ctx,190,540,73,9,"#3366cc");
        drawChart(ctx,310,280,73,269,"#3366cc");
        drawChart(ctx,430,190,73,359,"#3366cc");
        drawChart(ctx,550,190,73,359,"#3366cc");
        drawChart(ctx,710,190,73,30,"#3366cc");
    }
    //Return value for function draw
    return {
        draw: drawLineChart4,
        drawText: drawTextChart4,
        drawChart: drawChart4,
    }
})();
$(document).ready(function() {
    Chart.draw();
    Chart.drawText();
    Chart.drawChart();
});
 