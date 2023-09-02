<template>
    <div class="wrapper">
      <p id="position"></p>
      <div ref="imageContainer" class="image-container" :style="backgroundStyle"></div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  
  export default {
    props: {
      image: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const imageContainer = ref(null);
      const position = ref({ x: 0, y: 0 });
  
      const backgroundStyle = computed(() => {
        return {
          backgroundImage: `url(${props.image})`,
        };
      });
  
      onMounted(() => {
        window.addEventListener("mousemove", (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const pageYcenter = window.innerHeight / 2;
            const pageXcenter = window.innerWidth / 2;

            const posX = mouseX - pageXcenter;
            const posY = mouseY - pageYcenter;

            imageContainer.value.style.transform = `rotateY(${posX / 80}deg) rotateX(${posY / 100}deg) translateX(${posX / 20}px) translateY(${posY / 20}px)`;

            // Modifica el clip-path en función de posX y posY
            const clipPathX = 100 + posX / 10;
            const clipPathY = 100 + posY / 10;
            imageContainer.value.style.clipPath = `inset(50% at ${clipPathX}% ${clipPathY}%)`;

            position.value = { x: posX, y: posY };
            });
        });
  
      return { imageContainer, backgroundStyle, position };
    },
  };
  </script>
  
  
  <style scoped>
  .wrapper {
    height: 100%;
    display: flex;
    justify-content: space-around;
  }
  
  .image-container {
    --f: .1; /* the parallax factor (the smaller the better) */
    --r: 10px; /* radius */
    --_f: calc(100%*var(--f)/(1 + var(--f)));
    --_a: calc(90deg*var(--f));
    width: 60vw;
    height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    align-self: center;
    border-radius: 20px;
    transform: perspective(400px) var(--_t,rotateY(var(--_a)));
  }
  
  #position {
    margin: 0;
    text-align: center;
    line-height: 400px;
  }
  </style>
  