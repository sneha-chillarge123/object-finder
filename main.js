status="";
object="";
objects=[];

function preload(){

}

function setup(){
   canvas= createCanvas(400,400);
   canvas.position(500,180);
   video= createCapture(VIDEO);
   video.hide();
   
   
}

function draw(){
   image(video,0,0,400,400);
   if(status != ""){
      object_detecter.detect(video, gotResults);
      for(i=0;i<objects.length;i++){
         
         document.getElementById("accuracy").innerHTML = "Number of objects are: " + objects.length;
         fill("red");
         stroke("red");
         noFill();
         percent  = floor(objects[i].confidence *100);
         rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
         text(objects[i].label+ " " +percent + " %" , objects[i].x+15 , objects[i].y+15);
      }
    }
}

function start(){
   object_detecter = ml5.objectDetector('cocossd', model_loaded);
   document.getElementById("accuracy").innerHTML = "Status = object is found";
   object = document.getElementById("value").value;
   if(objects[i].label == object_name){
      video.stop()
      objectDetector.detect(gotResults);
      document.getElementById("no_of_objects").innerHTML = ""
   }
}

function model_loaded(){
   console.log("model has loaded");
   status = true;
} 

function gotResults(error,results){
   if(error){
      console.error(error);
   }
   else{
      console.log(results);
      objects = results;
   }
}
