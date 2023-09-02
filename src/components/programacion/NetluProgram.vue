<template>
    <div class="pt-4" id="empleos">
      <div class="svg-container" ref="svgContainer">
        <svg class="linea-svg" width="4" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="lineaPath" d="M2 0C2 51.9441 2 2050 2 2050" stroke="#7147F5" stroke-width="6" filter="url(#glow)"/>
        </svg>
      </div>
      <div class="row" style="height: 30vh;"></div>
        <div class="row pt-4">
            <div class="col-2">
                <div class="row">
                   
                </div>
            </div>
            <div class="col-8">
              <div class="row">
                <div class ="col">
                  <div class="parrafo p-4 animated-content">
                    <div class="row" style="z-index: 50;">
                        <div class="col text-center"><aun-no-se-component text="Netlu Solucions" fontWeight="bold" fontSize="4vw"></aun-no-se-component></div>
                    </div>
                    <div class="row" style="z-index: 50;">
                        <div class="col text-center"><aun-no-se-component text="2019 - 2021" fontWeight="bold"></aun-no-se-component></div>
                    </div>
                    <div class="row" style="z-index: 50;">
                        <div class="col text-start"><aun-no-se-component text=""></aun-no-se-component></div>
                    </div>
                    <div class="row"><div class="col"><p class="texto-parrafo text-center">Desarrollo de plataforma web para la comunicación interna y la gestión de tareas para <a href="https://www.salvadorescoda.com/" class="link-job" style="color: #7147F5;" target="_blank">Salvador Escoda</a></p></div></div>
                    <div class="row"> <logos-component :logos="logos"></logos-component></div>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-2 pr-3 pl-3 netlu-container"></div>
        </div>
    </div>
  </template>
   
  <script setup>
    import { gsap } from "gsap";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { onMounted, ref } from "vue";
    import AunNoSeComponent from "./AunNoSeComponent.vue";
    import LogosComponent from "./LogosComponent.vue";

    const components = { AunNoSeComponent, LogosComponent };
    const text = '\n  \n ';
    const logos = [
      require('@/assets/images/logos/vue.png'),
      require('@/assets/images/logos/js.png'),
      require('@/assets/images/logos/bootstrap.svg'),
      require('@/assets/images/logos/node.png'),
      require('@/assets/images/logos/jquery.png'),
      require('@/assets/images/logos/sass.png'),
      require('@/assets/images/logos/laravel.png'),
    ];
    const lineaPath = ref(null);

    gsap.registerPlugin(ScrollTrigger);

    function initAnimation() {
      // Selecciona el elemento que deseas animar
      const animatedContent = document.querySelector(".animated-content");

      // Establece la posición inicial del elemento (oculto y desplazado hacia arriba)
      gsap.set(animatedContent, {
        opacity: 0,
        y: -50,
      });

      // Crea la animación utilizando GSAP y ScrollTrigger
      gsap.to(animatedContent, {
        opacity: 1,
        y: 0,
        duration: 0.8, // Duración de la animación en segundos
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".primer-parrafo", // El trigger que activará la animación
          start: "top", // La animación se activará cuando el trigger alcance el centro de la pantalla
          once: true, // La animación se ejecutará solo una vez
        },
      });
    }
    function animateLineaSvg() {
      const pathLength = lineaPath.value.getTotalLength();

      gsap.set(lineaPath.value, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength * 1.09,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.primer-parrafo',
          start: 'top',
          end: 'bottom',
          once: true,
          // Agregar un evento onEnter para iniciar la animación automáticamente
          onEnter: () => {
            tl.play();
          },
        },
      });

      // Establecer la duración de la animación en lugar de depender del desplazamiento
      tl.to(lineaPath.value, {
        strokeDashoffset: 0,
        ease: 'none',
        duration: 2.6, // Ajusta la duración según lo deseado
      });

      // Detener la animación al principio para que no se ejecute hasta que se active el evento onEnter
      tl.pause();
    }

    onMounted(() => {
      animateLineaSvg()
      initAnimation();
    });

  </script>
    
<style scoped>
  .empleos {
    position: relative;
    z-index: 26;
    height: 100%;
  }
  .netlu-container {
    position: relative;
  }
  .responsive-image-netlu {
    z-index: 25;
    
    bottom: 0;
  }
  .responsive-image {
    width: 80%;
    height: auto;
  }
  #netlu {
    position: absolute;
  }
  .title-program {
  font-family: "Mona Sans SemiBold","Mona Sans Header Fallback",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  color: white;
  }
  .linea3-container {
    position: relative;
    height: 50vh;
  }
  .line-3 {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  .image-mouse-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
.svg-container {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  overflow: hidden;
}

.linea-svg {
  stroke: #7147F5;
  stroke-width: 3;
}
</style>