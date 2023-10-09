<template lang="">
    <div  id="">
        <div id="modal-container">
            <div class="modal-background">
                <div class="modal" id="modal-libros">
                    <div class="modal-header" style="height: 10%; position: relative">
                        <button class="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Cerrar" @click="handleModalClick">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row h-100">
                                    <div class="col-6 h-100">
                                        <img src="/detective.webp" alt="detective" class="portada-libro">
                                    </div>
                                    <div class="col-6 h-100">
                                        <div class="row">
                                        <h2 class="titulo-sinopsis px-5">El detective Straus y el enigma del castillo</h2>
                                        </div>
                                        <div class="row h-100">
                                            <div class="col h-75">
                                                <p class="sinopsis p-5 mr-2">Una emocionante novela juvenil de misterio y aventura. La historia sigue a Alex Straus, un joven detective con un talento especial para resolver enigmas y descifrar códigos. Cuando recibe una carta anónima que lo invita a visitar un antiguo castillo en las afueras de la ciudad, Alex no puede resistirse a la tentación de descubrir qué secretos esconde el lugar. <br><br>
                                                Acompañado por su mejor amiga, Valentina, y su perro fiel, Max, Alex se adentra en el misterioso castillo, donde descubre que está lleno de enigmas y acertijos que desafían su ingenio. A medida que el trío resuelve cada desafío, se van adentrando más y más en las profundidades del castillo, descubriendo una serie de habitaciones ocultas y pasadizos secretos.<br><br>
                                                Pronto, Alex, Valentina y Max se dan cuenta de que no están solos en el castillo. Un grupo de criminales ha llegado al lugar con la intención de desentrañar sus secretos y hacerse con un tesoro oculto que, según la leyenda, se encuentra en algún lugar dentro de sus muros. Los jóvenes detectives deberán usar toda su astucia e inteligencia para resolver el enigma del castillo antes de que los criminales lo hagan y, al mismo tiempo, evitar que caigan en las manos equivocadas.</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row h-100">
                                    <div class="col-6 h-100">
                                        <img src="/bosque.webp" alt="detective" class="portada-libro">
                                    </div>
                                    <div class="col-6 h-100">
                                        <div class="row">
                                        <h2 class="titulo-sinopsis px-5">El misterio del bosque encantado</h2>
                                        </div>
                                        <div class="row h-100">
                                        <p class="sinopsis p-5 mr-2">Una historia que sigue las aventuras de tres amigos, Valentina, Mateo y Sofía, quienes descubren un antiguo mapa que los lleva a un bosque encantado. En este mágico lugar, los árboles cobran vida, los animales hablan y las criaturas míticas conviven en armonía. Sin embargo, el bosque enfrenta un gran peligro: una misteriosa fuerza oscura amenaza con destruirlo y sumirlo en la oscuridad eterna.<br><br>
                                            Los tres amigos deciden unir fuerzas con los habitantes del bosque, incluyendo a un sabio anciano, un valiente guerrero y una princesa de las hadas, para resolver el misterio y salvar el bosque encantado. A lo largo de su viaje, enfrentarán desafíos y enigmas, aprenderán valiosas lecciones sobre la amistad, el coraje y la importancia de proteger la naturaleza.<br><br>
                                            Con cada pista que descubren, Valentina, Mateo y Sofía se acercan más a la verdad detrás del misterio del bosque encantado. Pero también se enfrentarán a un enemigo poderoso y astuto que hará todo lo posible para detenerlos. ¿Podrán los tres amigos superar los obstáculos y resolver el misterio antes de que sea demasiado tarde? Únete a ellos en esta emocionante aventura llena de magia, amistad y valentía, y descubre el secreto que se esconde en el corazón del bosque encantado.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row h-100">
                                    <div class="col-6 h-100">
                                        <img src="/revuelta.webp" alt="detective" class="portada-libro">
                                    </div>
                                    <div class="col-6 h-100">
                                        <div class="row">
                                        <h2 class="titulo-sinopsis px-5">La revuelta de los mundos perdidos</h2>
                                        </div>
                                        <div class="row h-100">
                                        <p class="sinopsis p-5 mr-2">Un grupo de jóvenes aventureros, liderados por Leo, Luna y Martín, quienes encuentran un antiguo libro que revela la existencia de mundos perdidos, ocultos en diferentes dimensiones y tiempos.<br><br>
                                                Estos mundos, que alguna vez fueron prósperos y llenos de vida, ahora están en peligro debido a un malvado villano llamado Oscurox, quien busca controlarlos y sumirlos en la oscuridad. Los jóvenes aventureros deciden unirse y formar la "Alianza de los Mundos Perdidos" para enfrentarse a Oscurox y proteger a los habitantes de estos reinos olvidados.<br><br>
                                                A lo largo de su viaje, Leo, Luna y Martín descubrirán nuevos amigos y aliados en cada mundo que visiten, como guerreros valientes, criaturas mágicas y sabios ancianos. Juntos, aprenderán a trabajar en equipo, a enfrentar sus miedos y a superar obstáculos aparentemente imposibles.<br><br>
                                               </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row h-100">
                                    <div class="col-6 h-100">
                                        <img src="/mundo-virtual.webp" alt="detective" class="portada-libro">
                                    </div>
                                    <div class="col-6 h-100">
                                        <div class="row">
                                        <h2 class="titulo-sinopsis px-5">Aventuras en el mundo virtual: la búsqueda del código perdido</h2>
                                        </div>
                                        <div class="row h-100">
                                        <p class="sinopsis p-5 mr-2">Un grupo de amigos, liderado por la valiente y curiosa Sofía, que descubren un misterioso videojuego en una tienda de antigüedades. Al encender la consola, los jóvenes son transportados a un mundo virtual lleno de desafíos y aventuras.<br><br>
                                            En este mundo, los amigos deben enfrentarse a enemigos y resolver acertijos para avanzar en su búsqueda del código perdido, que según la leyenda, tiene el poder de cambiar la realidad y otorgar deseos a quienes lo encuentren. A medida que avanzan en su viaje, los jóvenes aprenden sobre la importancia del trabajo en equipo, la amistad y la perseverancia.<br><br>
                                            A lo largo de su aventura, los amigos descubren que el mundo virtual está en peligro debido a un virus malicioso que amenaza con destruirlo. Para salvar este mundo y regresar al suyo, deben encontrar el código perdido y desentrañar sus secretos antes de que sea demasiado tarde.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
   <header id="header" >
      <div class="inner" >
         <h1 id="logo" ><a title="Fiction Express" href="index.html" ><img src="../assets/fiction/logo/fiction-express.svg" alt="Fiction Express" ><span class="simbolo" ></span></a></h1>
         <div class="znIdiomas" >
            <a title="Cambiar de plataforma" class="btnIdioma" > ES </a>
            <nav class="mIdiomas" >
               <p >Elige idioma para trabajar</p>
               <ul >
                  <li ><a class="en" href="https://en.fictionexpress.com/" >English</a></li>
                  <li ><a class="es" href="index.html" >Español</a></li>
                  <li ><a class="cat" href="https://cat.fictionexpress.com/" >Català</a></li>
               </ul>
            </nav>
         </div>
      </div>
      <nav class="barraMenu cfix" >
         <ul id="menuGrande" class="cfix" >
            <li ><a href="por-que-fiction-express/index.html" >Por qué</a></li>
            <li ><a href="libros/index.html" >Libros</a></li>
            <li ><a href="contacto/index.html" >Contacto</a></li>
            <li ><a title="Registro colegio" href="cuenta/colegio/registro/index.html" >Probar</a></li>
            <li ><a href="cuenta/acceder/index.html" ><span class="ico user bl" ></span>Acceder</a></li>
         </ul>
         <ul id="menuMovil" class="cfix" >
            <li class="menu" ><a class="jsLinkMenu" ><span class="tx" >Menu</span></a></li>
            <li class="usuario" ><a href="cuenta/acceder/index.html" ><span class="tx" >Acceder</span></a></li>
         </ul>
      </nav>
      <div id="menuGralMovil" >
         <ul class="mPral" >
            <li ><a href="por-que-fiction-express/index.html" >Por qué</a></li>
            <li ><a href="libros/index.html" >Libros</a></li>
            <li ><a href="contacto/index.html" >Contacto</a></li>
            <li ><a title="Registro colegio" href="cuenta/colegio/registro/index.html" >Probar</a></li>
            <li ><a href="cuenta/acceder/index.html" ><span class="ico user bl" ></span>Acceder</a></li>
         </ul>
      </div>
   </header>
   <main  id="main" style="padding-top: 35px;">
      <div  class="sec fnImag introHome pad">
         <div  class="inner equipara amplio">
            <div  class="col a65">
               <div  class="videoCaja"><iframe  width="560" height="315" src="https://www.youtube.com/embed/sAX8AXUxKf4?theme=light&amp;rel=0" frameborder="0" allowfullscreen=""></iframe></div>
            </div>
            <div  class="col a35 past azul">
                <p ref="texto" class="eslogan mBxs">
                    <span
                    v-for="(line, index) in state.lines"
                    :key="index"
                    class="line"
                    :data-text="line"
                    >
                    {{ line }}
                    </span>
                </p>
               <a  href="cuenta/index.html" class="btn fnColor L btn-6">Acceder<span  id="efecto" style="top: 33.1406px; left: 339.172px;"></span></a>
            </div>
            <div  class="clearfix"></div>
         </div>
      </div>
      <section class="sec azul pad S cuentaAtras" >
         <div class="row" >
            <div class="col-6" >
               <div class="row justify-content-center" >
                  <h2 >Cuenta atrás para los nuevos capítulos</h2>
               </div>
               <div class="row justify-content-center" >
                  <div id="countdown" class="contador" >
                     <strong >
                        <svg id="days" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" >
                           <defs >
                              <mask id="theMask" >
                                 <rect x="0" y="0" width="100" height="100" ></rect>
                              </mask>
                           </defs>
                           <rect x="0" y="0" width="100" height="100" fill="#000" rx="10" ry="10" ></rect>
                           <g mask="theMask" >
                              <rect x="0" y="0" width="100" height="100" fill="#000" rx="10" ry="10" ></rect>
                              <text id="node0" transform="translate(50 75)" text-anchor="middle" font-size="4.5em" fill="#fff" >6</text>
                              <text id="node1" transform="translate(50 -25)" text-anchor="middle" font-size="4.5em" fill="#fff" >6</text>
                           </g>
                        </svg>
                        <span class="tx" >días</span>
                     </strong>
                     <strong >
                        <svg id="hours" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" >
                           <defs >
                              <mask id="theMask" >
                                 <rect x="0" y="0" width="100" height="100" ></rect>
                              </mask>
                           </defs>
                           <rect x="0" y="0" width="100" height="100" fill="#000" rx="10" ry="10" ></rect>
                           <g mask="theMask" >
                              <rect x="0" y="0" width="100" height="100" fill="#000" rx="10" ry="10" ></rect>
                              <text id="node0Hours" transform="translate(50 75)" text-anchor="middle" font-size="4.5em" fill="#fff" >23</text>
                              <text id="node1Hours" transform="translate(50 -25)" text-anchor="middle" font-size="4.5em" fill="#fff" >23</text>
                           </g>
                        </svg>
                        <span class="tx" >horas</span>
                     </strong>
                     <strong class="mini" >
                        <svg id="minutes" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" >
                           <defs >
                              <mask id="theMask" >
                                 <rect x="0" y="0" width="60" height="60" ></rect>
                              </mask>
                           </defs>
                           <rect x="0" y="0" width="60" height="60" fill="#000" rx="10" ry="10" ></rect>
                           <g mask="theMask" >
                              <rect x="0" y="0" width="60" height="60" fill="#000" rx="10" ry="10" ></rect>
                              <text id="node0Minutes" transform="matrix(1,0,0,1,30,45.3504)" text-anchor="middle" font-size="2.4em" fill="#fff"  style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;" data-svg-origin="-23.4921875 -38">59</text>
                              <text id="node1Minutes" transform="matrix(1,0,0,1,30,-20.6496)" text-anchor="middle" font-size="2.4em" fill="#fff"  style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;" data-svg-origin="-23.4921875 -38">59</text>
                           </g>
                        </svg>
                        <span class="tx" >min</span>
                     </strong>
                     <strong class="mini" >
                        <svg id="seconds" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" >
                           <defs >
                              <mask id="theMask" >
                                 <rect x="0" y="0" width="60" height="60" ></rect>
                              </mask>
                           </defs>
                           <rect x="0" y="0" width="60" height="60" fill="#000" rx="10" ry="10" ></rect>
                           <g mask="theMask" >
                              <rect x="0" y="0" width="60" height="60" fill="#000" rx="10" ry="10" ></rect>
                              <text id="node0Seconds" transform="matrix(1,0,0,1,30,45.3504)" text-anchor="middle" font-size="2.4em" fill="#fff"  style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;" data-svg-origin="-11.75 -38">59</text>
                              <text id="node1Seconds" transform="matrix(1,0,0,1,30,-20.6496)" text-anchor="middle" font-size="2.4em" fill="#fff"  style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;" data-svg-origin="-23.4921875 -38">59</text>
                           </g>
                        </svg>
                        <span class="tx" >seg</span>
                     </strong>
                  </div>
               </div>
            </div>
            <div class="col-6" >
               <div class="row" >
                  <div class="col d-flex justify-content-center" >
                     <h2 class="libros-anteriores" >Anteriores capitulos</h2>
                     <div class="imgLoader" ></div>
                     <div class="container" >
                        <div class="book" @click="handleButtonClick">
                           <div class="gap" ></div>
                           <div class="pages" >
                              <div class="page" ></div>
                              <div class="page" ></div>
                              <div class="page" ></div>
                              <div class="page" ></div>
                              <div class="page" ></div>
                              <div class="page" ></div>
                           </div>
                           <div class="flips" >
                              <div class="flip flip1" >
                                 <div class="flip flip2" >
                                    <div class="flip flip3" >
                                       <div class="flip flip4" >
                                          <div class="flip flip5" >
                                             <div class="flip flip6" >
                                                <div class="flip flip7" ></div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="clearfix" ></div>
         </div>
      </section>
      <div class="sec gris" >
         <ul class="zonaPremios" >
            <li ><a href="reconocimientos/index.html#bett" title="Bett Awards" ><img src="../assets/fiction/logos/reconocimientos/bett-winner-2023.jpg" alt="BETT. Ganador 2023" ></a></li>
            <li ><a href="reconocimientos/index.html#eltons" title="ELTons Awards" ><img src="../assets/fiction/logos/reconocimientos/eltons-awards-winner-2021.jpg" alt="ELTons Awards. Ganador 2021" ></a></li>
            <li ><a href="reconocimientos/index.html#era" title="Era Awards" ><img src="../assets/fiction/logos/reconocimientos/era-winner-2023.jpg" alt="ERA Award. Ganador 2023" ></a></li>
            <li ><a href="reconocimientos/index.html#tpa" title="Teach Primary Awards 5*" ><img src="../assets/fiction/logos/reconocimientos/teach-primary-5-stars.png" alt="Teach Primary Awards 5*. Ganador 2019" ></a></li>
            <li ><a href="reconocimientos/index.html#investor" title="Education Investor Awards" ><img src="../assets/fiction/logos/reconocimientos/education-investor-winner-2021.png" alt="Education Investor Awards. Ganador 2021" class="logoVer" ></a></li>
            <li ><a href="reconocimientos/index.html#lea" title="Learning Excellence Awards" ><img src="../assets/fiction/logos/reconocimientos/lea-awards-winner-2021.jpg" alt="Learning Excellence Awards. Ganador 2021" ></a></li>
            <li ><a href="reconocimientos/index.html#ship" title="Ship2B" ><img src="../assets/fiction/logos/reconocimientos/ship2b-2020-2021.png" alt="Premio Ship2B" ></a></li>
            <li ><a href="reconocimientos/index.html" ><img src="../assets/fiction/construccion/tip-more-info.png" alt="Más información" ></a></li>
         </ul>
      </div>
      <section class="sec pad info1 tx" >
         <div class="inner" >
            <h2 >¿Qué es Fiction Express?</h2>
            <div class="col a70 izq" >
               <p >Fiction Express es una plataforma de lectura interactiva creada para mejorar la competencia lectora a través del poder de la participación.</p>
               <p >Cada 8 semanas iniciamos la ación de tres libros diferentes, semanalmente y por capítulos. Dejamos el argumento íntegramente a decisión de los lectores, quienes, a través de sus votos y del diálogo creativo con el autor en el foro, decidirán cómo sigue.</p>
               <p ><a href="por-que-fiction-express/index.html" >¿Por qué Fiction Express? <span class="ico flR" ></span></a></p>
            </div>
            <div class="col a30 movPad imag" ><img src="../assets/fiction/fotos/two-students-voting.jpg" alt="Dos alumnos votando" ></div>
            <div class="col a50 izq" >
               <blockquote >
                  <p >“Me encanta votar y esperar para ver el resultado de los votos de otros lectores del resto del mundo”.</p>
                  <footer >William, UK</footer>
               </blockquote>
            </div>
            <div class="col a50" >
               <blockquote >
                  <p >“Fiction Express ha cambiado la cultura de la lectura en el colegio. Tanto alumnos como profesores están entusiasmados.”</p>
                  <footer >Paul Jackson, Manorfield Primary School</footer>
               </blockquote>
            </div>
            <div class="clearfix" ></div>
         </div>
      </section>
      <section class="semanticSec" >
         <div class="sec azul pad" id="como-funciona" >
            <div class="inner" >
               <h2 >¿Cómo funciona?</h2>
               <ul class="equipara amplio conFilas cajas" >
                  <li class="col" >
                     <span class="ico XL ng slCen ebook"  style="opacity: 0;"></span>
                     <p id="ebook"  style="opacity: 0;"><strong >Lee</strong> el capítulo semanalmente</p>
                  </li>
                  <li class="col" >
                     <span class="ico XL ng slCen voto"  style="opacity: 0;"></span>
                     <p id="voto"  style="opacity: 0;"><strong >Vota</strong> para decidir el argumento</p>
                  </li>
                  <li class="col" >
                     <span class="ico XL ng slCen habla"  style="opacity: 0;"></span>
                     <p id="habla"  style="opacity: 0;"><strong >Habla</strong> con el autor y comparte ideas</p>
                  </li>
                  <li class="col" >
                     <span class="ico XL ng slCen trofeo"  style="opacity: 0;"></span>
                     <p id="trofeo"  style="opacity: 0;"><strong >Mejora</strong> tu competencia lectora</p>
                  </li>
               </ul>
            </div>
         </div>
         <div class="sec znPasos tx" >
            <div class="inner" >
               <section class="paso impar" >
                  <div class="texto col a50" >
                     <h3 ><span class="num" >1</span> <strong >Lee</strong> el capítulo</h3>
                     <p >Libros ados semanalmente para diferentes niveles de lectura que los alumnos pueden leer semanalmente online, offline o en papel. Nuestro lector online ofrece accesibilidad para niños con dificultad lectora y/o dislexia utilizando diferentes combinaciones de color letra y fondo.</p>
                     <p >Además, la Biblioteca de Fiction Express ofrece el acceso a los libros ya escritos y a los 18 libros nuevos que cada año escribimos conjuntamente con los lectores aprovechando el año escolar.</p>
                  </div>
                  <div class="imag col a50 der" ><img src="../assets/fiction/dibujos/1-read-de-chapter.gif" alt="Leer capítulo" ></div>
               </section>
               <section class="paso par" >
                  <div class="col a50 texto" >
                     <h3 ><span class="num" >2</span> <strong >Vota</strong> el argumento</h3>
                     <p >Forma parte de la historia y vota online para decidir cómo continuará. El periodo de votaciones limitado ofrece un elemento de motivación adicional para leer en un tiempo determinado. Además, solamente se podrá saber el resultado de las votaciones leyendo el capítulo siguiente.</p>
                  </div>
                  <div class="col a50 izq imag" ><img src="../assets/fiction/dibujos/2-vote-on-the-plot.gif" alt="Vota el argumento" ></div>
               </section>
               <section class="paso impar" >
                  <div class="col a50 texto" >
                     <h3 ><span class="num" >3</span> <strong >Haz</strong> el quiz</h3>
                     <p >Cada capítulo viene acompañado de un quiz de lectura de 10 preguntas. Los alumnos reciben el resultado inmediatamente y se puede ver tanto en su panel como en el del profesor. Estas preguntas evalúan el nivel de comprensión lectora y su evolución a lo largo del curso. Los profesores pueden así dar un seguimiento personalizado e inmediato a sus alumnos.</p>
                  </div>
                  <div class="col a50 der imag" ><img src="../assets/fiction/dibujos/3-answer-the-quiz.gif" alt="Responde el quiz" ></div>
               </section>
               <section class="paso par" >
                  <div class="col a50 texto" >
                     <h3 ><span class="num" >4</span> <strong >Habla</strong> con el autor</h3>
                     <p >Interactúa con el autor en un diálogo creativo con ideas y opiniones mientras el libro se escribe. Es una oportunidad única de participar en la creación de un libro juntamente con el autor. Comparte tus ideas con ellos. Hacerlo tiene premio.</p>
                  </div>
                  <div class="col a50 izq imag" ><img src="../assets/fiction/dibujos/4-talk-to-the-author.gif" alt="Habla con el autor" ></div>
               </section>
               <section class="paso impar" >
                  <div class="col a50 texto" >
                     <h3 ><span class="num" >5</span> <strong >Disfruta</strong> las actividades</h3>
                     <p >Los profesores tienen disponibles actividades adicionales desarrolladas según las competencias educativas para aprovechar la lectura del libro al máximo.</p>
                     <p >El seguimiento personalizado y a tiempo real de cada alumno en lo relativo a la competencia lectora permite que el profesor pueda ayudar a aquellos alumnos que lo necesitan y ofrecer más lecturas a los alumnos avanzados.</p>
                  </div>
                  <div class="col a50 der imag" ><img src="../assets/fiction/dibujos/5-enjoy-the-activities.gif" alt="Disfruta las actividades" ></div>
               </section>
               <section class="paso par conclusion" >
                  <div class="col a50 texto" >
                     <h3 ><strong >Mejora</strong> tu competencia lectora</h3>
                     <p >Fiction Express es una plataforma de lectura interactiva creada para mejorar la competencia lectora a través del poder de la participación. El seguimiento individualizado del alumno permite que el profesor pueda trabajar cómodamente con la diversidad de niveles en las clases. </p>
                  </div>
                  <div class="col a50 izq imag" ><a href="cuenta/colegio/registro/index.html" class="btn auto vol XL" >Prueba gratis</a></div>
               </section>
            </div>
         </div>
         <div class="clearfix" ></div>
      </section>
      <section class="sec gris logosClientes znLogos" >
         <div class="inner" >
            <div class="movNo mB" >
               <h2 >Nuestros clientes</h2>
               <div id="slidePartners" >
                  <div class="slide-track" >
                     <div class="slide mx-2" ><img src="../assets/fiction/logos/clientes/logos-clientes-01.jpg" alt="Cognita, La Salle, Fundació Escolàpies, Escoles FEDAC, Escoles Mare de Déu Diví Pastor y Fundació Escola Teresiana" ></div>
                     <div class="slide mx-2" ><img src="../assets/fiction/logos/clientes/logos-clientes-02.jpg" alt="Institució, Escola Pia, Maristes, Verduna Catalunya, Escuela Excelente, Diamond y Ewell Castle School" ></div>
                     <div class="slide mx-2" ><img src="../assets/fiction/logos/clientes/logos-clientes-03.jpg" alt="Barnabas, Horizon, International Primary School, Monorfield, Northfleet Shcoolss y North East" ></div>
                     <div class="slide mx-2" ><img src="../assets/fiction/logos/clientes/logos-clientes-04.jpg" alt="St. Paul's, Wesley College, Durham Learning, EES for schools, First for Wellbeing, Guille Allès y Shopshire" ></div>
                  </div>
               </div>
            </div>
            <div class="logosPartners cfix" >
               <h2 >Nuestros partners</h2>
               <ul >
                  <li class="a15" ><a href="https://www.besa.org.uk/" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/besa-logo.jpg" alt="Besa" ></a></li>
                  <li class="a15" ><a href="https://www.gov.uk/government/organisations/department-for-international-trade" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/dit-logo.jpg" alt="DIT" ></a></li>
                  <li class="a15" ><a href="https://edutechcluster.org/" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/edutechcluster-logo.jpg" alt="Edutechcluster" ></a></li>
                  <li class="a15" ><a href="https://www.bsme.org.uk/" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/bsme-logo.jpg" alt="British Schools in the Middle East" ></a></li>
                  <li class="a15" ><a href="https://www.ecis.org/" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/ecis-logo.jpg" alt="Educational Collaborative for International Schools Ecis" ></a></li>
                  <li class="a15" ><a href="https://www.cobis.org.uk/" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/cobis-logo.jpg" alt="COBIS Supporting Associate" ></a></li>
                  <li class="a15" ><a href="https://barcelonatechcity.com/" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/bcn-tech-city-logo.jpg" alt="Bcn Tech City" ></a></li>
                  <li class="a15" ><a href="https://es.wayra.co/" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/wayra-logo.jpg" alt="Wayra" ></a></li>
                  <li class="a15" ><a href="https://emerge.education/" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/emerge-education.jpg" alt="Emerge Education" ></a></li>
                  <li class="a15" ><a href="http://avancsa.gencat.cat/ca/inici" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/avancsa-logo.jpg" alt="Avançsa" ></a></li>
                  <li class="a10" ><a href="https://www.enisa.es/" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/enisa-logo.jpg" alt="Enisa' %}" ></a></li>
                  <li class="a10" ><a href="https://www.eu-gateway.eu/" target="_blank" ><img class="awardsLogos" src="../assets/fiction/logos/partners/eugateway-business.jpg" alt="EU Gateway Business Avenues' %}" ></a></li>
               </ul>
            </div>
         </div>
      </section>
      <div class="clearfix" ></div>
   </main>
   <footer id="footer" >
      <div class="sec azul enlaces" >
         <div class="inner" >
            <nav class="cfix" >
               <ul >
                  <li ><a title="Reconocimientos" href="reconocimientos/index.html" > Reconocimientos </a></li>
                  <li ><a title="Plataforma de lectura interactiva" href="por-que-fiction-express/index.html" >¿Por qué Fiction Express?</a></li>
                  <li ><a title="Los libros de Fiction Express" href="libros/index.html" >Biblioteca</a></li>
                  <li ><a title="Autores Fiction Express" href="libros/autores/index.html#biblioteca" >Autores</a></li>
               </ul>
               <ul >
                  <li ><a title="Alta suscripción" href="cuenta/colegio/registro/index.html" >Registro colegio</a></li>
                  <li ><a title="Registro con código" href="cuenta/profesor/registro/index.html" >Registro profesor</a></li>
                  <li ><a href="cuenta/acceder/index.html" >Iniciar sesión</a></li>
                  <li ><a href="sobre-nosotros/index.html" >Sobre nosotros</a></li>
               </ul>
               <ul >
                  <li ><a href="mailto:info@fictionexpress.com" >Contacto</a></li>
                  <li ><a href="legal/politica-privacidad/index.html" title="Política de privacidad" >Política de privacidad</a></li>
                  <li ><a href="legal/condiciones-servicio/index.html" title="Términos y condiciones" >Términos y condiciones</a></li>
                  <li ><a href="legal/politica-cookies/index.html" title="Política de cookies" >Política de cookies</a></li>
               </ul>
            </nav>
         </div>
      </div>
      <div class="sec bajoEnlaces" >
         <div class="inner cfix" >
            <div class="col a40 redes" >
               <ul class="icoRedes" >
                  <li class="facebook" ><a href="https://www.facebook.com/fictionexpress/" target="_blank" ><span >Facebook</span></a></li>
                  <li class="twitter" ><a href="https://twitter.com/fiction_express" target="_blank" ><span >Twittear</span></a></li>
                  <li class="youtube" ><a href="https://www.youtube.com/channel/UCUpWT2w4FYnTjpvjrmyv0ng" target="_blank" ><span >YouTube</span></a></li>
                  <li class="linkedin" ><a href="https://www.linkedin.com/company/fictionexpress/" target="_blank" ><span >LinkedIn</span></a></li>
               </ul>
            </div>
            <div class="col a60 logos" >
               <div class="logo" >
                  <ul class="logosAwards" >
                     <li ><a href="reconocimientos/index.html#bett" ><img src="../assets/fiction/logos/reconocimientos/bett-winner-2023.jpg" alt="BETT. Ganador 2023" ></a></li>
                     <li ><a href="reconocimientos/index.html#bett" ><img src="../assets/fiction/logos/reconocimientos/eltons-awards-winner-2021.jpg" alt="ELTons Awards. Ganador 2021" ></a></li>
                     <li ><a href="reconocimientos/index.html#era" ><img src="../assets/fiction/logos/reconocimientos/era-winner-2023.jpg" alt="ERA Award. Ganador 2023" ></a></li>
                     <li ><a href="reconocimientos/index.html" ><img src="../assets/fiction/logos/reconocimientos/teach-primary-5-stars.png" alt="Teach Primary Awards 5*. Ganador 2019" ></a></li>
                     <li ><a href="reconocimientos/index.html" ><img src="../assets/fiction/logos/reconocimientos/education-investor-winner-2021.png" alt="Education Investor Awards 2021. Ganador 2020" ></a></li>
                     <li ><a href="reconocimientos/index.html#learnEx" title="Learning Excellence Awards" ><img src="../assets/fiction/logos/reconocimientos/lea-awards-winner-2021.jpg" alt="Learning Excellence Awards Ganador 2021" ></a></li>
                     <li ><a href="reconocimientos/index.html" title="Ship2B" ><img src="../assets/fiction/logos/reconocimientos/ship2b-2020-2021.png" alt="Premio Ship2B" ></a></li>
                  </ul>
               </div>
               <p class="copy" >© 2012-2023 Fiction Express Education. Todos los derechos reservados.</p>
            </div>
         </div>
      </div>
   </footer>
   <aside id="avisoCookies" >
      <div class="inner" >
         <p ><a class="cerrarAvisoCookies cerrar" ></a>Utilizamos cookies propias y de terceros para identificar al usuario, autentificar sus acciones, personalizar el funcionamiento de su panel y para realizar análisis de navegación. Si continúas navegando consideramos que aceptas su uso. <a class="infoCookies" href="legal/politica-cookies/index.html" target="_blank" >Más información ›</a></p>
      </div>
   </aside>
