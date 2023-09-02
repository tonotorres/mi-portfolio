<template>
    <section class="content">
      <div class="grid-two grid--2">
        <div class="grid-wrap-two">
          <div
            class="grid__item"
            v-for="(image, index) in images"
            :key="index"
          >
            <img class="grid__item-inner" :src="image">
          </div>
        </div>
      </div>
      <div class="row content__title content__title--top justify-content-end">
        <div class="col mb-4">
          <h3 class="title-ai text-center">Las IA's me ayudan a materializar mis ideas.<br /></h3>
        </div>
        <div class="col">
          <div class="row justify-content-center">
            <h4 class="links col"><a href="https://runwayml.com/" target="_blank">Runway</a><a> + </a> <a href="https://labs.openai.com/" target="_blank">DALL-E</a><a> + </a> <a href="https://stablediffusionweb.com/ControlNet" target="_blank">ControlNet</a><a> + </a> <a href="https://ebsynth.com/" target="_blank">Ebsynth</a></h4>
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script setup>

import { onMounted, ref, defineProps, computed, watch } from 'vue';
import { preloadImages } from '../../assets/utils/utils';
// import Lenis from '../../assets/utils/lenis.min.js'; // Import Lenis library
import { ScrollTrigger, gsap } from 'gsap/all'; // Import GSAP and ScrollTrigger

const images = [
  require('../../assets/images/ias/ballena_1.webp'),
  require('../../assets/images/ias/calle_1.webp'),
  require('../../assets/images/ias/animal_1.webp'),
  require('../../assets/images/ias/ballena_2.webp'),
  require('../../assets/images/ias/calle_2.webp'),
  require('../../assets/images/ias/animal_2.webp'),
  require('../../assets/images/ias/ballena_3.webp'),
  require('../../assets/images/ias/calle_3.webp'),
  require('../../assets/images/ias/animal_3.webp'),
  require('../../assets/images/ias/ballena_4.webp'),
  require('../../assets/images/ias/calle_4.webp'),
  require('../../assets/images/ias/animal_4.webp'),
];

gsap.registerPlugin(ScrollTrigger);

// Define a variable that will store the Lenis smooth scrolling object
const lenis = ref(null);

// console.log(imageArray.value[0])
// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
  // Instantiate the Lenis object with specified properties
  lenis.value = new Lenis({
    lerp: 0.1, // Lower values create a smoother scroll effect
    smoothWheel: false, // Enables smooth scrolling for mouse wheel events
  });

  // Update ScrollTrigger each time the user scrolls
  lenis.value.on('scroll', () => ScrollTrigger.update());

  // Define a function to run at each animation frame
  const scrollFn = (time) => {
    lenis.value.raf(time); // Run Lenis' requestAnimationFrame method
    requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
  };
  // Start the animation frame loop
  requestAnimationFrame(scrollFn);
};

// All elements with class .grid
const grids = ref(null);

onMounted(async () => {
  grids.value = document.querySelectorAll('.grid-two');
  await preloadImages('.grid__item-inner');
//   initSmoothScrolling();
  applyAnimation();
  document.body.classList.remove('loading');
});

// Function to apply scroll-triggered animations to a given gallery
const applyAnimation = (type, images) => {
  grids.value.forEach((grid) => {
    // Child elements of grid
    const gridWrap = grid.querySelector('.grid-wrap-two');
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
        end: 'bottom top+=45%',
        scrub: true,
      },
    });

   
        // Set some CSS related style values
			grid.style.setProperty('--grid-width', '50%');
			grid.style.setProperty('--perspective', '3000px');
			grid.style.setProperty('--grid-item-ratio', '0.8');
			grid.style.setProperty('--grid-columns', '3');
			grid.style.setProperty('--grid-gap', '1vw');

			timeline
			.set(gridWrap, {
				transformOrigin: '0% 50%',
				rotationY: 30,
				xPercent: -25
			})
      .to(gridWrap, {
				duration: 0.5,
				ease: 'power2',
				transformOrigin: '0% 50%',
				rotationY: -30,
				xPercent: 15
			}, 0)
      .to(gridWrap, {
				duration: 0.5,
				ease: 'power2',
				transformOrigin: '0% 50%',
				rotationY: 0,
				xPercent: 0
			}, 1)
			.set(gridItems, {
				transformOrigin: '50% 0%'
			})
			.to(gridItems, {
				duration: 0.5,
				ease: 'power2',
				z: 500,
				stagger: 0.04
			}, 0)
			.to(gridItems, {
				duration: 0.5,
				ease: 'power2.in',
				z: 0,
				stagger: 0.04
			}, 0.5)
			.fromTo(gridItems, {
				rotationX: -70,
				filter: 'brightness(120%)'
			}, {
				duration: 1,
				rotationX: 0,
				filter: 'brightness(100%)',
				stagger: 0.04
			}, 0)
    }
  );
};
</script>

<style scoped>
  .content {
	position: relative;
	margin-bottom: 20vh;
}

.content--spacing {
	margin-bottom: 100vh;
}

.content__title {
	position: absolute;
	height: auto !important;
	width: 100vw;
	top: -10%;
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

.grid-two {
	display: grid;
	place-items: center;
	padding: 2rem;
	width: 100%;
	perspective: var(--perspective);
}

.grid-wrap-two {
	height: var(--grid-height);
	width: 80%;
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
.links {
	font-weight: 300;
	font-size: 2vw !important;
  font-family: 'Encode Sans Expanded', sans-serif;
	color: white;
  width: auto !important;
}
</style>