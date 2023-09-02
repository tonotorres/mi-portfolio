<template>
    <section class="content">
      <div class="grid-one grid--1">
        <div class="grid-wrap">
          <div
            class="grid__item"
            v-for="(image, index) in images"
            :key="index"
          >
            <img class="grid__item-inner" :src="image">
          </div>
        </div>
      </div>
      <div class="row content__title content__title--right content__title--top justify-content-end">
        <div class="col">
          <h3 class="title-ai text-right">Pero para mí, representan un océano infinito de posibilidades creativas.<br /></h3>
        </div>
        <div class="col">
          <div class="row justify-content-end">
            <h4 class="links col"><a href="https://stability.ai/stablediffusion" target="_blank">Stable Diffusion XL</a><a> + </a> <a href="https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0" target="_blank">Refiner</a><a> + </a> <a href="https://stablediffusionweb.com/ControlNet" target="_blank">ControlNet</a></h4>
          </div>
        </div>
      </div>
      
    </section>
  </template>
  
<script setup>

import { onMounted, ref, defineProps, computed, watch } from 'vue';
import { preloadImages } from '../../assets/utils/utils';
import { ScrollTrigger, gsap } from 'gsap/all'; // Import GSAP and ScrollTrigger

const images = [
  require('../../assets/imagenes/1.webp'),
  require('../../assets/imagenes/2.webp'),
  require('../../assets/imagenes/3.webp'),
  // require('../../assets/imagenes/4.jpg'),
  require('../../assets/imagenes/5.webp'),
  require('../../assets/imagenes/6.webp'),
  require('../../assets/imagenes/7.webp'),
  require('../../assets/imagenes/8.webp'),
  require('../../assets/imagenes/9.webp'),
  require('../../assets/imagenes/10.webp'),
  require('../../assets/imagenes/11.webp'),
  require('../../assets/imagenes/12.webp'),
  require('../../assets/imagenes/13.webp'),
  require('../../assets/imagenes/14.webp'),
  require('../../assets/imagenes/15.webp'),
  require('../../assets/imagenes/16.webp'),
  require('../../assets/imagenes/16.webp'),
  require('../../assets/imagenes/17.webp'),
  require('../../assets/imagenes/18.webp'),
  require('../../assets/imagenes/19.webp'),
  require('../../assets/imagenes/20.webp'),
  require('../../assets/imagenes/21.webp'),
  require('../../assets/imagenes/22.webp'),
  require('../../assets/imagenes/23.webp'),
  require('../../assets/imagenes/24.webp'),
  require('../../assets/imagenes/25.webp'),
  require('../../assets/imagenes/26.webp'),
  require('../../assets/imagenes/27.webp'),
  require('../../assets/imagenes/28.webp'),
  require('../../assets/imagenes/15.webp'),
  require('../../assets/imagenes/16.webp'),
  require('../../assets/imagenes/16.webp'),
  require('../../assets/imagenes/17.webp'),
  require('../../assets/imagenes/18.webp'),
  require('../../assets/imagenes/19.webp'),
  require('../../assets/imagenes/20.webp'),
  require('../../assets/imagenes/21.webp'),
  require('../../assets/imagenes/22.webp'),
  require('../../assets/imagenes/23.webp'),
  require('../../assets/imagenes/24.webp'),
  require('../../assets/imagenes/25.webp'),
  require('../../assets/imagenes/26.webp'),
  require('../../assets/imagenes/27.webp'),
  require('../../assets/imagenes/28.webp'),
  // require('../../assets/imagenes/29.webp'),
  // require('../../assets/imagenes/30.webp'),
  // require('../../assets/imagenes/31.webp'),
  // require('../../assets/imagenes/32.webp'),
  // require('../../assets/imagenes/33.webp'),
  // require('../../assets/imagenes/34.webp'),
  // require('../../assets/imagenes/35.webp'),
  // require('../../assets/imagenes/36.webp'),
  // require('../../assets/imagenes/37.webp'),
  // require('../../assets/imagenes/38.webp'),
  // require('../../assets/imagenes/39.webp'),
  // require('../../assets/imagenes/40.webp'),
  // require('../../assets/imagenes/41.webp'),
  // require('../../assets/imagenes/42.webp'),
  // require('../../assets/imagenes/43.webp'),
  // require('../../assets/imagenes/44.webp'),
  // require('../../assets/imagenes/45.webp'),
  // require('../../assets/imagenes/46.webp'),
  // require('../../assets/imagenes/47.webp'),
  // require('../../assets/imagenes/48.webp'),
];