</div>
</template>
<script setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BCarousel, BCarouselSlide } from 'bootstrap-vue-3';

const didScroll = ref(false);
const lastScrollTop = ref(0);
const delta = 5;
const navbarHeight = ref(0);
var n0 = null;
var n1 = null;
var n0Hours = null;
var n1Hours = null;
var n0Minutes = null;
var n1Minutes = null;
var n0Seconds = null;
var n1Seconds = null;
const texto = ref(null);
const state = reactive({
    lines: [],
});

onMounted(() => {
    splitText();
    animateLines();
     n0 = document.getElementById("node0")
     n1 = document.getElementById("node1")
     n0Hours = document.getElementById("node0Hours")
     n1Hours = document.getElementById("node1Hours");
     n0Minutes = document.getElementById("node0Minutes")
     n1Minutes = document.getElementById("node1Minutes")
     n0Seconds = document.getElementById("node0Seconds")
     n1Seconds = document.getElementById("node1Seconds")
    countDownSeconds()
    document.addEventListener('click', function(event) {
        var myDiv = document.getElementById('modal-libros');

        if (!myDiv.contains(event.target)) {
            // handleModalClick();
        }
    });
    const comoFunciona = document.getElementById('como-funciona');
    const ebook = document.getElementsByClassName('ebook')[0];
    const voto = document.getElementsByClassName('voto')[0];
    const votoTexto = document.getElementById('voto');
    const ebookTexto = document.getElementById('ebook');
    const habla = document.getElementsByClassName('habla')[0];
    const hablaTexto = document.getElementById('habla');
    const trofeo = document.getElementsByClassName('trofeo')[0];
    const trofeoTexto = document.getElementById('trofeo');
    gsap.registerPlugin(ScrollTrigger);


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: comoFunciona,
            start: 'top-=80% center',
            // markers: true,
        },
    });

    tl.fromTo(
        [ebook, ebookTexto],
        { opacity: 0 },
        {
        opacity: 1,
        duration: 0.8,
    }
    ).fromTo(
        [voto, votoTexto],
        { opacity: 0 },
        {
            opacity: 1,
            duration: 0.8,
        }
    ).fromTo(
        [habla, hablaTexto],
        { opacity: 0 },
        {
            opacity: 1,
            duration: 0.8,
        }
    ).fromTo(
        [trofeo, trofeoTexto],
        { opacity: 0 },
        {
            opacity: 1,
            duration: 0.8,
        }
    );
  navbarHeight.value = document.getElementById('header').offsetHeight;
  document.body.style.paddingTop = `${navbarHeight.value - 20}px`;

  window.addEventListener('scroll', () => {
    didScroll.value = true;
  });

  setInterval(() => {
    if (didScroll.value) {
      hasScrolled();
      didScroll.value = false;
    }
  }, 250);

  const anchorLinks = document.querySelectorAll('a.ancla');
  anchorLinks.forEach(link => {
    link.addEventListener('click', () => {
      moverAncla(link);
    });
  });

    if (window.location.hash) {
        const str = window.location.hash;
        if (str.indexOf('-info') > 0) {
            const div = str.replace('-info', '');
            const targetElement = document.querySelector(div);
            if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
            }
        } else if (str.indexOf('-ancla') > 0) {
            const div = str.replace('-ancla', '');
            const targetElement = document.querySelector(div);
            if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
            window.location.hash = div;
            }
        }
    }

    const toggleCapituloElements = document.querySelectorAll('.jsToggleCapitulo');
    toggleCapituloElements.forEach(element => {
        element.addEventListener('click', () => {
            const infoCapitulo = element.parentElement.querySelector('.jsInfoCapitulo');
            infoCapitulo.slideToggle();
            element.querySelector('.ico').classList.toggle('flB').classList.toggle('flT');
        });
    });

    const toggleFlElements = document.querySelectorAll('.jsToggleFl');
    toggleFlElements.forEach(element => {
        element.addEventListener('click', () => {
            const contenido = element.nextElementSibling;
            contenido.slideToggle();
            element.querySelector('.ico').classList.toggle('flB').classList.toggle('flT');
            if (element.classList.contains('unic')) {
            const liPadre = element.parentElement;
            const losDemas = Array.from(liPadre.parentElement.children).filter(el => el !== liPadre);
            losDemas.forEach(el => {
                el.querySelector('.jsContFl').style.display = 'none';
                el.querySelector('.flT').classList.remove('flT').classList.add('flB');
            });
            }
        });
    });
});

