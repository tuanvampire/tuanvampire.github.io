/* Javascript DINH TUAN */
/**
* Data of module chart
*/
var myData = {
  canvas: myCanvas,
  value:[80, 20], // set up scale percent for chart
  slogan:["BIỂU ĐỒ TỔNG QUÁT KHUNG NĂNG LỰC"], // set up name of chart
  note:["ĐÃ ĐẠT", "CHƯA ĐẠT"], // set up note of scale percent for chart
  colorChart: ["#00ccff", "#0033cc", "#ff0000", "#a00505"], // set up color of scale percent for chart
  colorLine:["#0033cc","#a00505"], // set up color of line in note of scale percent for chart
}
/**
* Function main of Chart
*/
var Chart = (function() {
  var canvas = myData.canvas;
  canvas.width = 600;
  canvas.height = 400;
  var ctx = canvas.getContext("2d");
  var colorLine = myData.colorLine;
  var data = myData.value;
  var dataNote = myData.note;
  var colorChart = myData.colorChart;
  var radius = Math.min(canvas.width/2, canvas.height/2);
  var centerX =  canvas.width/2;
  var centerY = canvas.height;
  var scaleX = 0.9;
  var scaleY = 0.5;
  var space = 15;
  var totalVal = 0;
  var colorIndex = 0;
  var angleSuccess = 0;
  var flag = true;
  //  check value input
  for (var i in data) {
    if (data[i] <= 0) {
      flag = false;
    }
  }

  function DrawChart3D() {
    for (var temp in data)
    {
      var val = data[temp];
      totalVal += val;
    }
    angleSuccess = 2 * Math.PI * data[0] /totalVal;
    for(i = 100; i > 0; i--) {
        DrawChart(0, 0, 0, angleSuccess); 
        DrawChart(space, 2, angleSuccess, -0.01); 
    }
  }

  /**
   * Function draw follow % of chart
   */
  DrawChart = function(spaceFail, colorIndex, angleStart, angleEnd) {
      ctx.save();
      ctx.scale(scaleX, scaleY);
      ctx.beginPath();
      ctx.arc(centerX + spaceFail, centerY - spaceFail + i, radius, angleStart, angleEnd);
      ctx.lineTo(centerX + spaceFail, centerY - spaceFail + i);
      ctx.restore(); 
      if (i==1) {
        ctx.fillStyle = colorChart[colorIndex];
      }
      else {
        ctx.fillStyle = colorChart[colorIndex + 1];
      }
      ctx.fill();
  }

   /**
    * Function draw description
    */
    DrawNote = function() {
        var angleStart = 0;
        for (var temp in data) {
        var width = 70;
        var val = data[temp];
        var percent = val/totalVal;
        var angleEnd = Math.PI * 2 * percent;
        width = percent < 0.5 ? 100 : -100;
        var currentX = canvas.width / 3 + (radius / 2) * Math.cos(angleStart + angleEnd / 2) + 100;
        var currentY = canvas.height / 3 + (radius / 2) * Math.sin(angleStart + angleEnd / 2) * scaleY + 20;
        DrawLine(currentX, currentY, currentX + width, currentY - 70, width, colorLine[temp]);
        ctx.fillStyle = "#000";
        ctx.font = "15px Arial";
        width = percent < 0.5 ? 50 : -100;
        ctx.fillStyle="gray";
        ctx.fillText(Math.round(percent * 100) + "% " + dataNote[temp], currentX + width*2, currentY - 73);
        angleStart += angleEnd;
      }
    }

   /**
    * Function draw line to note chart 
    */
   DrawLine = function(firstX, firstY, secondX, secondY, width, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(firstX, firstY);
    ctx.lineTo (secondX ,secondY);
    ctx.lineTo (secondX + width, secondY);
    ctx.stroke();
  }
  /**
    * Function draw slogan
    */
  DrawSlogan = function() {
      ctx.font= "15px Arial";
      ctx.fillStyle= "blue";
      ctx.fillText(myData.slogan,130,394);
   }
   /* Public function */
   publicDrawChart = function() {
    if (flag) {
      DrawChart3D();
      DrawNote();
      DrawSlogan();
    } else {
      alert("Input Fail");
    }
   }

  return {
    draw: publicDrawChart
  }
})();

$(document).ready(function() {
  Chart.draw();
})