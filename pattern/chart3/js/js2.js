/* Javascript DINH TUAN */
/**
* Data of module chart
*/
var myData = {
    values: [10, 20, 10, 60],
    decript: ["Xuất sắc", "Tốt", "Trung bình", "Kém"],
};

/**
* Options of module chart
*/
var options = {
    canvas : myCanvas,
    decripts : myDescription,
    color: ["#4267b1", "#e42a1d", "#ff9800", "#189747"],
    height: 300,
    width: 300,
};
/**
* Function main of Chart
*/
var Chart = (function() {
    // Private
    var canvas = options.canvas;
    var ctx = canvas.getContext("2d");
    canvas.height = options.height;
    canvas.width = options.width;
    var data = myData.values;
    var color = options.color;
    var totalVal = 0;
    var lastEnd = 1.5 * Math.PI;
    // Position of the center chart3
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    for (var i in data) {
        var val = parseInt(data[i]);
        totalVal += val;
    }
    console.log(totalVal);
    /**
     * Funtion to draw Arc shape
     * @param {canvas} ctx
     * @param {number} centerX of circle in x-axis
     * @param {number} centerY of circle in y-axis
     * @param {number} radius of cirle 
     * @param {number} angleStart
     * @param {number} angleEnd
     * @param {color} color of arc shape
     */
    drawPieSlice = function(ctx,centerX, centerY, radius, angleStart, angleEnd, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angleStart, angleEnd);
    ctx.closePath();
    ctx.fill();
    }
    /**
     * Function to draw circle of chart3
     */
    function drawCircle() {
        //Declare radius for circle of chart3
        var r = canvas.height / 2;
        for (var i in data) {   
            //Draw circle of chart3
            drawPieSlice(ctx,x,y,r,lastEnd,lastEnd + (Math.PI * 2 * (data[i] / totalVal)),color[i]);
            lastEnd += Math.PI * 2 * (data[i] / totalVal);
        }
        var val = lastEnd;
        for (var i in data) {
            var slice = 2 * Math.PI * (data[i] / totalVal);
            //Calculate the position of the text
            var currentX = x + r/1.3 * Math.cos(val + slice/2);
            var currentY = y + r/1.4 * Math.sin(val + slice/2);
            ctx.font = "20px Arial";
            ctx.fillStyle = "black";
            var decript = data[i] * 100 / totalVal;
            ctx.fillText(decript + "%", currentX - 20, currentY + 6);
            val += (data[i]/totalVal) * Math.PI * 2;
        }
    }
    /**
     * Function to draw circle mini in center chart3
     */
    function drawMiniCircle() {
        drawPieSlice(ctx,x,y,80,0,Math.PI * 2,"white");
    }
    //Return value for function draw
    return {
        draw: drawCircle,
        drawMini: drawMiniCircle,
    }
})();
/**
* Function main of Decription
*/
var Decription = (function() {
    var canvas = options.decripts;
    var ctx = canvas.getContext("2d");
    canvas.height = options.height;
    canvas.width = options.width;
    /**
     * Function to draw description next right Chart
     */
    function drawDes() {
        var color = options.color;
        var decript = myData.decript;
        // Location of text
        var textX = 100;
        var textY = 165;
        // Location of icon before text decription
        var positionX = 40;
        var positionY = 150;
        for (var i in color) {
            ctx.fillStyle = color[i];
            ctx.fillRect(positionX , positionY, 15, 15);
            ctx.font = "20px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(decript[i], textX, textY);
            positionY += 30;
            textY += 30;
        }
    }
    //Return value for function draw
    return {
        draw: drawDes,
    }
})();
$(document).ready(function() {
    Chart.draw();
    Chart.drawMini();
    Decription.draw();
});
 