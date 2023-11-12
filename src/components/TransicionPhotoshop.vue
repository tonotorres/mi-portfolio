<template>
    <div style="position: relative; z-index: 3; overflow: hidden;">
        <svg ref="overlay" class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stop-color="#000000"/>
                <stop offset="100%" stop-color="#000000"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stop-color="#000000"/>
                <stop offset="100%" stop-color="#000000"/>
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stop-color="#000000"/>
                <stop offset="100%" stop-color="#101010"/>
                </linearGradient>
            </defs>
            <path ref="paths" class="shape-overlays__path" :fill="'url(#gradient1)'"></path>
            <path ref="paths" class="shape-overlays__path" :fill="'url(#gradient2)'"></path>
            <path ref="paths" class="shape-overlays__path" :fill="'url(#gradient3)'"></path>
        </svg>
    </div>
  </template>
    
<script setup>
    import { ref, onMounted, nextTick } from 'vue';
    import { gsap } from 'gsap';

  
    var paths = null;
    let numPoints = 10;
    var numPaths = null;
    let delayPointsMax = 0.3;
    let delayPerPath = 0.25;
    let duration = 0.9;
    let isOpened = false;
    let pointsDelay = [];
    var allPoints = [];
    var tl = null
    

    

    onMounted(async () => {
      await nextTick();
      paths = document.querySelectorAll(".shape-overlays__path");
      numPaths = paths.length; 
      for (let i = 0; i < numPaths; i++) {
        let points = [];
        allPoints.push(points);
        for (let j = 0; j < numPoints; j++) {
            points.push(100);
        }
    }
    tl = gsap.timeline({ 
      onUpdate: render,
      defaults: {
        ease: "power2.inOut",
        duration: 0.9
      }
    });
      gsap.timeline({
        scrollTrigger: {
            trigger: '#entrada_photoshop__seccion',
            start: "top top",
            end: "bottom center",
            markers: true,
            onEnter: () => toggle()
        }
      });
    })

    function render() {
        for (let i = 0; i < numPaths; i++) {
            let points = allPoints[i];
            let path = paths[i];
            let d = "M0,0 ";
            for (let j = 0; j < numPoints; j++) {
            console.log("1")
            d += `L${j * 100 / (numPoints - 1)},${points[j]} `;
            }
            d += "L100,0 Z";
            console.log("2")
            path.setAttribute("d", d);
            
        }
    }
    function toggle() {
      tl.progress(0).clear();
      console.log("hola?")
      for (let i = 0; i < numPoints; i++) {
        pointsDelay[i] = Math.random() * delayPointsMax;
      }
      for (let i = 0; i < numPaths; i++) {
        let points = allPoints[i];
        let pathDelay = delayPerPath * (isOpened ? i : (numPaths - i - 1));
        for (let j = 0; j < numPoints; j++) {      
          let delay = pointsDelay[j];      
          tl.to(points, {
            [j]: 0
          }, delay + pathDelay);
        }
      }
    }
</script>
      
<style scoped lang="scss">
    .shape-overlays {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
    }
</style>