(function(Utils) {
    var animationBlock1 = document.getElementById("block1");
    var animationBlock2 = document.getElementById("block2");
    var animationBlock3 = document.getElementById("block3");
    var animationBlock4 = document.getElementById("block4");
    var gifAnimation = document.getElementById("logoGif");
    var loaderBlock= document.getElementById("loaderBlock");
    var body = document.getElementById("body");

    function start() {
        Utils.startGIFAnimation(gifAnimation);
        Utils.removeClass(loaderBlock, "util-hidden");
        setTimeout(() => {
            Utils.addClass(loaderBlock, "util-hidden");
            Utils.removeClass(body, "util-hidden");
            animation1();
        }, 2000);     
    }
    function startMainCointentAnimation() {
        Utils.removeClass(animationBlock1, "util-hidden");
        animation1();
    }

    function animation1() {
        Utils.removeClass(animationBlock1, "util-hidden");
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