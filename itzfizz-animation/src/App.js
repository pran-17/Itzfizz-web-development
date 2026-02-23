import { useEffect, useState } from "react";
import gsap from "gsap";
import car from "./assests/car.jpg";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  // Dashboard title animation (runs once)
  useEffect(() => {
    gsap.to(".title span", {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  // Spacebar handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code !== "Space") return;
      e.preventDefault();

      if (step === 0) {
        gsap.to(".car", { x: 700, duration: 1.5, ease: "power3.out" });
        gsap.to(".t1", { opacity: 1, y: -20, duration: 1, delay: 0.4 });
        setStep(1);
      } 
      else if (step === 1) {
        gsap.to(".car", { x: 1400, duration: 1.5, ease: "power3.out" });
        gsap.to(".t2", { opacity: 1, y: -20, duration: 1, delay: 0.4 });
        setStep(2);
      } 
      else if (step === 2) {
        gsap.to(".car", { x: 2100, duration: 1.5, ease: "power3.out" });
        gsap.to(".t3", { opacity: 1, y: -20, duration: 1, delay: 0.4 });
        setStep(3);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step]);

  return (
    <div className="app">
      {/* DASHBOARD */}
      <header className="dashboard">
        <h1 className="title">
          {"WELCOME TO ITZFIZZ".split("").map((char, i) => (
            <span key={i}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </h1>
        <p className="hint">Press SPACE to continue</p>
      </header>

      {/* HERO */}
      <section className="hero">
        <img src={car} className="car" alt="Car" />

        <div className="text t1">95% User Satisfaction</div>
        <div className="text t2">120% Performance</div>
        <div className="text t3">80% Energy Efficient</div>

        {/* PROGRESS DOTS */}
        <div className="progress">
          <span className={`dot ${step === 0 ? "active" : ""}`}></span>
          <span className={`dot ${step === 1 ? "active" : ""}`}></span>
          <span className={`dot ${step === 2 ? "active" : ""}`}></span>
        </div>
      </section>
    </div>
  );
}

export default App;