function moverAncla(destinoMismaPagina) {
  if (destinoMismaPagina) {
    let posicionCorregida;

    if (window.innerWidth >= 768) {
      posicionCorregida = document.querySelector(destinoMismaPagina).offsetTop - 40;
    } else {
      const navbarHeight = document.querySelector('.znMenu').offsetHeight + 30;
      posicionCorregida = document.querySelector(destinoMismaPagina).offsetTop - navbarHeight;
    }

    window.scrollTo({
      top: posicionCorregida,
      behavior: 'smooth',
    });

    return false;
  }
}
function handleButtonClick() {
    console.log("escrotix 2")

        document.getElementById('modal-container').classList.add('four')
        document.body.classList.add('modal-active');
    }
function handleModalClick() {
    console.log("escrotix")
        document.getElementById('modal-container').classList.remove('four')
        document.body.classList.remove('modal-active');
    }
const splitText = () => {
    const lines = 'Mejorando la competencia lectora a través del poder de la participación'
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
    state.lines = lines;
};

const animateLines = async () => {
  await nextTick(); // esperar a que el DOM se actualice
  const lineStyle = {
      background: `linear-gradient(to right, #fff 50%, rgba(24, 185, 232, 0.6) 50%)`,
    //   fontSize: props.fontSize,
      backgroundSize: '200% 100%',
      backgroundPositionX: '100%',
      color: 'transparent',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text', // Agrega esta línea para asegurar la compatibilidad con navegadores que usan el prefijo -webkit-
      lineHeight: 1.2
    };
  const lineElements = texto.value.querySelectorAll('.line');

  lineElements.forEach((target) => {
    Object.assign(target.style, lineStyle);
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: 'none',
      duration: 1.7,
      once: true
    });
  });
};

