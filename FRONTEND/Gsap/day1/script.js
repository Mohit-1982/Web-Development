// gsap.to('#box1', {
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:'blue',
//     rotate:360,
//     scale:2,
//     borderRadius:"50%"
// });

// gsap.from('#box2', {
//     x:1000,
//     y:100,
//     duration:2,
//     delay:1,
//     backgroundColor:'blue',
//     rotate:360,
//     scale:0.5,
//     borderRadius:"50%"
// });

// gsap.from("h1", {
//     color:"red",
//     opacity:0,
//     y:100,
//     stagger:1,
//     repeat:-1,
//     yoyo:true
// })


const tl = gsap.timeline();

tl.to("#box1", {
    x:1000,
    duration:1.5,
    borderRadius:"5px",
    rotate:90
})

tl.to("#box2", {
    x:1000,
    duration:1.5,
    borderRadius:"10px",
    rotate:180
})

tl.to("#box3", {
    x:1000,
    duration:1.5,
    borderRadius:"15px",
    rotate:360
})