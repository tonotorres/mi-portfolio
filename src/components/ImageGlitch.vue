<template>
    <div ref="container" class="item">
    </div>
  </template>
  
  <script>
  import * as THREE from "three";
  import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
  import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
  import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
  import { onMounted, ref, inject } from "vue";
  
  export default {
    setup() {
      const container = ref(null);
      const amuraBackground = inject('amuraBackgroundRef');
      const uMouse = new THREE.Vector2(0, 0);
  
      onMounted(() => {
        const texture = new THREE.Texture();
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;
        texture.needsUpdate = true;
  
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 1, 1);
        texture.image = canvas;
  
        init(texture);
        animate();
  
        document.addEventListener("mousemove", (e) => {
          uMouse.x = e.clientX / window.innerWidth;
          uMouse.y = 1 - e.clientY / window.innerHeight;
        });
      });
  
      let camera, scene, renderer, composer, renderPass, customPass;
  
      function init(texture) {
        // Calcula el FOV en función del ancho de la pantalla
        const baseScreenWidth = 1700;
        const currentScreenWidth = window.innerWidth;
        const baseFOV = 25;
        const adjustedFOV = baseFOV * (baseScreenWidth / currentScreenWidth);
  
        // Ajusta la posición de la cámara y el FOV
        camera = new THREE.PerspectiveCamera(
          adjustedFOV, // Utiliza el FOV ajustado dinámicamente
          amuraBackground.value.clientWidth / amuraBackground.value.clientHeight,
          0.5,
          50
        );
        camera.position.set(0.36, 0, 0.82);
  
        // Ajusta el ángulo de la cámara
        const objectPosition = new THREE.Vector3(0.08, 0.04, -0.0); // Asume que el objeto está en el origen
        const objectSize = new THREE.Vector3(-0.35, -0.05, -0.5);
        const lookAtPoint = objectPosition.clone().add(objectSize.multiplyScalar(0.5));
        camera.lookAt(lookAtPoint);
  
        scene = new THREE.Scene();
  
        const geometry = new THREE.PlaneGeometry(0.45, 0.3);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
  
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(amuraBackground.value.clientWidth, amuraBackground.value.clientHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.value.appendChild(renderer.domElement);
  
        // post processing
        composer = new EffectComposer(renderer);
        renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);
  
        const myEffect = {
          uniforms: {
            tDiffuse: { value: null },
            resolution: {
              value: new THREE.Vector2(1, window.innerHeight / window.innerWidth),
            },
            uMouse: { value: new THREE.Vector2(-10, -10) },
            uVelo: { value: 0 },
          },
          vertexShader: `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.87 );}`,
          fragmentShader: `uniform sampler2D tDiffuse;
  uniform vec2 resolution;
  varying vec2 vUv;
  uniform vec2 uMouse;
  
  float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
    uv -= disc_center;
    uv *= resolution;
    float dist = sqrt(dot(uv, uv));
    return smoothstep(disc_radius + border_size, disc_radius - border_size, dist);
  }
  
  void main() {
    vec2 center = vec2(0.5, 0.5);
    vec2 direction = center + uMouse;
    vec2 newUV = vUv;
    float c = circle(vUv, uMouse, 0.0, 0.4) * length(direction);
    float r = texture2D(tDiffuse, newUV.xy += c * (0.1 * .5) * direction).x;
    float g = texture2D(tDiffuse, newUV.xy += c * (0.1 * .525) * direction).y;
    float b = texture2D(tDiffuse, newUV.xy += c * (0.1 * .55) * direction).z;
    vec4 color = vec4(r, g, b, 1.);
  
    gl_FragColor = color;
  }`,
        };
  
        customPass = new ShaderPass(myEffect);
        customPass.renderToScreen = true;
        composer.addPass(customPass);
      }
  
      function animate() {
        customPass.uniforms.uMouse.value = uMouse;
        requestAnimationFrame(animate);
        composer.render();
      }
  
      return {
        container,
        amuraBackground
      };
    },
  };
  </script>
  
  <style scoped>
  .item {
    width: 100%;
    height: 100%;
    overflow: visible;
    
  }
  img {
    display: none;
  }
  canvas {
    width: 100%;
    height: auto;
    overflow: visible;
  }
  </style>
  