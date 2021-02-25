import React from 'react'

let Canvas = () => (
  <>
    <canvas width="800" height="600" id="canvas"></canvas> 
    <script> 
      var canvas = document.getElementById('canvas'); 
      var c = canvas.getContext('2d'); 
      c.fillStyle = "red"; 
      c.fillRect(100,100,400,300); 
    </script>
  </>
)

export default Canvas
