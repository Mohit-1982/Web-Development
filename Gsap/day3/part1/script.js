const breakText = () => {
    const h1 = document.querySelector('h1');
    let text = h1.textContent;
    text = text.split("");

    let clutter = "";

    text.forEach((val, idx) => {
        if (idx < Math.floor(text.length / 2))
            clutter += `<span class="left">${val}</span>`
        else 
            clutter += `<span class="right">${val}</span>`
    })

    h1.innerHTML = clutter;
}

breakText();

gsap.from('.left', {
    y:80,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15
})

gsap.from('.right', {
    y:80,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.15
})