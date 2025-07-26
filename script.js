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
.from('.child span', {
    x: "100",
    stagger: .2,
    duration: 1.4,
    ease: Power3.easeInOut
})

.to('.parent .child', {
    y: "-100%",
    duration: 1,
    // delay: 1,
    ease: Circ.easeInOut,
})

.to('#loader', {
    height: 0,
    duration: 1,
    // delay: 1,
    ease: Circ.easeInOut,
})
.to('#green', {
    height: "100%",
    top: 0,
    duration: 1,
    delay: -.5, 
    ease: Circ.easeInOut,
})
.to('#green', {
    height: "0%",
    top: 0,
    duration: 1,
    delay: 1,
    ease: Circ.easeInOut,
})
}

revealToSspan();
// loaderAnimation();

gsap.from('g path', {
    strokeDasharray: 64.68521881103516,
    strikeOffset: 64.68521881103516,
    duration: 1,
    ease: Power3
})


