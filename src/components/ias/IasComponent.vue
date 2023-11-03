<template>
  <div class="hello">
    <div class="intro"> 
      <h1 class="intro__title"> 
        <span class="intro__title-pre title-ai">Toni Torres</span> 
        <span class="intro__title-sub title-ai pt-5">Inteligencias Artificiales</span> 
      </h1> 
      <span class="intro__info">Haz scroll para ver mi portfolio</span> 
    </div>
    <div class="row"><div class="col clouds-begin" style="height: 80vh;"></div></div>
    <ContentIlustracion5></ContentIlustracion5>
    <ContentIlustracion></ContentIlustracion>
    <ContentIlustracion2></ContentIlustracion2>
    <div class="row pb-5">
      <div class="col">
        <h3 class="title-ai"> 
          Mis otros portfolios
        </h3> 
      </div>
    </div>
    <div class="row pb-5">
      <div class="col">
        <h4 class="links col"><a href="https://stability.ai/stablediffusion" target="_blank">Stable Diffusion XL</a><a> + </a> <a>Animación Tradicional</a><a> + </a> <a href="https://nmkd.itch.io/flowframes" target="_blank">Flowframes</a></h4>
      </div>
    </div>
    <div class="row mb-5 mt-5 portfolios" style="max-height: 60vh;">
      <div class="content-scroll w-100">
        <svg id="more-arrows" transform="rotate(180)">
          <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
          <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
          <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
        </svg>
        <p class="pt-2" id="scroll-up-text">Volver arriba</p>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col">
            <a href="https://tonitorresportfolio.com/programacion">
              <img src="../../assets/images/ias/code.webp" class="links-images" alt="WebP Animation" loaded="lazy">
            </a>
          </div>
        </div>
        <div class="row pt-4 w-100">
          <div class="col">
            <p class="subtitle-ai">Portafolio programación</p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col">
            <a href="https://tonitorresportfolio.com/ilustracion">
              <img src="../../assets/images/ias/paint.webp" class="links-images" loaded="lazy" style="transform: scaleX(-1);" alt="WebP Animation">
            </a>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col">
            <p class="subtitle-ai">Portafolio ilustración</p>
          </div>
        </div>
      </div>
    </div>
    <Socials></Socials>
  </div>
</template>

<script setup>

import { nextTick, onMounted, ref } from 'vue';

import ContentIlustracion from './ContentIlustracion.vue';
import ContentIlustracion2 from './ContentIlustracion2.vue';
import Socials from '../SocialsComponent.vue';
import ContentIlustracion5 from './ContentIlustracion5.vue';

import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

// Define a variable that will store the Lenis smooth scrolling object
const lenis = ref(null);

gsap.registerPlugin(ScrollTrigger);

 // Function to initialize Lenis for smooth scrolling
 const initSmoothScrolling = () => {
    // Instantiate the Lenis object with specified properties
    lenis.value = new Lenis({
      duration: 1.5, // Lower values create a smoother scroll effect
      // lerp: 0.1, // Aumenta el valor de lerp
      smoothWheel: true,
      easing: (t) => t * (2 - t),
      // content: scrollClass
    });
    

    // Update ScrollTrigger each time the user scrolls
    lenis.value.on('scroll', () => ScrollTrigger.update());
    
    gsap.ticker.add((time)=>{
        lenis.value.raf(time * 1000)
      })

    gsap.ticker.lagSmoothing(0)

    // Define a function to run at each animation frame
    const scrollFn = (time) => {
      lenis.value.raf(time)
      requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
    };
    // Start the animation frame loop
    requestAnimationFrame(scrollFn);
  };
  function scrollToHello() {
    const helloElement = document.querySelector(".hello");
    helloElement.scrollIntoView({ behavior: "smooth" });
  }

onMounted(async () => {
  await nextTick()
  initSmoothScrolling();
  document.getElementById("more-arrows").addEventListener("click", scrollToHello);
  document.getElementById("scroll-up-text").addEventListener("click", scrollToHello);
  
});
</script>

<style scoped lang="scss">
.hello {
  background-color: #0D0D0D;
  position: relative;
	overflow: hidden;
	width: 100%;
  scroll-behavior: auto;
}

.intro {
	height: calc(100vh - 3rem);
  text-align: center;
  place-items: center;
  display: grid;
  margin-bottom: 30vh;
  background: transparent;
  position: relative;
  z-index: 1;
  pointer-events: none;
}

.intro__title {
    place-items: center;
    margin: 0;
    line-height: .9;
    display: grid;
    margin-top: 15vh;
    font-weight: 400;
}

.intro__title-pre {
	font-weight: 300;
    font-size: clamp(2rem,8vw,5rem);
    color: white;
    text-transform: uppercase;
}

.intro__title-sub {
    font-size: clamp(1.5rem,20vw,8rem);
    color: white;
    max-width: 20ch;
    margin: 0 auto;
}

.intro__info {
	max-width: 15ch;
    opacity: .6;
    margin-bottom: 4rem;
    padding-bottom: 1rem;
    line-height: 1.2;
    position: relative;
    align-self: end;
    color: white;

}

.intro__info::after {
	content: "";
	width: 1px;
	height: 2rem;
	background: #fff;
	position: absolute;
	top: 100%;
	left: 50%;
}
.title-ai {
	font-weight: 300;
	font-size: clamp(1.5rem, 15vw, 6.5rem) !important;
  font-family: 'Encode Sans Expanded', sans-serif;
	color: white;
}
.subtitle-ai {
  font-weight: 300;
	font-size: clamp(0.5rem, 5vw, 2rem) !important;
  font-family: 'Encode Sans Expanded', sans-serif;
	color: white;
}
.links-images {
  border-radius: 50%;
  border: 2px solid white;
  width: auto;
  height:40vh;
}
.links-images:hover{
  border: 3px solid white;
  box-shadow: 0px 0px 2px 5px rgba(255, 255, 255, 0.315);
}
.links {
	font-weight: 300;
	font-size: 2vw !important;
  font-family: 'Encode Sans Expanded', sans-serif;
	color: white;
  width: auto !important;
}
.portfolios {
  position: relative;
}
.content-scroll {
  position: absolute;
  left: 50%;
  top: 50%;
	transform: translate(-50%, -50%);
}
/* Arrow & Hover Animation */
#more-arrows {
	width: 75px;
  height: 65px;
  cursor: pointer;
  
  &:hover {
    
    polygon {
      fill: #FFF;
      transition: all .2s ease-out;

      &.arrow-bottom {
        transform: translateY(-18px);
      }

      &.arrow-top {
        transform: translateY(18px);
      }
      
    }
  
  }
  
}

polygon {
  fill: #FFF;
  transition: all .2s ease-out;
    
  &.arrow-middle {
	  opacity: 0.75;
	}

	&.arrow-top {
	  opacity: 0.5
	}
	 
}
p {
  font-size: 2vw !important;
  font-family: 'Encode Sans Expanded', sans-serif;
	color: white;
}
#scroll-up-text {
  cursor: pointer;
}
</style>