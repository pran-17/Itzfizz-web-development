/* =============================
   DASHBOARD TITLE ANIMATION
   (RUNS ONCE ON LOAD)
============================= */
gsap.to(".title span", {
  opacity: 1,
  y: 0,
  stagger: 0.05,
  duration: 0.6,
  ease: "power3.out"
});

/* =============================
   PROGRESS DOTS LOGIC
============================= */
const dots = document.querySelectorAll(".dot");

function updateProgress(step) {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === step);
  });
}

/* =============================
   SPACEBAR CONTROLLED ANIMATION
============================= */
let step = 0;

document.addEventListener("keydown", (e) => {
  if (e.code !== "Space") return;

  e.preventDefault(); // stop page jump

  // STEP 1 – User Satisfaction
  if (step === 0) {
    gsap.to(".car", {
      x: 700,
      duration: 1.5,
      ease: "power3.out"
    });

    gsap.to(".t1", {
      opacity: 1,
      y: -20,
      duration: 1,
      delay: 0.4,
      ease: "power3.out"
    });

    updateProgress(step);
    step++;
  }

  // STEP 2 – Performance
  else if (step === 1) {
    gsap.to(".car", {
      x: 1400,
      duration: 1.5,
      ease: "power3.out"
    });

    gsap.to(".t2", {
      opacity: 1,
      y: -20,
      duration: 1,
      delay: 0.4,
      ease: "power3.out"
    });

    updateProgress(step);
    step++;
  }

  // STEP 3 – Energy Efficient
  else if (step === 2) {
    gsap.to(".car", {
      x: 2100,
      duration: 1.5,
      ease: "power3.out"
    });

    gsap.to(".t3", {
      opacity: 1,
      y: -20,
      duration: 1,
      delay: 0.4,
      ease: "power3.out"
    });

    updateProgress(step);
    step++;
  }
});