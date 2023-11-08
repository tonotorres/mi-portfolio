<template>
    <div class="row" id="conocimientos" style="height: 10vh;"></div>
    <div class="row ">
      <div class="col text-center"><h2 class="section_title_programacion">{{$t("conocimientos_titulo")}}</h2></div>
    </div>
    <div class="row" style="height: 5vh;"></div>
    <div class="row ">
      <div class="col-12" style="position: relative; height: 250px;">
        <div class="carousel-conocimientos">
          <div class="boxes"></div>
        </div>
        <div class="viewport"></div>
      </div>	
    </div>
    <div class="row d-none d-sm-flex" style="height: 10vh;"></div>
    <SeccionConocimientos v-if="isLargeScreen" :optionSelected="optionSelectedComputed"></SeccionConocimientos>
    <div class="row separacion_secciones_programacion"></div>
  </template>
   
  <script setup>

    import { onMounted, defineAsyncComponent, ref, computed } from "vue";

    const SeccionConocimientos = defineAsyncComponent(() => import('./SeccionConocimientos.vue'))
    import { gsap } from "gsap";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { Draggable } from "gsap/Draggable";

    // Inicializaciones

    const logos = [
      require('@/assets/images/logos/vue.svg'),
      require('@/assets/images/logos/figma.svg'),
      require('@/assets/images/logos/js.svg'),
      require('@/assets/images/logos/css.svg'),
      require('@/assets/images/logos/bootstrap.svg'),
      require('@/assets/images/logos/gsap.png'),
      require('@/assets/images/logos/sass.png'),
      require('@/assets/images/logos/spline.png'),
      require('@/assets/images/logos/node.png'),
      require('@/assets/images/logos/react.svg'),
      // require('@/assets/images/logos/webgl.png'),
      // require('@/assets/images/logos/jquery.png'),
      // require('@/assets/images/logos/threejs.png'),

    ];
    var optionSelected = ref(null)
    var carousel = null
    var boxes = null
    var loop = null
    var viewport = null
    var proxy = null

    const numBoxes  = 10;  
    const boxWidth  = 250;
    const boxHeight = 250;

    var imgWidth  = null
    var imgHeight = null
    var viewWidth = null;
    var wrapWidth = null
    var wrapVal = null
    var wrapProgress = null
    var direction = "to-left"; // "to-left" | "to-right"
    var directionVal = direction == 'to-left' ? -1 : 1;
    var animation = null

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Draggable);

    const optionSelectedComputed = computed(() => {
      return optionSelected.value
    })
    const isLargeScreen = computed(() => window.innerWidth >= 950);
    function selectOption(index) {
      optionSelected.value = index
      console.log(optionSelectedComputed.value)
    }
    

    function updateProgress() {
      // let newDirection = "to-" + this.getDirection(); // "to-left" | "to-right"
      // if(direction != newDirection){
      //   let currentTimeScale = animation.timeScale();
      //   let newTimeScale = currentTimeScale * -1;
      //   animation.timeScale(newTimeScale);
      // }
      const dragValue = (wrapVal(this.deltaX * directionVal) / wrapWidth);
      const currentProgressAnim = animation.progress();
      const endProgress = wrapProgress(currentProgressAnim + dragValue);
      animation.progress(endProgress);
    }


    function resize() {
      viewWidth = viewport.offsetWidth;
      animation.render(animation.time(), false, true);
    }

  onMounted(async () => {
    carousel = document.querySelector(".carousel-conocimientos");
    boxes = document.querySelector(".boxes");
    viewport = document.querySelector(".viewport");

    proxy = document.createElement("div");

    direction = "to-left"; // "to-left" | "to-right"
    directionVal = direction == 'to-left' ? -1 : 1;

    imgWidth  = boxWidth  - 6;
    imgHeight = boxHeight - 14;
    viewWidth = window.innerWidth;
    wrapWidth = numBoxes * boxWidth;
    wrapVal = gsap.utils.wrap(0, wrapWidth);
    wrapProgress = gsap.utils.wrap(0, 1);

    gsap.set([carousel, viewport], { height: boxHeight, xPercent: 0 });
    gsap.set(boxes, { left: -boxWidth });

    for (let i = 0; i < logos.length; i++) {
      const src = logos[i]
      const num = document.createElement("div");
      num.className = "num";
      num.innerText = i;

      const img = document.createElement("img");
      img.src = src;
      img.width = imgWidth;
      img.height = imgHeight;

      const box = document.createElement("div");
      box.className = "box";
      box.style.position = "absolute";
      box.style.display = "flex";
      box.style.alignItems = "center";
      box.style.justifyContent = "center";
      box.style.transform = "scale(0.8)";
      box.addEventListener("click", () => selectOption(i));
      box.appendChild(img);

      boxes.appendChild(box);

      gsap.set(box, { x: i * boxWidth, width: boxWidth, height: boxHeight });
    }

    const stringX = directionVal == -1 ? `-=${wrapWidth}` : `+=${wrapWidth}`;

    animation = gsap.to(".box", {
      repeat: -1,
      duration: 20,
      x: stringX,
      ease: "none",
      paused: true,
      modifiers: {
        x: function(x, target) {
          if(directionVal==-1){
            x = ((parseInt(x) - wrapWidth) % wrapWidth) + wrapWidth;
          }else{
            x = parseInt(x) % wrapWidth;
          }
          target.style.visibility = x - boxWidth > viewWidth ? "hidden" : "visible";
          return `${x}px`;
        }
      }
    });

    Draggable.create(proxy, {
      type: "x",
      trigger: ".carousel-conocimientos",
      inertia: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress
    });

    window.addEventListener("resize", resize);

    carousel.addEventListener("mouseenter", () => animation.pause());
    carousel.addEventListener("mouseleave", () => animation.play());
    animation.play();

    });

  </script>
    
<style scoped>
/* Secciones conocimientos */

.figma_programacion {
  background-image: url('../../assets/images/programacion/figma_programacion.webp');
}
.figma_jl {
  background-image: url('../../assets/images/programacion/figma_jl.webp');
}
/* Estilos Conocimientos */
.carousel-conocimientos {
  overflow: hidden;
  width: 100%;
  top: 0%;  
  left: 0%;
  height: 20vh;
  position: absolute;
}

.viewport {
  position: absolute;
  pointer-events: none;  
  width: 90%;
  width: 100%;
  top: 0%;
  left: 0%;
  /* border: 2px solid #ddd; */
}

.num {
  position: absolute;
  color: #555; 
  color: #fafafa; 
  font-size: 18px;
  line-height: 1;
  top: 14px;
  left: 8px;  
  text-shadow: 
    1px  1px 0px #555, 
    -1px -1px 0px #555, 
    1px -1px 0px #555, 
    -1px  1px 0px #555;
}

.box {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.boxes {
  position: relative;
}

</style>