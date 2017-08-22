
      function loader() 
      {
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.moveTo(90, 300);
      // thẳng
      //context.lineTo(150, 160);
      context.quadraticCurveTo(100, 310, 150, 160)
      context.bezierCurveTo(220, -10, 180, 550, 280, 150);
      context.quadraticCurveTo(300, 90, 330, 180)
      context.quadraticCurveTo(350, 200, 400, 170)
      context.quadraticCurveTo(420, 155, 440, 150)
      context.lineTo(450, 150);
      context.lineJoin = 'round';
      context.lineWidth = 4;
      context.strokeStyle = '#00aeef';
      context.stroke();
    }
    