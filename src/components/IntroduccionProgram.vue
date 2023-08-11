<template>
    <div class="container-fluid pt-4 introduccion">
      <div class="row pt-4">
          <div class="col-2"></div>
          <div class="col-7">
              <div class="row">
                <div class="col-3 image-container" id="yo"><img class="responsive-image" src="@/assets/images/mi_foto.png" alt="Este soy yo!" @load="onImageLoad"></div>
                <div class="col-9">
                    <div class="row"><div class="title" v-html="scrambledTitle"></div></div>
                    <div class="row"><div class="sub-title" v-html="scrambledSubTitle"></div></div> 
                </div>
              </div>
              <div class="row">
                <div class="col-3 image-container"><img id="linea1" class="responsive-image line-1" src="@/assets/images/programacion/linea1.svg" @load="onImageLoad"></div>
                <div class="col-9">
                    <div class="row pb-4 pt-4">
                        <LogosComponent :logos="logos" ></LogosComponent>
                    </div>
                    <div class="row">
                        <div class="col" style="padding-left: 0px; padding-right: 0px;">
                            <div class="parrafo p-4">
                                <p class="texto-parrafo">Apasionado por crear experiencias web interactivas y visualmente atractivas.</p>
                                <p class="texto-parrafo">¡Explora mi portfolio para ver ejemplos de mi trabajo!</p>
                                <img class="link-image linkedin" src="../assets/images/logos/linkedin.png" alt="Linkedin">
                                <img class="link-image github" src="../assets/images/logos/github.png" alt="Github">
                            </div>
                        </div>
                    </div> 
                </div>
              </div>
          </div>
          <div class="col-3 image-container"><img class="responsive-image line-2" id="linea2" src="@/assets/images/programacion/linea2.svg"></div>
      </div>
    </div>
  </template>
  
  <script setup>
      import { ref, onMounted } from 'vue';
      import LogosComponent from './LogosComponent.vue';

      // Variables
      const scrambledTitle = ref('');
      const scrambledSubTitle = ref('');
      const targetTitle = 'Hola, soy Toni!';
      const targetSubTitle = 'Software Engineer & Fronted Developer';
      const scrambleChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
      const logos = [
        require('@/assets/images/logos/vue.png'),
        require('@/assets/images/logos/react.png'),
        require('@/assets/images/logos/js.png'),
        require('@/assets/images/logos/typescript.png'),
        require('@/assets/images/logos/bootstrap.svg'),
        require('@/assets/images/logos/tailwin.png'),
        require('@/assets/images/logos/node.png'),
        require('@/assets/images/logos/gsap.png'),
        require('@/assets/images/logos/webgl.png'),
      ];
      let imagesLoaded = ref(0);

      // Definir los eventos emitidos
      const emit = defineEmits(['loaded']);

      // Ajustar lineas lilas

      const onImageLoad = () => {
        imagesLoaded.value++;

        if (imagesLoaded.value === 2) {
          adjustLine1Position();
        }
      };
      const adjustLine1Position = () => {
        const linea1 = document.getElementById('linea1');
        const foto = document.getElementById('yo');

        const fotoRect = foto.getBoundingClientRect();
        const leftPosition = fotoRect.width;

        linea1.style.left = `${leftPosition/2}px`;
        adjustLine2Position();
      };
      const adjustLine2Position = () => {
        const linea1 = document.getElementById('linea1');
        const linea2 = document.getElementById('linea2');

        const linea1Rect = linea1.getBoundingClientRect();
        const bottomPosition = linea1Rect.top + linea1Rect.height;

        const threeRemInPixels = remToPixels(3);
        linea2.style.top = `${bottomPosition - threeRemInPixels}px`;
        emit('loaded');
      };
      function remToPixels(rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
      }

      // Movimiento de texto

      const scramble = (text, duration, scrambledRef) => {
        const startTime = new Date().getTime();
        const scrambleText = () => {
          let result = "";
          for (let i = 0; i < text.length; i++) {
            result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }
          scrambledRef.value = result;
      };
  
        const update = () => {
          const currentTime = new Date().getTime();
          if (currentTime - startTime < duration) {
            scrambleText();
            requestAnimationFrame(update);
          } else {
            scrambledRef.value = text;
          }
        };
  
        update();
      };
  
      onMounted(() => {
        // adjustLine1Position();
        scramble(targetTitle, 2000, scrambledTitle);
        scramble(targetSubTitle, 3000, scrambledSubTitle);
        
        // adjustLine2Position();
        
      });

  </script>

<style scoped>
  
  .yellow {
    /* background-color: yellow; */
  }
  
  @font-face {
    font-family: "Mona Sans SemiBold";
    src: url("../assets/fonts/Mona-Sans-SemiBold.ttf") format("truetype");
  }
  @font-face {
    font-family: "Mona Sans Regular";
    src: url("../assets/fonts/Mona-Sans-Regular.ttf") format("truetype");
  }

  .introduccion {
    position: relative;
    z-index: 10;
  }
  .image-container {
    position: relative;
  }

  .responsive-image {
    max-width: 100%;
    height: auto;
  }
  .line-1 {
    position: absolute;
    left: 0;
  }
  .line-2 {
    position: absolute;
    left: 0;
  }
  .title {
    font-family: "Mona Sans SemiBold";
    color: #FFFFFF;
    font-size: 4vw;
    text-align: left;
  }
  .sub-title {
    font-family: "Mona Sans SemiBold";
    color: #FFFFFF;
    font-size: 2vw;
    text-align: left;
  }
  .parrafo {
    height: 100%;
    width: 100%;
    background-color: #222222;
    border-radius: 9px;
    border: 2px solid #FFFFFF;
    position: relative;
  }
  .texto-parrafo {
    font-family: "Mona Sans Regular";
    color: #FFFFFF;
    font-size: 1.5vw;
    text-align: left;
  }
  .link-image{
    max-height: 40px;
    width: auto;
    background-color: #FFFFFF;
    border-radius: 50%;
    border: 2px solid #FFFFFF;
    position: absolute;
    cursor: pointer;
  }
  .linkedin {
    bottom: -10%;
    right: 10%;
  }
  .github {
    bottom: -10%;
    right: 2%;
  }
</style>