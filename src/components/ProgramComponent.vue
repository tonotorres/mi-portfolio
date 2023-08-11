<template>
  <div id="code" ref="code">
    <FondoCodigo></FondoCodigo>
    <IntroduccionProgram @loaded="loadedLine = true"></IntroduccionProgram>
    <EmpleosProgram :loadedLine="loadedLine"></EmpleosProgram>
    <div class="webpage"><h1 class="title-program"></h1></div>
    <Socials></Socials>
  </div>
</template>

<script setup>
import Socials from "./SocialsComponent.vue";
import IntroduccionProgram from "./IntroduccionProgram.vue";
import FondoCodigo from "./FondoCodigo.vue";
import EmpleosProgram from "./EmpleosProgram.vue";
import AunNoSeComponent from "./AunNoSeComponent.vue";
import { ref } from 'vue';

const components = {
  IntroduccionProgram,
  Socials,
  FondoCodigo,
  AunNoSeComponent,
  EmpleosProgram,
};

const loadedLine = ref(false);

</script>

<style scoped>

.yellow {
  background-color: yellow;
}

@font-face {
  font-family: "Mona Sans SemiBold";
  src: url("../assets/fonts/Mona-Sans-SemiBold.ttf") format("truetype");
}
#code{
	height:100%;
	/* height:100vh; */
	/* margin:auto; */
	width:100%;
  position: relative;
  background: rgb(0,0,0);

}
.webpage {
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,1);
  text-align: center;
  position: relative;
  z-index: 15;
}
.title-program {
  font-family: "Mona Sans SemiBold","Mona Sans Header Fallback",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  color: white;
}

</style>