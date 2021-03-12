var Bahur;
var frames = [0,1,2,3,4];
var curentFrame = 0;

window.onload = function(){

    Bahur = {
        mikum:{x:200,y:200}
    }
    
    render();

    document.onkeydown = function(el,s)
    {
        if(el.key == 'ArrowUp')
        {
            Bahur.mikum.y --;
        }
        if(el.key == 'ArrowDown')
        {
            Bahur.mikum.y ++;
        }
        if(el.key == 'ArrowLeft')
        {
            Bahur.mikum.x --;
        }
        if(el.key == 'ArrowRight')
        {
            Bahur.mikum.x ++;
        }

        render();
    }

}

function render(){
    bahur.style.top = Bahur.mikum.y;
    bahur.style.left = Bahur.mikum.x;
    curentFrame++;
    if(curentFrame > frames.length-1)
        curentFrame = 0;
    
    var engenneers = document.getElementsByClassName('engeneer')
    for(var i=0 ; i <engenneers.length ; i++ )
        engenneers[i].style.display = 'none'

    var engenneer = document.getElementById('bahur_' + curentFrame)

    engenneer.style.display = 'block'
}

