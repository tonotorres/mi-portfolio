<template>
    <div>
        <div class="nav">
            <div class="nav__items nav__items--left">
                <a href="#">MI PORFOLIO</a>
            </div>
            <div class="nav__items nav__items--right">
                <a href="#">606432152</a>
                <a href="#">torrescabero@gmail.com</a>
            </div>
        </div>
        <div class="logo-container">
            <h1 class="logo-container__logo">HOLA, BLAVET STUDIO</h1>
        </div>
        <div class="container"></div>
        <div class="content">
            <section>
                <p class="content__text">He desarrollado todo el contenido de esta web en un fin de semana para mostraros qué podria aportar a vuestra empresa, tambien muestro mi proceso creativo para cada imagen o video que vereis en esta web, me encanta el desarrollo web y pienso que es un arte, me gustaria trabajar en un estudio para poder mostraselo a los demás.</p>
                <p class="content__text-subtitle">Esta web ha sido desarrollada con:</p>
                <div class="content__grid">
                    <p>Vue 3</p>
                    <p>GSAP</p>
                    <p>SCSS</p>
                    <p>CSSGUIDELIN</p>
                    <p>SPLINE</p>
                    <p>Three.js</p>
                    <p>Figma</p>
                    <p>Git</p>
                    <p>Javasript</p>
                    <p>BEM</p>
                </div>
            </section>
        </div>
        <section class="skills-section">
            <div class="skills-section__container">
                <div class="skills-section__items skills-section__items--col">
                    <div class="skills-section__item" data-img="1">
                        <div class="skills-section__item-name">PHOTOSHOP</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                    <div class="skills-section__item" data-img="2">
                        <div class="skills-section__item-name">ILLUSTRATOR</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                    <div class="skills-section__item" data-img="3">
                        <div class="skills-section__item-name">AFTER EFFECTS</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                    <div class="skills-section__item" data-img="4">
                        <div class="skills-section__item-name">IAS</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                    <div class="skills-section__item" data-img="5">
                        <div class="skills-section__item-name">PROCREATE</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                    <div class="skills-section__item" data-img="6">
                        <div class="skills-section__item-name">SPLINE</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                    <div class="skills-section__item" data-img="7">
                        <div class="skills-section__item-name">GSAP</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                    <div class="skills-section__item" data-img="8">
                        <div class="skills-section__item-name">THREE.JS</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                    <div class="skills-section__item" data-img="9">
                        <div class="skills-section__item-name">SCSS</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                    <div class="skills-section__item" data-img="10">
                        <div class="skills-section__item-name">FIGMA</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                    <div class="skills-section__item" data-img="11">
                        <div class="skills-section__item-name">REACT</div>
                        <div class="skills-section__item-name-revealer"></div>
                    </div>
                </div>
                <div class="skills-section__img-preview skills-section__img-preview--col">
                    <div class="skills-section__img-preview-container">
                        <img src="../../assets/images/blavet/1.png" alt="">
                    </div>
                </div>
                <div class="skills-section__img-modal">
                    <div class="skills-section__close-btn">
                        <div class="skills-section__btn">close</div>
                        <div class="skills-section__btn-revealer"></div>
                    </div>
                    <div class="skills-section__img-view">
                        <img src="../../assets/images/mi_foto.webp" alt="">
                    </div>
                    <div class="skills-section__img-modal-name">
                        <div class="skills-section__modal-name">Azure</div>
                        <div class="skills-section__modal-name-revealer"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