var counterHours = 23;

function countDownHours() {
    if (counterHours > 0) {
        counterHours--;
    } else {
        counterHours = 23;
    }
    n1Hours.textContent = counterHours;
    gsap.to("#node0Hours, #node1Hours", {
        y: "+=100",
        duration: 0.9,
        delay: 0.25,
        ease: "power3.inOut",
        onComplete: swapNodesHours
    });
}

function swapNodesHours() {
    n0Hours.textContent = counterHours;
    gsap.set("#node0Hours, #node1Hours", { y: "-=100"});
}

// Para minutos
var counterMinutes = 59;

function countDownMinutes() {
    if (counterMinutes > 0) {
        counterMinutes--;
    } else {
        countDownHours();
        counterMinutes = 59;
    }
    n1Minutes.textContent = counterMinutes;
    gsap.to("#node0Minutes, #node1Minutes", {
        y: "+=69",
        duration: 0.9,
        delay: 0.25,
        ease: "power3.inOut",
        onComplete: swapNodesMinutes
    });
}

function swapNodesMinutes() {
    n0Minutes.textContent = counterMinutes;
    gsap.set("#node0Minutes, #node1Minutes", { y: "-=69" });
}

// Para segundos
var counterSeconds = 59;

function countDownSeconds() {
    if (counterSeconds > 0) {
        counterSeconds--;
    } else {
        counterSeconds = 59;
        countDownMinutes();
    }
    n1Seconds.textContent = counterSeconds;
    gsap.to("#node0Seconds, #node1Seconds", {
        y: "+=69",
        duration: 0.9,
        delay: 0.25,
        ease: "power3.inOut",
        onComplete: swapNodesSeconds
    });
}

function swapNodesSeconds() {
    n0Seconds.textContent = counterSeconds;
    gsap.set("#node0Seconds, #node1Seconds", { y: "-=69", onComplete: countDownSeconds });
}

function hasScrolled() {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (Math.abs(lastScrollTop.value - st) <= delta) return;

  if (st > lastScrollTop.value && st > navbarHeight.value) {
    document.getElementById('header').style.top = `-${navbarHeight.value + 15}px`;
  } else {
    if (st + window.innerHeight < document.documentElement.scrollHeight) {
      document.getElementById('header').style.top = '0';
    }
  }

  lastScrollTop.value = st;
}
</script>
<style scoped lang="scss">

#app {
    font-family: SourceSansProRegular,Arial,Helvetica,sans-serif
}
.a65{
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.modal-header .close {
    z-index: 2;
    padding: 0;
    padding-right: 1rem;
}
.modal-header {
    border: 0px;
}
.carousel-control-next-icon, .carousel-control-prev-icon {
    filter: invert(1);
}
.portada-libro {
    border-radius: 9px;
    border: 1px solid #18b9e8;
    height: 90% !important;
    max-height: 100% !important;
}
.sinopsis {
    font-family: SourceSansProRegular;
    text-align: left!important;
    font-size: 26px !important;
    line-height: 30px !important;
}
.titulo-sinopsis{
    font-family: SourceSansProSemiBold;
    font-size: 35px !important;
    line-height: 30px !important;
}
@keyframes fadeIn {
  0% {
    background:rgba(0,0,0,.0);
  }
  100% {
    background:rgba(0,0,0,.7);
  }
}

@keyframes fadeOut {
  0% {
    background:rgba(0,0,0,.7);
  }
  100% {
    background:rgba(0,0,0,.0);
  }
}

@keyframes blowUpContent {
  0% {
    transform:scale(1);
    opacity:1;
  }
  99.9% {
    transform:scale(2);
    opacity:0;
  }
  100% {
    transform:scale(0);
  }
}

@keyframes blowUpModal {
  0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }
}
@keyframes blowUpContentTwo {
  0% {
    transform:scale(2);
    opacity:0;
  }
  100% {
    transform:scale(1);
    opacity:1;
  }
}
@keyframes blowUpModalTwo {
  0% {
    transform:scale(1);
    opacity:1;
  }
  100% {
    transform:scale(0);
    opacity:0;
  }
}
@keyframes roadRunnerIn {
  0% {
    transform:translateX(-1500px) skewX(30deg) scaleX(1.3);
  }
  70% {
    transform:translateX(30px) skewX(0deg) scaleX(.9);
  }
  100% {
    transform:translateX(0px) skewX(0deg) scaleX(1);
  }
}

@keyframes roadRunnerOut {
  0% {
    transform:translateX(0px) skewX(0deg) scaleX(1);
  }
  30% {
    transform:translateX(-30px) skewX(-5deg) scaleX(.9);
  }
  100% {
    transform:translateX(1500px) skewX(30deg) scaleX(1.3);
  }
}

