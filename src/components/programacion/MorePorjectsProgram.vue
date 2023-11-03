<template>
    <div style="height: 100vh;">
        <div class="row pt-5" id="more-projects-title">
            <div class="col">
                <h3 class="title text-center">He estado aprendiendo nuevas habilidades y desarrollando otros proyectos</h3>
            </div>
            </div>
        <div class="row pt-5" id="more-projects">
            <div class="col" style="position: relative;">
                <div class="grid grid--large">
                    <div class="grid__cell grid__cell-c1-r1">
                        <div class="grid__cell-img">
                            <img class="grid__cell-img-inner" :src="require('../../assets/images/programacion/solar-sistem-spline.png')" data-item="item-1">

                        </div>
                    </div>
                    <div class="grid__cell grid__cell-c2-r1">
                        <div class="grid__cell-img">
                            <img class="grid__cell-img-inner" :src="require('../../assets/images/programacion/jlsound.png')" data-item="item-2">

                        </div>
                    </div>
                    <div class="grid__cell grid__cell-c3-r1">
                        <div class="grid__cell-img">
                            <img class="grid__cell-img-inner" :src="require('../../assets/images/programacion/portfolio.png')" data-item="item-3">

                        </div>
                    </div>
                    <div class="grid__cell grid__cell-c4-r1">
                        <div class="grid__cell-img">
                            <img class="grid__cell-img-inner" :src="require('../../assets/images/programacion/legalspain.webp')" data-item="item-4">

                        </div>
                    </div>
                    <div class="grid__cell grid__cell-c1-r2">
                        <div class="grid__cell-img">
                            <img class="grid__cell-img-inner" :src="require('../../assets/images/programacion/ias.png')" data-item="item-5">

                        </div>
                    </div>
                    
                </div>
                <div class="content">
                    <div class="content__item" id="item-1">
                        <h2 class="content__item-heading oh"><span class="oh__inner">Sistema Solar</span></h2>
                        <p class="content__item-text">
                            Hecho con <a href="https://spline.design/" class="link-job">Spline</a>, una herramienta de diseño 3D gratuita basada en navegador que permite crear experiencias interactivas en entornos web.
                        </p>
                        <a class="content__item-link oh"><span class="oh__inner link-job">Ver proyecto</span></a>
                        
                    </div>
                    <div class="content__item" id="item-2">
                        <h2 class="content__item-heading oh"><span class="oh__inner">JL Sound</span></h2>
                        <p class="content__item-text">
                            Web desarrollada para Joel Lozano, un productor musical que trabaja para artistas como Cariño, Delaporte, Ana Guerra y Blas Cantó entre otros.
                        </p>
                        <a class="content__item-link oh my-4" href="https://jlsound.es/" target="_blank"><span class="oh__inner link-job">Ver proyecto</span></a>
                        
                    </div>
                    <div class="content__item" id="item-3">
                        <h2 class="content__item-heading oh"><span class="oh__inner">Home</span></h2>
                        <p class="content__item-text">
                            Creada con <a href="https://spline.design/" class="link-job">Spline</a> para agrupar mis portafolios web.
                        </p>
                        <a class="content__item-link oh my-4" href="https://tonitorresportfolio.com/" target="_blank"><span class="oh__inner link-job">Ver proyecto</span></a>
                    </div>
                    <div class="content__item" id="item-4">
                        <h2 class="content__item-heading oh"><span class="oh__inner">LegalSpain</span></h2>
                        <p class="content__item-text">
                            He creado la web para una agencia especializada en la tramitación de documentación (títulos, diplomas, notas y más) para iniciar o continuar estudios universitarios en España. Tambien he ayudado en su posicionamiento SEO.
                        </p>
                        <a class="content__item-link oh my-4" href="https://legalspain.es/" target="_blank"><span class="oh__inner link-job">Ver proyecto</span></a>
                    </div>
                    <div class="content__item" id="item-5">
                        <h2 class="content__item-heading oh"><span class="oh__inner">Portafolio IA's</span></h2>
                        <p class="content__item-text">
                            Quise crear un portafolio sobre las IA's que se usar ya que en un futuro no muy lejano estoy seguro que este conocimiento va a tener un gran valor :P
                        </p>
                        <a class="content__item-link oh my-4" href="https://tonitorresportfolio.com/ias" target="_blank"><span class="oh__inner link-job">Ver proyecto</span></a>
                        
                    </div>
                    
                    <button id="enable-scroll" class="back row pt-2">
                        <div class="col-6"><svg viewBox="0 0 50 9" width="100%"><path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77" stroke="white" stroke-width="2"></path></svg></div>
                        <div class="col-6"><p style="color: white" class="link-job"> Volver a mis proyectos</p></div>
                    </button>
                    <nav class="grid grid--mini">
                        <div class="grid__cell grid__cell-c1-r1">
                            <div class="grid__cell-img">
                                <img class="grid__cell-img-inner" :src="require('../../assets/images/programacion/solar-sistem-spline.png')">
                            </div>
                        </div>
                        <div class="grid__cell grid__cell-c2-r1">
                            <div class="grid__cell-img">
                                <img class="grid__cell-img-inner" :src="require('../../assets/images/programacion/jlsound.png')">
                            </div>
                        </div>
                        <div class="grid__cell grid__cell-c3-r1">
                            <div class="grid__cell-img">
                                <img class="grid__cell-img-inner" :src="require('../../assets/images/programacion/portfolio.png')">
                            </div>
                        </div>
                        <div class="grid__cell grid__cell-c4-r1">
                            <div class="grid__cell-img">
                                <img class="grid__cell-img-inner" :src="require('../../assets/images/programacion/legalspain.webp')">
                            </div>
                        </div>
                        <div class="grid__cell grid__cell-c1-r2">
                            <div class="grid__cell-img">
                                <img class="grid__cell-img-inner" :src="require('../../assets/images/programacion/ias.png')">
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

