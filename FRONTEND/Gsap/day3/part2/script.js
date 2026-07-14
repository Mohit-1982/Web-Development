window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        gsap.to("#child", {
            transform: "translateX(-200%)",
            duration: 4,
            repeat: -1,
            ease: "none",
        })
        
        gsap.to("#image", {
            rotate:180
        })
    } else {
        gsap.to("#child", {
            transform: "translateX(0%)",
            duration: 4,
            repeat: -1,
            ease: "none",
        })

        gsap.to("#image", {
            rotate:360,
            duration:0.3
        })
    }
})