#modal-container {
  position:fixed;
  display:table;
  height:100%;
  width:100%;
  top:0;
  left:0;
  transform:scale(0);
  z-index:1;
  &.four {
    z-index:9999;
    transform:scale(1);
    .modal-background {
      background:rgba(0,0,0,.7);
      .modal {
        height: 90vh;
        width: 90vw;
        animation: blowUpModal .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
    + .content {
      z-index:1;
      animation:blowUpContent .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    }
    &.out {
      .modal-background {
        .modal {
          animation: blowUpModalTwo .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
      }
      + .content {
        animation: blowUpContentTwo .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
  }
  &.five {
    transform:scale(1);
    .modal-background {
      background:rgba(0,0,0,.0);
      animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      .modal {
        transform:translateX(-1500px);
        animation: roadRunnerIn .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
    &.out {
      animation: quickScaleDown 0s .5s linear forwards;
      .modal-background {
        animation: fadeOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        .modal {
          animation: roadRunnerOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
      }
    }
  }
 


  }
  .modal-background {
    display:table-cell;
    background:rgba(0,0,0,.8);
    text-align:center;
    vertical-align:middle;
    .modal {
      background:rgb(233, 233, 233);
      padding:10px;
      display:inline-block;
      border-radius:3px;
      font-weight:300;
      position:relative;
      h2 {
        font-size:25px;
        line-height:25px;
        margin-bottom:15px;
      }
      p {
        font-size:18px;
        line-height:22px;
      }
      .modal-svg {
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        border-radius:3px;
        rect {
          stroke: #fff;
          stroke-width: 2px;
          stroke-dasharray: 778;
          stroke-dashoffset: 778;
        }
      }
    }
  }


@keyframes scroll-ea8e5916 { //cambiar
    0% {
        transform: translateX(0)
    }

    to {
        transform: translateX(-1000px)
    }
}

#slidePartners {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    width: 500px;
    height: 50px
}

#slidePartners:after,#slidePartners:before {
    background: linear-gradient(90deg,#f5f5f5 0,hsla(0,0%,100%,0));
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2
}

#slidePartners:after {
    right: 0;
    top: 0;
    transform: rotate(180deg)
}

#slidePartners:before {
    left: 0;
    top: 0
}

#slidePartners .slide-track {
    animation: scroll-ea8e5916 40s linear infinite;
    display: flex;
    width: 2000px;
    padding: 0;
    margin: 0
}

#slidePartners .slide {
    float: left;
    height: auto;
    width: 500px
}

#slidePartners img {
    height: 50px
}

.btn-6 {
    color: #f5ac26;
    position: relative;
    overflow: hidden;
    z-index: 0
}

.btn-6 span {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgba(243,157,0,.993);
    transition: width .6s ease-in-out,height .6s ease-in-out;
    transform: translate(-50%,-50%);
    z-index: -1
}

.btn-6:hover {
    background-color: #ffcd70;
    color: #fff;
    box-shadow: 0 .5em .5em -.4em #ffca68;
    transform: translateY(-.05em)
}

.btn-6:hover span {
    width: 280%;
    height: 280%
}

.btn-6:active {
    background-color: #f39d00
}

.container {
    cursor: pointer;
}

.imgLoader {
    position: fixed;
    animation: preLoad-ea8e5916 1s steps(1);
    width: 1px;
    height: 1px
}

@keyframes preLoad-ea8e5916 {
    0% {
        background-image: url('../../public/bosque.webp')
    }

    10% {
        background-image: url('../../public/detective.webp')
    }

    20% {
        background-image: url('../../public/mundo-virtual.webp')
    }

    30% {
        background-image: url('../../public/revuelta.webp')
    }

    40% {
        background-image: url('../../public/revuelta.webp')
    }

    to {
        display: none
    }
}

.container {
    position: relative;
    width: 220px;
    border-radius: 4px;
    height: 220px
}

.book {
    position: relative;
    perspective: 630px;
    perspective-origin: center 243px;
    transform: scale(.8);
    filter: drop-shadow(0 10px 5px rgba(0,0,0,.25))
}


.libros-anteriores {
    position: absolute;
    top: 0;
    left: 33%
}

.page {
    width: 210px;
    height: 300px;
    background-color: #bbb;
    position: absolute;
    top: 0;
    right: 50%;
    transform-origin: 100% 100%;
    border: 2px solid #555;
    background-size: 420px 300px;
    background-position: 50%;
    transform-style: preserve-3d
}

.page:first-child {
    transform: rotateX(50deg) rotateY(3deg)
}

.page:nth-child(2) {
    transform: rotateX(50deg) rotateY(4.5deg)
}

.page:nth-child(3) {
    transform: rotateX(50deg) rotateY(6deg);
    animation: nextPage-ea8e5916 75s steps(1) -72s infinite;
    background-size: 420px 300px;
    background-position: -2px -2px
}

.page:nth-child(4) {
    transform: rotateX(50deg) rotateY(177deg)
}

.page:nth-child(5) {
    transform: rotateX(50deg) rotateY(175.5deg)
}

.page:nth-child(6) {
    transform: rotateX(50deg) rotateY(174deg);
    overflow: hidden
}

.page:nth-child(6):after {
    content: "";
    width: 210px;
    height: 300px;
    position: absolute;
    top: 0;
    right: 0;
    transform-origin: center;
    transform: rotateY(180deg);
    animation: nextPage-ea8e5916 75s steps(1) -60s infinite;
    background-size: 420px 300px;
    background-position: 100% -2px
}

@keyframes nextPage-ea8e5916 {
    0% {
        background-image: url('../../public/bosque.webp')
    }

    20% {
        background-image: url('../../public/detective.webp')
    }

    40% {
        background-image: url('../../public/mundo-virtual.webp')
    }

    60% {
        background-image: url('../../public/revuelta.webp')
    }

    80% {
        background-image: url('../../public/revuelta.webp')
    }
}

.gap {
    width: 10px;
    height: 300px;
    background: none;
    transform: rotateX(50deg);
    transform-origin: bottom;
    position: absolute;
    top: 0;
    left: calc(50% - 5px)
}

.gap:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,50%);
    background-color: #555;
    width: 10px;
    height: 5px;
    border-radius: 50%
}

.flips,.pages {
    transform-style: preserve-3d
}

.flip {
    width: 32px;
    height: 300px;
    position: absolute;
    top: 0;
    transform-origin: 100% 100%;
    right: 100%;
    border: solid #555;
    border-width: 2px 0;
    perspective: 4200px;
    perspective-origin: 50%;
    transform-style: preserve-3d;
    background-size: 420px 300px
}

.flip:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    background-size: 420px 300px
}

.flip.flip1 {
    right: 50%;
    animation: flip1-ea8e5916 15s ease-in-out infinite;
    border-width: 2px 2px 2px 0
}

.flip.flip1:after {
    animation: nextFlip1-ea8e5916 75s steps(1) -60s infinite
}

.flip:not(.flip1) {
    right: calc(100% - 2px);
    top: -2px;
    transform-origin: right;
    animation: flip2-ea8e5916 15s ease-in-out infinite
}

.flip.flip2:after {
    animation: nextFlip2-ea8e5916 75s steps(1) -60s infinite
}

.flip.flip3:after {
    animation: nextFlip3-ea8e5916 75s steps(1) -60s infinite
}

.flip.flip4:after {
    animation: nextFlip4-ea8e5916 75s steps(1) -60s infinite
}

.flip.flip5:after {
    animation: nextFlip5-ea8e5916 75s steps(1) -60s infinite
}

.flip.flip6:after {
    animation: nextFlip6-ea8e5916 75s steps(1) -60s infinite
}

.flip.flip7 {
    width: 30px;
    border-width: 2px 0 2px 2px
}

.flip.flip7:after {
    animation: nextFlip7-ea8e5916 75s steps(1) -60s infinite
}

@keyframes flip1-ea8e5916 {
    0%,20% {
        transform: rotateX(50deg) rotateY(6deg)
    }

    80%,to {
        transform: rotateX(50deg) rotateY(174deg)
    }
}

@keyframes flip2-ea8e5916 {
    0%,20% {
        transform: rotateY(0deg) translateY(0)
    }

    50% {
        transform: rotateY(-15deg) translateY(0)
    }
}

@keyframes nextFlip1-ea8e5916 {
    0% {
        background-image: url('../../public/bosque.webp');
        background-position: -178px -2px;
        transform: rotateY(0deg)
    }

    10% {
        background-image: url('../../public/detective.webp');
        background-position: -210px -2px;
        transform: rotateY(180deg)
    }

    20% {
        background-image: url('../../public/detective.webp');
        background-position: -178px -2px;
        transform: rotateY(0deg)
    }

    30% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -210px -2px;
        transform: rotateY(180deg)
    }

    40% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -178px -2px;
        transform: rotateY(0deg)
    }

    50% {
        background-image: url('../../public/revuelta.webp');
        background-position: -210px -2px;
        transform: rotateY(180deg)
    }

    60% {
        background-image: url('../../public/revuelta.webp');
        background-position: -178px -2px;
        transform: rotateY(0deg)
    }

    70% {
        background-image: url('../../public/revuelta.webp');
        background-position: -210px -2px;
        transform: rotateY(180deg)
    }

    80% {
        background-image: url('../../public/revuelta.webp');
        background-position: -178px -2px;
        transform: rotateY(0deg)
    }

    90% {
        background-image: url('../../public/bosque.webp');
        background-position: -210px -2px;
        transform: rotateY(180deg)
    }
}

@keyframes nextFlip2-ea8e5916 {
    0% {
        background-image: url('../../public/bosque.webp');
        background-position: -148px -2px;
        transform: rotateY(0deg)
    }

    10.5% {
        background-image: url('../../public/detective.webp');
        background-position: -238px -2px;
        transform: rotateY(180deg)
    }

    20% {
        background-image: url('../../public/detective.webp');
        background-position: -148px -2px;
        transform: rotateY(0deg)
    }

    30.5% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -238px -2px;
        transform: rotateY(180deg)
    }

    40% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -148px -2px;
        transform: rotateY(0deg)
    }

    50.5% {
        background-image: url('../../public/revuelta.webp');
        background-position: -238px -2px;
        transform: rotateY(180deg)
    }

    60% {
        background-image: url('../../public/revuelta.webp');
        background-position: -148px -2px;
        transform: rotateY(0deg)
    }

    70.5% {
        background-image: url('../../public/revuelta.webp');
        background-position: -238px -2px;
        transform: rotateY(180deg)
    }

    80% {
        background-image: url('../../public/revuelta.webp');
        background-position: -148px -2px;
        transform: rotateY(0deg)
    }

    90.5% {
        background-image: url('../../public/bosque.webp');
        background-position: -238px -2px;
        transform: rotateY(180deg)
    }
}

@keyframes nextFlip3-ea8e5916 {
    0% {
        background-image: url('../../public/bosque.webp');
        background-position: -118px -2px;
        transform: rotateY(0deg)
    }

    11% {
        background-image: url('../../public/detective.webp');
        background-position: -268px -2px;
        transform: rotateY(180deg)
    }

    20% {
        background-image: url('../../public/detective.webp');
        background-position: -118px -2px;
        transform: rotateY(0deg)
    }

    31% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -268px -2px;
        transform: rotateY(180deg)
    }

    40% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -118px -2px;
        transform: rotateY(0deg)
    }

    51% {
        background-image: url('../../public/revuelta.webp');
        background-position: -268px -2px;
        transform: rotateY(180deg)
    }

    60% {
        background-image: url('../../public/revuelta.webp');
        background-position: -118px -2px;
        transform: rotateY(0deg)
    }

    71% {
        background-image: url('../../public/revuelta.webp');
        background-position: -268px -2px;
        transform: rotateY(180deg)
    }

    80% {
        background-image: url('../../public/revuelta.webp');
        background-position: -118px -2px;
        transform: rotateY(0deg)
    }

    91% {
        background-image: url('../../public/bosque.webp');
        background-position: -268px -2px;
        transform: rotateY(180deg)
    }
}

@keyframes nextFlip4-ea8e5916 {
    0% {
        background-image: url('../../public/bosque.webp');
        background-position: -88px -2px;
        transform: rotateY(0deg)
    }

    11.5% {
        background-image: url('../../public/detective.webp');
        background-position: -298px -2px;
        transform: rotateY(180deg)
    }

    20% {
        background-image: url('../../public/detective.webp');
        background-position: -88px -2px;
        transform: rotateY(0deg)
    }

    31.5% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -298px -2px;
        transform: rotateY(180deg)
    }

    40% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -88px -2px;
        transform: rotateY(0deg)
    }

    51.5% {
        background-image: url('../../public/revuelta.webp');
        background-position: -298px -2px;
        transform: rotateY(180deg)
    }

    60% {
        background-image: url('../../public/revuelta.webp');
        background-position: -88px -2px;
        transform: rotateY(0deg)
    }

    71.5% {
        background-image: url('../../public/revuelta.webp');
        background-position: -298px -2px;
        transform: rotateY(180deg)
    }

    80% {
        background-image: url('../../public/revuelta.webp');
        background-position: -88px -2px;
        transform: rotateY(0deg)
    }

    91.5% {
        background-image: url('../../public/bosque.webp');
        background-position: -298px -2px;
        transform: rotateY(180deg)
    }
}

