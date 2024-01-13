video="";
status1="";
objects=[];
function preload(){  
}
function setup(){
    canvas=createCanvas(400,400);
    video= createCapture(VIDEO);
    canvas.center();
    canvas.hide();
}
function draw(){
        image(video,0,0,480,380);
        if (status1 != ""){
            objectDetector.detect(video,gotresults)
            for(i=0;i<objects.length; i++){
                document.getElementById('status').innerHTML="Status:objects detected";
                document.getElementById('no.of_objects').innerHTML="no.of objects:" + objects.length;
                percent=floor(objects[i].confidence * 100);
                fill("#FF0000");
                text(objects[i].label+ " "+ percent+ "%", objects[i].x, objects[i].y);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            }
        }
    }

function start(){
    object_detector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById('status').innerHTML="status:Object is Detecting";
}
function modelloaded(){
    console.log("model has been loaded ");
    status1=true;
}
function gotresults(error,results){
    if(error){
        console.error("error");
    }
    console.log(results)
    objects=results;
}