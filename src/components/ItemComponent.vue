<template>
  <div class="item" :style="transform">
    <div class="text">{{ title }}</div>
    <div class="yellow" :style="glitchTop">{{ title }}</div>
    <div class="magenta" :style="glitchTop">{{ title }}</div>
    <div class="cyan" :style="glitchBottom">{{ title }}</div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { gsap } from "gsap";

export default {
  props: ["todo", "delta", "speed"],
  setup(props) {
    const translateY = ref(0);
    const title = computed(() => props.todo.title);
    const easing = computed(() => 0.4 - (props.todo.id * 1.2 + 10) / 100);
    const transform = computed(() => ({
      transform: `translateY(${translateY.value}px) skewY(${skewY.value * 2}deg) scale(1, 1)`,
      filter: `blur(${Math.abs(skewY.value / 4)}px)`,
	    opacity: `1`

    }));
    const glitch = computed(() => props.speed * 3);
    const glitchTop = computed(() => ({
      transform: `translate3D(${-glitch.value}px,${-glitch.value}px,0px)`,
      opacity: `1`
    }));
    const glitchMiddle = computed(() => ({
      transform: `translate3D(${-glitch.value + 2}px,${-glitch.value + 2}px,0px)`,
      opacity: `1`
    }));
    const glitchBottom = computed(() => ({
      transform: `translate3D(${glitch.value}px,${glitch.value}px,0px) `,
      opacity: `1`
    }));
    const skewY = computed(() => props.speed);

    watch(
      () => props.delta,
      () => {
        gsap.to(translateY, {
          duration: 0.5,
          ease: "power4.out",
          delay: easing.value,
          y: props.delta,
        });
      }
    );

    return {
      translateY,
      title,
      transform,
      glitchTop,
      glitchMiddle,
      glitchBottom,
      skewY,
    };
  },
};
</script>

  <style scoped>


*{
	overflow:hidden;
	box-sizing:border-box;
}


#code{
	height:100%;
	height:100vh;
	margin:auto;
	width:100%;
}

.list {
	margin:0 auto;
	
}

.item{
  font-size: 1vw;
    margin: 0px;
    height: 1.8vw;
    width: 100%;
    text-align: left;
    position: relative;
	font-weight:bolder;
	isolation: isolate;
	padding:0px;
	font-family: "Courier New", Courier, monospace;
  user-select: none;
	font-weight: 400;
  
}


.item>div:not(.text){
	position:absolute;
	opacity: 1;
	mix-blend-mode: multiply;
	will-change: opacity;
	top:0px;
	left:0px;
	width:100%;
	text-align:left;
	line-height:2.5vw;
  filter: blur(1px);
}

.item>.text{
	position:relative;
	opacity:1;
  color: white;
	line-height:2.5vw;
	z-index:10;
  filter: blur(1px);
/* 	-webkit-text-stroke: 2px #000; */
}

.yellow{
	color: rgb(255,255,0);
	z-index:1;
}

.magenta{
	color: rgb(255, 0, 0);
	z-index:2;
}

.cyan{
	color: rgb(0,255,255);
	z-index:3;
}
  </style>