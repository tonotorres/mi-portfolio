<template>

<div class="gallery">

<div class="image__photoshop">
  <img src="../assets/images/ilustracion/photoshop-1.jpg" alt="" loading="lazy">
</div>
<div class="image__photoshop">
  <img src="../assets/images/ilustracion/photoshop-2.jpg" alt="" loading="lazy">
</div>
<div class="image__photoshop">
  <img src="../assets/images/ilustracion/photoshop-3.jpg" alt="" loading="lazy">
</div>
<div class="image__photoshop">
  <img src="../assets/images/ilustracion/photoshop-4.jpg" alt="" loading="lazy">
</div>
<div class="image__photoshop">
  <img src="../assets/images/ilustracion/photoshop-5.jpg" alt="" loading="lazy">
</div>
<div class="image__photoshop">
  <img src="../assets/images/ilustracion/photoshop-6.jpg" alt="" loading="lazy">
</div>
<div class="image__photoshop">
  <img src="../assets/images/ilustracion/photoshop-7.jpg" alt="" loading="lazy">
</div>
<div class="image__photoshop">
  <img src="../assets/images/ilustracion/photoshop-8.jpg" alt="" loading="lazy">
</div>

</div>

</template>
    
<script setup>
    import { ref, onMounted, nextTick } from 'vue';
    import { gsap } from 'gsap';

    var images = null
    var random = null
    var randomImageSize = null
    var screenWidth = null
    var screenHeight = null
    var offsetWidth = 1
    
    function setImages() {
        images.forEach((image) => {
            let randomY = Math.round((random() * screenHeight) / 200);
            let randomW = Math.round(100 * screenWidth * 0.125 * offsetWidth) / 125;
            offsetWidth = offsetWidth + 1
            //image.style.top = Math.round(screenHeight + randomY) + "px";
            image.style.top = Math.round(screenHeight) + "px";

            image.style.left = randomW + "px";

            if (screenWidth < 800) {
                image.style.width = Math.round(randomImageSize() / 3) + "px";
            } else {
                image.style.width = Math.round(randomImageSize()) + "px";
            }

            // Make larger images appear closer
            image.style.zIndex = Math.round(image.style.width.replace("px", "") / 40);
        });
    }
    

    onMounted(() => {
        screenWidth = window.innerWidth;

        screenHeight = document.getElementsByClassName('gallery')[0].offsetHeight;

        images = document.querySelectorAll(".image__photoshop");
        random = gsap.utils.random(0, 100, 4, true);
        randomImageSize = gsap.utils.random(200, 500, true);

        setImages();

        gsap
        .to(".image__photoshop", {
            y: function (index, target) {
            return -Math.round(target.offsetHeight + screenHeight) + "px";
            },
            ease: "none",
            duration: function (index, target) {
            return 10000 / target.style.width.replace("px", "");
            },
            stagger: {
            amount: 3,
            repeat: -1,
            delay: function (index, target) {
                return -10000 / target.style.width.replace("px", "");
            }
            }
        })
        .progress(0.5);
    })

</script>
      
<style scoped lang="scss">
.gallery {
  z-index: 0;
  height: 100%;
  overflow: hidden;
  position: relative;
  pointer-events: all;
}

.image__photoshop {
  position: absolute;
  filter: saturate(0);
}

.image__photoshop:hover {
  z-index: 99999999999 !important;
  filter: saturate(1);
}

img:hover {
  transform: scale(1.05) rotate(5deg);
}

img {
  transition: 0.3s ease-out;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  width: 100%;
}
</style>