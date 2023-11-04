<template>
  <div>
    <!-- Modals -->
    <dialog id="netluModal" class="modal-personalizado " >  
      <div class="row"><div class="col text-end"><button id="hideNetlu" class="close-button mr-4"><img src="../../assets/images/programacion/cruz.svg" alt="Close"></button></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="section_title_programacion">{{$t("experiencia_netlu_titulo")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="section_subtitle_programacion">{{$t("experiencia_netlu_fecha")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_main-text_programacion pt-4">{{$t("experiencia_netlu_subtitulo")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion pt-md-4 pt-sm-2">{{$t("experiencia_netlu_textos_1")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion pt-md-4 pt-sm-2">{{$t("experiencia_netlu_textos_2")}}</h2></div><div class="col-1"></div></div>
      <div class="row" v-if="isNotTouchDevice"><div class="col-1"></div><logos-component :logos="experiencia_netlu_logos"></logos-component><div class="col-1"></div></div>
    </dialog>
    <dialog id="amuraModal" class="modal-personalizado " >  
      <div class="row"><div class="col text-end"><button id="hideAmura" class="close-button mr-4"><img src="../../assets/images/programacion/cruz.svg" alt="Close"></button></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="section_title_programacion">{{$t("experiencia_amura_titulo")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="section_subtitle_programacion">{{$t("experiencia_amura_fecha")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_main-text_programacion pt-4">{{$t("experiencia_amura_subtitulo")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion pt-md-4 pt-sm-2">{{$t("experiencia_amura_textos_1")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion pt-md-4 pt-sm-2">{{$t("experiencia_amura_textos_2")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion pt-md-4 pt-sm-2">{{$t("experiencia_amura_textos_3")}}</h2></div><div class="col-1"></div></div>
      <div class="row" v-if="isNotTouchDevice"><div class="col-1"></div><logos-component :logos="experiencia_amura_logos"></logos-component><div class="col-1"></div></div>
    </dialog>
    <dialog id="satecModal" class="modal-personalizado " >  
      <div class="row"><div class="col text-end"><button id="hideSatec" class="close-button mr-4"><img src="../../assets/images/programacion/cruz.svg" alt="Close"></button></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="section_title_programacion">{{$t("experiencia_satec_titulo")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="section_subtitle_programacion">{{$t("experiencia_satec_fecha")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_main-text_programacion pt-4">{{$t("experiencia_satec_subtitulo")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion pt-md-4 pt-sm-2">{{$t("experiencia_satec_textos_1")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion pt-md-4 pt-sm-2">{{$t("experiencia_satec_textos_2")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion pt-md-4 pt-sm-2">{{$t("experiencia_satec_textos_3")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion pt-md-4 pt-sm-2">{{$t("experiencia_satec_textos_4")}}</h2></div><div class="col-1"></div></div>
      <div class="row" v-if="isNotTouchDevice"><div class="col-1"></div><logos-component :logos="experiencia_satec_logos"></logos-component><div class="col-1"></div></div>

    </dialog>
    <dialog id="jlModal" class="modal-personalizado " >  
      <div class="row"><div class="col text-end"><button id="hideJL" class="close-button mr-4"><img src="../../assets/images/programacion/cruz.svg" alt="Close" style="filter: invert(1);"></button></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="section_title_programacion text-white">{{$t("experiencia_jl_titulo")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="section_subtitle_programacion text-white">{{$t("experiencia_jl_fecha")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_main-text_programacion text-white pt-4">{{$t("experiencia_jl_subtitulo")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion text-white pt-4">{{$t("experiencia_jl_textos_1")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion text-white pt-4">{{$t("experiencia_jl_textos_2")}}</h2></div><div class="col-1"></div></div>
      <div class="row" v-if="isNotTouchDevice"><div class="col-1"></div><logos-component :logos="experiencia_jl_logos"></logos-component><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-center"><a href="https://jlsound.es/" target="_blank" class="section_subtitle_programacion text-white pt-4 d-block">{{$t("ver_proyecto")}}</a></div><div class="col-1"></div></div>
    </dialog>
    <dialog id="legalModal" class="modal-personalizado " >  
      <div class="row"><div class="col text-end"><button id="hideLegal" class="close-button mr-4"><img src="../../assets/images/programacion/cruz.svg" alt="Close" style="filter: invert(1);"></button></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="section_title_programacion text-white">{{$t("experiencia_legal_titulo")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="section_subtitle_programacion text-white">{{$t("experiencia_legal_fecha")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_main-text_programacion text-white pt-4">{{$t("experiencia_legal_subtitulo")}}</h2></div><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-start"><h2 class="modal_normal-text_programacion text-white pt-4">{{$t("experiencia_legal_textos_1")}}</h2></div><div class="col-1"></div></div>
      <div class="row" v-if="isNotTouchDevice"><div class="col-1"></div><logos-component :logos="experiencia_legal_logos"></logos-component><div class="col-1"></div></div>
      <div class="row"><div class="col-1"></div><div class="col text-center"><a href="https://legalspain.es/" target="_blank"  class="section_subtitle_programacion text-white pt-4 d-block">{{$t("ver_proyecto")}}</a></div><div class="col-1"></div></div>
    </dialog>  

    <!-- Sección -->
    <div class="row" style="height: 20vh;"></div>
    <div class="row ">
      <div class="col text-center"><h2 class="section_title_programacion">{{$t("experiencia_titulo")}}</h2></div>
    </div>
    <div class="row">
      <div class="col">
        <p></p>
        <div>
          <ul>
            <li class="imagen-empleo">
              <a id="showNetlu" class="link-empleo">
                <img src="..\..\assets\images\programacion\netlu.webp" style="aspect-ratio: 16 / 9;" />
              </a>
            </li>
            <li class="imagen-empleo">
              <a id="showAmura" class="link-empleo">
                <img src="..\..\assets\images\programacion\amura.webp" style="aspect-ratio: 16 / 9;" />
              </a>
            </li>
            <li class="imagen-empleo"> 
              <a id="showSatec" class="link-empleo">
                <img src="..\..\assets\images\programacion\satec.webp" style="aspect-ratio: 16 / 9;" />
              </a>
            </li>
            <li class="imagen-empleo">
              <a id="showJL" class="link-empleo">
                <img src="..\..\assets\images\programacion\jlsound.webp" style="aspect-ratio: 16 / 9;" loading="lazy"/>
              </a>
            </li>
            <li class="imagen-empleo">
              <a id="showLegal" class="link-empleo">
                <img src="..\..\assets\images\programacion\legalspain.webp" style="aspect-ratio: 16 / 9;" loading="lazy"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </template>
   
  <script setup>
    import LogosComponent from "./LogosComponent.vue";

    import { onMounted, onBeforeMount, computed, nextTick } from "vue";
    import { gsap } from "gsap";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    var elLinks = null
    var elItems = null
    var isTouchDevice = true;
    const isNotTouchDevice = computed(() => !isTouchDevice);

    const experiencia_netlu_logos = [
      require('@/assets/images/logos/vue.svg'),
      require('@/assets/images/logos/js.svg'),
      require('@/assets/images/logos/css.svg'),
      require('@/assets/images/logos/bootstrap.svg'),
      require('@/assets/images/logos/node.png'),
      require('@/assets/images/logos/react.svg'),
      require('@/assets/images/logos/laravel.png'),

    ];
    const experiencia_amura_logos = [
      require('@/assets/images/logos/vue.svg'),
      require('@/assets/images/logos/js.svg'),
      require('@/assets/images/logos/css.svg'),
      require('@/assets/images/logos/jquery.png'),
      require('@/assets/images/logos/node.png'),
      require('@/assets/images/logos/react.svg'),
      require('@/assets/images/logos/MongoDB.png'),
      require('@/assets/images/logos/express.png'),
      require('@/assets/images/logos/python.png'),
    ];
    const experiencia_satec_logos = [
      require('@/assets/images/logos/vue.svg'),
      require('@/assets/images/logos/js.svg'),
      require('@/assets/images/logos/css.svg'),
      require('@/assets/images/logos/sass.png'),
      require('@/assets/images/logos/php.svg'),
      require('@/assets/images/logos/wordpress.png'),
      require('@/assets/images/logos/bootstrap.svg'),
    ];
    const experiencia_jl_logos = [
      require('@/assets/images/logos/vue.svg'),
      require('@/assets/images/logos/js.svg'),
      require('@/assets/images/logos/css.svg'),
      require('@/assets/images/logos/sass.png'),
      require('@/assets/images/logos/threejs.png'),
      require('@/assets/images/logos/gsap.png'),
      require('@/assets/images/logos/webgl.png'),
    ];
    const experiencia_legal_logos = [
      require('@/assets/images/logos/wordpress.png'),
      require('@/assets/images/logos/js.svg'),
      require('@/assets/images/logos/css.svg'),
      require('@/assets/images/logos/seo.png'),
    ];

    /* When the mouse is entering */
    function onLinkEnter (elHoveredLink) {
      /* Remove the blur & all translations on the hover card */
      gsap.to(elHoveredLink, {
        filter: 'blur(0px)',
        x: 0,
        y: 0,
        scale: 1.2,
        overwrite: true,
        duration: 0.6,
        ease: 'power3.out'
      });
  
      /* Move the elements away from the hovered card */
      elLinks.forEach(elLink => {
        // Do nothing with the hovered link
        if (elLink === elHoveredLink) return;
        // Calculate the x & y translations
        let x = (elLink.bbox.x - elHoveredLink.bbox.x) * 0.2;
        let y = (elLink.bbox.y - elHoveredLink.bbox.y) * 0.2;
        gsap.to(elLink, {
          filter: 'blur(15px)',
          scale: 0.8,
          x,
          y,
          overwrite: true,
          duration: 0.6,
          ease: 'power2.out'
        });
      });
    }

    /* When the mouse is leaving a card */
    function onLinkLeave (elLink) {
      // Reset all transforms & blur on all the cards
      gsap.to(elLinks, {
        filter: 'blur(0px)',
        x: 0,
        y: 0,
        scale: 1,
        delay: 0.1,
        overwrite: true
      });
    }

    /* Calculate the bounding rects of each card */
    /* We do it only on resize to avoid calculating it on every hover */
    function calculateBboxes () {
      elLinks.forEach(elLink => {
        elLink.bbox = elLink.getBoundingClientRect();
      });
    }


    onBeforeMount(() => {
      isTouchDevice = window.matchMedia('(hover: none)').matches;
    }),
    onMounted(async () => {
      
    /* Add mouse listeners on every card */
    elLinks = document.querySelectorAll('.link-empleo');
    elItems = document.querySelectorAll('.imagen-empleo');
    await nextTick()
    if (isNotTouchDevice.value) {
      // Add mouse event listener only if it is not a touch device
      elLinks.forEach(elLink => {
        elLink.addEventListener('mouseleave', () => onLinkLeave(elLink));
        elLink.addEventListener('mouseenter', () => onLinkEnter(elLink));
      });
    }
    /* Create the fade-in animation of the cards */

    elItems.forEach(elItem => {

      // Skip the transition if the element is already in the viewport
      const bbox = elItem.getBoundingClientRect();
      if (bbox.bottom > 0 && bbox.top < window.innerHeight) {
        // Fade in the card when the image is loaded
        
        gsap.to(elItem, {
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
          delay: Math.random() * 0.5 + 0.1
        });
        
        return;
      }
  
      // Animate the slide-in of the card in the viewport
      gsap.from(elItem, {
        y: innerWidth > 960 ? 150 : 50,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          once: true,
          trigger: elItem,
          start: "top bottom",
          end: "top bottom",
          toggleActions: "play none play play"
        }
      });
        // Animate the fade-in of the card in the viewport
        gsap.fromTo(elItem, {
          opacity: 0
        }, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            once: true,
            trigger: elItem,
            start: "top bottom",
            end: "top bottom",
            toggleActions: "play none play play"
          }
        });
    });
    /* Re-calculate the bounding client rects after every resize */
    window.addEventListener('resize', calculateBboxes);
    const resizeObserver = new ResizeObserver(() => {
      calculateBboxes();
    });
    elLinks.forEach(elLink => {
      resizeObserver.observe(elLink);
    });
    calculateBboxes();
    var dialogNetlu = document.getElementById('netluModal');    
    document.getElementById('showNetlu').onclick = function() {    
      dialogNetlu.show();    
    };    
    document.getElementById('hideNetlu').onclick = function() {    
      dialogNetlu.close();
    }
    var dialogAmura = document.getElementById('amuraModal');    
    document.getElementById('showAmura').onclick = function() {    
      dialogAmura.show();    
    };    
    document.getElementById('hideAmura').onclick = function() {    
      dialogAmura.close();
    }
    var dialogSatec = document.getElementById('satecModal');    
    document.getElementById('showSatec').onclick = function() {    
      dialogSatec.show();    
    };    
    document.getElementById('hideSatec').onclick = function() {    
      dialogSatec.close();
    }
    var dialogJL = document.getElementById('jlModal');    
    document.getElementById('showJL').onclick = function() {    
      dialogJL.show();    
    };    
    document.getElementById('hideJL').onclick = function() {    
      dialogJL.close();
    }
    var dialogLegal = document.getElementById('legalModal');    
    document.getElementById('showLegal').onclick = function() {    
      dialogLegal.show();    
    };    
    document.getElementById('hideLegal').onclick = function() {    
      dialogLegal.close();
    }
    });

  </script>
    
<style scoped>
#netluModal {
  background-image: url("../../assets/images/programacion/netlu_blur.webp");
}
#satecModal {
  background-image: url("../../assets/images/programacion/satec_blur.webp");
}
#amuraModal {
  background-image: url("../../assets/images/programacion/amura_blur.webp");
}
#legalModal {
  background-image: url("../../assets/images/programacion/legalspain_blur.webp");
}
#jlModal {
  background-image: url("../../assets/images/programacion/jlsound_blur.webp");
}
.modal-personalizado {
  position: fixed; 
  top: 0; 
  left: 0; 
  width:100vw; 
  height:100vh; 
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10000;
}
.close-button {
  background-color: transparent;
  border: 0px;
  padding-right: 2%;
}
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5rem 3rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
button:focus-visible {
  outline: 0px;
}
@media (max-width: 959px) {
  ul {
    padding: 4rem 2rem;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  li:nth-child(2n + 1) a { transform-origin: left center; }
  li:nth-child(2n + 2) a { transform-origin: right center; }
}
@media (min-width: 960px) and (max-width: 1399px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem;
  }
  li:nth-child(3n + 1) a { transform-origin: left center; }
  li:nth-child(3n + 3) a { transform-origin: right center; }
}
@media (min-width: 1400px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
  }
  li:nth-child(3n + 1) a { transform-origin: left center; }
  li:nth-child(3n + 3) a { transform-origin: right center; }
}

li {
  display: flex;
  opacity: 0;
}

a {
  position: relative;
  display: flex;
  will-change: filter, transform;
  width: 100%;
  aspect-ratio: 8 / 5;
  overflow: hidden;
  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.4s ease-out;
  }
}

span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  font-size: 2.6rem;
  line-height: 1.2;
  color: white;
  text-align: center;
  transition: 0.4s opacity ease-out, 0.3s transform ease-out;
  z-index: 2;
  word-break: break-all;
  pointer-events: none;
  opacity: 0;
  transform: translateY(5rem);
  @media (max-width: 959px) {
    font-size: 2rem;
  }
  @media (hover: none) {
    transition: none;
  }
}

img {
  max-width: 100%;
  transition: 1s cubic-bezier(.27,.91,.47,.99);
}

a:hover,
a:focus {
  &:before {
    opacity: 0.2;
  }
  img {
    transform: scale(1);
    transition: 0.6s cubic-bezier(.27,.91,.47,.99);
  }
}

p {
  position: fixed;
  top: 0;
  left: 0;
}
</style>