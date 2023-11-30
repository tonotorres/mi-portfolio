<template>
  <div class="ilustracion_fondo">
    <canvas ref="fondoPintura" id="fondoPintura"></canvas>
    <h2 class="title_dentro_hab" style="position: absolute; top: 50%;filter: blur(509px);text-align: center; font-size: 10vw; z-index: 3;">Hola que tal</h2>
    <div class="app-noise noise loaded" data-v-ca1bafaa="" style="opacity: 0.1;"></div>
    <div class="row position-relative" style="height: 100vh; pointer-events: none;">
      <div class="introduccion_ilustracion row text-center justify-content-center"><h2 class="color-white intro__info" style="font-size: 10vw">Haz scroll para ver mi portfolio</h2> </div>
    </div>
    <div class="row" id="apreciar-habitacion" style="height: 200vh; pointer-events: none;">
      <div class="col d-flex justify-content-center position-relative">
        <div class="hab_cero_plano" ></div>
        <div class="hab_primer_plano" ></div>
        <div class="hab_segundo_plano" ></div>
      </div>
    </div>
    <div class="row" id="entrada_photoshop" style="height: 75vh; pointer-events: none;">
      <h2 class="position-absolute" style="top: 30%; left: 0; color: white; z-index: 2; font-size: 25vh; pointer-events: none;"><span>Ilustraciones<br><span style="font-size: 5vh;">Photoshop - Procreate</span></span></h2>
    </div>
    <div class="row" id="entrada_photoshop__seccion" style="height: 50vh; position: relative; pointer-events: none;">
      <div class="col">
        <TransicionPhotoshop></TransicionPhotoshop>
      </div>
    </div>
    <div class="row position-relative images-photoshop">
      <div class="col">
        <ImagesPhotoshop></ImagesPhotoshop>
      </div>
    </div>
    <div class="row position-relative" style="pointer-events: none">
      <div class="col-12 text-center">
        <h2 class="" style="color: white; z-index: 2; font-size: 25vh; pointer-events: none; mix-blend-mode: exclusion;"><span>Animaciones<br><span style="font-size: 5vh;">After Effects - Procreate</span></span></h2>
      </div>
    </div>
    <div class="animaciones"><AnimacionesIlustracion></AnimacionesIlustracion></div>
    <div class="row y-mucho-mas_section" style="height: 200vh; pointer-events: none; width: 100vw;">
      <!-- <video class="inner-wrapper__item-imginner" autoplay loop muted>
        <source src="../assets/images/ilustracion/caida.webm" type="video/webm">
        <p>Tu navegador no puede reproducir el video proporcionado.</p>
      </video> -->
    </div>
  </div>

  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WebGLFluid from 'webgl-fluid';
import Lenis from '@studio-freight/lenis'
import TransicionPhotoshop from './TransicionPhotoshop.vue'
import ImagesPhotoshop from './ImagesPhotoshop.vue'
import AnimacionesIlustracion from './AnimacionesIlustracion.vue'
gsap.registerPlugin(ScrollTrigger);


const lenis = ref(null);

    const fondoPintura = ref();
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
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".introduccion_ilustracion",
          start: "center top",
          end: "bottom center",
          scrub: true,
        }
      });
      // let tl2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#apreciar-habitacion",
      //     start: "-100% top",
      //     end: "bottom top",
      //     scrub: true,
      //     // markers: true,
      //     onEnter: () => {
      //       gsap
      //       .to(".hab_segundo_plano, .hab_primer_plano", { 
      //         position: "fixed", 
      //         top: 0,
      //         duration: 0, // Hace que la animación sea instantánea
      //       }) 
      //     },
      //     onLeave: () => {
      //       gsap
      //       .to(".hab_segundo_plano, .hab_primer_plano", { 
      //         clearProps: "all",
      //         duration: 0, // Hace que la animación sea instantánea
      //       }) 
      //     },
      //     onLeaveBack: () => {
      //       gsap.to(".hab_segundo_plano, .hab_primer_plano", { 
      //         clearProps: "all",
      //         duration: 0, // Hace que la animación sea instantánea
      //       });
      //     }
      //   }
      // });
      gsap.to(".title_dentro_hab", { 
        blur: 0,
        xPercent: 200,
        scrollTrigger: {
          trigger: "#apreciar-habitacion",
          start: "-100% top",
          end: "bottom center",
          scrub: true,
        }
      });
      gsap.to(".hab_primer_plano", { 
        scale: 1.3, // Cambia este valor al deseado
        yPercent: 90, 
        scrollTrigger: {
          trigger: "#apreciar-habitacion",
          start: "top top",
          end: "bottom center",
          scrub: true,
        }
      });
      gsap.to(".hab_cero_plano", { 
        scale: 0.8, // Cambia este valor al deseado
        yPercent: 90, 
        scrollTrigger: {
          trigger: "#apreciar-habitacion",
          start: "top top",
          end: "bottom center",
          scrub: true,
        }
      });
      gsap.to(".hab_segundo_plano", { 
        scale: 1.1, // Cambia este valor al deseado
        yPercent: 100,
        scrollTrigger: {
          trigger: "#apreciar-habitacion",
          start: "top top",
          end: "bottom center",
          scrub: true,
          onLeave: () => {
            // gsap.to(".hab_segundo_plano, .hab_primer_plano", { 

            // });
          },
          onLeaveBack: () => {
            // gsap.to(".hab_segundo_plano, .hab_primer_plano", { 

            // });
          },
        }
      });
        WebGLFluid(fondoPintura.value, {
          IMMEDIATE: false, // Whether to trigger multiple random splats when initialized
          TRIGGER: 'hover', // Can be change to 'click'
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 1024,
          CAPTURE_RESOLUTION: 512,
          DENSITY_DISSIPATION: 1,
          VELOCITY_DISSIPATION: 3.9,
          PRESSURE: 0.8,
          PRESSURE_ITERATIONS: 20,
          CURL: 1,
          SPLAT_RADIUS: 0.75,
          SPLAT_FORCE: 30000,
          SHADING: true,
          COLORFUL: true,
          COLOR_UPDATE_SPEED: 20,
          PAUSED: false,
          // BACK_COLOR: { r: 0, g: 0, b: 0 },
          TRANSPARENT: true,
          BLOOM: true,
          BLOOM_ITERATIONS: 2,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.1,
          BLOOM_THRESHOLD: 0.1,
          BLOOM_SOFT_KNEE: 0.7,
          SUNRAYS: true,
          SUNRAYS_RESOLUTION: 196,
          SUNRAYS_WEIGHT: 0.3,
        });

        initSmoothScrolling();


  });

