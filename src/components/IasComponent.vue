<template>
    <section>
  <h1>Scroll</h1>
  <img src="https://assets.codepen.io/1600187/bug.png" alt="" />
</section>
  </template>
  
  <script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    const svg = ref(null);
    const maskTitle = ref(null);
    const chevron = ref(null);

    onMounted(async () => {
        gsap.registerPlugin(ScrollTrigger);

gsap.to("img", {
  clipPath: "circle(100%)",
  duration: 6,
  ease: "sine.inOut",
  scrollTrigger: {
    trigger: "section",
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: true
    // markers: true
  }
});


});


    return {
      svg,
      maskTitle,
      chevron,
    };
  },
};
</script>
    
    <style scoped lang="scss">

section {
  position: relative;
  height: 100vh;
  width: 100%;
  background: #000;
  display: grid;
  place-content: center;
}

h1 {
  color: #fff;
  z-index: 5;
  mix-blend-mode: difference;
  text-transform: uppercase;
  font-size: 100px;
  line-height: 1;
  padding-top: 20px;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: circle(0%);
}

  </style>