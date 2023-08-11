<template>
    <div class="text">
      <p ref="texto">
        <span
          v-for="(line, index) in state.lines"
          :key="index"
          class="line"
          :data-text="line"
          :class="{'font-regular': props.fontWeight === 'regular', 'font-semibold': props.fontWeight === 'bold'}"
        >
          {{ line }}
        </span>
      </p>
    </div>
  </template>
  
<script setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { ref, onMounted, reactive, nextTick, defineProps } from 'vue';

    const props = defineProps({
      text: String,
      fontWeight: {
        type: String,
        default: 'regular',
      },
    });

    const texto = ref(null);
    const state = reactive({
      lines: [],
    });

    const splitText = () => {
      const lines = props.text
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
      state.lines = lines;
    };
  
      const animateLines = async () => {
        gsap.registerPlugin(ScrollTrigger);
        await nextTick(); // Agrega esta línea para esperar a que el DOM se actualice
        console.log(texto.value.querySelectorAll('span'));
        const lineElements = texto.value.querySelectorAll('.line');
  
        lineElements.forEach((target) => {
          gsap.to(target, {
            backgroundPositionX: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: target,
              markers: false,
              scrub: 1,
              start: 'top center',
              end: 'bottom center',
            },
          });
        });
      };
  
      onMounted(() => {
        splitText();
        animateLines();
      });
  
  </script>
  
  
  <style scoped>
  @font-face {
  font-family: "Mona Sans Regular";
  src: url("../assets/fonts/Mona-Sans-Regular.ttf") format("truetype");
}
@font-face {
    font-family: "Mona Sans SemiBold";
    src: url("../assets/fonts/Mona-Sans-SemiBold.ttf") format("truetype");
  }
.text { 
    /* background-color: rgba(0,0,0,1); */
    /* padding-top: 5%; */
}
  .text > p > .line {
    background: linear-gradient(
      to right,
      rgb(255, 255, 255) 50%,
      rgb(37, 37, 37) 50%
    );
    background-size: 200% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    /* margin-left: 50px; */
    line-height: 1.2;
    font-size: 2vw;
  }
  .font-regular {
  font-family: "Mona Sans Regular";
}

.font-semibold {
  font-family: "Mona Sans SemiBold";
}
  </style>
  