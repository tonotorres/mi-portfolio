<template>
  <div>
    <section class="home">
      <div class="preloader-wrapper">
        <HomeLoader></HomeLoader>
      </div>
      <div class="row home-titles">
        <div class="col-12 p-0"><h1 class="text-center"><span class="art">ART</span><span class="frontend">FRONTEND</span><span class="ai">AI</span></h1></div>
        <div class="col-12 p-0 container-text"><h1 class="texto-home text-center">Selecciona uno de mis porfolios</h1></div>
      </div>
      <canvas id="container"></canvas>
    </section>
  </div>
</template>

<script>
import { Application } from '@splinetool/runtime';
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import HomeLoader from './HomeLoader.vue';

export default {
    components: {
      HomeLoader
    },
    setup() {

      var home = null
      var seleccionado = ''

      onMounted(() => {
          const canvas = document.getElementById("container");
          const app = new Application(canvas);
          home = document.getElementsByClassName('home')[0]
          app.load("https://prod.spline.design/Y3SKTxoInjXM-K25/scene.splinecode")
              .then(() => {
                document.addEventListener('click', function(event) {
                  var tercioPantalla = window.innerWidth / 3;
                  if (event.clientX < tercioPantalla) {
                    if(seleccionado === 'arte') window.location.href = "http://tonitorresportfolio.com/ilustracion";
                    else setTimeout(function() { seleccionado = 'arte'; }, 1000);
                    gsap.to('.frontend', { color: 'black', duration: 0.5 });
                    gsap.to('.ai', { color: 'black', duration: 0.5 });
                    gsap.to('.art', { color: '#2E5339', duration: 0.5 });

                  } else if (event.clientX < tercioPantalla * 2) {
                    if(seleccionado === 'programacion') window.location.href = "http://tonitorresportfolio.com/programacion";
                    else setTimeout(function() { seleccionado = 'programacion'; }, 1000);
                    gsap.to('.frontend', { color: '#3AAFB9', duration: 0.5 });
                    gsap.to('.ai', { color: 'black', duration: 0.5 });
                    gsap.to('.art', { color: 'black', duration: 0.5 });
                  } else {
                    if(seleccionado === 'ias') window.location.href = "http://tonitorresportfolio.com/ias";
                    else setTimeout(function() { seleccionado = 'ias'; }, 1000);
                    gsap.to('.frontend', { color: 'black', duration: 0.5 });
                    gsap.to('.ai', { color: '#00A6ED', duration: 0.5 });
                    gsap.to('.art', { color: 'black', duration: 0.5 });
                  }
                })
                document.addEventListener('mousemove', function(event) {
                  var tercioPantalla = window.innerWidth / 3;

                  if (event.clientX < tercioPantalla) {
                    home.style.cursor = 'var(--cursor-ilustracion)';
                  } else if (event.clientX < tercioPantalla * 2) {
                    home.style.cursor = 'var(--cursor-progra)';
                  } else {
                    home.style.cursor = 'var(--cursor-ia)';
                  }
                });
                gsap.to(".preloader-wrapper", {
                  duration: 1,
                  opacity: 0,
                  ease: "power2.inOut",
                  delay: 0,
                  onComplete: function() {
                    gsap.to(".preloader-wrapper", {
                        duration: 1,
                        display: 'none',
                        ease: "power2.inOut",
                        delay: 0
                    }); 
                  }
              });
          });
      });
    },
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "SugarPunch";
  src: url("../assets/fonts/Sugarpunch.otf") format("truetype");
  font-display: swap;
}
.home {
  --cursor-ilustracion: url('../assets/images/cursors/cursor-ilustracion.svg'), auto;
  --cursor-progra: url('../assets/images/cursors/cursor-progra.svg'), auto;
  --cursor-ia: url('../assets/images/cursors/cursor-ia.svg'), auto;
  cursor: var(--cursor-ilustracion);
}

section {
  position: relative;
  height: 100vh;
  width: 100%;
  background: white;
  display: grid;
  place-content: center;
  overflow: hidden;
}
.home-titles {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
}

.preloader-wrapper {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  background-color: black;
  pointer-events: none;

}
.home-titles h1 span {
  padding-top: 0%;
  color: black;
  font-size: 12vw;
  line-height: 1;
  font-family: "SugarPunch";
  mix-blend-mode: exclusion;
  text-shadow: 6px 4px 0px white;
}
// .texto-home {
//   color: black;
//   font-size: 50px;
//   line-height: 1;
//   font-family: "SugarPunch";
//   position: absolute;
//   bottom: 3%;
//   left: 30%;
// }
.container-text {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.texto-home {
  color: black;
  font-size: 50px;
  line-height: 1;
  font-family: "SugarPunch";
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: auto;
}

// animaciones cursor
#arte-section {
  cursor: url('../assets/images/cursors/cursor-ilustracion.svg'), auto;
  pointer-events: auto;

}
#progra-section {
  cursor: url('../assets/images/cursors/cursor-progra.svg'), auto;
  pointer-events: auto;

}
#ias-section {
  cursor: url('../assets/images/cursors/cursor-ia.svg'), auto;
  pointer-events: auto;

}
.no-pointer-events {
  height: 100%;
  width: 100%;
}
</style>
