<template>
    <div id="juego-javascript" class="background_programacion_gris">
      <span v-for="(tile, index) in tiles" :key="index" @click="clicked" :data-type="tile" class="tile_box">
        <i class="fa-solid fa-circle-question"></i>
      </span>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

let number_of_tiles = ref(20)
let openings = ref(0)
let tries = ref(0)
let tiles = reactive(new Array())
let picked_tiles = reactive(new Array())
let can_pick = ref(true)
let pictures = reactive(['<i class="fa-brands fa-square-js"></i></span>',
                '<i class="fa-brands fa-figma"></i></span>',
                '<i class="fa-brands fa-css3-alt"></i></span>',
                '<i class="fa-brands fa-vuejs"></i></span>',
                '<i class="fa-brands fa-sass"></i></span>',
                '<i class="fa-brands fa-github"></i></span>',
                '<i class="fa-brands fa-linkedin"></i></span>',
                '<i class="fa-brands fa-react"></i></span>',
                '<i class="fa-solid fa-face-smile"></i></span>',
                '<i class="fa-brands fa-node"></i></span>',])

function givePic(i){
  return pictures[i]
}

onMounted(() => {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
    document.head.appendChild(link);
    //tiles creation loop
    for(var i=0; i<number_of_tiles.value; i++){
        tiles.push(Math.floor(i/2))
    }

    //shuffling loop
    var swap,tmp
    for(var i=number_of_tiles.value-1; i>0; i--){
        swap = Math.floor(Math.random()*i)
        tmp = tiles[i]
        tiles[i] = tiles[swap]
        tiles[swap] = tmp
    }
})

function resetGame(){
  alert("¡Felicidades! Has hecho "+tries.value+" intentos.")
}

function clicked(event){
  if(can_pick.value){
    var picked = event.target;
    if(picked_tiles.indexOf(picked) == -1){
        picked_tiles.push(picked);
        picked.innerHTML = givePic(picked.dataset['type']);
    }
    
    if(picked_tiles.length == 2){
      tries.value++
      can_pick.value = false
      if(picked_tiles[0].dataset['type'] == picked_tiles[1].dataset['type']){
        setTimeout(function(){
          picked_tiles[0].removeEventListener('click',clicked,false)
          picked_tiles[1].removeEventListener('click',clicked,false)
          picked_tiles[0].innerHTML = ""
          picked_tiles[1].innerHTML = ""
          picked_tiles[0].className = picked_tiles[0].className + " removed"
          picked_tiles[1].className = picked_tiles[1].className + " removed"
          picked_tiles = reactive(new Array())
          can_pick.value = true
          openings.value++
          if(openings.value == (number_of_tiles.value/2)){
            resetGame()
          }
        },1000)
      } else {
        setTimeout(function(){
          picked_tiles[0].innerHTML = '<i class="fa-solid fa-circle-question"></i>'
          picked_tiles[1].innerHTML = '<i class="fa-solid fa-circle-question"></i>' 
          picked_tiles = reactive(new Array())
          can_pick.value = true
        },1000)
      }
    }
  }
}
</script>
    
<style scoped>
#juego-javascript{
    border:1px solid #ddd;
    width: 464px;
    height: 102%;
}

.tile_box{
  display:block;
  float:left;
  width: 22%;
  height: 80px;
  background: #ddd;
  margin-left: 2.5%;
  margin-top: 3%;
  text-decoration:none;
  color:#333;
  font-family:Arial;
  text-align:center;
  line-height:80px;
  font-size:32px;
  cursor:pointer;
  opacity:.5;
}

.tile_box:hover{
  opacity:1;
}
.fa-circle-question {
    pointer-events: none;
}
.removed{
  background:#eee !important;
  cursor:default !important;
}
@media screen and (min-width: 400px) and (max-width: 1500px) {
    #juego-javascript{
        width: 100%;
        height: 102%;
    }
}
</style>