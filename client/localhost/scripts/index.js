var Bahur;
var frames = [0,1,2,3,4];
var curentFrame = 0;
var isRunning = false;
var direectionX = 0;//1 or -1 
var direectionY = 0; 
var frameCount = 0 ;
var rightDirection = true;

window.onload = function(){

    Bahur = {
        mikum:{x:200,y:200},
        
    }
    
    render();

    document.onkeydown = function(el,s)
    {
        isRunning = true;
        if(el.key == 'ArrowUp')
        {
            direectionY = -8;
        }
        if(el.key == 'ArrowDown')
        {
            direectionY = 8;
            
        }
        if(el.key == 'ArrowLeft')
        {
            direectionX = -8;
            rightDirection = false
        }
        if(el.key == 'ArrowRight')
        {
            direectionX = 8;  
            rightDirection = true;          
        }

        
    }

    document.onkeyup = function(el)
    {
        if(el.key == 'ArrowUp' || el.key == 'ArrowDown' )
            direectionY = 0; 
        if(el.key == 'ArrowRight' || el.key == 'ArrowLeft' )
            direectionX = 0; 

        if(direectionX == 0 && direectionY == 0)
            isRunning = false;
        

    }

}

setInterval(function () {
    

    if(isRunning == true)
    {
  
        Bahur.mikum.y += direectionY;
        Bahur.mikum.x += direectionX;
   
    }
    render();
  }, 40);

var runningFrames = [1,1,1,1,1,2,3,3,3,3,3,4];
var jumpingFrames = [3,8,9,8,3,0,3,8,9,8,3,0];

function render(){
    
    bahur.style.left = Bahur.mikum.x;
    
    if(isRunning)
    {
        frameCount++;        
        if(frameCount > runningFrames.length-1)
            frameCount = 0;
        curentFrame=runningFrames[frameCount];
        bahur.style.top = Bahur.mikum.y - jumpingFrames[frameCount];
    }
    else 
    {        
        bahur.style.top = Bahur.mikum.y;
        curentFrame =0;
    }
    var engenneers = document.getElementsByClassName('engeneer')
    for(var i=0 ; i <engenneers.length ; i++ )
        engenneers[i].style.display = 'none'

    var engenneer;
        if(rightDirection ==false)
            engenneer = document.getElementById('bahur_' + curentFrame)
        else
            engenneer = document.getElementById('right_bahur_' + curentFrame)

    engenneer.style.display = 'block';
}