</template>
   
  <script setup>
  
    import { onMounted} from "vue";
    import { Grid } from '../../assets/utils/grid';
    import { preloadImages } from '../../assets/utils/utils';

    // Life Cycle
  
    onMounted(() => {
        new Grid(document.querySelector('.grid--large'));
        preloadImages('.grid__cell-img-inner')
    });
  
  </script>
    
  <style scoped lang="scss">
  #more-projects {
    z-index: 50;
    a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
	font-weight: 600;
}

a:hover {
	color: var(--color-link-hover);
	outline: none;
}

/* Better focus styles from https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible */
a:focus {
	/* Provide a fallback style for browsers
	 that don't support :focus-visible */
	outline: none;
	background: lightgrey;
}

a:focus:not(:focus-visible) {
	/* Remove the focus indicator on mouse-focus for browsers
	 that do support :focus-visible */
	background: transparent;
}

a:focus-visible {
	/* Draw a very noticeable focus style for
	 keyboard-focus on browsers that do support
	 :focus-visible */
	outline: 2px solid red;
	background: transparent;
}

.unbutton {
	background: none;
	border: 0;
	padding: 0;
	margin: 0;
	font: inherit;
}

.unbutton:focus {
	outline: none;
}

.line {
	transform-origin: 0% 50%;
	padding-bottom: 0.35rem;
	white-space: nowrap;
	will-change: transform;
    font-family: "Mona Sans Regular" !important;
    color: #FFFFFF !important;
    font-size: 1.5vw;
}

.oh {
	overflow: hidden;
}

.oh__inner {
	display: inline-block;
	transform-origin: 0% 50%;
	will-change: transform;
    font-family: "Mona Sans Regular";
    color: #FFFFFF;
    font-size: 1.5vw;
}