//   import TextAnimated from '../TextAnimated.vue';
  
  export default {
      components: {
      },
      setup() {
        var imgNames = null
        var imgPreviewContainer = null
        var imgViewContainer = null
        var closeBtn = null
        var modalName = null
        var tl = null
        const previewImages = [
            require('@/assets/images/blavet/1.png'),
            require('@/assets/images/logos/js.svg'),
            require('@/assets/images/blavet/3.png'),
            require('@/assets/images/blavet/4.jpeg'),
            require('@/assets/images/logos/node.png'),
            require('@/assets/images/blavet/6.png'),
            require('@/assets/images/logos/laravel.png'),

        ];
        const videosLinks = [
        `<iframe width="889" height="500" src="https://www.youtube.com/embed/Y4S1O4NKiAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p style="padding-top: 2vh; font-family: Mona Sans Regular">Tengo un amplio dominio de Photoshop, os dejo un video de el proceso creativo de esta imagen.</p>`,
            require('@/assets/images/logos/js.svg'),
            require('@/assets/images/logos/css.svg'),
            require('@/assets/images/logos/jquery.png'),
            require('@/assets/images/logos/node.png'),
            require('@/assets/images/logos/react.svg'),
            require('@/assets/images/logos/MongoDB.png'),
            require('@/assets/images/logos/express.png'),
            require('@/assets/images/logos/python.png'),
        ];
        const textLinks = [
        `<p style="padding-top: 2vh; font-family: Mona Sans Regular">Tengo un amplio dominio de Photoshop, os dejo un video de el proceso creativo de esta imagen.</p>`,
            require('@/assets/images/logos/js.svg'),
            require('@/assets/images/logos/css.svg'),
            require('@/assets/images/logos/jquery.png'),
            require('@/assets/images/logos/node.png'),
            require('@/assets/images/logos/react.svg'),
            require('@/assets/images/logos/MongoDB.png'),
            require('@/assets/images/logos/express.png'),
            require('@/assets/images/logos/python.png'),
        ];
        
        function revealImg() {
            tl.to(".skills-section__item .skills-section__item-name", 1, {
                top: "30px",
                ease: "power4.inOut"
            });
            tl.to(".skills-section__img-preview-container", 1, {
                clipPath: "polygon(0 100%, 100% 100%, 100% 100% 0 100%)",
                y: 25,
                ease: "power4.inOut",
            },
            "<"
            );

            tl.to(".skills-section__img-modal", 0.005, {
                opacity: 1,
                ease: "none",
                pointerEvents: "auto",
                delay: -0.125,
            });

            tl.to(".skills-section__img-view", 1, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                y: 25,
                ease: "power4.inOut",
            },
            "<")
            tl.to(".skills-section__close-btn skills-section__btn", 1, { // falta .btn
                top: "0",
                ease: "power4.inOut",
            },
            "<")
            tl.to(".skills-section__img-modal-name", 1, {
                top: "50%",
                ease: "power4.inOut",
            },
            "<").reverse();
        }
        onMounted(() => {
            ScrollTrigger.create({
                animation: gsap.from(".logo-container__logo", {
                    y: "50vh",
                    scale: 6,
                    yPercent: -50,
                }),
                scrub: true,
                trigger: ".content",
                start: "top bottom",
                endTrigger: ".content",
                end: "top center"
            })
            imgNames = document.querySelectorAll(".skills-section__item");
            imgPreviewContainer = document.querySelector(".skills-section__img-preview-container" );
            imgViewContainer = document.querySelector(".skills-section__img-modal .skills-section__img-view");
            closeBtn = document.querySelector(".skills-section__close-btn");
            modalName = document.querySelector(".skills-section__img-modal-name");
            tl = gsap.timeline({ paused: true });

            imgNames.forEach((imgName) => {
                imgName.addEventListener("mouseover", () => {
                    const dataImg = imgName.getAttribute("data-img");
                    imgPreviewContainer.innerHTML = `<img src=\'${previewImages[dataImg-1]}\' alt="" style="height: 100%"/>`
                });

                imgName.addEventListener("click", () => {
                    const dataImg = imgName.getAttribute("data-img");
                    imgViewContainer.innerHTML = videosLinks[dataImg-1];
                    modalName.innerHTML = textLinks[dataImg-1];
                    tl.reversed(!tl.reversed());
                })
            })

            closeBtn.onclick = function () {
                tl.reversed(!tl.reversed());
            }
            revealImg()
        });
      },
  };
  </script>
  
  <style scoped lang="scss">
  @font-face {
    font-family: "SugarPunch";
    src: url("../../assets/fonts/Sugarpunch.otf") format("truetype");
    font-display: swap;
  }

  .nav {
    position: fixed;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  0 4em;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%);
    z-index: 999;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #050404;
    padding: 0 1em;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 500;
    font-size: 12px;
  }

  .logo-container__logo {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Mona Sans ExtraBold Wide";
    padding: 1em;
    z-index: 999;
    color: #050404;
  }
  .logo-container h1 {
    font-size: 1.5rem !important;
  }

  .container {
    width: 100%;
    height: 100vh;
    background-color: white;
  }

  .content {
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
    padding: 0 4em;
  }
  .content__text {
    font-size: 2.5vw;
    text-align: justify;
    font-family: "Mona Sans Medium Wide";
    line-height: initial;
  }
  .content__text-subtitle {
    padding-top: 3vh;
    padding-bottom: 3vh;
    font-size: 1.5vw;
    text-align: justify;
    font-family: "Mona Sans Semibold Wide";
    line-height: initial;
  }
  .content__grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 25px;
        grid-row-gap: 25px;
        text-align: start;
    }
    .content__grid p {
        font-size: 1.5vw;
        font-family: "Mona Sans Semibold Wide";
    }

