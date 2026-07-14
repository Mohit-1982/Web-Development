const main = document.querySelector('#main');
const cursor = document.querySelector('#cursor');

main.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x:e.x,
        y:e.y,
        duration:0.5,
        ease:"back.out"
    })
});