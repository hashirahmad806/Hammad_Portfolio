import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function setupMotionSystem() {
  if (typeof window === 'undefined') return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduced-motion');
    return;
  }

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Lenis
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  // Connect Lenis to ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Initialize ScrollTrigger choreographies
  initScrollAnimations();

  return lenis;
}

function initScrollAnimations() {
  // 1. Reveal headings with staggered word/line illumination
  const reveals = document.querySelectorAll('.gsap-reveal');
  reveals.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // 2. Parallax and scale on project preview cards
  const projectCards = document.querySelectorAll('.gsap-card');
  projectCards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: (index % 2) * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // 3. Manifesto dynamic text illumination
  const manifesto = document.querySelector('.manifesto-text');
  if (manifesto) {
    gsap.fromTo(
      manifesto,
      { opacity: 0.25, filter: 'blur(4px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: manifesto,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: 0.5,
        },
      }
    );
  }
}