@keyframes nextFlip5-ea8e5916 {
    0% {
        background-image: url('../../public/bosque.webp');
        background-position: -58px -2px;
        transform: rotateY(0deg)
    }

    12% {
        background-image: url('../../public/detective.webp');
        background-position: -328px -2px;
        transform: rotateY(180deg)
    }

    20% {
        background-image: url('../../public/detective.webp');
        background-position: -58px -2px;
        transform: rotateY(0deg)
    }

    32% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -328px -2px;
        transform: rotateY(180deg)
    }

    40% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -58px -2px;
        transform: rotateY(0deg)
    }

    52% {
        background-image: url('../../public/revuelta.webp');
        background-position: -328px -2px;
        transform: rotateY(180deg)
    }

    60% {
        background-image: url('../../public/revuelta.webp');
        background-position: -58px -2px;
        transform: rotateY(0deg)
    }

    72% {
        background-image: url('../../public/revuelta.webp');
        background-position: -328px -2px;
        transform: rotateY(180deg)
    }

    80% {
        background-image: url('../../public/revuelta.webp');
        background-position: -58px -2px;
        transform: rotateY(0deg)
    }

    92% {
        background-image: url('../../public/bosque.webp');
        background-position: -328px -2px;
        transform: rotateY(180deg)
    }
}

@keyframes nextFlip6-ea8e5916 {
    0% {
        background-image: url('../../public/bosque.webp');
        background-position: -28px -2px;
        transform: rotateY(0deg)
    }

    12.5% {
        background-image: url('../../public/detective.webp');
        background-position: -358px -2px;
        transform: rotateY(180deg)
    }

    20% {
        background-image: url('../../public/detective.webp');
        background-position: -28px -2px;
        transform: rotateY(0deg)
    }

    32.5% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -358px -2px;
        transform: rotateY(180deg)
    }

    40% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -28px -2px;
        transform: rotateY(0deg)
    }

    52.5% {
        background-image: url('../../public/revuelta.webp');
        background-position: -358px -2px;
        transform: rotateY(180deg)
    }

    60% {
        background-image: url('../../public/revuelta.webp');
        background-position: -28px -2px;
        transform: rotateY(0deg)
    }

    72.5% {
        background-image: url('../../public/revuelta.webp');
        background-position: -358px -2px;
        transform: rotateY(180deg)
    }

    80% {
        background-image: url('../../public/revuelta.webp');
        background-position: -28px -2px;
        transform: rotateY(0deg)
    }

    92.5% {
        background-image: url('../../public/bosque.webp');
        background-position: -358px -2px;
        transform: rotateY(180deg)
    }
}

@keyframes nextFlip7-ea8e5916 {
    0% {
        background-image: url('../../public/bosque.webp');
        background-position: -2px -2px;
        transform: rotateY(0deg)
    }

    13% {
        background-image: url('../../public/detective.webp');
        background-position: -388px -2px;
        transform: rotateY(180deg)
    }

    20% {
        background-image: url('../../public/detective.webp');
        background-position: -2px -2px;
        transform: rotateY(0deg)
    }

    33% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -388px -2px;
        transform: rotateY(180deg)
    }

    40% {
        background-image: url('../../public/mundo-virtual.webp');
        background-position: -2px -2px;
        transform: rotateY(0deg)
    }

    53% {
        background-image: url('../../public/revuelta.webp');
        background-position: -388px -2px;
        transform: rotateY(180deg)
    }

    60% {
        background-image: url('../../public/revuelta.webp');
        background-position: -2px -2px;
        transform: rotateY(0deg)
    }

    73% {
        background-image: url('../../public/revuelta.webp');
        background-position: -388px -2px;
        transform: rotateY(180deg)
    }

    80% {
        background-image: url('../../public/revuelta.webp');
        background-position: -2px -2px;
        transform: rotateY(0deg)
    }

    93% {
        background-image: url('../../public/bosque.webp');
        background-position: -388px -2px;
        transform: rotateY(180deg)
    }
}

.izq p {
    font-size: 1.5em!important
}

.a50 p,.izq p {
    font-family: SourceSansProLight;
    text-align: left!important;
    color: #333
}

.a50 p {
    font-size: 1.2em!important
}

.inner h2 {
    font-size: 2.4em;
    font-family: MontserratFontRegular
}

.eslogan {
    text-align: left
}

@media only screen and (min-width: 768px) {

    #slidePartners {
        width: 600px
    }
}

@media only screen and (min-width: 980px) {

    #slidePartners {
        width: 800px
    }
}

html {
    overflow: hidden;
    overflow-y: scroll
}

#main {
    background: #fff
}

blockquote,h1,h2,h3,p {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.2em;
    font-style: normal
}

h1,h2,h3 {
    color: #333;
    line-height: 1.2em
}

p {
    line-height: 1.4em
}

.tx p {
    margin-bottom: .8em
}

a,a:active,a:visited {
    color: #f39d00;
    cursor: pointer;
    text-decoration: none;
    outline: 0
}

a img {
    border: none
}

img {
    max-width: 100%;
    height: auto
}

strong {
    color: #444;
    font-weight: 700
}

ul {
    list-style: none;
    margin: 0;
    padding: 0
}

ul li {
    margin: 0;
    padding: 0
}

#main {
    clear: both;
    content: "";
    display: table
}

.clearfix {
    clear: both
}

.cfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0
}

//,:after,:before {
//     box-sizing: border-box;
//     -moz-box-sizing: border-box
// }

#main,aside,footer,header,nav,section {
    display: block
}

#main {
    width: 100%
}

#footer .inner,#header .inner,#main>.sec>.inner,.semanticSec .sec>.inner {
    margin: 0 auto;
    max-width: 1100px;
    position: relative;
    width: 90%
}

.col {
    display: block;
    position: relative
}

.mBxs {
    margin: 0 auto .6em
}

.mB {
    margin-bottom: 1.2em
}

@media only screen and (max-width: 479px) {

    .col {
        clear: both
    }

    .movNo {
        display: none
    }

    .movPad {
        margin: auto;
        width: 80%
    }
}

@media only screen and (max-width: 767px) {

    .equipara.amplio.conFilas>.col {
        display: block;
        margin-bottom: 1em
    }
}

@media only screen and (min-width: 480px) {

    .equipara {
        display: table;
        border-collapse: separate;
        position: relative;
        table-layout: fixed;
        width: 100%
    }

    .equipara.conFilas {
        border-spacing: 20px 10px
    }

    .equipara>.col {
        display: table-cell;
        float: none;
        vertical-align: top
    }
}

@media only screen and (min-width: 768px) {

    .a10 {
        width: 10%
    }

    .a15 {
        width: 15%
    }

    .a30 {
        width: 30%
    }

    .a35 {
        width: 35%
    }

    .a40 {
        width: 40%
    }

    .a50 {
        width: 50%
    }

    .a60 {
        width: 60%
    }

    .a65 {
        width: 65%
    }

    .a70 {
        width: 70%
    }

    .col {
        float: left
    }

    .col.izq {
        padding-right: 1.8em
    }

    .col.der {
        padding-left: 1.8em
    }

    .equipara.amplio>.col {
        display: table-cell
    }
}



.videoCaja {
    height: 0;
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: 500;
    padding-bottom: 56.25%
}

.videoCaja iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 500
}

#avisoCookies {
    background-color: #f7f7f7;
    border-top: 1px solid #999;
    bottom: 0;
    box-shadow: -2px 0 20px rgba(0,0,0,.2);
    color: #777;
    display: none;
    font-size: 15px;
    line-height: 1.4em;
    padding: .8em;
    position: fixed;
    text-align: left;
    width: 100%;
    z-index: 1100
}

#avisoCookies .inner {
    margin: 0 auto;
    max-width: 1000px
}

#avisoCookies .inner p {
    float: left;
    padding: 0;
    width: 100%
}

#avisoCookies .inner p a {
    color: #222;
    font-weight: 700;
    white-space: nowrap
}

#avisoCookies .cerrar {
    background-repeat: no-repeat;
    cursor: pointer;
    display: block;
    float: right;
    height: 30px;
    min-width: 20px;
    text-align: center;
    width: 30px
}

@font-face {
    font-family: SourceSansProLight;
    src: url('../assets/fonts/fonts_fiction/sourcesanspro-light.ttf') format("truetype");
    font-weight: 400;
    font-style: normal
}

@font-face {
    font-family: SourceSansPro;
    font-weight: 400;
    font-style: italic
}

@font-face {
    font-family: SourceSansProRegular;
    src: url('../assets/fonts/fonts_fiction/sourcesanspro-regular.ttf') format("truetype");
    font-weight: 500;
    font-style: normal
}

@font-face {
    font-family: SourceSansProRegularItalic;
    src: url('../assets/fonts/fonts_fiction//sourcesanspro-regularitalic.ttf') format("truetype");
    font-weight: 500;
    font-style: italic
}

@font-face {
    font-family: SourceSansProSemiBold;
    src: url('../assets/fonts/fonts_fiction//sourcesanspro-semibold.ttf') format("truetype");
    font-weight: 700;
    font-style: normal
}

@font-face {
    font-family: SourceSansProBoldItalic;
    src: url('../assets/fonts/fonts_fiction/sourcesanspro-semibolditalic.ttf') format("truetype");
    font-weight: 700;
    font-style: italic
}

@font-face {
    font-family: MontserratFontLight;
    src: url('../assets/fonts/fonts_fiction//montserrat-light.ttf') format("truetype");
    font-weight: 200;
    font-style: normal
}

@font-face {
    font-family: MontserratFontRegular;
    src: url('../assets/fonts/fonts_fiction/montserrat-regular.ttf');
    font-weight: 400;
    font-style: normal
}

@font-face {
    font-family: MontserratFontBold;
    src: url('../assets/fonts/fonts_fiction//montserrat-semibold.ttf');
    font-weight: 700;
    font-style: normal
}

#header {
    position: relative
}

#header .barraMenu {
    text-transform: uppercase
}

#header a {
    color: #fff
}

#header {
    position: fixed;
    top: 0;
    transition: top .25s ease-in-out;
    width: 100%;
    z-index: 1000!important
}

#header #logo {
    background-color: #fff;
    box-shadow: 2px 2px 3px rgba(0,0,0,.15);
    display: block;
    margin-top: -2em;
    padding: 2.65em .7em .65em .9em;
    position: absolute;
    transform: rotate(-4deg);
    z-index: 50
}

#header #logo a {
    display: block
}

#header #logo a img {
    display: none
}

#header #logo a span.simbolo {
    background: require("../assets/fiction/logo/fiction-express-symbolef89.svg") no-repeat;
    background-size: 100% auto;
    display: block;
    height: 50px;
    transform: rotate(4deg);
    width: 45px
}

.znIdiomas {
    float: left;
    font-family: MontserratFont,Arial,sans-serif;
    margin-left: 90px;
    margin-top: .4em
}

.znIdiomas .btnIdioma {
    border-color: #fff!important;
    text-align: center;
    width: auto
}

.mIdiomas a,.znIdiomas .btnIdioma {
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 8px;
    color: #111!important;
    display: inline-block;
    font-size: 1.3em;
    padding: .25em .5em
}

