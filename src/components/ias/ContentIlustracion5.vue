<template>
    <section class="content street">
      <img src="../../assets/images/ias/calle.webp" alt="Calle generada por ia" class="street-background">
      <img src="../../assets/images/ias/nubes.webp" alt="Calle generada por ia" class="street-clouds">
      <div class="grid-five grid--5">
        <div class="grid-wrap suelo">
          <div
            class="grid__item color-background"
            v-for="(image, index) in images"
            :key="index"
          >
            <img class="grid__item-inner" :src="image">
          </div>
        </div>
      </div>
      <h3 class="content__title-five content__title-five--top">
        ¿Un portfolio <br />de IA's?<br /> 
      </h3>
      <h3 class="content__title-five-bottom">
        Las inteligencias artificiales pueden parecer intimidantes...
      </h3>
    </section>
  </template>
  
<script setup>

import { onMounted, ref } from 'vue';
import { preloadImages, getGrid } from '../../assets/utils/utils';
// import Lenis from '../../assets/utils/lenis.min.js'; // Import Lenis library
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const images = [
  require('../../assets/images/ias/1.webp'),
  require('../../assets/images/ias/2.webp'),
  require('../../assets/images/ias/3.webp'),
  require('../../assets/images/ias/4.webp'),
  require('../../assets/images/ias/5.webp'),
  require('../../assets/images/ias/6.webp'),
  require('../../assets/images/ias/7.webp'),
  require('../../assets/images/ias/8.webp'),
  require('../../assets/images/ias/9.webp'),
  require('../../assets/images/ias/10.webp'),
  require('../../assets/images/ias/11.webp'),
  require('../../assets/images/ias/12.webp'),
  require('../../assets/images/ias/13.webp'),
  require('../../assets/images/ias/14.webp'),
  require('../../assets/images/ias/15.webp'),
  require('../../assets/images/ias/16.webp'),
  require('../../assets/images/ias/16.webp'),
  require('../../assets/images/ias/17.webp'),
  require('../../assets/images/ias/18.webp'),
  require('../../assets/images/ias/19.webp'),
  require('../../assets/images/ias/20.webp'),
  require('../../assets/images/ias/21.webp'),
  require('../../assets/images/ias/22.webp'),
  require('../../assets/images/ias/23.webp'),
  require('../../assets/images/ias/24.webp'),
  require('../../assets/images/ias/1.webp'),
  require('../../assets/images/ias/2.webp'),
  require('../../assets/images/ias/3.webp'),
  require('../../assets/images/ias/4.webp'),
  require('../../assets/images/ias/5.webp'),
  require('../../assets/images/ias/6.webp'),
  require('../../assets/images/ias/7.webp'),
  require('../../assets/images/ias/8.webp'),
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
  grids.value = document.querySelectorAll('.grid-five');
  await preloadImages('.grid__item-inner');
  applyAnimation();
});

// Function to apply scroll-triggered animations to a given gallery
const applyAnimation = (type, images) => {
  grids.value.forEach((grid) => {
    // Child elements of grid
    const gridWrap = grid.querySelector('.suelo');
    const gridItems = grid.querySelectorAll('.grid__item');
    const gridItemsInner = [...gridItems].map((item) =>
      item.querySelector('.grid__item-inner')
    );

    // Define GSAP timeline with ScrollTrigger
    const timeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: gridWrap,
        start: 'top bottom-=15%',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress >= 1) {
            gsap.to('.grid-five', {
              opacity: 0,
              duration: 1,
            });
          } else if (progress < 1) {
            gsap.to('.grid-five', {
              opacity: 1,
              duration: 0.5,
            });
          }
        },
      },
    });
    
    const timelineClouds = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '.clouds-begin',
        start: 'top bottom+=40%',
        end: 'bottom top+=40%',
        scrub: true,
      },
    });

    const timelineTitle = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '.clouds-begin',
        start: 'top bottom+=20%',
        end: 'bottom top+=20%',
        scrub: true,
      },
    });
    // ScrollTrigger.refresh();

   
        // Set some CSS related style values
			grid.style.setProperty('--grid-width', '100%');
			grid.style.setProperty('--grid-columns', '8');
			grid.style.setProperty('--grid-gap', '0');
			
			const gridObj = getGrid(gridItems);

      timelineTitle
			.set('.content__title-five', {
				top: '-40%'
			})
			.to('.content__title-five', {
				top: '10%'
			})

      timelineClouds
			.set('.street-clouds', {
				top: '-55%'
			})
			.to('.street-clouds', {
				top: '-36%'
			})

			timeline
			.set(gridWrap, {
				rotationX: 50
			})
			.to(gridWrap, {
				rotationX: 30
			})
			.fromTo(gridItems, {
				filter: 'brightness(250%)'
			}, {
				filter: 'brightness(50%)',
			}, 0)
			.to(gridObj.rows('even'), {
				xPercent: -100,
				ease: 'power1'
			}, 0)
			.to(gridObj.rows('odd'), {
				xPercent: 100,
				ease: 'power1'
			}, 0)
			.addLabel('rowsEnd', '>-=0.15')
			.to(gridItems, {
				ease: 'power1',
				yPercent: () => gsap.utils.random(-60, 100),
			}, 'rowsEnd');
        }
  );
};
</script>

<style scoped>
  .content {
	position: relative;
	margin-bottom: 20vh;
  pointer-events: none;
  height: 100vh;
}

.content--spacing {
	margin-bottom: 100vh;
}

.content__title-five {
	position: absolute;
	height: 100vh;
	width: 100vw;
	top: -20%;
	left: 50%;
	margin: -50vh 0 0 -50vw;
	padding: 0 10vw;
	display: grid;
	place-items: center;
	text-align: center;
	font-weight: 300;
	font-size: clamp(1.5rem, 15vw, 6.5rem);
  font-family: 'Encode Sans Expanded', sans-serif;
	color: #484453;
  z-index: 4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.content__title-five-bottom {
  position: absolute;
	height: 100vh;
	width: 100vw;
	top: 50%;
	left: 50%;
	margin: -50vh 0 0 -50vw;
	padding: 0 10vw;
	display: grid;
	place-items: center;
	text-align: center;
	font-weight: 300;
	font-size: clamp(0.5rem, 15vw, 6.5rem);
  font-family: 'Encode Sans Expanded', sans-serif;
	color: #dbdbdb;
  z-index: 6;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.content__title-five--top {
	align-items: start;
}

.content__title-five--bottom {
	align-items: end;
}

.content__title-five--left {
	justify-items: start;
	text-align: left;
}

.content__title-five--right {
	justify-items: end;
	text-align: right;
}
.street-background {
  object-fit: cover;
  position: absolute;
  overflow: visible;
  top: -41%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
.street-clouds {
  object-fit: cover;
  position: absolute;
  overflow: visible;
  top: -49%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  z-index: 3;
}
.grid-five {
	display: grid;
	place-items: center;
	padding: 2rem;
	width: 100%;
	perspective: 165px;
  position: absolute;
  bottom: 13%;
  left: 0%;
  z-index: 1;
}

.suelo {
	height: 50vh;
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
.grid__item-inner {
	position: relative;
	width: calc(1 / var(--grid-inner-scale) * 100%);
	height: calc(1 / var(--grid-inner-scale) * 100%);
	background-size: cover;
	background-position: 50% 50%;
}
.color-background {
  animation: glow 10s ease-in-out infinite alternate;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(8, 70, 3, 0.2);
  }
  100% {
    box-shadow: 0 0 10px rgba(16, 151, 45, 0.5), 0 0 30px rgba(4, 61, 35, 0.7);
  }
}
</style>