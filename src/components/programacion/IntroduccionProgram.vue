<template>
    <section class="container-fluid pt-4 introduccion">
      <div class="row pt-4">
          <div class="col-1 d-md-block d-sm-none introduccion__col"></div>
          <div class="col-md-3 col-sm-12 introduccion__col--imagen">
            <img class="introduccion__imagen" src="@/assets/images/mi_foto.webp" alt="Este soy yo!">
          </div>
          <div class="col-md-7 col-sm-12" style="padding-left: 3vw;">
              <div class="row pt-0">
                <div class="col pl-4">
                    <div class="row pb-1 mt-2 mt-sm-0"><div class="col"><h2 class="introduccion__titulo--programacion text-md-start text-sm-center">{{$t("introduccion_titulo")}}</h2></div></div>
                    <div class="row pb-1"><div class="col"><h4 class="introduccion__subtitulo--programacion text-md-start text-sm-center">{{$t("introduccion_subtitulo")}}</h4></div></div>
                    <div class="row"><div class="col"><p class="introduccion__texto--normal text-md-start text-sm-center">{{$t("introduccion_texto")}}{{$t("introduccion_texto_2")}}</p></div></div>
                    <div class="row">
                      <div class="col col_links d-md-block d-flex justify-content-center">
                        <div class="flex-container">
                          <a class="flex-slide home introduccion__flex-slide--gris" href="https://www.linkedin.com/in/toni-torres-cabero-73649921a/" target="_blank" >
                            <div class="introduccion__flex-title"><img src="../../assets/images/logos/linkedin.svg" alt="LinkedIn" class="img-link"><p class="flex-about pt-1">{{$t("introduccion_linkedin")}}</p></div>
                          </a>
                          <a class="flex-slide about introduccion__flex-slide--gris" href="https://github.com/tonotorres" target="_blank">
                            <div class="introduccion__flex-title"><img src="../../assets/images/logos/github.svg" alt="GitHub" class="img-link"><p class="flex-about pt-1">{{$t("introduccion_github")}}</p></div>

                          </a>
                          <a class="flex-slide-cv work introduccion__flex-slide--gris" href="./cv-antonio-torres-cabero.pdf" download>
                            <div class="introduccion__flex-title"><img src="../../assets/images/logos/descargar_cv.svg" alt="Descargar CV" class="img-link"><p class="flex-about pt-1">{{$t("introduccion_cv")}}</p></div>
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-1 d-md-block d-sm-none"></div>
      </div>
    </section>
  </template>
  
  <script setup>
      import { onMounted } from 'vue';
      import { useI18n } from 'vue-i18n'

      // Variables
      const { t } = useI18n()

      onMounted(() => { 

      });

  </script>

