<template>
  <div id="code" ref="code">
    <div class="row"><div class="col">
      <div class="blop" v-if="isNotTouchDevice">
        <div id="blob"></div>
        <div id="blur"></div>
      </div>
      <FondoCodigo v-if="isNotTouchDevice"></FondoCodigo>
      <IntroduccionProgram></IntroduccionProgram>
      <div class="empleos">
        <section class="row">
          <div class="col-0"></div>
          <div class="col-12">
            <ExperienciaLaboral></ExperienciaLaboral>
          </div>
          <div class="col-0"></div>
        </section>
        <section class="row">
          <div class="col-0"></div>
          <div class="col-12">
            <Conocimientos></Conocimientos>
          </div>
          <div class="col-0"></div>
        </section>
        <div>
      </div>
      <section class="row formulario-fondo">
          <div class="row w-100 separacion_secciones_programacion"></div>
          <div class="row w-100 mx-0 px-0 mx-sm-auto px-sm-auto">
            <div class="col d-flex justify-content-center"><h1 class="section_title_programacion text-shadow-title_programacion color-white mx-0 px-0 mx-sm-auto px-sm-auto">{{$t("formulario_titulo")}}</h1></div>
        </div>
        <div class="row w-100 mx-0 px-0 mx-sm-auto px-sm-auto">
          <div class="col-sm-1 d-sm-block d-none"></div>
          <div class="col-sm-10 col-12">
            <FormularioContacto></FormularioContacto>
          </div>
          <div class="col-sm-1 d-sm-block d-none"></div>
        </div>
        </section>
    </div>
    
    <Socials></Socials>
  </div></div>
  </div>
</template>

<script setup>


import Socials from "../SocialsComponent.vue";
import IntroduccionProgram from "./IntroduccionProgram.vue";
import FondoCodigo from "./FondoCodigo.vue";
import ExperienciaLaboral from "./ExperienciaLaboral.vue";
import Conocimientos from "./Conocimientos.vue";
import FormularioContacto from "./FormularioContacto.vue";
// import MorePorjectsProgram from "./MorePorjectsProgram.vue";

import Lenis from '@studio-freight/lenis'

import { ref, onMounted, onBeforeMount, nextTick, computed  } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const lenis = ref(null);
var isTouchDevice = true;
const isNotTouchDevice = computed(() => !isTouchDevice);
gsap.registerPlugin(ScrollTrigger);

 // Function to initialize Lenis for smooth scrolling
 const initSmoothScrolling = () => {
    // Instantiate the Lenis object with specified properties
    lenis.value = new Lenis({
      duration: 1.3, // Lower values create a smoother scroll effect
      // lerp: 0.1, // Aumenta el valor de lerp
      smoothWheel: true,
      easing: (t) => t * (2 - t),
      // content: scrollClass
    });
    

    // Update ScrollTrigger each time the user scrolls
    lenis.value.on('scroll', () => ScrollTrigger.update());
    
    // gsap.ticker.add((time)=>{
    //     lenis.value.raf(time * 1000)
    //   })

    // gsap.ticker.lagSmoothing(0)

    // Define a function to run at each animation frame
    const scrollFn = (time) => {
      lenis.value.raf(time)
      requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
    };
    // Start the animation frame loop
    requestAnimationFrame(scrollFn);
  };
  onBeforeMount(() => {
    isTouchDevice = window.matchMedia('(hover: none)').matches;
    
  }),
  onMounted(async () => {
  
  
  await nextTick()
  
  if (isNotTouchDevice.value) {
    const blob = document.getElementById("blob");

    window.onpointermove = event => { 
      const { clientX, clientY } = event;
      
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    }
    initSmoothScrolling();
  }
//   gsap.to(".empleos", {
//   scrollTrigger: {
//     trigger: "#conocimientos",
//     start: "top center", // Ajusta esto según dónde quieras que se active el cambio
//     onEnter: function() {
//       gsap.to(".empleos", {
//         backgroundImage: "radial-gradient(rgb(5, 5, 5) 14px, white 9px)",
//         backgroundSize: "20px 20px",
//         duration: 1 // Ajusta la duración de la transición según tus necesidades
//       });
//     },
//     onLeaveBack: function() {
//       gsap.to(".empleos", {
//         backgroundImage: "radial-gradient(hsla(0,0%,58%,.3) 1px,transparent 0)",
//         backgroundSize: "20px 20px",
//         duration: 1 // Ajusta la duración de la transición según tus necesidades
//       });
//     }
//   }
// });
  
});


</script>

<style scoped>

#code{
	height:100%;
	width:100%;
  position: relative;
  background-color: rgb(0,0,0);
  max-width: 100%;
  overflow: hidden;

}

.empleos {
  position: relative;
  z-index: 30;
  height: 100%;
  /* background-image:  radial-gradient(hsla(0,0%,58%,.3) 1px,transparent 0);
  background-size: 20px 20px; */
}


@keyframes rotate {
  from {
    rotate: 0deg;
  }
  
  50% {
    scale: 1 1.5;
  }
  
  to {
    rotate: 360deg;
  }
}

#blob {
  background-color: white;
  height: 34vmax;
  aspect-ratio: 1;
  max-width: 100%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -20% -20%;
  border-radius: 50%;
  background: linear-gradient(to right, rgb(127, 208, 255), mediumpurple);
  animation: rotate 20s infinite;
  opacity: 0.45;
}
.blop {
  z-index: 1;
  max-width: 100%;
  overflow: hidden;
}
#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(12vmax);
}

.formulario-fondo {
  background: rgb(2,0,36);
background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgb(29, 5, 116) 20%, rgb(90, 116, 231) 65%, #050505 100%);
}


</style>