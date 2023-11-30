<template>
<div id="img_containter" class="img_containter" >
				<div class="temp"></div>
				<div class="wrapper">
					<div class="inner-wrapper">
						<figure class="inner-wrapper__item">
							<div class="inner-wrapper__item-img">
                                <video class="inner-wrapper__item-imginner" autoplay loop muted>
									<source src="../assets/images/ilustracion/planetas.webm" type="video/webm">
									<p>Tu navegador no puede reproducir el video proporcionado.</p>
								</video>
                            </div>
							<figcaption class="inner-wrapper__item-caption">
								<h2 class="inner-wrapper__item-title">After Effects</h2>
								<span class="inner-wrapper__item-number">01</span>
							</figcaption>
						</figure>
						<figure class="inner-wrapper__item">
							<div class="inner-wrapper__item-img">
								<video class="inner-wrapper__item-imginner" autoplay loop muted>
									<source src="../assets/images/ilustracion/ballenato.webm" type="video/webm">
									<p>Tu navegador no puede reproducir el video proporcionado.</p>
								</video>
							</div>
							<figcaption class="inner-wrapper__item-caption">
								<h2 class="inner-wrapper__item-title">Runway</h2>
								<span class="inner-wrapper__item-number">02</span>
							</figcaption>
						</figure>
						<figure class="inner-wrapper__item">
							<div class="inner-wrapper__item-img">
								<video class="inner-wrapper__item-imginner" autoplay loop muted>
									<source src="../assets/images/ilustracion/cartel_normal.webm" type="video/webm">
									<p>Tu navegador no puede reproducir el video proporcionado.</p>
								</video>
							</div>
							<figcaption class="inner-wrapper__item-caption">
								<h2 class="inner-wrapper__item-title">After Effects</h2>
								<span class="inner-wrapper__item-number">03</span>
							</figcaption>
						</figure>
						<figure class="inner-wrapper__item">
							<div class="inner-wrapper__item-img">
								<video class="inner-wrapper__item-imginner" autoplay loop muted>
									<source src="../assets/images/ilustracion/fantasma.webm" type="video/webm">
									<p>Tu navegador no puede reproducir el video proporcionado.</p>
								</video>
</div>
							<figcaption class="inner-wrapper__item-caption">
								<h2 class="inner-wrapper__item-title">Procreate</h2>
								<span class="inner-wrapper__item-number">04</span>
							</figcaption>
						</figure>
						<figure class="inner-wrapper__item">
							<div class="inner-wrapper__item-img">
								<video class="inner-wrapper__item-imginner" autoplay loop muted>
									<source src="../assets/images/ilustracion/code.webm" type="video/webm">
									<p>Tu navegador no puede reproducir el video proporcionado.</p>
								</video>
							</div>
							<figcaption class="inner-wrapper__item-caption">
								<h2 class="inner-wrapper__item-title">Procreate</h2>
								<span class="inner-wrapper__item-number">05</span>
							</figcaption>
						</figure>
						<figure class="inner-wrapper__item">
							<div class="inner-wrapper__item-img">
							</div>
							<figcaption class="inner-wrapper__item-caption">
								<h2 class="inner-wrapper__item-title"></h2>
								<span class="inner-wrapper__item-number"></span>
							</figcaption>
						</figure>
					</div>
				</div>
				<div class="drag-proxy"></div>
				<div class="temp"></div>
		</div>
</template>
    
