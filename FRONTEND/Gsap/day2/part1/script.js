// gsap.to("#page1 #box", {
//     scale:2,
//     delay:1,
//     duration:2,
//     rotate:360
// })

// gsap.from("#page2 #box", {
//     scale:2,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger: {
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         scrub:2,
//         pin:true
//     }
// })

gsap.to("#page2 h1", {
    transform:"translateX(-150%)",
    scrollTrigger: {
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top, -100%",
        scrub:3,
        pin:true
    }
})