<style scoped>

  
  .introduccion {
    position: relative;
    z-index: 10;
  }


  .introduccion__imagen {
    max-width: 100%;
    width: 100%;
    height: auto;
    border-radius: 9px;
    position: absolute;
    bottom: 0%;
    left: 0%;
  }
  .introduccion__col--imagen {
    background-image: linear-gradient(to left, #c244d6c9, #a85ae7, #8a6bf3, #6679fb, #3284ffcb);
    border-radius: 9px;
    position: relative;
    outline: 3px solid white;

}

  /* Nuevos estilos links*/
  .col_links {
    position: relative;
  }
  
      
  .flex-container {
    position: relative;
    height: 70px;
    width: 95%;
    display: flex;
    overflow: hidden;
    border-radius: 9px;
    border: 1px solid white;
    display: -webkit-flex; /* Safari */
  }
  .introduccion__flex-title {
    position: relative;
    height: 100%;
    margin: auto;
    text-align: center;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    
  }
  .flex-about {
    opacity: 0;
    color: #f1f1f1;
    font-family: "Mona Sans SemiBold";
    position: absolute;
    width: 100%;
    border-radius: 10px;
    line-height: 1.3;
    margin: auto;
    text-align: center;
    -webkit-transition: opacity 1s ease;
    -moz-transition: opacity 1s ease;
    -ms-transition: opacity 1s ease;
    -o-transition: opacity 1s ease;
    transition: opacity 1s ease;
  }


  .flex-slide, .flex-slide-cv {
    -webkit-flex: 1;  /* Safari 6.1+ */
    -ms-flex: 1;  /* IE 10 */    
    flex: 1;
    border: 1px solid white;
    cursor: pointer;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
  }
  .flex-slide:hover {
    -webkit-flex-grow: 1.1;
    flex-grow: 1.1;
    background-image: linear-gradient(to right, #c244d6ec, #a85ae7, #8a6bf3, #6679fb, #3284ffef);

  }
  .flex-slide-cv:hover {
    -webkit-flex-grow: 1.5;
    flex-grow: 1.5;
    background-image: linear-gradient(to right, #c244d6ec, #a85ae7, #8a6bf3, #6679fb, #3284ffef);

  }


  .img-link {
    height: 100%;
    width: auto;
    position: absolute;
    padding: 5px;
    left: 37%;
    transition: left 0.6s;
  }

  .introduccion__flex-title:hover .img-link {
    left: 3%;
  }
  .introduccion__flex-title:hover .flex-about {
    -webkit-transition: opacity 3s ease;
    -moz-transition: opacity 3s ease;
    -ms-transition: opacity 3s ease;
    -o-transition: opacity 3s ease;
    transition: opacity 2s ease;
    opacity: 1;
  }
  @media screen and (min-width: 1901px) {
    .flex-about {
      font-size: 1.9vw;
      top: 10%;
    }
    .flex-slide-cv .introduccion__flex-title .flex-about {
      left: 10%;
    }
  }
  @media screen and (min-width: 1701px) and (max-width: 1900px) {
    .flex-about {
      font-size: 1.9vw;
      top: 11%;
    }
    .flex-slide-cv .introduccion__flex-title .flex-about {
      left: 10%;
    }
    .img-link {
      left: 40%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 1551px) and (max-width: 1700px) {
    .flex-about {
      font-size: 1.9vw;
      top: 17%;
    }
    .flex-slide-cv .introduccion__flex-title .flex-about {
      left: 10%;
    }
    .img-link {
      left: 40%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 1480px) and (max-width: 1550px) {
    .flex-about {
      font-size: 1.8vw;
      top: 19%;
    }
    .introduccion__flex-title .flex-about { 
      left: 10%;
    }
    .flex-slide-cv .introduccion__flex-title .flex-about {
      left: 10%;
    }
    .img-link {
      left: 40%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 1365px) and (max-width: 1479px) {
    .flex-about {
      font-size: 1.8vw;
      top: 21%;
    }
    .introduccion__flex-title .flex-about { 
      left: 10%;
    }
    .flex-slide-cv .introduccion__flex-title .flex-about {
      font-size: 1.7vw;
      left: 10%;
    }
    .img-link {
      left: 40%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 1220px) and (max-width: 1364px) {
    .flex-about {
      font-size: 1.8vw;
      top: 24%;
    }
    .introduccion__flex-title .flex-about { 
      left: 10%;
    }
    .flex-slide-cv .introduccion__flex-title .flex-about {
      font-size: 1.7vw;
      left: 10%;
    }
    .img-link {
      left: 37%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 1091px) and (max-width: 1219px) {
    .flex-about {
      font-size: 1.7vw;
      top: 26%;
    }
    .introduccion__flex-title .flex-about { 
      left: 10%;
    }
    .flex-slide-cv .introduccion__flex-title .flex-about {
      font-size: 1.6vw;
      left: 12%;
    }
    .img-link {
      left: 36%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 950px) and (max-width: 1090px) {
    .flex-about {
      font-size: 2vw;
      top: 26%;
    }
    .introduccion__flex-title .flex-about { 
      left: 16%;
    }
    .flex-slide-cv .introduccion__flex-title .flex-about {
      font-size: 1.6vw;
      top: 30%;
      left: 15%;
    }
    .img-link {
      left: 33%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 949px) {
    .flex-about {
      display: none;
    }
    .img-link {
      left: 33%;
    }
    .introduccion__flex-title:hover .img-link {
      left: 33%;
    }
    .flex-container {
      height: 60px;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 809px) {
    .img-link {
      left: 31%;
    }
    .introduccion__flex-title:hover .img-link {
      left: 31%;
    }
  }
  @media screen and (max-width: 767px) {
    .introduccion__imagen {
      height: auto;
      width: 50vh;
      border-radius: 9px;
      position: relative;
      outline: 1px solid white;
      background-image: linear-gradient(to left, #c244d6c9, #a85ae7, #8a6bf3, #6679fb, #3284ffcb);
      -webkit-animation: none;
              animation: none;
    }
    .introduccion__col--imagen {
        background-image: none;
        border-radius: 0px;
        position: relative;
        outline: 0px;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 720px) {
    .img-link {
      left: 29%;
    }
    .introduccion__flex-title:hover .img-link {
      left: 29%;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 620px) {
    .img-link {
      left: 27%;
    }
    .introduccion__flex-title:hover .img-link {
      left: 27%;
    }
    .flex-container {
      height: 50px;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 520px) {
    .img-link {
      left: 23%;
    }
    .introduccion__flex-title:hover .img-link {
      left: 23%;
    }
    .flex-container {
      height: 50px;
      border: 0px;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 390px) {
    .img-link {
      left: 19%;
    }
    .introduccion__flex-title:hover .img-link {
      left: 19%;
    }
    .flex-container {
      height: 50px;
      border: 0px;
    }
    .flex-slide {
      border: 0px;
    }
  }

  
</style>