.frame {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.frame--fixed {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	padding: 1rem;
	z-index: 1;
	display: grid;
	grid-template-columns: 38% 62%;
}

.frame__title {
	font-size: 1rem;
	font-weight: 400;
	margin: 0 0 2rem 0;
}

.frame__links {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.frame__links a {
	margin: 0 1rem 0.35rem 0;
}

.frame--fixed .frame__links {
	flex-direction: row;
}

.grid {
	display: grid;
	--grid-border-radius: 8px;
	grid-template-columns: repeat(2,50%);
}

.grid--large {
	grid-auto-rows: 32vmin;
	padding: 0.5vw;
	--grid-padding: 0.5vw;
}

.grid--mini {
	width: 220px;
	height: 190px;
	--grid-padding: 1px;
    margin-bottom: 3vh;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    position: absolute;
}

.grid__cell {
	display: grid;
	align-items: end;
}

.grid--mini .grid__cell:not(.grid__cell--current):hover .grid__cell-img {
	opacity: 0.7;
}

.grid__cell--current .grid__cell-img {
	opacity: 0.3;
}

.grid__cell--padded {
	padding: calc(var(--grid-padding) * 2 );
}

.grid__cell-img {
	width: calc(100% - var(--grid-padding) * 2);
	height: calc(100% - var(--grid-padding) * 2);
	margin: var(--grid-padding);
	border-radius: var(--grid-border-radius);
	display: block;
	position: relative;
	overflow: hidden;
}

.grid__cell-img-inner {
	background-size: cover;
	background-position: 50% 50%;
	width: 100%;
	height: 100%;
	cursor: pointer;
}

.content {
	position: absolute;
	top: 0%;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 0vh 4vw 0;
    align-items: center;
	z-index: 1000;
	pointer-events: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.content__item {
	position: absolute;
	opacity: 0;
	display: grid;
    width: 100%;
    align-items: center;
}

.content__item--current {
	opacity: 1;
	position: relative;
	pointer-events: auto;
}

.content__item-number {
	font-weight: 600;
	display: block;
}

.content__item-heading {
	font-size: 4vw;
    font-family: "Mona Sans Regular";
    color: #FFFFFF;
	line-height: 1;
	margin: 1rem 0 3rem 0;
	font-weight: 600;
}

.content__item-text {
    font-size: 1.2vw;
    font-family: "Mona Sans Regular";
    color: #FFFFFF;
}

.content__item-link {
	cursor: pointer;
}

.back {
	background: none;
	border: 0;
	margin: 0;
    opacity: 0;
    pointer-events: none;
    stroke: #000;
    z-index: 1000;
    cursor: pointer;
}

.back svg {
	stroke-linecap: round;
}

.back:hover,
.back:focus {
	outline: none;
	stroke: #823725;
}

.content--open .back {
	pointer-events: auto;
}

@media screen and (min-width: 53em) {
	.content {
		width: 38%;
	}
	.grid {
		grid-template-columns: repeat(4,25%);
	}
	.grid__cell--padded {
		padding: var(--grid-padding);
	}
	.grid__cell-c1-r1 { grid-column: 1; grid-row: 1; }
	.grid__cell-c3-r1 { grid-column: 3; grid-row: 1; }
	.grid__cell-c4-r1 { grid-column: 4; grid-row: 1; }
	.grid__cell-c1-r2 { grid-column: 1; grid-row: 2; }
	.grid__cell-c2-r2 { grid-column: 2; grid-row: 2; }
	.grid__cell-c3-r2 { grid-column: 3; grid-row: 2; }
	.grid__cell-c4-r2 { grid-column: 4; grid-row: 2; }
	.grid__cell-c2-r3 { grid-column: 2; grid-row: 3; }
	.grid__cell-c4-r3 { grid-column: 4; grid-row: 3; }
	.grid__cell-c1-r4 { grid-column: 1; grid-row: 4; }
	.grid__cell-c3-r4 { grid-column: 3; grid-row: 4; }
	.grid__cell-c3-r5 { grid-column: 3; grid-row: 5; }
	.grid--mini {
		visibility: visible;
		position: relative;
	}
	.content--open .grid--mini {
		pointer-events: auto;
	}
	.col #cdawrap {
		position: relative;
		margin-top: auto;
        --cda-left: auto;
        --cda-right: auto;
        --cda-width: 300px;
        --cda-bottom: auto;
        --cda-top: auto;
        opacity: 1 !important;
        pointer-events: auto;
        z-index: 1;
    }

    .col #cdawrap .cda-footer {
        display: none;
    }

    .col #cdawrap .cda-text {
        color: transparent !important;
        height: 1.25rem;
        pointer-events: none;
        position: relative;
        text-align: left;
    }

    .col #cdawrap .cda-text::before {
        color: var(--color-text);
        font-size: 0.85rem;
        font-weight: 500;
        left: 0;
        pointer-events: auto;
        position: absolute;
        top: 0;
        opacity: 0.5;
        transition: opacity 0.4s;
    }

    .grid[style*="pointer-events: none;"] .frame #cdawrap .cda-text::before {
    	opacity: 0 !important;
    }

    .col #cdawrap:hover .cda-text::before {
        color: var(--color-link-hover);
    }

    .col #cdawrap a::after {
        display: none;
    }
}
    }
  </style>