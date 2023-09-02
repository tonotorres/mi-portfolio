<template>
    <div class="animated-text-container">
      <p>
        Spice up your type with CSS
        <span ref="animatedText">
          Animated text fill
        </span>
        &mdash; no JavaScript required &mdash;
      </p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  export default {
    setup() {
      const animatedText = ref(null);
  
      onMounted(() => {
        gsap.to(animatedText.value, {
          backgroundPosition: '100% 50%',
          scrollTrigger: {
            trigger: animatedText.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            once: true,
          },
        });
      });
  
      return { animatedText };
    },
  };
  </script>
  
  <style scoped>
  
  p {
    text-transform: uppercase;
    letter-spacing: 0.5em;
    display: inline-block;
    border: 4px double rgba(255, 255, 255, 0.25);
    border-width: 4px 0;
    padding: 1.5em 0em;
    width: 40em;
    margin: 0 0 0 -20em;
    z-index: 40;
  }
  
  span {
    font: 700 4em/1 "Oswald", sans-serif;
    letter-spacing: 0;
    padding: 0.25em 0 0.325em;
    display: block;
    margin: 0 auto;
    text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
    background: url(../assets/images/programacion/titulo.png) repeat-y;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
  }
  </style>