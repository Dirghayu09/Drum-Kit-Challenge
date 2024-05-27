document.addEventListener("keydown", function(e) {
    console.log(e.key+ ":" + e.keyCode);
    if(e.keyCode===87){
        var audio = document.querySelector(".a1");
        audio.play();
    }else if(e.keyCode===65){
        var audio = document.querySelector(".a2");
        audio.play();
    }else if(e.keyCode===83){
        var audio = document.querySelector(".a3");
        audio.play();
    }else if(e.keyCode===68){
        var audio = document.querySelector(".a4");
        audio.play();
    }else if(e.keyCode===74){
        var audio = document.querySelector(".a5");
        audio.play();
    }else if(e.keyCode===75){
        var audio = document.querySelector(".a6");
        audio.play();
    }else if(e.keyCode===76){
        var audio = document.querySelector(".a7");
        audio.play();
    }
});

