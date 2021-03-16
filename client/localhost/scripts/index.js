var Bahur;
var frames = [0,1,2,3,4];
var curentFrame = 0;
var isRunning = false;
var direectionX = 0;//1 or -1 
var direectionY = 0; 
var frameCount = 0 ;

window.onload = function(){

    Bahur = {
        mikum:{x:200,y:200}
    }
    
    render();

    document.onkeydown = function(el,s)
    {
        isRunning = true;
        if(el.key == 'ArrowUp')
        {
            direectionY = -4;
        }
        if(el.key == 'ArrowDown')
        {
            direectionY = 4
            
        }
        if(el.key == 'ArrowLeft')
        {
            direectionX = -4;
            
        }
        if(el.key == 'ArrowRight')
        {
            direectionX = 4;            
        }

        
    }

    document.onkeyup = function(el)
    {
        isRunning = false;
        direectionX = 0;//1 or -1 
        direectionY = 0; 

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

var runningFrames = [1,1,1,2,3,3,3,4];

function render(){
    bahur.style.top = Bahur.mikum.y;
    bahur.style.left = Bahur.mikum.x;
    
    if(isRunning)
    {
        frameCount++;        
        if(frameCount > runningFrames.length-1)
            frameCount = 0;
        curentFrame=runningFrames[frameCount];
    }
    else 
        curentFrame =0;
    var engenneers = document.getElementsByClassName('engeneer')
    for(var i=0 ; i <engenneers.length ; i++ )
        engenneers[i].style.display = 'none'

    var engenneer = document.getElementById('bahur_' + curentFrame)

    engenneer.style.display = 'block'
}