gsap.registerPlugin(ScrollTrigger);



// All elements with class .grid
const grids = ref(null);

onMounted(async () => {
  grids.value = document.querySelectorAll('.grid-one');
//   await preloadImages('.grid__item-inner');
  await preloadImages('.grid__item-inner');
  applyAnimation();
  document.body.classList.remove('loading');
});

// Function to apply scroll-triggered animations to a given gallery
const applyAnimation = (type, images) => {
  grids.value.forEach((grid) => {
    // Child elements of grid
    const gridWrap = grid.querySelector('.grid-wrap');
    const gridItems = grid.querySelectorAll('.grid__item');
    const gridItemsInner = [...gridItems].map((item) =>
      item.querySelector('.grid__item-inner')
    );

    // Define GSAP timeline with ScrollTrigger
    const timeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: gridWrap,
        start: 'top bottom+=5%',
        end: 'bottom top-=5%',
        scrub: true,
      },
    });

   
        // Apply the default animation (currently 'type1')
        grid.style.setProperty('--perspective', '1000px');
        grid.style.setProperty('--grid-inner-scale', '0.5');

        timeline
          .set(gridWrap, {
            rotationY: 25,
          })
          .set(gridItems, {
            z: () => gsap.utils.random(-1600, 200),
          })
          .fromTo(
            gridItems,
            {
              xPercent: () => gsap.utils.random(-1000, -500),
            },
            {
              xPercent: () => gsap.utils.random(500, 1000),
            },
            0
          )
          .fromTo(
            gridItemsInner,
            {
              scale: 2,
            },
            {
              scale: 0.5,
            },
            0
          );
    }
  );
};
</script>

<style scoped>
  .content {
	position: relative;
	margin-bottom: 20vh;
  background: rgb(121,221,255);
  background: radial-gradient(circle, rgba(121,221,255,1) 0%, rgba(42,178,224,1) 14%, rgba(4,74,171,1) 35%, rgba(0,13,30,1) 59%, rgba(13,13,13,0.05085784313725494) 73%, rgba(13,13,13,0) 100%);
}

.content--spacing {
	margin-bottom: 100vh;
}
.grid__item-inner {
	position: relative;
	width: calc(1 / var(--grid-inner-scale) * 35%);
	height: calc(1 / var(--grid-inner-scale) * 35%);
	background-size: cover;
	background-position: 50% 50%;
  object-fit: contain;
}
.content__title {
	position: absolute;
	height: auto !important;
	width: 100vw;
	top: 50%;
	left: 50%;
	margin: -50vh 0 0 -50vw;
	padding: 0 10vw;
	display: grid;
	place-items: center;
	text-align: center;
	font-weight: 300;
	font-size: clamp(1.5rem, 15vw, 6.5rem);
    font-family: 'Encode Sans Expanded', sans-serif;
	color: white;
}
.title-ai {
	font-weight: 300;
	font-size: clamp(1.5rem, 15vw, 6.5rem) !important;
  font-family: 'Encode Sans Expanded', sans-serif;
	color: white;
}
.links {
	font-weight: 300;
	font-size: 2vw !important;
  font-family: 'Encode Sans Expanded', sans-serif;
	color: white;
  width: auto !important;
}
h3 {
    font-family: 'Encode Sans Expanded', sans-serif;
	color: white;
}
.content__title--top {
	align-items: start;
}

.content__title--bottom {
	align-items: end;
}

.content__title--left {
	justify-items: start;
	text-align: left;
}

.content__title--right {
	justify-items: end;
	text-align: right;
}

.grid-one {
	display: grid;
	place-items: center;
	padding: 2rem;
	width: 100%;
	perspective: var(--perspective);
}

.grid-wrap {
	height: var(--grid-height);
	width: var(--grid-width);
	display: grid;
	grid-template-columns: repeat(var(--grid-columns),1fr);
	gap: var(--grid-gap);
	transform-style: preserve-3d;
}

.grid__item {
	aspect-ratio: var(--grid-item-ratio);
	width: 100%;
	height: auto;
	overflow: hidden;
	position: relative;
	border-radius: 8px;
	display: grid;
	place-items: center;
}

</style>