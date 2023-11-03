<template>
    <div class="row" style="height: 10vh;"></div>
    <div class="row ">
      <div class="col text-center"><h2 class="section_title_programacion">{{$t("conocimientos_titulo")}}</h2></div>
    </div>
    <div class="row" style="height: 5vh;"></div>
    <div class="row ">
      <div class="col">
          <div class="container-fluid p-0">
	          <div class="row">
		          <div class="col-12 no-gutter-left no-gutter-right">
			          <div class="slides-wrapper">

				          <div class="slide-box" v-for="(logo, index) in logos" v-on:click="selectOption(index)">
				            <div class="contItem" style="display: inline-block; vertical-align: top !important;">
				              <a class="animsition-link" style="display: block;">
				                <div class="img-hover-zoom vh50" style="touch-action: pan-y;">
                          <img class="img-fluid vh50 width-fix" loading="lazy" style="position: relative; z-index: 20; touch-action: pan-y;" :src="logo"  alt="Logo">
                        </div>
                      </a>
				            </div>
				          </div>
                </div>
              </div>	
            </div>
          </div>
      </div> 
    </div>
    <div class="row" style="height: 10vh;"></div>
      <SeccionConocimientos :optionSelected="optionSelectedComputed"></SeccionConocimientos>
    <div class="row" style="height: 20vh;"></div>
  </template>
   
  <script setup>

    import { onMounted, nextTick, ref, computed } from "vue";

    import SeccionConocimientos from "./SeccionConocimientos.vue";

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
    var optionSelected = ref(null)
    var wrapper = null
    var boxes = null
    var loop = null
    gsap.registerPlugin(ScrollTrigger);

    

    // function SplitTextToChars(textNode) {
    //   const textContent = textNode.textContent;
    //   const textSplit = textContent.split('');

    //   const frag = document.createDocumentFragment();
    //   textSplit.forEach((letter, i) => {
    //     const span = document.createElement('span');
    //     span.textContent = letter;
    //     span.style = `${letter === ' ' ? 'min-width: 1rem;' : ''}z-index: ${
    //       textSplit.length - i
    //     }; position: relative; display: inline-block;`;
    //     frag.appendChild(span);
    //   });
    //   textNode.textContent = '';
    //   textNode.appendChild(frag);

    //   return textNode.children;
    // }


    // function animateSubtitle() {
    //   const subtitleElement = subtitleRef.value;
    //   const netluParrafoElement = netluParrafoRef.value;
    //   const chars = SplitTextToChars(subtitleElement);

    //   gsap.set(subtitleElement, { perspective: 400 });

    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: netluParrafoElement,
    //       start: 'top 75%',
    //       end: 'bottom 99%',
    //       scrub: true,
    //       once: true
    //     },
    //   });

    //   tl.from(
    //     chars,
    //     {
    //       duration: 0.2,
    //       opacity: 0,
    //       scale: 1,
    //       y: -40,
    //       rotationX: -90,
    //       transformOrigin: '0% 50% -50',
    //       ease: 'inOut',
    //       stagger: 0.025,
    //     },
    //     '+=0'
    //   );
    // }
    // Life Cycle
    const optionSelectedComputed = computed(() => {
      return optionSelected.value
    })

    function selectOption(index) {
      optionSelected.value = index
      console.log(optionSelectedComputed.value)
    }
    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let onChange = config.onChange,
          lastIndex = 0,
          tl = gsap.timeline({repeat: config.repeat, onUpdate: onChange && function() {
            let i = tl.closestIndex()
            if (lastIndex !== i) {
              lastIndex = i;
              onChange(items[i], i);
            }
          }, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 10)}),
          length = items.length,
          startX = items[0].offsetLeft,
          times = [],
          widths = [],
          spaceBefore = [],
          xPercents = [],
          curIndex = 0,
          center = config.center,
          pixelsPerSecond = (config.speed || 1) * 10,
          snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
          timeOffset = 0, 
          container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
          totalWidth,
          getTotalWidth = () => items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + spaceBefore[0] + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0),
          populateWidths = () => {
            let b1 = container.getBoundingClientRect(), b2;
            items.forEach((el, i) => {
              widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
              xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
              b2 = el.getBoundingClientRect();
              spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
              b1 = b2;
            });
            gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
              xPercent: i => xPercents[i]
            });
            totalWidth = getTotalWidth();
          },
          timeWrap,
          populateOffsets = () => {
            timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
            center && times.forEach((t, i) => {
              times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
            });
          },
          getClosest = (values, value, wrap) => {
            let i = values.length,
              closest = 1e10,
              index = 0, d;
            while (i--) {
              d = Math.abs(values[i] - value);
              if (d > wrap / 2) {
                d = wrap - d;
              }
              if (d < closest) {
                closest = d;
                index = i;
              }
            }
            return index;
          },
          populateTimeline = () => {
            let i, item, curX, distanceToStart, distanceToLoop;
            tl.clear();
            for (i = 0; i < length; i++) {
              item = items[i];
              curX = xPercents[i] / 100 * widths[i];
              distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
              distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
              tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
                .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
                .add("label" + i, distanceToStart / pixelsPerSecond);    
              times[i] = distanceToStart / pixelsPerSecond;
            }
            timeWrap = gsap.utils.wrap(0, tl.duration());
          }, 
          refresh = (deep) => {
            let progress = tl.progress();
            tl.progress(0, true);
            populateWidths();
            deep && populateTimeline();
            populateOffsets();
            deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
          },
          proxy;
      gsap.set(items, {x: 0});
      populateWidths();
      populateTimeline();
      populateOffsets();
      window.addEventListener("resize", () => refresh(true));
      function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        if (time < 0 || time > tl.duration()) {
          vars.modifiers = {time: timeWrap};
        }
        curIndex = newIndex;
        vars.overwrite = true;
        gsap.killTweensOf(proxy);
        return tl.tweenTo(time, vars);
      }
      tl.next = vars => toIndex(curIndex+1, vars);
      tl.previous = vars => toIndex(curIndex-1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.closestIndex = setCurrent => {
        let index = getClosest(times, tl.time(), tl.duration());
        setCurrent && (curIndex = index);
        return index;
      };
      tl.times = times;
      tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      
      tl.closestIndex(true);
      onChange && onChange(items[curIndex], curIndex);
      return tl;
    }	
    onMounted(async () => {
      await nextTick()
      wrapper = document.querySelector(".slides-wrapper");
      boxes = gsap.utils.toArray(".slide-box");
      // console.clear();


      let activeElement;
      console.log(boxes)
      window.addEventListener("load", () => {
        loop = horizontalLoop(boxes, {
          paused: false, 
          draggable: true, // make it draggable
          center: false, // active element is the one in the center of the container rather than th left edge
          onChange: (element, index) => { // when the active element changes, this function gets called.
            activeElement && activeElement.classList.remove("-active");
            element.classList.add("-active");
            activeElement = element;
          }
        });
      })


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
.slides-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
}

.slide-box {
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
}
	.contItem {
			margin-right: 8px; text-align: center;
		}
		
		


.img-hover-zoom, .video-hover-zoom {
  height: 100%; /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img, .video-hover-zoom video {
  transform: scale(0.85);
  transition: transform .6s ease-in-out;
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img, .video-hover-zoom:hover video {
  transform: scale(1);
}

.vh50 {
	height: 20vh !important;
}
.width-fix {
	width: 100%;
}

.artistDetails {
		height: 70px;
		-webkit-transition: all 1s ease-in;
		-moz-transition: all 1s ease-in;
		-o-transition: all 1s ease-in;
		-ms-transition: all 1s ease-in;
		transition: all 1s ease-in;
		z-index: 2;
		position: relative;
	}
	.artistDisciplines {
		text-transform: uppercase;
		font-size: clamp(0.625rem, 0.6rem + 0.125vw, 0.75rem);
	}
</style>