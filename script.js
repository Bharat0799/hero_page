gsap.registerPlugin(ScrollTrigger);

// Subtle animation for the real fog images
gsap.to("#initial-fog img:last-child", {
    x: 30,
    duration: 20,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
});

// Master Timeline
const masterTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
    }
});

// --- PHASE 1: Initial Fog Clears ---
masterTl.to("#intro-text", { opacity: 0, duration: 0.2 }, 0);

// "Initial Fog" lifts up
masterTl.to("#initial-fog", {
    y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
}, 0.2);

// --- PHASE 2: Birds & Cards ---
// Birds Fly
masterTl.to("#bird-1", { opacity: 1, x: "140vw", y: "10vh", duration: 2, ease: "none" }, 0.1);
masterTl.to("#bird-2", { opacity: 1, x: "-140vw", y: "5vh", duration: 2.5, ease: "none" }, 0.2);
masterTl.to("#bird-3", { opacity: 0.8, x: "150vw", duration: 3, ease: "none" }, 0.1);

// Cards Descend
const cards = ["#card-group-1", "#card-group-2", "#card-group-3", "#card-group-4"];

cards.forEach((card, i) => {
    const xPositions = ["-30vw", "30vw", "-25vw", "25vw"];
    const rotations = ["4deg", "-4deg", "2deg", "-2deg"];

    masterTl.to(card, {
        y: "65vh",
        x: xPositions[i],
        rotation: rotations[i],
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    }, 0.8 + (i * 0.4));

    masterTl.to(card, {
        rotation: (i % 2 === 0 ? "-3deg" : "3deg"),
        duration: 0.3,
        yoyo: true,
        repeat: 1
    });
});

// --- PHASE 3: Cards Leave ---
cards.forEach((card, i) => {
    masterTl.to(card, {
        y: "-120vh",
        rotation: (i % 2 === 0 ? 20 : -20),
        opacity: 0,
        duration: 0.8,
        ease: "power1.in"
    }, "-=0.5");
});

// --- PHASE 4: The Grand Reveal (Cloud Video Fades) ---

// 1. Reveal Nature Background (Opacity)
masterTl.to("#nature-bg img", { opacity: 1, scale: 1.05, duration: 1 }, "-=0.8");
masterTl.to("#vignette", { opacity: 1, duration: 0.5 }, "-=0.5");

// 2. Fade the cloud video to uncover the scene
masterTl.to("#cloud-video", {
    opacity: 0,
    scale: 1.02,
    duration: 1.2,
    ease: "power2.inOut"
}, "-=0.8");

// --- PHASE 5: Final Text ---
masterTl.to("#final-reveal", {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
}, "-=1").from("#final-reveal h1", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
});
