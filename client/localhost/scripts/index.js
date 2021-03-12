var Bahur;

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
}