.mIdiomas a.es {
    border-color: #8e3d8a;
    color: #8e3d8a!important
}

.mIdiomas a.en {
    border-color: #18b9e8;
    color: #18b9e8!important
}

.mIdiomas a.cat {
    border-color: #dd7300;
    color: #dd7300!important
}

.znIdiomas .mIdiomas {
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgba(0,0,0,.1);
    display: none;
    left: 0;
    margin-top: .45em;
    padding: 1.1em;
    position: absolute;
    width: 100%;
    z-index: 400
}

.mIdiomas p {
    font-family: SourceSansPro,Arial,sans-serif
}

.copy {
    font-family: SourceSansProRegularItalic,Arial,sans-serif;
    color: #777;
    font-size: 1em
}

.mIdiomas a {
    display: block;
    font-size: 1em;
    margin-top: .4em;
    padding: .5em .7em
}

#header .barraMenu {
    background-color: #18b9e8;
    box-shadow: 0 2px 3px rgba(0,0,0,.2);
    margin-bottom: .8em
}

#menuGralMovil>ul {
    background-color: #111;
    display: none;
    margin-top: -.8em
}

#menuGralMovil ul li a {
    border-top: 1px solid #fff;
    display: block;
    padding: .5em 1em
}

ul#menuGrande {
    display: none
}

ul#menuMovil {
    display: block
}

.barraMenu ul {
    float: right
}

.barraMenu ul li {
    border-left: 1px solid #fff;
    color: #fff;
    display: block;
    float: left;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center
}

.barraMenu ul>li>a {
    -webkit-font-smoothing: subpixel-antialiased;
    display: block;
    height: 3em;
    padding: .8em 1em;
    min-width: 3.5em;
    font-family: SourceSansProLight;
    font-size: 20px
}

.barraMenu ul#menuMovil>li>a {
    padding: .5em
}

.barraMenu ul>li>a {
    background: transparent 50% no-repeat;
    background-size: 45% auto
}

.barraMenu ul>li.menu>a,.barraMenu ul>li.usuario>a {
    background-image: require("../assets/fiction/construccion/sprites/iconos4c77.png")
}

.barraMenu ul>li>a .tx {
    display: none
}

#footer {
    margin: 3em 0 1em
}

#footer .enlaces {
    padding: .5em 0
}

#footer .enlaces ul {
    border-bottom: 1px solid #fff;
    padding: .5em 0;
    text-align: center
}

#footer .enlaces ul:last-child {
    border-bottom: none
}

#footer .enlaces a {
    color: #fff;
    display: block;
    font-family: MontserratFontRegular,Arial,sans-serif;
    line-height: 1.2em;
    padding: .2em 0;
    font-size: 20px
}

#footer .enlaces a:hover {
    opacity: .7
}

#footer .bajoEnlaces {
    text-align: center;
    padding: 1em 0;
    font-size: .8em
}

#footer .bajoEnlaces a {
    color: #777
}

#footer .bajoEnlaces .redes {
    margin: .5em auto 1em
}

#footer .bajoEnlaces .logos {
    margin-top: .5em
}

#footer .bajoEnlaces .logo ul li,#footer .bajoEnlaces .logo {
    color: #333;
    font-family: MontserratFont,Arial,sans-serif;
    font-weight: 200;
    display: inline-block;
    margin-right: .7em;
    vertical-align: top
}

#footer .bajoEnlaces .logo {
    margin-right: 0!important
}

#footer .bajoEnlaces .logos img {
    margin: .5em 0;
    text-align: center!important
}

#footer .bajoEnlaces .logo ul.logosAwards li,#footer .bajoEnlaces .logos ul.logosAwards li img {
    height: 40px;
    margin-right: .17em;
    margin-bottom: 1.2em
}

#footer .bajoEnlaces .logos ul.logosAwards li:last-child {
    margin-right: 0!important
}

@media only screen and (min-width: 768px) {
    #header #logo a span.simbolo {
        display:none
    }

    #header #logo a img {
        display: block;
        transform: rotate(4deg);
        width: 140px
    }

    .znIdiomas {
        margin-left: 190px
    }

    .znIdiomas .mIdiomas {
        left: auto;
        width: auto
    }

    #footer .enlaces {
        padding: 1em 0
    }

    #footer .enlaces ul {
        border-bottom: none;
        border-left: 1px solid #fff;
        float: left;
        padding: 0 1.2em;
        text-align: left;
        width: 33%
    }

    #footer .enlaces ul:first-child {
        border-left: none
    }

    #footer .bajoEnlaces {
        text-align: left
    }

    #footer .bajoEnlaces .redes {
        float: right;
        text-align: right
    }
}

@media only screen and (min-width: 980px) {
    ul#menuMovil {
        display:none
    }

    ul#menuGrande {
        display: block
    }

    ul#menuGrande>li>a:hover {
        background-color: #00a6cc
    }
}

#footer .enlaces a {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased
}

.contador strong span.tx {
    color: #111
}

.cajas li {
    background-color: #fff;
    border-radius: 7px;
    text-align: center
}

.past {
    background-color: #111;
    background-color: rgba(0,0,0,.8);
    padding: 1.5em
}

.past.azul {
    background-color: #18b9e8;
    background-color: rgba(24,185,232,.8);
    border-radius: 0 9px 9px 0
}

.sec.azul {
    background-color: #18b9e8;
    border-bottom: 3px solid #fff;
    border-top: 3px solid #fff
}

.sec.gris {
    background: #f5f5f5;
    padding: .5em 1em
}

.videoCaja {
    background-color: #fff
}

.znPasos .paso {
    border: 3px solid #18b9e8
}

.znPasos .paso.impar {
    border-right: none
}

.znPasos .paso.par {
    border-left: none
}

.znPasos .paso.conclusion {
    border: none;
    padding: 0
}

.znPasos .paso.conclusion .texto {
    background-color: #18b9e8;
    color: #fff!important;
    padding: 1.5em
}

.znPasos .paso h3 {
    color: #333;
    font-weight: 200;
    line-height: 1.1em
}

.znPasos .paso h3 strong {
    color: #333;
    display: block;
    font-size: 1.15em;
    font-weight: 400;
    text-transform: uppercase
}

.znPasos .paso.conclusion .texto h3 strong,.znPasos .paso.conclusion .texto h3 {
    color: #fff!important
}

.znPasos .paso h3 .num {
    background-color: #18b9e8;
    border-radius: 100%;
    color: #fff;
    font-size: 1.3em;
    line-height: 1em
}

.znPasos .paso p {
    text-align: left
}

@media only screen and (min-width: 768px) {

    .znPasos .paso.impar {
        border-radius: 20px 0 0 20px
    }

    .znPasos .paso.par {
        border-radius: 0 20px 20px 0
    }

    .znPasos .paso:first-child {
        border-radius: 0 0 0 20px
    }

    .znPasos .paso.conclusion .texto {
        border-radius: 0 20px 20px 20px
    }

    .znPasos .paso h3 {
        font-size: 2.2em
    }
}

@media only screen and (min-width: 980px) {
    .container {
        padding-right: 0;
        padding-left: 54px;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 20px;
    }
    .znPasos .paso h3 strong {
        display:inline-block
    }
    #carouselExampleFade {
        max-height: 86%;
    }
    .carousel-inner  {
        max-height: 525px !important;
        height: 525px !important;
    }
    .carousel-item  {
        max-height: 100% !important;
        height: 100% !important;
    }
    .modal-header .close { 
        padding-right: 0.5rem;
    }
    .sinopsis {
        font-family: SourceSansProRegular;
        text-align: left !important;
        font-size: 16px !important;
        line-height: 20px !important;
        padding: 2rem!important;
        padding-top: 0 !important;
        max-height: 84%;
        overflow-y: scroll;
    }
    .titulo-sinopsis{
        font-family: SourceSansProSemiBold;
        font-size: 35px !important;
        line-height: 38px !important;
        padding: 2rem!important;
        padding-top: 0 !important;


    }
}
@media only screen and (min-width: 1200px) {
    #main>.sec>.inner,.semanticSec>.sec>.inner {
        width:80%
    }
    .carousel-inner  {
        max-height: 100% !important;
        height: 100% !important;
    }
    .sinopsis {
    font-family: SourceSansProRegular;
    text-align: left!important;
    font-size: 26px !important;
    line-height: 30px !important;
    }
    .titulo-sinopsis{
        font-family: SourceSansProSemiBold;
        font-size: 35px !important;
        line-height: 30px !important;
    }
}
.fnImag {
    background: #fff no-repeat bottom/cover;
    animation: zoom-in-zoom-out-ea8e5916 500s ease infinite
}

@keyframes zoom-in-zoom-out-ea8e5916 {
    0%,to {
        background-size: 100% 100%
    }

    50% {
        background-size: 110% 160%
    }
}

@media only screen and (min-width: 1025px) {
    .fnImag {
        background:#fff no-repeat fixed bottom/cover;
        background-image: url('../assets/fiction/construccion/fondos/imagenes/clase-2-1920ef89.jpg')
    }
}

@media only screen and (min-width: 480px)and (max-width:1024px) {
    .fnImag {
        background-image:url('../assets/fiction/construccion/fondos/imagenes/clase-2-1024ef89.jpg')
    }
}

@media only screen and (max-width: 480px) {
    .fnImag {
        background-image:url('../assets/fiction/construccion/fondos/imagenes/clase-2-800ef89.jpg')
    }
}

.tx h3,h2 {
    font-family: MontserratFontRegular,Arial,sans-serif;
    font-size: 1.6em;
    line-height: 1.1em;
    margin: .2em 0 .4em
}

.sec h2 {
    text-align: center
}

.sec.azul h2 {
    color: #fff
}

.sec.gris h2 {
    font-size: 2.2em;
    margin: .5em 0 .2em
}

.tx h3 {
    font-size: 1.3em;
    line-height: 1.2em;
    margin-top: 1em
}

.contador {
    font-family: MontserratFont,Arial,sans-serif;
    font-size: .7em!important;
    text-align: center
}

.contador strong {
    font-weight: 400
}

.contador strong span.tx {
    text-transform: uppercase;
    text-align: right
}

.contador strong.mini .tx {
    font-size: .9em
}

.introHome .eslogan span {
    font-family: MontserratFontLight,Arial,sans-serif;
    font-size: 1.1em;
    font-weight: 200;
    line-height: 1.2em;
    text-shadow: none
}

.info1 p {
    font-size: 1.2em
}

blockquote p {
    color: #333;
    font-size: 1em!important;
    font-style: italic;
    margin: .5em auto
}

blockquote footer {
    color: #18b9e8;
    font-family: MontserratFont,Arial,sans-serif;
    font-size: .8em;
    font-weight: 200;
    text-transform: uppercase;
    text-align: center
}

.past {
    color: #fff
}

.past.azul {
    text-shadow: -1px -1px 0 rgba(0,0,0,.2)
}

h3 {
    color: #18b9e8;
    font-family: MontserratFont,Arial,sans-serif;
    font-size: 1.7em;
    font-weight: 400;
    line-height: 1.1em;
    margin-bottom: .5em;
    margin-top: 0;
    text-align: center
}

