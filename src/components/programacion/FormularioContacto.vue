<template>
  <div>
    <div class="mt-xl-5">   
      <div class="row w-100 formulario">
            <div class="col d-flex justify-content-center fondo-formulario p-2">
              <form class="p-4" ref="form" @submit.prevent="sendEmail">
                <div class="form-row pt-4 pb-4 d-flex">
                  <div class="form-group col-md-4 text-start" style="padding-right: 2%;">
                    <label class="texto_formulario color-white" for="inputEmail">{{$t("formulario_email")}}</label>
                    <input type="email" class="form-control" id="inputEmail"  name="email" placeholder="Email" v-model="email">
                  </div>
                  <div class="form-group col-md-4 text-start" style="padding-right: 2%;">
                    <label class="texto_formulario color-white " for="inputPhone">{{$t("formulario_telefono")}}</label>
                    <input type="text" class="form-control" name="phone" id="inputPhone" placeholder="Telefono" onkeypress="return event.charCode >= 48 && event.charCode <= 57"  v-model="telefono">
                  </div>
                  <div class="form-group col-md-4 text-start"></div>
                  
                </div>
                <div class="form-group col-12 text-start">
                  <label class="texto_formulario color-white" for="inputMessage">{{$t("formulario_mensaje")}}</label>
                  <textarea class="form-control" id="inputMessage"  name="comments" v-model="mensaje"></textarea>
                </div>
                <div class="form-group col-12 my-4 text-center">
                  <button type="submit" class="btn custom-btn btn-13 w-25" aria-label="Enviar">{{$t("formulario_boton")}}</button>
                </div>
                <input type="hidden" name="_next" value="https://tonitorresportfolio.com/programacion">
                <input type="hidden" name="_captcha" value="false">
              </form>

            </div>
        </div>
    </div>
  </div>
</template>
  
  <script>
  import emailjs from '@emailjs/browser';


  export default {
    name: 'FormularioContacto',
    data() {
      return {
        email: "",
        telefono: null,
        asunto: null,
        mensaje: null,
        nombre: null,
      };
    },
    mounted() {
    },
    methods: {
      guardarEmail(event) {
        this.email = event.target.value;
      },
      async sendEmail(){
        emailjs.sendForm('service_tgm4vcm', 'template_qvhg43s', this.$refs.form, 'QpMDusPRtmuAyr3Nw')
        .then((result) => {
          console.log('SUCCESS!', result.text);
        }, (error) => {
          console.log('FAILED...', error.text);
        });
      }
    }
  }
  </script>
  
<style scoped>

.formulario {
  background: linear-gradient(179.84deg, rgba(48, 52, 64, 0.6) 5.62%, rgba(57, 63, 79, 0.306) 36.76%, rgba(0, 0, 0, 0) 73.06%);
  backdrop-filter: blur(12px);
  border-radius: 25px 25px 0px 0px;
  color: white;
  font-family: "Mona Sans Regular";
  border: 1px solid white;
}
form {
  width: 100%;
}
textarea {
  height: 10rem;
}
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1vw;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  padding: 0px;
  font-family: "Mona Sans SemiBold Wide";
}
.btn-13 {
  background-color: rgba(0, 163, 255, 0.7);
background-image: linear-gradient(315deg, rgba(0, 163, 255, 0.7) 0%, rgba(0, 162, 255, 0.856) 74%);
  border: none;
  z-index: 1;
}
.btn-13:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
   background-color: rgba(0, 162, 255, 0.856);
background-image: linear-gradient(315deg, rgba(0, 162, 255, 0.856) 0%, rgba(0, 162, 255, 0.699) 74%);
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.btn-13:hover {
  color: #fff;
}
.btn-13:hover:after {
  top: 0;
  height: 100%;
}
.btn-13:active {
  top: 2px;
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
@media only screen and (max-width: 717px) {
  .title {
    font-size: 4rem;
    margin-top: 10%;
  }
}
@media only screen and (max-width: 552px) {
  .title {
    font-size: 3.5rem;
    margin-top: 10%;
  }
  .custom-btn {
    font-size: 3vw;
  }
}
@media only screen and (max-width: 485px) {
  .title {
    font-size: 2.7rem;
    margin-top: 10%;
  }
  .subtitle {
    font-size: 1.2em;
}
}
</style>