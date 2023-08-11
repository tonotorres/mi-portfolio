<template>
    <div class="container-fluid pt-4 empleos" id="empleos">
        <div class="row pt-4" style="height: 15vh;"></div>
        <div class="row pt-4">
            <div class="col-3"></div>
            <div class="col-6">
                <div class="row">
                    <div class="col text-center"><aun-no-se-component text="Netlu Solucions" fontWeight="bold"></aun-no-se-component></div>
                </div>
                <div class="row">
                    <div class="col text-center"><aun-no-se-component text="2019 - 2021" fontWeight="bold"></aun-no-se-component></div>
                </div>
                <div class="row">
                    <div class="col text-start"><aun-no-se-component text="Desarrollo de plataforma web para la comunicación interna y la gestión de tareas para Salvador Escoda"></aun-no-se-component></div>
                </div>
                <div class="row">
                    <logos-component :logos="logos"></logos-component>
                </div>
            </div>
            <div class="col-3 pr-3 pl-3 netlu-container"><img class="responsive-image" id="netlu" src="@/assets/images/programacion/netlu.png"></div>
        </div>
    </div>
  </template>
   
  <script setup>

    import { onMounted, watch, defineProps } from "vue";
    import AunNoSeComponent from "./AunNoSeComponent.vue";
    import LogosComponent from "./LogosComponent.vue";

    const props = defineProps({
        loadedLine: Boolean,
    });

    const components = { AunNoSeComponent, LogosComponent };
    const text = '\n  \n ';
    const logos = [
      require('@/assets/images/logos/vue.png'),
      require('@/assets/images/logos/react.png'),
      require('@/assets/images/logos/js.png'),
      require('@/assets/images/logos/typescript.png'),
      require('@/assets/images/logos/bootstrap.svg'),
      require('@/assets/images/logos/tailwin.png'),
      require('@/assets/images/logos/node.png'),
      require('@/assets/images/logos/gsap.png'),
      require('@/assets/images/logos/webgl.png'),
    ];
    const adjustNetluPosition = () => {
        const linea2 = document.getElementById('linea2');
        const netlu = document.getElementById('netlu');

        const linea2Rect = linea2.getBoundingClientRect();
        
        const rightPosition = linea2Rect.width;

        const netluWidth = netlu.getBoundingClientRect().width;
        const netluCenterPosition = rightPosition - netluWidth / 2;
        console.log(netluCenterPosition)
        netlu.style.left = `${netluCenterPosition}px`;
    };
    watch(
        () => props.loadedLine,
        (newValue) => {
            if (newValue === true) {
              adjustNetluPosition()
              console.log("escrotiiix")
            } 
        }
    );
    // onMounted(() => {
    //   adjustNetluPosition()
    // });

  </script>
    
<style scoped>
  
  @font-face {
    font-family: "Mona Sans SemiBold";
    src: url("../assets/fonts/Mona-Sans-SemiBold.ttf") format("truetype");
  }
  .empleos {
    position: relative;
    z-index: 26;
  }
  .netlu-container {
    position: relative;
  }
  .responsive-image {
    z-index: 25;
    border-radius: 20px;
  }
  #netlu {
    position: absolute;
  }
  .title-program {
  font-family: "Mona Sans SemiBold","Mona Sans Header Fallback",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  color: white;
}
</style>