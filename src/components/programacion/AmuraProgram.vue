<template>
    <div class="row amura" id="empleosAmura" ref="netluParrafoRef">
      <div class="svg-container" ref="svgContainer">
        <svg class="linea-svg" width="4" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="lineaPath2" d="M2 0C2 51.9441 2 2050 2 2050" stroke="#7147F5" stroke-width="6" filter="url(#glow)"/>
        </svg>
      </div>
        <div class="col">
          <div class="row" style="height: 15vh;"> </div>
          <div class="row">
            <div class="col-5 text-end pt-4"><p  ref="subtitleRef" class="normal-text" >2021 - Me gradúo en ingeniería informática</p></div>
            <div class="col-2 text-center"><img class="graduado" id="graduado" src="@/assets/images/programacion/graduado.svg"></div>
            <div class="col-5"></div>
          </div>
          <div class="row" style="height: 15vh;"> </div>
        </div>
        <div class="row justify-content-center" ref="graduadoRef">
          <div class="col-4">
            <div class="row pt-2"><div class="col"><aun-no-se-component text="Amura IT" fontWeight="bold" fontSize="4vw" class="amura-title"></aun-no-se-component></div></div>
            <div class="row pb-5"><div class="col"><aun-no-se-component text="2021 - 2022" fontWeight="bold"></aun-no-se-component></div></div>
            <div class="row pt-4 px-2"><div class="col"><aun-no-se-component gradientColor1="#FFFFFF" fontSize="1.5vw" fontWeight="bold" gradientColor2="#000000" text="Datamining de la base de datos de Roche y luego creación de una web que muestra gráficos sobre los resultados extraídos"></aun-no-se-component></div></div>
            <div class="row pb-5 px-2"><logos-component :logos="logos" :margin-bottom="true"></logos-component></div>
          </div>
          <div class="col-4"><div class="amuraimg-background"><div class="amuraBackground" ref="amuraBackground"></div><img class="amura-logo" src="../../assets/images/programacion/amura.png" alt="Amura IT"></div></div>
          <div class="col-4 align-middle">
            <div class="row pt-5"><div class="col"><aun-no-se-component fontWeight="bold" text="Resolver incidencias en la web de Roche" fontSize="1.5vw" gradientColor1="#FFFFFF" gradientColor2="#000000"></aun-no-se-component></div></div>
            <div class="row"><div class="col"><logos-component :logos="[require('@/assets/images/logos/react.png')]"></logos-component></div></div>
            <div class="row pt-5"><div class="col"><aun-no-se-component fontWeight="bold" gradientColor1="#FFFFFF" gradientColor2="#000000" fontSize="1.5vw"  text="Creación de API’s para Roche"></aun-no-se-component></div></div>
            <div class="row"><logos-component :logos="[require('@/assets/images/logos/node.png'), require('@/assets/images/logos/MongoDB.png'), require('@/assets/images/logos/express.png')]"></logos-component></div>
          </div>
        </div>
    </div>
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
    const subtitleRef = ref(null);
    const graduadoRef = ref(null);
    const amuraBackground = ref(null);
    const lineaPath2 = ref(null);
    const netluParrafoRef = ref(null);
    const logos = [
      require('@/assets/images/logos/vue.png'),
      require('@/assets/images/logos/js.png'),
      require('@/assets/images/logos/jquery.png'),
      require('@/assets/images/logos/MongoDB.png'),
      require('@/assets/images/logos/python.png'),
    ];

    provide('amuraBackgroundRef', amuraBackground);
    gsap.registerPlugin(ScrollTrigger);

    // Funciones

    function animateLineaSvg() {
      const pathLength = lineaPath2.value.getTotalLength();

      gsap.set(lineaPath2.value, {
        strokeDasharray: pathLength,
        strokeDashoffset: (pathLength * 2) * 0.8,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.amura',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          once: true
        },
      });

      tl.to(lineaPath2.value, {
        // sstrokeDasharray: 1400,
        strokeDashoffset: 0,
        ease: 'none',
      });
    }

    function SplitTextToChars(textNode) {
      const textContent = textNode.textContent;
      const textSplit = textContent.split('');

      const frag = document.createDocumentFragment();
      textSplit.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style = `${letter === ' ' ? 'min-width: 1rem;' : ''}z-index: ${
          textSplit.length - i
        }; position: relative; display: inline-block;`;
        frag.appendChild(span);
      });
      textNode.textContent = '';
      textNode.appendChild(frag);

      return textNode.children;
    }

    function animateAmuraBackground() {
      const amuraBackground = document.querySelector(".amuraBackground");

      gsap.fromTo(
        amuraBackground,
        { scaleY: 1, scaleX: 0.7 },
        {
          scaleY: 1,
          scaleX: 1,
          scrollTrigger: {
            trigger: amuraBackground,
            start: "top 80%",
            end: "bottom 80%",
            scrub: true,
            once: true
          },
        }
      );
    }

    function animateAmuraLogo() {
      const graduado = graduadoRef.value;
      const amuraLogo = document.querySelector(".amura-logo");

      const animation = gsap.fromTo(
        amuraLogo,
        { height: "20px" },
        {
          height: "12vw",
          duration: 6,
          scrollTrigger: {
            trigger: graduado,
            start: "top 80%",
            end: "bottom 80%",
            scrub: true,
            once: true,
            onLeave: () => {
              gsap.to(amuraLogo, {
                height: "5.5vw",
                duration: 0.7,
                ease: "power1.in",
              });

              // Animación de flotación
              const floatingAnimation = gsap.timeline({ repeat: -1, yoyo: true });
              floatingAnimation.to(amuraLogo, {
                y: "-10px",
                duration: 2,
                ease: "power1.inOut",
              });
              floatingAnimation.to(amuraLogo, {
                y: "10px",
                duration: 2,
                ease: "power1.inOut",
              });
            },
          },
        }
      );
    }



    function animateSubtitle() {
      const subtitleElement = subtitleRef.value;
      const netluParrafoElement = netluParrafoRef.value;
      const chars = SplitTextToChars(subtitleElement);

      gsap.set(subtitleElement, { perspective: 400 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: netluParrafoElement,
          start: 'top 75%',
          end: 'bottom 99%',
          scrub: true,
          once: true
        },
      });

      tl.from(
        chars,
        {
          duration: 0.2,
          opacity: 0,
          scale: 1,
          y: -40,
          rotationX: -90,
          transformOrigin: '0% 50% -50',
          ease: 'inOut',
          stagger: 0.025,
        },
        '+=0'
      );
    }
    // Life Cycle

    onMounted(() => {
      animateAmuraBackground();
      animateAmuraLogo();
      animateSubtitle();
      animateLineaSvg()
    });

  </script>
    
<style scoped>
  
  #empleosAmura {
    position: relative;
    height: 100vh;
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
  .amuraBackground {
    background-color: azure;
    border: 4px solid #7147F5;
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
}

.linea-svg {
  stroke: #7147F5;
  stroke-width: 3;
}
</style>