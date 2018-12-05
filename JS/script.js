(function(Utils) {
    var animationBlock0 =document.getElementById("block0");
    var animationBlock00 =document.getElementById("block00");
    var animationBlock1 = document.getElementById("block1");
    var animationBlock2 = document.getElementById("block2");
    var animationBlock3 = document.getElementById("block3");
    var animationBlock4 = document.getElementById("block4");
    var animationBlock5 = document.getElementById("block5");
    var animationBlock6 = document.getElementById("block6");
    var gifAnimation = document.getElementById("logoGif");
    var loaderBlock= document.getElementById("loaderBlock");
    var body = document.getElementById("body");

    function start() {
        Utils.startGIFAnimation(gifAnimation);
        Utils.removeClass(loaderBlock, "util-hidden");
        setTimeout(() => {
            Utils.addClass(loaderBlock, "util-hidden");
            Utils.removeClass(body, "util-hidden");
            animation0();
        }, 2000);     
    }

    function startMainCointentAnimation() {
        Utils.removeClass(animationBlock1, "util-hidden");
        animation1();
    }

    

    function animation0(){
        Utils.removeClass(animationBlock0, "util-hidden");
        Utils.removeClass(animationBlock00, "util-hidden");
        //debugger;
        setTimeout(()=>{
            animation00();
        },2000);
    }

    function animation00(){
        Utils.addClass(animationBlock00, "util-hidden");
        Utils.removeClass(animationBlock5, "util-hidden");
        setTimeout(()=>{
            animation1();
        },2000);
    }

    function animation1() {
        Utils.removeClass(animationBlock1, "util-hidden");
        Utils.addClass(animationBlock0, "util-hidden");
        setTimeout(() => {
           
            animation2();
        }, 2000);
    }
    function animation2() {
        Utils.removeClass(animationBlock2, "util-hidden");
        Utils.addClass(animationBlock1, "util-hidden");
        setTimeout(() => {
            
            animation3();
        }, 1000);
    }
    function animation3() {
        Utils.removeClass(animationBlock3, "util-hidden");
        Utils.addClass(animationBlock2, "util-hidden");
        setTimeout(() => {
            
            animation4();
        }, 2000);
    }
    function animation4() {
        Utils.removeClass(animationBlock4, "util-hidden");
        Utils.addClass(animationBlock3, "util-hidden");
    }
    start();
}(Utils))