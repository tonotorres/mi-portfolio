<template>
    <div v-for="(logo, index) in logos" :key="index" class="col">
        <img class="logo-image" :class="{ 'mb-5': marginBottom }" :src="logo">
    </div>
</template>
  
  <script>
  export default {
    props: {
      logos: {
        type: Array,
        required: true
      },
      marginBottom: {
        type: Boolean,
        default: false
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
  @media only screen and (max-width: 1572px) { 
    .logo-image {
      width: auto;
      max-height: 26px;
      height: auto;
    }
  }

  </style>