<template>
    <template v-if="optionSelectedComputed == 0">
      <div class="row pt-4 seccion-conocimiento">
        <div class="col-1"></div>
        <div class="col-3">
          <img class="conocimientos-image img-fluid h-75" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[0]"  alt="Vue">
        </div>
        <div class="col-7 text-start h-100">
          <h2 class="normal-text">{{$t("conocimientos_vue")}}</h2>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
    <template v-if="optionSelectedComputed == 1">
      <div class="row pt-4 seccion-conocimiento">
        <div class="col-1"></div>
        <div class="col-3">
          <img class="conocimientos-image img-fluid h-75" loading="lazy" style="position: relative; z-index: 20;" :src="logos[1]"  alt="Figma">
        </div>
        <div class="col-7 text-start">
          <div class="row">
            <div class="col">
              <h2 class="normal-text">{{$t("conocimientos_figma")}}</h2>
            </div>
          </div>
          <div class="row pt-4 seccion-conocimiento">
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
        <div class="row pt-4 seccion-conocimiento">
            <div class="col-1"></div>
            <div class="col-xl-3 col-lg-3 col-sm-10 w-sm-50 d-flex flex-sm-column align-items-lg-start align-items-sm-center pb-md-4 pb-lg-0">
                <img class="conocimientos-image w-100 h-auto" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[2]"  alt="Figma">
            </div>
            <div class="col-lg-7 d-md-block d-sm-none text-md-start">
                <h2 class="normal-text text-lg-start text-sm-center">{{$t("conocimientos_javascript")}}</h2>
            </div>
            <div class="col-1"></div>
        <div class="row pt-4 seccion-conocimiento">
            <div class="col-1"></div>
            <div class="col-lg-6 col-md-6 col-xl-4 text-start d-flex justify-content-sm-center justify-content-lg-start">
              <JuegoJavascript></JuegoJavascript>
            </div>
            <div class="col-1 d-md-none d-sm-block"></div>
            <div class="col-lg-4 col-md-4 col-xl-6 mt-sm-4 mt-md-0 text-start d-flex flex-sm-column justify-content-sm-center justify-content-lg-start background_programacion_gris">
              <div class="row p-4 dialogo-javascript"><p class="font-regular text-white text-lg-start text-sm-center h3">{{$t("conocimientos_javascript")}}</p></div>
            </div>
            <div class="col-sm-1 col-md-0"></div>
            <div class="col-1 d-md-none d-sm-block"></div>
        </div>
      </div>
    </template>
    <template v-if="optionSelectedComputed == 3">
      <div class="row pt-4 seccion-conocimiento">
        <div class="col-1"></div>
        <div class="col-xl-3 col-lg-3 col-sm-12 w-sm-50 d-flex flex-sm-column align-items-lg-start align-items-sm-center pb-md-4 pb-lg-0">
          <img class="conocimientos-image w-100 h-auto" loading="lazy" :src="logos[3]"  alt="CSS Imagen">
        </div>
        <div class="col-lg-7 d-md-block d-sm-none text-md-start">
          <div class="row"><h2 class="normal-text text-lg-start text-sm-center">{{$t("conocimientos_css")}}</h2></div>
          <div class="row h-100 w-100 px-lg-4 px-xl-0">
            <JuegoCss></JuegoCss>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
    <!-- bootstrap -->
    <template v-if="optionSelectedComputed == 4">
      <div class="row pt-4 seccion-conocimiento">
        <div class="col-1"></div>
        <div class="col-3">
          <img class="conocimientos-image img-fluid h-75" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[4]"  alt="Vue">
        </div>
        <div class="col-7 text-start">
          <h2 class="normal-text" style="font-size: 2.5vw;">{{$t("conocimientos_bootstrap")}}</h2>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
    <template v-if="optionSelectedComputed == 5">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <img class="h-100 w-auto" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[5]"  alt="Vue">
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row pt-2">
        <div class="col-1"></div>
        <div class="col-10">
          <TextoAnimado :text="$t('conocimientos_gsap')" font-size="3vw"></TextoAnimado>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
    <!-- SCSS -->
    <template v-if="optionSelectedComputed == 6">
      <div class="row pt-4 seccion-conocimiento">
        <div class="col" style="position: relative; height: 50vh;">
          <section class="container-scss">
            <h1 style="display: none;" id="boton">
              <span class="title" v-for="(word, index) in titleWords" :key="index">
                <span v-for="(letter, i) in word.split('')" :key="i">{{ letter }}</span>
              </span>
            </h1>
            <button class="button" @click="animation">Dale al botón</button>
          </section>
        </div>
      </div>
    </template>
    <!-- Spline  -->
    <div v-show="optionSelectedComputed == 7">
      <div class="row pt-4 seccion-conocimiento">
        <div class="col d-flex justify-content-center position-relative" style="height: 872px;">
          <!-- <h2 class="introduction_title_programacion" style="position: absolute; top: 0px; left: 0px;">SPLINE PERMITE HACER COSAS COMO ESTAS</h2> -->
          <div class="box medium">
            <a href="https://spline.design/" target="_blank" class="glitch">{{$t("conocimientos_spline")}}</a>
          </div>
          <canvas id="container" ></canvas>
        </div>
      </div>
    </div>
    <!-- Node  -->
    <template v-if="optionSelectedComputed == 8">
      <div class="row pt-4 seccion-conocimiento">
        <div class="col-1"></div>
        <div class="col-3">
          <img class="conocimientos-image img-fluid h-75" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[8]"  alt="Vue">
        </div>
        <div class="col-7 text-start">
          <h2 class="normal-text">{{$t("conocimientos_node")}}</h2>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
    <template v-if="optionSelectedComputed == 9">
      <div class="row pt-4 seccion-conocimiento">
        <div class="col-1"></div>
        <div class="col-3">
          <img class="conocimientos-image img-fluid h-75" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logos[9]"  alt="Vue">
        </div>
        <div class="col-7 text-start">
          <h2 class="normal-text pt-4" style="font-size: 2.5vw;">{{$t("conocimientos_react")}}</h2>
        </div>
        <div class="col-1"></div>
      </div>
    </template>
  </template>
   
  <script setup>
    import JuegoJavascript from "./JuegoJavascript.vue";
    import TextoAnimado from "./TextoAnimado.vue";
    import JuegoCss from "./JuegoCss.vue";

    import { onMounted, nextTick, watch, ref, computed } from "vue";
    import { Application } from '@splinetool/runtime';
    import { TimelineMax, Back } from 'gsap'
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
      // require('@/assets/images/logos/webgl.png'),
      // require('@/assets/images/logos/jquery.png'),
      // require('@/assets/images/logos/threejs.png'),

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

    const titleWords = ref(['PUEDES VER COMO', 'TRABAJO CON SCSS', 'CLICANDO AQUI'])

    const animation = () => {
      document.getElementById('boton').classList.add('show-element');
      var title1 = gsap.timeline();
      title1.to(".button", 0, {display: 'none', opacity: 0})
      title1.staggerFromTo(".title span", 0.5, 
      {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
      {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    }
    watch(optionSelectedComputed, (newValue, oldValue) => {
      if (newValue === 7) {
        const canvas = document.getElementById('container');
        const app = new Application(canvas);

        app.load('https://prod.spline.design/TYPY4gxfsCOJ0VCa/scene.splinecode');
      }
    });
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
.show-element {
  display: block !important;
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
  width: 100%;
  max-width: 70vw;
  font-family: "Mona Sans SemiBold Wide";
}
#container {
  width: 772px;
  height: 872px;
  top: 0;
  position: absolute;
}
.texto-scss{
  color: #fff;
  text-transform: uppercase;
  font-size: 6vw;
  margin: 0;
  line-height: 47px;
  letter-spacing: 2px;
}

.title{
  transform: translateX(-50%) rotate(-2deg);
  display: block;
  float: left;
  left: 50%;
  position: relative;
  font-size: 6vw;
  span {
    transform: skew(-2deg);
    display: block;
    float: left;
    text-shadow: #d34296 1px 1px, #d34296 2px 2px, #d34296 3px 3px, #d34296 4px 4px, #d34296 5px 5px, #d34296 6px 6px;
    min-width: 1vw;
    min-height: 1vh;
    position: relative;
  }
}
button{
  height: 20vh;
  width: 50%;
		margin: 7px;
		border: 0.1px solid #e55643;
		padding: 5px;
		font-size: 4vw;
    border: 3px solid #d34296;
    text-shadow: #d34296 1px 1px, #d34296 2px 2px, #d34296 3px 3px, #d34296 4px 4px, #d34296 5px 5px, #d34296 6px 6px;
		background: linear-gradient(
	-90deg,
	#4c60ff,
	#2b9f5e,
	#f1c83c,
	#f9598f
);
		background-size: 600%;
		color: #fff;
		cursor: pointer;
		animation: anime 15s linear infinite;
		transition: 0.3s;
}
	@keyframes anime {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}

button:focus{
  		border: 2px solid;
			border-color: inherit;
			outline: none;
}

button:hover{
  opacity: 0.9;
}

button:active{
  border: 5px solid #2b9f5e;
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
// Efecto Glitch

.box {
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
}

.glitch {
  font-size: 35vw;
  line-height: 1;
  font-family: 'Mona Sans SemiBold Wide';
  font-weight: 700;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-decoration: none;
  color: #fff;
  &:before,
  &:after{
    display: block;
    content: '10';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: .8;
  }
  &:after {
    color: #f0f;
    z-index: -2;
  }
  &:before {
    color: #0ff;
    z-index: -1;
  }
  &:hover {
    &:before {
      animation: glitch-left 3s cubic-bezier(.25, .46, .45, .94) both infinite
    }
    &:after {
      animation: glitch-left-2 3s cubic-bezier(.25, .46, .45, .94) reverse both infinite
    }
  }
  .medium & {
    font-size: 8.7vh;
    letter-spacing: 2px;
    text-align: center;
    color: white;
    width: 100%;
    &:before,
    &:after{
      content: 'SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE SPLINE ';
    }
    &:after {
      color: #df4924;
    }
    &:before {
      color: #00FF02;
    }
    &:hover {
    &:before {
        animation: glitch-medium 2.5s cubic-bezier(.25, .46, .45, .94) both infinite
      }
      &:after {
        animation: glitch-medium 2.5s cubic-bezier(.25, .46, .45, .94) reverse both infinite
      }
    }
  }
}

@keyframes glitch-medium {
    0% {
        transform: translate(0)
    }
    20% {
        transform: translate(-6px, 6px)
    }
    40% {
        transform: translate(-6px, -6px)
    }
    60% {
        transform: translate(6px, 6px)
    }
    80% {
        transform: translate(6px, -6px)
    }
    to {
        transform: translate(0)
    }
}
@keyframes glitch-left {
    0% {
        transform: translate(0)
    }
    33% {
        transform: translate(-8px, 9px)
    }
    66% {
        transform: translate(8px, -9px)
    }
    to {
        transform: translate(0)
    }
}
@keyframes glitch-left-2 {
    0% {
        transform: translate(0)
    }
    33% {
        transform: translate(-8px, -9px)
    }
    66% {
        transform: translate(8px, 9px)
    }
    to {
        transform: translate(0)
    }
}
</style>