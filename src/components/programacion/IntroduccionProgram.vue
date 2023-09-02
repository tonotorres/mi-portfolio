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
                            <div class="parrafo p-4 primer-parrafo">
                                <p class="texto-parrafo text-center">Apasionado por crear experiencias web interactivas y visualmente atractivas.</p>
                                <p class="texto-parrafo text-center">¡Explora mi portfolio para ver ejemplos de mi trabajo!</p>
                                <img class="link-image linkedin mx-2" src="../../assets/images/logos/linkedin.png" alt="Linkedin">
                                <img class="link-image github" src="../../assets/images/logos/github.png" alt="Github">
                            </div>
                        </div>
                    </div> 
                </div>
              </div>
          </div>
          <div class="col-3"></div>
      </div>
    </div>
  </template>
  
  <script setup>
      import { ref, onMounted, nextTick } from 'vue';
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
      const adjustLine1Position = async () => {
        const linea1 = document.getElementById('linea1');
        const foto = document.getElementById('yo');

        const fotoRect = foto.getBoundingClientRect();
        const leftPosition = fotoRect.width;

        linea1.style.left = `${leftPosition/2}px`;

        await nextTick();
        emit('loaded');
      };

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
        scramble(targetTitle, 2000, scrambledTitle);
        scramble(targetSubTitle, 3000, scrambledSubTitle);
      });

  </script>

<style scoped>
  
  .introduccion {
    position: relative;
    z-index: 10;
    background-image:  radial-gradient(hsla(0,0%,58%,.3) 1px,transparent 0);
    background-size: 20px 20px;
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
  .link-image{
    max-height: 40px;
    width: auto;
    background-color: #FFFFFF;
    border-radius: 50%;
    border: 2px solid #7147F5;
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