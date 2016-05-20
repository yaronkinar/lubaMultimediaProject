/**
 * Created by yaronk on 20/05/2016.
 */
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function() {
  // draw cropped image
  var sourceX = 150;
  var sourceY = 0;
  var sourceWidth = 150;
  var sourceHeight = 150;
  var destWidth = sourceWidth;
  var destHeight = sourceHeight;
  var destX = canvas.width / 2 - destWidth / 2;
  var destY = canvas.height / 2 - destHeight / 2;

  context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
};
imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