</script>
    
    <style scoped lang="scss">
@font-face {
  font-family: "Cartoon";
  src: url("../assets/fonts/ilustracion_title.otf") format("truetype");
  font-display: swap;
}
.ilustracion_fondo {
  background-color: black;
  // width: 100vw;
  overflow: hidden;
}
.hab_primer_plano {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  background: url('../assets/images/ilustracion/plano-1.webp');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 3;
  pointer-events: none;
  overflow-y: hidden;

}

.hab_cero_plano {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  background: url('../assets/images/ilustracion/plano-0.webp');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  pointer-events: none;
  overflow-y: hidden;

}
.hab_segundo_plano {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  background: url('../assets/images/ilustracion/plano-2.webp');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  pointer-events: none;
  overflow-y: hidden;

}
.introduccion_ilustracion {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: 2;
}
#entrada_photoshop {
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 100%);
  z-index: 2;
  position: relative;
}
#entrada_photoshop__seccion {
  background: rgb(2,0,2);
  z-index: 2;
  position: relative;
}
.images-photoshop {
  height: 200vh; 
  pointer-events: none; 
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgb(172, 144, 144) 49%, rgb(172, 144, 144) 90%, rgb(0, 0, 0) 100%);
}
.intro__info {
	max-width: 15ch;
    margin-bottom: 20vh;
    padding-bottom: 1rem;
    line-height: 1.1;
    position: relative;
    align-self: end;
    color: white;

}

.intro__info::after {
	content: "";
	width: 3px;
	height: 20vh;
	background: #fff;
	position: absolute;
	top: 100%;
	left: 50%;
}
.animaciones {
  position: relative;
  // height: 300vh; 
  width: 100vw;
  overflow: hidden;
  pointer-events: none; 
  background: transparent;
  // Está guapo pero para luego 
  // background: linear-gradient(180deg, rgb(236, 87, 134) 100% 0%, rgb(236, 87, 134) 49%, rgb(87, 194, 236) 100%);
}
.y-mucho-mas_section {
  background: linear-gradient(180deg,rgba(0,0,0,1) 0%, rgb(236, 87, 134) 19%, rgb(236, 87, 134) 49%, rgb(87, 194, 236) 100%);
}
.noise.loaded {
    -webkit-animation: noise 1.2s steps(3) infinite both;
    animation: noise 1.2s steps(3) infinite both;
}
.noise {
    position: fixed;
    background: url('../assets/noise.webp');
    opacity: 1;
    width: 200%;
    height: 200%;
    left: -50%;
    top: -50%;
    pointer-events: none;
    will-change: auto;
    z-index: 100;
}
@keyframes noise {
  0% {
    transform: translate3d(1%,-1%,0);
}
10% {
    transform: translate3d(-5%,-2%,0);
}
20% {
    transform: translate3d(10%,5%,0);
}
30% {
    transform: translate3d(5%,-11%,0);
}
40% {
    transform: translate3d(-12%,-5%,0);
}
50% {
    transform: translate3d(10%,9%,0);
}
60% {
    transform: translate3d(15%,0,0);
}
70% {
    transform: translate3d(-10%,8%,0);
}
80% {
    transform: translate3d(10%,2%,0);
}
90% {
    transform: translate3d(1%,5%,0);
}
100% {
    transform: translate3d(0,8%,0);
}
}
h2 {
  color: #fff;
  font-family: moret, serif;
  span {
    letter-spacing: 0;
    padding: .25em 0 .325em;
    display: block;
    margin: 0 auto;
    text-shadow: 0 0 80px rgba(255,255,255,.5)

    }
}

canvas {
  position: fixed;
  inset: 0;
  z-index: 0;
  // background-image: url("../assets/images/programacion/netlu.webp");
}
#fondoPintura {
  height: 100vh;
  width: 100vw;
}
  </style>