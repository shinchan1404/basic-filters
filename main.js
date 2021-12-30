function preload(){

}

function setup(){
    canvas=createCanvas(640, 450);
    canvas.position(450,400);
    video=createCapture(VIDEO);
    video.hide()
   
    tint_colour="";

    filterModes = [
        BLUR,
        
        GRAY,
        
        INVERT,
        
        
        THRESHOLD,
      ];
     
      index = 0;
      currFilterMode = filterModes[index];
      filter(currFilterMode);

 
}
function draw(){
    image(video,0,0,640,420);
    tint(tint_colour);

    filter(currFilterMode);

;}
function bot(){
    save('your_dirty_face.png');
}
function filter_tint(){
    tint_colour= document.getElementById("color_name").value;
    
    
   }
   function filters(){
    if (index < filterModes.length - 1)
    index++;
  else
    index = 1;
  currFilterMode = filterModes[index];
   }
function remove_tint(){
 tint_colour="";
 index = 0;
  currFilterMode = filterModes[index];
}


