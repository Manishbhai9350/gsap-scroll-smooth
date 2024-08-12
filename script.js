const lenis = new Lenis()

// Basic 
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// Lenis Scroll Trigger !(Remove These 3 Lines if there is no Scroll Trigger)
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{lenis.raf(time * 1000)})
gsap.ticker.lagSmoothing(0)