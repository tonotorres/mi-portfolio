<template>
  <div id="code" ref="code">
    <div class="row"><div class="col">
      <div class="blop">
        <div id="blob"></div>
        <div id="blur"></div>
      </div>
      
    <FondoCodigo></FondoCodigo>
    <IntroduccionProgram @loaded="loadedLine = true"></IntroduccionProgram>
    <div class="row">
      <div class="col">
        <!-- <SkillsHoverLight></SkillsHoverLight> -->
        <!-- <image-with-mouse-interaction :image="netluImage" /> -->
      </div>
    </div>
      <div class="empleos">
        <NetluProgram :loadedLine="loadedLine" @loaded2="loadedLine2 = true"></NetluProgram>
        <AmuraProgram :loadedLine2="loadedLine2"></AmuraProgram>
        <SatecProgram></SatecProgram>
        <div>
          <div class="row">
            <div class="col position-relative" style="height: 20vh;">
              <svg width="20vw" height="20vh" class="dot-finish" viewBox="0 0 800 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <g id="circle_1">
                    <ellipse id="circle" cx="410.338" cy="268.449" rx="63.688" ry="63.622" style="fill:#7147F5;stroke:#7147F5;stroke-width:65px;"/>
                </g>
              </svg>
            </div>
          </div>
          <MorePorjectsProgram></MorePorjectsProgram>
        </div>
    </div>
    
    <Socials></Socials>
  </div></div>
  </div>
</template>

<script setup>


import Socials from "../SocialsComponent.vue";
import IntroduccionProgram from "./IntroduccionProgram.vue";
import FondoCodigo from "./FondoCodigo.vue";
import NetluProgram from "./NetluProgram.vue";
import AmuraProgram from "./AmuraProgram.vue";
import SatecProgram from "./SatecProgram.vue";
import MorePorjectsProgram from "./MorePorjectsProgram.vue";

import Lenis from '@studio-freight/lenis'

import { ref, onMounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const loadedLine = ref(false);
const loadedLine2 = ref(false);
const lenis = ref(null);

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
onMounted(() => {
  const blob = document.getElementById("blob");

  window.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
  }
  initSmoothScrolling();

});


</script>

<style scoped>
body {
    
}
#code{
	height:100%;
	/* height:100vh; */
	/* margin:auto; */
	width:100%;
  position: relative;
  background-color: rgb(0,0,0);

  max-width: 100%;
  overflow: hidden;

}
.webpage {
  height: 100vh;
  width: 100%;
  /* background-color: rgba(0,0,0,1); */
  text-align: center;
  position: relative;
  z-index: 15;
}

.empleos {
  position: relative;
  z-index: 30;
  height: 100%;
  background-image:  radial-gradient(hsla(0,0%,58%,.3) 1px,transparent 0);
  background-size: 20px 20px;
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
.dot-finish {
  position: absolute;
  top: -10%;
  left: 39.8%;
  z-index: 40;
}
</style>