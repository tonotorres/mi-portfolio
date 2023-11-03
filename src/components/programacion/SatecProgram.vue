<template>
  <section class="row satec" id="empleosSatec" ref="satecParrafoRef">
    <div class="svg-container" ref="svgContainer">
      <svg class="linea-svg" width="4" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref="lineaPath3" d="M2 0C2 51.9441 2 2050 2 2050" stroke="#7147F5" stroke-width="6" filter="url(#glow)"/>
      </svg>
    </div>
      <div class="col">
        <div class="row" style="height: 30vh;"> </div>     
        <div class="row justify-content-center" ref="graduadoRef" style="position: relative; z-index: 30;">
          <div class="col-4">
            <div class="row pt-2"><div class="col"><aun-no-se-component text="Satec" fontWeight="bold" fontSize="4vw" class="amura-title"></aun-no-se-component></div></div>
            <div class="row pb-5"><div class="col"><aun-no-se-component text="2022 - 2023" fontWeight="bold"></aun-no-se-component></div></div>
            <div class="row pt-4 px-2"><div class="col"><p class="texto-parrafo" style="text-align: center; z-index: 30;">Realización de la web de <a href="https://www.tuseguromovil.com/landing" class="link-job" target="_blank" style="color: #7147F5;;">insurama para clientes</a></p></div></div>
            <div class="row pb-5 px-2"><logos-component :logos="logos"></logos-component></div>
          </div>
          <div class="col-4"><div class="amuraimg-background"><div class="satecBackground" ref="satecBackground"></div></div></div>
          <div class="col-4 align-middle">
            <div class="row pt-5"><div class="col"><p class="texto-parrafo" style="text-align: center; z-index: 30;">Realización de la web de <a href="https://www.elpalaciodehierro.com/" class="link-job" target="_blank" style="color: #7147F5;;">Palacio de hierro para insurama</a></p></div></div>
            <div class="row"><logos-component :logos="[require('@/assets/images/logos/vue.svg'), require('@/assets/images/logos/js.svg'), require('@/assets/images/logos/sass.png')]"></logos-component></div>
            <div class="row pt-5"><div class="col"><p class="texto-parrafo" style="text-align: center; z-index: 30;">Realización de la web <a href="https://insurama.com/es/es/" class="link-job" target="_blank" style="color: #7147F5;;">informativa de insurama</a></p></div></div>
            <div class="row"><logos-component :logos="[require('@/assets/images/logos/wordpress.png'), require('@/assets/images/logos/js.svg'), require('@/assets/images/logos/sass.png')]"></logos-component></div>
          </div>
        </div>
      </div>
  </section>
</template>
 
<script setup>

  import { onMounted, ref, provide } from "vue";
  import AunNoSeComponent from "./AunNoSeComponent.vue";
  import LogosComponent from "./LogosComponent.vue";
  import SatecProgram from "./SatecProgram.vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  // Inicializaciones

  const components = { AunNoSeComponent, LogosComponent, SatecProgram };
  const graduadoRef = ref(null);
  const satecBackground = ref(null);
  const lineaPath3 = ref(null);
  const netluParrafoRef = ref(null);
  const logos = [
    require('@/assets/images/logos/vue.svg'),
    require('@/assets/images/logos/php.svg'),
    require('@/assets/images/logos/js.svg'),
  ];

  provide('satecBackgroundRef', satecBackground);
  gsap.registerPlugin(ScrollTrigger);

  // Funciones

  function animateLineaSvg() {
    const pathLength = lineaPath3.value.getTotalLength();

    gsap.set(lineaPath3.value, {
      strokeDasharray: pathLength,
      strokeDashoffset: (pathLength * 2) * 0.8,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.satec',
        start: 'top bottom',
        end: 'bottom 80%',
        scrub: true,
        once: true,
        onLeave: () => {
          const tl = gsap.timeline({ repeat: 3, yoyo: true  });

          tl.to("#circle_1", { duration: 4, filter: 'brightness(160%)'});
          tl.to("#circle_1", { duration: 4, filter: 'brightness(100%)'});
          gsap.to("#more-projects", { duration: 0.5, opacity: 1 });
        }
      },
    });

    tl.to(lineaPath3.value, {
      // sstrokeDasharray: 1400,
      strokeDashoffset: 0,
      ease: 'none',
    });
  }


  // Life Cycle

  onMounted(() => {
    animateLineaSvg()
  });

</script>
  
<style scoped>

#empleosSatec {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

#graduado {
    width: 80px;
    position: relative;
    z-index: 30;
  }
  #amura {
    position: absolute;
    z-index: 26;
    width: 100%;
  }
  .espacio-graduado {
    width: 100%;
  }
  .amuraimg-background {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%; /* Cambia 'height' a 'min-height' */
    overflow: visible;
  }
  .satecBackground {
    background-color: rgb(255, 255, 255);
    border: 4px solid #7147F5;
    background-image: url("../../assets/images/programacion/satec.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 50vh;
    width: 100%;
    border-radius: 9px;
    position: absolute;
    top: 0;
    overflow: visible;
    z-index: 2;
  }
  .amura-logo {
    position: absolute;
    z-index: 3;
  }
   
.svg-container {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 5;
}

.linea-svg {
  stroke: #7147F5;
  stroke-width: 3;
}
</style>