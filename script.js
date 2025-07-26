function valueSetteras() {
    gsap.set('#nav a', {y: "-100%", opacity: 0})
    gsap.set("#home span .child", {y: '100%'})  
    gsap.set("#home .row img", {opacity: 0})

    document.querySelectorAll('#Visual > g').forEach(function (group) {
        // group ke andar <g> hoga, uske andar <path> ya <polyline>
        const innerGroup = group.querySelector('g');
        const character = innerGroup?.querySelector('path, polyline');
      
        if (character && typeof character.getTotalLength === 'function') {
          const length = character.getTotalLength();
          character.style.strokeDasharray = length + "px";
          character.style.strokeDashoffset = length + "px";
        }
      });

}

function revealToSspan() {
    document.querySelectorAll('.reveal').forEach(function(elem){
        let parent = document.createElement('span');
        let child = document.createElement('span');
    
        parent.classList.add('parent');
        child.classList.add('child');
    
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
        console.log(parent);
    
        elem.innerHTML = "";
        elem.appendChild(parent);
    
    })
}

function loaderAnimation() {
var tl = gsap.timeline()
tl
.from('#loader .child span', {
    x: "100",
    stagger: .2,
    duration: 1,
    ease: Power3.easeInOut
})

.to('.parent .child', {
    y: "-100%",
    duration: 0.5,
    ease: Circ.easeInOut,
})

.to('#loader', {
    height: 0,
    duration: 0.5,
    ease: Circ.easeInOut,
})
.to('#green', {
    height: "100%",
    top: 0,
    duration: 0.6,
    delay: -.2, 
    ease: Circ.easeInOut,
})
.to('#green', {
    height: "0%",
    top: 0,
    duration: 0.7,
    delay: -.2,
    ease: Circ.easeInOut,
    onComplete: function () {
        animateHomePage()
    }
})
}

function animateSvg() { 
      gsap.set('#Visual > g > g > path, #Visual > g > g > polyline', function (i, target) {
        const length = target.getTotalLength();
        target.style.strokeDasharray = length;
        target.style.strokeDashoffset = length;
      });
      
      gsap.to('#Visual > g > g > path, #Visual > g > g > polyline', {
        strokeDashoffset: 0,
        duration: 3,
        ease: "expo.inOut",
        delay: -0.6 ,
      });
      
}

function animateHomePage () {
    var tl = gsap.timeline();

    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: .05,
        ease: Expo.easeInOut
    })
    tl.to("#home .parent .child", {
        y: 0,
        stagger: .1,
        duration: 1,
        ease: Expo.easeInOut
    })
    tl.to("#home .row img", {
        opacity: 1,
        duration:  0.5,    
        ease: Expo.easeInOut,
        onComplete: function(){
            animateSvg();
        }
    })  
}


revealToSspan();
valueSetteras();
loaderAnimation();



