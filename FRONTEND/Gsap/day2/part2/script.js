let initialPath = `M 30 100 Q 500 100 990 100`
let finalPath = `M 30 100 Q 500 100 990 100`

let ele = document.querySelector('#string');

ele.addEventListener('mousemove', (e) => {
    path = `M 30 100 Q ${e.x} ${e.y} 990 100`
    gsap.to("svg path", {
        attr:{
            d:path
        },
        duration:0.3,
        ease:"power3.out"
    })
})

ele.addEventListener('mouseleave', (e) => {
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration:2,
        ease:"elastic.out(1,0.2)"
    })
})