<template>
  <div>
    <section class="home">
      <h1 class="blurry-text">Bienvenido a mi portfolio, espero que te guste :)</h1>
      <canvas id="container"></canvas>
    </section>
  </div>
</template>

<script>
import { Application } from '@splinetool/runtime';
import { onMounted, onBeforeMount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function toggleScroll(enabled) {
  if (enabled) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
}

let lastScrollTop = 0;

function scrollDirection() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const direction = scrollTop > lastScrollTop ? 'down' : 'up';
  lastScrollTop = scrollTop;
  return direction;
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

function handleScroll() {
  const direction = scrollDirection();
  const h1 = document.querySelector('h1');

  if (direction === 'down') {
    const opacity = 1 - window.scrollY / h1.offsetHeight;
    h1.style.opacity = opacity;
  }

  if (window.scrollY >= document.body.scrollHeight - window.innerHeight) {
    h1.style.display = 'none';
  } else {
    h1.style.display = 'block';
  }
}

export default {
  setup() {
    onBeforeMount(() => {
      // gsap.to("h1", {
      //   duration: 1,
      //   filter: 'blur(0px)',
      //   ease: 'power2.inOut',
      //   delay: 0
      // });
    })
    onMounted(() => {
      toggleScroll(false);
      
      const canvas = document.getElementById('container');
      const app = new Application(canvas);
      
      app.load('https://prod.spline.design/nk18LjiVI0E0KuN5/scene.splinecode')
      .then(() => {
        toggleScroll(true);
        scrollToBottom();
        toggleScroll(false);

      });
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.to("canvas", {
        clipPath: "circle(100%)",
        duration: 6,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: true
        }
      });

      window.addEventListener('scroll', handleScroll);
    });
  }
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
  font-size: 100px;
  line-height: 1;
  padding-top: 20px;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: circle(0%);
}
.blurry-text {
  filter: blur(4px);
  animation: blurry 1s ease-in-out forwards;
}

@keyframes blurry {
  0% {
    filter: blur(4px);
  }
  100% {
    filter: blur(0px);
  }
}
</style>
