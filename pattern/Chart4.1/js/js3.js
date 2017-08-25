/* Javascript DINH TUAN */
/**
* Data of module chart
*/
var myData = {
    canvas: myCanvas,
    rowChart: 5, // set up number row for chart 
    height: 45, // set up height for column 
    width: 30, // set up width for column
    text: ["A", "B", "C", "E", "F", "G", "H", "I", "K", "L", "M", "N", "X", "Y", "Z", "W"],// set up text column for chart 
    value: [2, 0, 3, 4, 4], // set up ratio between column
    colorColumn: "#3366cc", // set up color of column in chart
    colorText: "#000000",  // set up color of text in chart
    colorLine: "gray",  // set up color of line in chart
};
/**
* Data location of chart
*/
var myChart = {
    currentX: 363, // set up location of chart
    currentY: 180, // set up location of chart
    width: 1000,  // set up width of chart
    height: 1000, // set up location of chart
}
/**
* Function main of Chart
*/
var Chart = (function () {
    var canvas = myData.canvas;
    var ctx = canvas.getContext("2d"); 
    var currentX = myChart.currentX;
    var currentY = myChart.currentY;
    canvas.height = myChart.height;
    canvas.width = myChart.width;
    /**
     * Funtion to draw Line
     * @param {canvas} ctx
     * @param {number} point startX
     * @param {number} point startY
     * @param {number} point stopX
     * @param {number} point stopY
     * @param {color} color of line
     */
    function drawLine(ctx,startX,startY,stopX,stopY,color) {
        ctx.moveTo(startX,startY);
        ctx.lineTo(stopX,stopY);
        ctx.fillStyle =color;
        ctx.stroke();
    }
    /**
     * Funtion to draw text
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

    function drawTextChart() {
        drawText(ctx,"25px Arial"," BIỂU ĐỒ LỊCH SỬ LEVEL OF POSITION", 360, 100, "black");
        drawText(ctx,"15px Arial"," LEVEL", 800, 220, "black");
        drawText(ctx,"15px Arial"," OF", 800, 240, "black");
        drawText(ctx,"15px Arial"," POSITION", 800, 260, "black");
        drawText(ctx,"25px Arial"," TÊN DỰ ÁN", 500, 450, "gray");
    }
    /**
     * Funtion to draw Arc shape
     * @param {canvas} ctx
     * @param {number} point startX
     * @param {number} point startY
     * @param {color} color of text
     */
    drawIcon = function(ctx,startX,startY,stopX,stopY,color) {
        ctx.fillStyle= color;
        ctx.fillRect(startX,startY,stopX,stopY);
    }
    function drawIcon1() {
        drawIcon(ctx,800,170,63,25,"#3366cc");
    }
    /**
     * Funtion to draw Chart
     */
    function drawChart() {
        var height = myData.height;
        var size = myData.height;
        var width = myData.width;
        var value = myData.value;
        var beginX = (currentX + 22);
        var beginY = (currentY - 8) + size * 3;
        var temp = 0;
        // Draw background for chart
        for (var i = myData.rowChart - 1; i >= 0; i--) {
            drawLine(ctx, currentX + 22, (currentY - 8) + temp, currentX + 22 + (size + width) * myData.rowChart, (currentY - 8) + temp);
            temp += height;
            ctx.font = "14px Arial";
            ctx.fillText(i, currentX, currentY + temp - height - 5);
        }
        //Draw column for chart
        ctx.fillStyle = myData.colorColumn;
        ctx.stroke();
        for (var i = 0; i < myData.rowChart; i++) {
            if (value[i] == 0) {
                ctx.fillRect(beginX, beginY + 40, size, 5);
                ctx.fillStyle = myData.colorText;
                ctx.fillText(i, beginX + 15, beginY + size + 20);
                ctx.fillStyle = myData.colorColumn;
                beginX = beginX + width + size;
            } else {
                var begin = (currentY - 8);
                for (var j = 0; j < value[i]; j++) {
                    ctx.fillRect(beginX, begin + size * (3 - j), size, size);
                }
                ctx.fillStyle = myData.colorText;
                ctx.fillText(myData.text[i], beginX + 15, beginY + size + 20);
                ctx.fillStyle = myData.colorColumn;
                beginX += width + size;
            }
        }
    }
    //Return value for function draw
    return {
        draw: drawChart,
        text: drawTextChart,
        icon: drawIcon1,
    }
})();
$(document).ready(function() {
    Chart.draw();
    Chart.text();
    Chart.icon();
});
