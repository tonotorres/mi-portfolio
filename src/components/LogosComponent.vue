<template>
    <div v-for="(logo, index) in logos" :key="index" class="col">
        <img class="logo-image" :src="logo">
    </div>
</template>
  
  <script>
  export default {
    props: {
      logos: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .logo-image {
    width: auto;
    max-height: 40px;
    height: auto;
  }
  </style>