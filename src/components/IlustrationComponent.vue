<template>
  <div>
      <div id="granulado"></div>
      <img :src="require('../assets/images/programacion/legalspain.png')" alt="">
      <canvas ref="fondoPintura" id="fondoPintura"></canvas>
    </div>
    
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WebGLFluid from 'webgl-fluid';

gsap.registerPlugin(ScrollTrigger);



    const fondoPintura = ref();
    

    function animarGranulado() {
      const granulado = document.getElementById("granulado");
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      granulado.style.backgroundPosition = `${x}px ${y}px`;

      requestAnimationFrame(animarGranulado);
    }
    onMounted(() => {
        animarGranulado();
        console.log(fondoPintura.value)
        WebGLFluid(fondoPintura.value, {
          TRANSPARENT: true,
          IMMEDIATE: false,
          TRIGGER: 'hover',
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 1024,
          CAPTURE_RESOLUTION: 512,
          DENSITY_DISSIPATION: 3,
          VELOCITY_DISSIPATION: 15,
          PRESSURE: 0.88,
          PRESSURE_ITERATIONS: 20,
          CURL: 30,
          SPLAT_RADIUS: 0.85,
          SPLAT_FORCE: 13000,
          SHADING: true,
          COLORFUL: '#f33333',
          COLOR_UPDATE_SPEED: 5,
          PAUSED: false,
          BACK_COLOR: {
            r: 0,
            g: 0,
            b: 0
          },
          BLOOM: true,
          BLOOM_ITERATIONS: 8,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.02,
          BLOOM_THRESHOLD: 0.2,
          BLOOM_SOFT_KNEE: 0.2,
          SUNRAYS: true,
          SUNRAYS_RESOLUTION: 196,
          SUNRAYS_WEIGHT: 0.35
        });



  });

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
#granulado {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.1);
  filter: contrast(0) brightness(1000%) sepia(100%) grayscale(100%) invert(100%);
}
canvas {
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  z-index: 0;
  // background-image: url("../assets/images/programacion/netlu.png");
}
  </style>