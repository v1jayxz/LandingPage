

// Page aanimation
var timeout;

function firstPageAnim() { 
    var tl = gsap.timeline();

    tl.from('.nav' , {
        y: '-10',
        opacity: 0,
        duration: 1, 
        ease : Expo.easeInOut
    })
    tl.to('.boundingelem' , {
        y: 0,
        duration: 2,
        delay:-1,
        ease:  Expo.easeInOut,
        stagger: .2
    })
    tl.from('.hero-footer' , {
        y: 10,
        opacity: 0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
    })
    
}
firstPageAnim();


// function animate(element, animation, duration, delay) {
//     element.style.animation = `${animation} ${duration}s ease ${delay}s 1 normal forwards`;
// }

// function firstPageAnim() {
//     var nav = document.querySelector('.nav');
//     var boundingelem = document.querySelector('.boundingelem');
//     var heroFooter = document.querySelector('.hero-footer');

//     nav.style.opacity = 0;
//     boundingelem.style.transform = 'translateY(-10px)';
//     heroFooter.style.opacity = 0;
//     heroFooter.style.transform = 'translateY(10px)';

//     animate(nav, 'fadeInUp', 1, 0);
//     animate(boundingelem, 'fadeIn', 2, -1);
//     animate(heroFooter, 'fadeInUp', 1.5, -1);
// }

// firstPageAnim();

// Move animation on mouse circle
function mouseChaptaKaro(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    var timeout;

    window.addEventListener('mousemove', function(dets){
        clearTimeout(timeout);

        xscale = clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function(){
            var miniCircle = document.querySelector('#minicircle');
            miniCircle.style.transform = `translate(${dets.clientX - 6}px ,${dets.clientY - 6}px) scale(1,1)`;
        }, 100);
    });

    function clamp(min, max, val) {
        return Math.min(Math.max(val, min), max);
    }

}

mouseChaptaKaro();


// Mouse circle follows mouse
function circleMouseFollower(xscale,yscale){
    window.addEventListener('mousemove', function(dets) {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px ,${dets.clientY}px) scale(${xscale} , ${yscale})`;
    });
}

circleMouseFollower();
