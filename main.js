var mouse_event=" ";
var last_position_x=" ";
var last_position_y=" ";
var current_position_x=" ";
var current_position_y=" ";
var c1 = document.getElementById("myCanvas");
var ctx = c1.getContext("2d");
var colour="red";
var width= 5;

c1.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
colour=document.getElementById("colour").value;
width=document.getElementById("width").value;
mouse_event="mousedown";
}

c1.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_x= e.clientX - c1.offsetLeft;
current_position_y= e.clientY - c1.offsetTop;
if (mouse_event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=width;
ctx.moveTo(last_position_x,last_position_y);
console.log("x= "+last_position_x+"y= "+last_position_y);
ctx.lineTo(current_position_x,current_position_y);
console.log("x= "+current_position_x+"y= "+current_position_y);
ctx.stroke();
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}
c1.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouse_event="mouseup";
}
c1.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseleave";
}
function erase(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}