// Skills

.skills-section {
    height: 60vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.skills-section__container {
    width: 100vw;
    height: 100vh;
    display: flex;
}

.skills-section__container .skills-section__items--col, .skills-section__img-preview--col {
    width: 50%;
    height: 100%;
}
.skills-section__container .skills-section__img-preview {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1em;
}
.skills-section__container .skills-section__img-preview .skills-section__img-preview-container {
    width: 889px;
    height: 500px;
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100% );
}
.skills-section__img-preview-container img {
    height: 100%;
    width: 100%;
}
.skills-section__container .skills-section__items {
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   padding: 4em;
}
.skills-section__container .skills-section__items .skills-section__item {
    position: relative;
    width: max-content;
    height: max-content;
    cursor: pointer;
}
.skills-section__container .skills-section__items .skills-section__item .skills-section__item-name {
    position: relative;
    top: 0;
    font-size: 26px;
    letter-spacing: -0.25px;
    text-transform: uppercase;
    font-family: "Mona Sans Medium Wide";
}
.skills-section__container .skills-section__items .skills-section__item .skills-section__item-name-revealer {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}

.skills-section__container .skills-section__items .skills-section__item .skills-section__item-name-revealer:after {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    width: 105%;
    height: 105%;
    background: #fff;
}

// Modal

.skills-section__img-modal {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
}
.skills-section__img-modal .skills-section__img-view {
    position: absolute;
    top: 30%;
    left: 25%;
    transform: translate(-50%, -50%);
    width: 889px;
    height: 500px;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
.skills-section__img-modal .skills-section__close-btn {
    position: absolute;
    right: 25%;
    width: max-content;
    height: max-content;
    margin: 1em;
    cursor: pointer;
}
.skills-section__img-modal .skills-section__close-btn .skills-section__btn {
    position: relative;
    top: 2vh;
    font-size: 1vw;
    font-weight: 500;
    text-transform: uppercase;
    font-family: "Mona Sans ExtraBold Wide";
}
.skills-section__img-modal .skills-section__close-btn .skills-section__btn-revealer {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}
.skills-section__img-modal .skills-section__close-btn .skills-section__btn-revealer:after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 105%;
    height: 105%;
    background: #fff;
}

.skills-section__img-modal-name {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: max-content;
    height: max-content;
}
.skills-section__img-modal-name .skills-section__modal-name {
    position: relative;
    top: -20px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
}

.skills-section__img-modal-name .skills-section__modal-name-revealer {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}

.skills-section__img-modal-name .skills-section__modal-name-revealer:after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 105%;
    height: 105%;
    background: #fff;
}

@media (max-width: 700px) {
    .skills-section__img-modal .skills-section__close-btn {
        right: 30%;
    }
    .skills-section__img-modal .skills-section__img-view {
        top: 50%;
        left: 50%;
        width: 300px;
        height: 400px;
    }
    .skills-section__img-modal-name {
        top: 15%;
        right: 30%;
        left: unset;
        transform: translate(0, 0);
        margin: 1em;
    }
}
  </style>
  