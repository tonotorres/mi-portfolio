<template>
  <div class="video-container">
    <video ref="video" autoplay loop muted class="video">
      <source src="../assets/images/loader.webm" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoLoop',
  beforeUnmount() {
    // Detén la reproducción del video
    const videoElement = this.$refs.video;
    if (videoElement) {
      videoElement.pause();
      videoElement.src = '';
      videoElement.load();
    }
  },
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>