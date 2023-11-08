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
    import { ref, onMounted, reactive, nextTick, defineProps, computed } from 'vue';

    const props = defineProps({
      text: String,
      fontWeight: {
        type: String,
        default: 'regular',
      },
      fontSize: {
        type: String,
        default: '2vw',
      },
      gradientColor1: {
        type: String,
        default: '#7147F5',
      },
      gradientColor2: {
        type: String,
        default: 'rgb(224, 224, 224)',
      },
    });

    const texto = ref(null);
    const state = reactive({
      lines: [],
    });

    const lineStyle = {
      background: `linear-gradient(to right, ${props.gradientColor1} 50%, ${props.gradientColor2} 50%)`,
      fontSize: props.fontSize,
      backgroundSize: '200% 100%',
      backgroundPositionX: '100%',
      color: 'transparent',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text', // Agrega esta línea para asegurar la compatibilidad con navegadores que usan el prefijo -webkit-
      lineHeight: 1.2
    };

    const splitText = () => {
      const lines = props.text
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
      state.lines = lines;
    };
  
      const animateLines = async () => {
        gsap.registerPlugin(ScrollTrigger);
        await nextTick(); // esperar a que el DOM se actualice

        const lineElements = texto.value.querySelectorAll('.line');
  
        lineElements.forEach((target) => {
          
          Object.assign(target.style, lineStyle);
          gsap.to(target, {
            backgroundPositionX: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: target,
              scrub: 1,
              start: '-20% 60%',
              end: 'bottom bottom',
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
  
.text { 
    font-family: "Mona Sans Regular";
}
  .text > p > .line {
    
  }
  </style>
  