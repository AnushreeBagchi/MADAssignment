var Utils = Utils || {};
(function(Utils) {
    Utils.removeClass = function(el, className) {
        if (el.classList)
            el.classList.remove(className);
        else
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    Utils.addClass = function(el, className) {
        if (el.classList)
            el.classList.add(className);
        else
        el.className += ' ' + className;
    }
    Utils.startGIFAnimation = function(el, imageUrl) {
        setTimeout(()=> {
            Utils.removeClass(el, "util-hidden");
            el.src = "./assets/images/logo2.gif";
        }, 10);
    };
}(Utils)); 