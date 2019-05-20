<!DOCTYPE html>
<html>
<head>
  <title>Let's play some snake</title>
  <style>
  html, body {
    height: 100%;
    margin: 0;
  }
  body {
    background: #FFEAC1;
    display: flex;
    margin: 0px 256px;
    margin-bottom: 0px;
    border-left: 14px dashed #E5D0A5;
    border-right: 14px dashed #E5D0A5;
    align-items: center;
    justify-content: center;
    }
  canvas {
    border: 5px solid #A59678;
  }
  </style>
</head>
<body>
<canvas width="400" height="400" id="game"></canvas>
<script src="Snake.js"> </script>
</body>
</html>