.tx p {
    text-align: center
}

.cuentaAtras h2 {
    font-size: 1.5em
}

@media only screen and (min-width: 480px) {
    h2 {
        font-size:2em
    }

    .introHome .eslogan span {
        font-size: 1.5em
    }

    h3 {
        font-size: 2em;
        line-height: 1em
    }

    .tx p {
        text-align: left
    }

    .info1 p {
        font-size: 1.2em;
        text-align: left
    }

    blockquote footer {
        text-align: left
    }
}

@media only screen and (min-width: 768px) {
    .cuentaAtras h2 {
        text-align: left;
        float: left;
        width: 49% !important;
    }
    .introHome .btn,.introHome .eslogan span,.introHome .eslogan {
        font-size: 1.1em
    }

    .introHome .eslogan {
        margin-bottom: 1em
    }

    .introHome .eslogan span {
        font-size: 1em;
        margin-bottom: .5em
    }

    .introHome .past {
        padding: .9em 1em;
        padding: .8em .9em
    }
}

@media only screen and (min-width: 980px) {
    .cuentaAtras h2 {
        text-align: left;
        float: left;
        width: 60% !important;
    }
    .contador {
        font-size:1.1em!important
    }

    .introHome .btn,.introHome .eslogan span {
        font-size: 1.4em
    }

    .introHome .eslogan span {
        font-size: 1.2em
    }

    .introHome .past {
        padding: 1.5em;
        padding: 1.4em
    }
}

@media only screen and (min-width: 1200px) {

    .introHome .eslogan span {
        font-size: 2.4em;
        line-height: 1.15em;
        text-align: left
    }

    .introHome .btn {
        font-size: 2.2em!important;
        line-height: 1.15em;
        font-family: MontserratFontRegular
    }

    .introHome .eslogan {
        margin-bottom: .5em
    }

    .cuentaAtras h2 {
        font-size: 2.2em
    }
}

@media only screen and (max-width: 359px) {
    .contador {
        font-size:.6em!important
    }
}

.introHome .eslogan,.sec.azul h2 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased
}

.btn {
    border: none;
    border-radius: 7px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: MontserratFont,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.2em;
    text-align: center;
    text-shadow: -1px -1px 0 rgba(0,0,0,.2)
}

a.btn {
    color: #fff
}

.btn {
    font-size: 1.2em;
    padding: .5em 1.2em;
    width: 100%;
    background-color: #f39d00;
    border: 1px solid #d36900
}

.btn.fnColor {
    border-color: #fff
}

.btn.vol {
    background-color: #f39d00;
    box-shadow: 3px 3px 0 #d36900;
    border: none
}

.btn.L {
    font-size: 1.5em;
    padding: .4em 1em
}

.btn.XL {
    font-size: 1.7em;
    padding: .4em 2em
}

@media only screen and (min-width: 480px) {

    .btn.auto {
        width: auto
    }
}

@media only screen and (min-width: 768px) {
    .btn:hover {
        color:#fff
    }

    .btn.vol:hover {
        background-color: #f39d00;
        box-shadow: 2px 2px 0 #d36900;
        margin: 1px -1px -1px 1px
    }

    .btn.vol:active {
        background-color: #f39d00;
        box-shadow: -1px -1px 0 #d36900;
        margin: 3px -3px -3px 3px
    }
}

.btn {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased
}

#main {
    margin-top: .5em
}

.contador {
    display: block
}

.contador strong {
    display: inline-block;
    margin-right: .2em;
    vertical-align: text-top
}

.contador strong:last-child {
    margin-right: 0
}

.contador strong span {
    display: block
}

.cajas li {
    color: #333;
    font-size: 1.2em;
    padding: 1em
}

.sec.gris.logosClientes {
    margin-top: 2em;
    padding: 1em 0
}

.znLogos,.zonaPremios {
    text-align: center;
    width: 100%
}

.znLogos li,.zonaPremios li {
    color: #333;
    line-height: 3em;
    padding: .2em;
    text-align: center;
    display: inline-block
}

.logosPartners {
    margin-top: 2.7em
}

.znLogos .logosPartners li img,.zonaPremios li img {
    height: 50px;
    vertical-align: middle
}

.zonaPremios li img.logoVer {
    max-height: 40px!important
}

.fLibro .puntuacion .estrellas li> {
    display: table-cell;
    padding-right: .5em;
    vertical-align: baseline;
    white-space: nowrap
}

.sec.pad {
    padding: 2.5em 0
}

.sec.pad.S {
    padding: 1.5em 0
}

#main>.fnImag {
    margin-top: -2.3em;
    padding-top: 2.3em
}

.znPasos .paso {
    clear: both;
    margin-top: -3px;
    padding: 1em;
    position: relative;
    width: 98%
}

.znPasos .paso:first-child {
    margin-top: -6px
}

.znPasos .paso h3 {
    margin-top: .5em;
    text-align: left
}

.znPasos .paso h3 .num {
    display: block;
    margin-bottom: .3em;
    padding: .25em 0 .3em;
    text-align: center;
    height: 1.4em;
    width: 1.4em
}

.imag.movPad,.znPasos .imag {
    margin-top: 1em;
    text-align: center
}

.znPasos .texto p:last-child {
    margin-bottom: 0
}

@media only screen and (max-width: 479px) {

    .zonaPremios li img {
        height: 50px
    }

    .logosPartners li {
        float: left;
        width: 50%
    }
}

@media only screen and (min-width: 480px) {

    .contador strong span.tx {
        text-align: right
    }
}

@media only screen and (min-width: 768px) {
    #main {
        margin-bottom:2em;
        // margin-top: 1.5em
    }
    .cuentaAtras {
        background: linear-gradient(334deg, #6b97f7, rgba(24, 185, 232), rgb(5, 120, 155));
        background-size: 180% 180%;
        animation: gradient-animation 12s ease infinite;
    }
    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    .cuentaAtras h2 {
        text-align: left;
        float: left;
        width: 40%
    }

    .zonaPremios li {
        padding: .3em .4em
    }

    .zonaPremios li img.logoVer {
        max-height: 70px!important
    }

    .znPasos .paso {
        padding: 2.2em
    }

    .znPasos .paso.impar {
        float: left
    }

    .znPasos .paso.par .texto,.znPasos .paso.par {
        float: right
    }

    .znPasos .impar .imag {
        text-align: right
    }

    .znPasos .paso h3 .num {
        position: absolute;
        top: 0
    }

    .znPasos .paso.impar h3 .num {
        left: -1.5em
    }

    .znPasos .paso.par h3 .num {
        right: -1.5em
    }

    .znPasos .conclusion .imag {
        bottom: 1em;
        left: 1em;
        position: absolute;
        text-align: left
    }
}

@media only screen and (min-width: 980px) and (max-width: 1199px){
    .libros-anteriores {
        position: absolute;
        top: 0;
        left: 35%;
    }
    .zonaPremios li {
        padding: .4em .8em
    }

    .zonaPremios li img {
        height: 85px!important
    }

    .zonaPremios li img.logoVer {
        max-height: 70px!important
    }
}

@media only screen and (max-width: 767px) {
    .equipara.amplio>.col {
        display:block
    }

    .movPad.imag {
        text-align: center
    }
}

@media only screen and (min-width: 768px)and (max-width:1023px) {

    .znLogos li img {
        height: 50px!important
    }

    .zonaPremios li img {
        height: 60px!important
    }
}

@media only screen and (min-width: 1200px) {

    #main>.sec.introHome>.inner {
        width: 90%
    }
    .container {
        padding-right: 36px;
        padding-left: 0;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 20px;
    }
}

.ico {
    font-size: 26px;
    background-image: url('../assets/fiction/construccion/sprites/iconos4c77.png');
    background-size: 26em auto;
    background-repeat: no-repeat
}

.ico {
    display: inline-block;
    height: 1em;
    margin-right: .3em;
    vertical-align: middle;
    vertical-align: top;
    width: 1em
}

.ico.slCen {
    margin-left: 0!important;
    margin-right: 0!important
}

.ico.slCen {
    margin-bottom: .5em
}

a:hover .ico {
    opacity: .6
}

.ico.flR {
    background-position: -2em 0
}

a:hover .ico.flR {
    background-position: -3em 0
}

.ico.bl.user {
    background-position: 0 -2em
}

.ico.ebook {
    background-position: -3em -3em
}

.ico.ebook.ng {
    background-position: -9em -7em
}

.ico.voto {
    background-position: -5em -3em
}

.ico.habla {
    background-position: -12em -3em
}

.ico.habla.ng {
    background-position: -3em -6em
}

.ico.XL {
    background-size: 59.8em auto;
    height: 2.3em;
    margin-right: .5em;
    width: 2.3em
}

.ico.XL.ng.ebook {
    background-position: -2.3em -13.8em
}

.ico.XL.ng.voto {
    background-position: -4.6em -13.8em
}

.ico.XL.ng.habla {
    background-position: -6.9em -13.8em
}

.ico.XL.ng.trofeo {
    background-position: -9.2em -13.8em
}

ul.icoRedes li {
    display: inline-block
}

ul.icoRedes li span {
    display: none
}

ul.icoRedes li a {
    font-size: 45px;
    background-image: url('../assets/fiction/construccion/sprites/iconos-redes4418.svg');
    background-size: 1em auto;
    background-repeat: no-repeat;
    border-radius: 7px;
    display: block;
    height: 45px;
    margin-left: 4px;
    width: 45px
}

ul.icoRedes li.facebook a {
    background-color: #2f558c;
    background-position: 0 0
}

ul.icoRedes li.twitter a {
    background-color: #31a0ce;
    background-position: 0 -1em
}

ul.icoRedes li.youtube a {
    background-color: #e4262b;
    background-position: 0 -3em
}

ul.icoRedes li.linkedin a {
    background-color: #2967af;
    background-position: 0 -5em
}

ul.icoRedes li a:hover {
    opacity: .7
}

.znPasos .paso.conclusion .texto p {
    color: #fff!important;
    font-size: 1.3em!important
}
@media only screen and (min-width: 1200px) {
    .libros-anteriores {
        position: absolute;
        top: 0;
        left: 22%;
    }
    #main>.sec>.inner,.semanticSec>.sec>.inner {
        width:80%
    }
    .carousel-inner  {
        max-height: 800px !important;
        height: 800px !important;
    }
    .sinopsis {
    font-family: SourceSansProRegular;
    text-align: left!important;
    font-size: 26px !important;
    line-height: 30px !important;
    }
    .titulo-sinopsis{
        font-family: SourceSansProSemiBold;
        font-size: 35px !important;
        line-height: 30px !important;
    }
    
}
@media only screen and (min-width: 1500px) {
    .libros-anteriores {
        position: absolute;
        top: 0;
        left: 28%;
    }
}
@media only screen and (max-height: 700px) {
    .h-100 {
        height: 85% !important;
    }
    .h-75 {
        height: 100% !important;
    }
}
</style>