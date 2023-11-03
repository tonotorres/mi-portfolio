<template>
    <template v-if="optionSelectedComputed == 0">
      <div class="row pt-4">
        <div class="col-1"></div>
        <div class="col-3">
          <img class="conocimientos-image" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[0]"  alt="Vue">
        </div>
        <div class="col-7 text-start">
          <h2 class="normal-text">{{$t("conocimientos_vue")}}</h2>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
    <template v-if="optionSelectedComputed == 1">
      <div class="row pt-4">
        <div class="col-1"></div>
        <div class="col-3">
          <img class="conocimientos-image" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[1]"  alt="Figma">
        </div>
        <div class="col-7 text-start">
          <div class="row">
            <div class="col">
              <h2 class="normal-text">{{$t("conocimientos_figma")}}</h2>
            </div>
          </div>
          <div class="row pt-4">
            <div class="col-4">
              <div class="conocimientos-image figma-designs figma_programacion" alt="Figma"><a class="d-block h-100 w-100" href="https://www.figma.com/file/n8qyQ6TnOY0ZPkN5ty44KS/Portfolio-Informatica?type=design&node-id=420%3A119&mode=design&t=xXkodN9yreCtNxol-1" target="_blank" ></a></div>
            </div>
            <div class="col-4">
              <div class="conocimientos-image figma-designs figma_jl" alt="Figma"><a class="d-block h-100 w-100" href="https://www.figma.com/file/PsFokNvVgiGfpbDvd8uMDA/JLSound?type=design&node-id=0%3A1&mode=design&t=TafI5kuHzDVMjMZz-1" target="_blank" ></a></div>
            </div>
            <div class="col-4">
              <div class="conocimientos-image figma-designs figma_programacion" alt="Figma"></div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
    <template v-if="optionSelectedComputed == 2">
        <div class="row pt-4">
            <div class="col-1"></div>
            <div class="col-xl-3 col-lg-3 col-sm-12 w-sm-50 d-flex flex-sm-column align-items-lg-start align-items-sm-center">
                <img class="conocimientos-image" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[2]"  alt="Figma">
            </div>
            <div class="col-lg-7 d-md-block d-sm-none text-md-start">
                <h2 class="normal-text text-lg-start text-sm-center">{{$t("conocimientos_javascript")}}</h2>
            </div>
            <div class="col-1"></div>
        <div class="row pt-4">
            <div class="col-1"></div>
            <div class="col-md-4 text-start d-flex justify-content-sm-center justify-content-lg-start">
              <JuegoJavascript></JuegoJavascript>
            </div>
            <div class="col-1 d-md-none d-sm-block"></div>
            <div class="col-md-6 col-sm-10 mt-sm-4 mt-md-0 text-start d-flex flex-sm-column justify-content-sm-center justify-content-lg-start background_programacion_gris">
              <div class="row p-4 dialogo-javascript"><p class="font-regular text-white text-lg-start text-sm-center h3">{{$t("conocimientos_javascript")}}</p></div>
            </div>
            <div class="col-sm-1 col-md-0"></div>
            <div class="col-1 d-md-none d-sm-block"></div>
        </div>
      </div>
    </template>
    <template v-if="optionSelectedComputed == 3">
      <div class="row pt-4">
        <div class="col-1"></div>
        <div class="col-xl-3 col-lg-3 col-sm-12 w-sm-50 d-flex flex-sm-column align-items-lg-start align-items-sm-center">
          <img class="conocimientos-image" loading="lazy" :src="logos[3]"  alt="Figma">
        </div>
        <div class="col-lg-7 d-md-block d-sm-none text-md-start">
          <div class="row"><h2 class="normal-text text-lg-start text-sm-center">{{$t("conocimientos_css")}}</h2></div>
          <div class="row h-100 w-100">
            <JuegoCss></JuegoCss>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
    <template v-if="optionSelectedComputed == 4">
      <div class="row pt-4">
        <div class="col-1"></div>
        <div class="col-3">
          <img class="conocimientos-image" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[4]"  alt="Vue">
        </div>
        <div class="col-7 text-start">
          <h2 class="normal-text">{{$t("conocimientos_bootstrap")}}</h2>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
    <template v-if="optionSelectedComputed == 5">
      <div class="row pt-4">
        <div class="col-1"></div>
        <div class="col-3">
          <img class="conocimientos-image" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[4]"  alt="Vue">
        </div>
        <div class="col-7 text-start">
          <h2 class="normal-text">{{$t("conocimientos_bootstrap")}}</h2>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
    <template v-if="optionSelectedComputed == 6">
      <div class="row pt-4">
        <div class="col" style="position: relative;">
          <section class="container-scss">
            <h1 class="texto-scss">
              <span class="title">This is</span>
              <span class="title">a long</span>
              <span class="title">long title</span>
            </h1>
            <div class="button-scss" :click="restartAnimation()">restart</div>
          </section>
        </div>
      </div>
    </template>
  </template>
   
  <script setup>
    import JuegoJavascript from "./JuegoJavascript.vue";
    import JuegoCss from "./JuegoCss.vue";

    import { onMounted, nextTick, ref, computed } from "vue";

    import { gsap } from "gsap";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      require('@/assets/images/logos/webgl.png'),
      require('@/assets/images/logos/jquery.png'),
      require('@/assets/images/logos/threejs.svg'),

    ];
    const props = defineProps({
        optionSelected: {
            type: Number,
            default: 6,
        }
    })

    gsap.registerPlugin(ScrollTrigger);

    const optionSelectedComputed = computed(() => {
      return props.optionSelected
    })


    function animation() {
      var title1 = gsap.timeline();
      title1.set(".button", {visibility: 'hidden', opacity: 0})
      title1.fromTo(".title span", 
        {ease: "back.out(1.7)", opacity: 0, bottom: -80},
        {ease: "back.out(1.7)", opacity: 1, bottom: 0, stagger: 0.05});
      gsap.to(".button", {duration: 0.2, visibility: 'visible', opacity: 1});
    }
    function restartAnimation() {
      animation();
    }
    onMounted(async () => {

    });

  </script>
    
<style scoped lang="scss">
/* Secciones conocimientos */

.figma_programacion {
  background-image: url('../../assets/images/programacion/figma_programacion.webp');
}
.figma_jl {
  background-image: url('../../assets/images/programacion/figma_jl.webp');
}
.dialogo-javascript {
    width: 100%;
    height: 373px;
}
.container-scss{
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: block;
  position: absolute;
  max-width: 225px;
  font-family: "Mona Sans SemiBold Wide";
}

.texto-scss{
  color: #fff;
  text-transform: uppercase;
  font-size: 42px;
  margin: 0;
  line-height: 47px;
  letter-spacing: 2px;
}

.title{
  transform: translateX(-50%) rotate(-10deg);
  display: block;
  float: left;
  left: 50%;
  position: relative;
  
  span {
    transform: skew(-10deg);
    display: block;
    float: left;
    text-shadow: #d34296 1px 1px, #d34296 2px 2px, #d34296 3px 3px, #d34296 4px 4px, #d34296 5px 5px, #d34296 6px 6px;
    min-width: 10px;
    min-height: 10px;
    position: relative;
  }
}

.title{
  &:nth-child(1){
    color: #e55643;
  }
  &:nth-child(2){
    color: #2b9f5e;
  }
  &:nth-child(3){
    color: #f1c83c;
  }
}
@media screen and (min-width: 400px) and (max-width: 1500px) {
    .dialogo-javascript{
        width: 100%;
        height: 372px;;
    }
}
</style>