<script setup>
    import { gsap } from "gsap";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { Draggable } from "gsap/Draggable";
    import { ref, onMounted, nextTick } from 'vue';

	gsap.registerPlugin(ScrollTrigger, Draggable);
    
	var sections = null;
	var maxWidth = 0;

	const getMaxWidth = () => {
		maxWidth = 0;
		sections.forEach((section) => {
		maxWidth += section.offsetWidth;
		});
	};

    onMounted(() => {
		sections = gsap.utils.toArray(".inner-wrapper__item");
		getMaxWidth();
		ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

		let scrollTween = gsap.to(sections, {
			x: () => `-${maxWidth - window.innerWidth}`,
			ease: "none",
		});

		let horizontalScroll = ScrollTrigger.create({
			animation: scrollTween,
			trigger: ".wrapper",
			pin: true,
			scrub: true,
			end: () => `+=${maxWidth - window.innerWidth}`,
			invalidateOnRefresh: true
		});
		// dragRatio changed to the part in the horizontal sroll that's there to calculate the offset between the duration of the scroll and the amount of x-translation of the wrapper (that needs to be included there when triggering things when certain sections reach a certain point in the viewport - as seen in commented out part above)

		var dragRatio = (maxWidth / (maxWidth - window.innerWidth))

		var drag = Draggable.create(".drag-proxy", {
		trigger: '.wrapper',
		type: "x",
		inertia: true,
		allowContextMenu: true,
		onPress() {
			this.startScroll = horizontalScroll.scroll();
		},
		onDrag() {
			horizontalScroll.scroll(this.startScroll - (this.x - this.startX) * dragRatio);
		},
		onThrowUpdate() {
			horizontalScroll.scroll(this.startScroll - (this.x - this.startX) * dragRatio);
		}
		})[0];
    })


</script>
      
<style scoped lang="scss">

.inner-wrapper {
	display: flex;
	padding-right: 12vw;
    overflow-x: hidden;
	height: 100vh;
}
.wrapper {
	display: flex;
	flex-direction: column;
	height: 100vh;
	position: relative;
	justify-wrapper: flex-start;
}
.inner-wrapper__item {
	margin: 0 3vw;
	display: grid;
	grid-template-areas: '... ...' 
						 '... inner-wrapper-image'
						 '... ...' ;
	grid-template-columns: 8rem 21vmax;
	grid-template-rows: 8rem 28vmax 3rem;
	padding-top: 10vh;
}

.inner-wrapper__item-img {
	grid-area: inner-wrapper-image;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	will-change: transform;
}

.inner-wrapper__item-imginner {
	background-size: cover;
    background-position: 50% 0;
	width: calc(100% + 10vw);
	margin-left: -5vw;
    height: 100%;
    will-change: transform;
}

.inner-wrapper__item-caption {
	grid-area: 1 / 1 / 4 / 3;
	display: grid;
	grid-template-areas: 'inner-wrapper-number inner-wrapper-title' 
						 'inner-wrapper-link ...'
						 'inner-wrapper-link inner-wrapper-tags' ;
	grid-template-columns: 8rem auto;
	grid-template-rows: 8rem auto 3rem;

}

.inner-wrapper__item-number {
	grid-area: inner-wrapper-number;
	font-size: 6rem;
	font-size: clamp(2.5rem,9vw,6.5rem);
	justify-self: end;
	padding-right: 2rem;
	color: rgb(220, 220, 220);
	mix-blend-mode: exclusion;
}

.inner-wrapper__item-title {
	grid-area: inner-wrapper-title;
	margin: 0;
	font-size: 4rem;
	font-size: clamp(2rem,5vw,4rem);
	color: white;
	mix-blend-mode: exclusion;
}

.inner-wrapper__item-number,
.inner-wrapper__item-title{
	font-family: moret, serif;
	font-weight: 800;
	font-style: italic;
	align-self: center;
}

.inner-wrapper__item-link {
	grid-area: inner-wrapper-link;
	align-self: end;
	font-size: 1.5rem;
	background: var(--color-inner-wrapper-link-bg);
	color: var(--color-inner-wrapper-link);
	text-decoration: underline;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	position: relative;
	display: flex;
	justify-wrapper: center;
	align-items: center;
	cursor: pointer;
}

.inner-wrapper__item-link:focus,
.inner-wrapper__item-link:hover {
	background: var(--color-inner-wrapper-link-bg-hover);
	color: var(--color-inner-wrapper-link-hover);
	text-decoration: none;
}

.inner-wrapper__item-tags {
	grid-area: inner-wrapper-tags;
	justify-self: end;
	font-size: 1.5rem;
	display: grid;
	grid-auto-flow: column;
	grid-gap: 1rem;
	cursor: pointer;
}

.inner-wrapper__text-inner {
	display: block;
}

@media screen and (min-width: 53em) {
	.frame {
		grid-template-areas: 'title demos demos links';
	}
	.frame__info {
		justify-self: end;
	}
}
</style>
