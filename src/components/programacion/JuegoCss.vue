<template>
    <div class="board">
		<div id="scorebar">Your scores:&nbsp;&nbsp;&nbsp;</div>
        <input id="bonus_01" name="radio1" class="bonus" type="radio">
        <input id="bonus_02" name="radio2" class="bonus" type="radio">
        <input id="bonus_03" name="radio3" class="bonus" type="radio">
        <input id="bonus_04" name="radio4" class="bonus" type="radio">
        <input id="bonus_05" name="radio5" class="bonus" type="radio">
        <input id="bonus_06" name="radio6" class="bonus" type="radio">
        <input id="bonus_07" name="radio7" class="bonus" type="radio">
        <input id="bonus_08" name="radio8" class="bonus" type="radio">
        <input id="bonus_09" name="radio9" class="bonus" type="radio">
        <input id="bonus_10" name="radio10" class="bonus" type="radio">
        <p class="enemy" id="enemy_01"></p>
        <p class="enemy" id="enemy_02"></p>
        <p class="enemy" id="enemy_03"></p>
        <p class="enemy enemy_t1" id="enemy_04"></p>
        <p class="enemy" id="enemy_05"></p>
        <p class="enemy" id="enemy_06"></p>
        <p class="enemy enemy_t3" id="enemy_07"></p>
        <p class="enemy" id="enemy_08"></p>
        <p class="enemy" id="enemy_09"></p>
        <p class="enemy" id="enemy_10"></p>
        <p class="enemy enemy_t1" id="enemy_11"></p>
        <p class="enemy" id="enemy_12"></p>
        <p class="enemy" id="enemy_13"></p>
        <p class="enemy enemy_t2" id="enemy_14"></p>
        <p class="enemy" id="enemy_15"></p>
        <p class="enemy" id="enemy_16"></p>
        <p class="enemy enemy_t3" id="enemy_17"></p>
        <p class="enemy" id="enemy_18"></p>
        <p class="enemy" id="enemy_19"></p>
        <p class="enemy enemy_t3" id="enemy_20"></p>
        <p class="enemy" id="enemy_21"></p>
        <p class="enemy" id="enemy_22"></p>
        <p class="enemy enemy_t1" id="enemy_23"></p>
        <p class="enemy" id="enemy_24"></p>
        <p class="enemy enemy_t2" id="enemy_25"></p>
        <p class="enemy" id="enemy_26"></p>
        <p class="enemy" id="enemy_27"></p>
        <p class="enemy enemy_t3" id="enemy_28"></p>
        <p class="enemy" id="enemy_29"></p>
        <p class="enemy" id="enemy_30"></p>
        <p class="enemy" id="enemy_31"></p>
        <p class="enemy" id="enemy_32"></p>
        <p class="enemy" id="enemy_33"></p>
        <p class="enemy" id="enemy_34"></p>
        <p class="enemy" id="enemy_35"></p>
        <p class="enemy" id="enemy_36"></p>
        <p class="enemy" id="enemy_37"></p>
        <p class="enemy" id="enemy_38"></p>
        <p class="enemy enemy_t3" id="enemy_39"></p>
        <p class="enemy" id="enemy_40"></p>
        <p class="enemy" id="enemy_41"></p>
        <p class="enemy" id="enemy_42"></p>
        <p class="enemy" id="enemy_43"></p>
        <p class="enemy enemy_t2" id="enemy_44"></p>
        <p class="enemy" id="enemy_45"></p>
        <p class="enemy" id="enemy_46"></p>
        <p class="enemy enemy_t1" id="enemy_47"></p>
        <p class="enemy" id="enemy_48"></p>
        <p class="enemy" id="enemy_49"></p>
        <p class="enemy" id="enemy_50"></p>
        <p id="finish">Congratulations! You just played a game that is written in JS and contains a total of 0 lines of code.</p>
        <p id="status"><strong>Help:</strong> <span class="inactive">move cursor to the field.</span><span class="active">Ships fly around the halls, click on bonuses!</span></p>
    </div>
</template>

<script setup>

</script>
    
<style scoped>
.board {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    background: url('../../assets/texture.webp');
    cursor: url('../../assets/images/programacion/texturas_juego/r2.png') 35 0,pointer;
    text-align: center;
    position: relative;
    overflow: hidden;
    will-change: auto;
    border: 1px solid white;
}

#scorebar {
    float: left;
    color: #fff;
}

.board #status {
    color: #fff;
    position: absolute;
    bottom: 15px;
    left: 5px;
    font-size: 14px;
}

.board #status span.active {
    display: none;
}

.board #status span.inactive {
    display: inline;
}

.board:hover #status span.active {
    display: inline;
}

.board:hover #status span.inactive {
    display: none;
}

.enemy {
    height: 94px;
    width: 94px;
    margin-right: 5px;
    margin-top: 15px;
    position: absolute;
    top: -50%;
    left: 0;
    background: url('../../assets/images/programacion/texturas_juego/e6.png');
    background-size: cover;
}

.enemy_t1 {
    height: 68px;
    width: 68px;
    background: url('../../assets/images/programacion/texturas_juego/e4.png');
    background-size: cover;
}

.enemy_t2 {
    height: 64px;
    width: 64px;
    background: url('../../assets/images/programacion/texturas_juego/e6.png');
}

.enemy_t3 {
    height: 128px;
    width: 128px;
    background: url(https://raw.githubusercontent.com/frontdevops/nojsgame/master/assets/img/e3.png);
}

.bonus {
    height: 24px;
    width: 24px;
    position: absolute;
    top: -10%;
    left: 0;
    background-image: url(https://raw.githubusercontent.com/frontdevops/nojsgame/master/assets/img/b1.png);
    -moz-appearance: button;
    -webkit-appearance: button;
    appearance: button;
}

.bonus:checked {
    background-image: url('https://raw.githubusercontent.com/frontdevops/nojsgame/master/assets/img/b2.png') !important;
    width: 24px;
    height: 24px;
    position: static;
    -webkit-animation-name: none;
    animation-name: none;
    float: left;
}

.board .enemy:hover {
    border-radius: 0;
    margin: 0;
    height: 600px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background: #2C2546 !important;
    overflow: visible;
    cursor: not-allowed;
    animation: animation1 0s 0s linear !important;
    animation: animation2 0s 0s linear !important;
    animation: animation3 0s 0s linear !important;
    animation: animation4 0s 0s linear !important;
    animation: animation5 0s 0s linear !important;
    animation: animation6 0s 0s linear !important;
    animation: animation7 0s 0s linear !important;
    animation: animation8 0s 0s linear !important;
    animation: animation9 0s 0s linear !important;
    animation: animation10 0s 0s linear !important;
}

.board .enemy:hover:before {
    background: #2C2546 !important;
    content: "¡HAS PERDIDO!";
    font-family: "Mona Sans SemiBold Wide";
    font-size: 4vw;
    top: 30%;
    left: 0;
    width: 400px;
    color: #fff;
    text-shadow: 1px 1px 1px #aaa;
    box-shadow: none;
    position: relative;
}

.board .enemy:hover:after {
    display: none;
}

.board .bonus:hover {
    cursor: crosshair;
    zoom: 2;
}

.board:hover #bonus_01 {
    animation: animation3 8s 2s linear;
}

.board:hover #bonus_02 {
    animation: animation4 12s 4s linear;
}

.board:hover #bonus_03 {
    animation: animation8 16s 6s linear;
}

.board:hover #bonus_04 {
    animation: animation2 16s 10s linear;
}

.board:hover #bonus_05 {
    animation: animation9 14s 15s linear;
}

.board:hover #bonus_06 {
    animation: animation7 12s 20s linear;
}

.board:hover #bonus_07 {
    animation: animation1 8s 26s linear;
}

.board:hover #bonus_08 {
    animation: animation3 10s 30s linear;
}

.board:hover #bonus_09 {
    animation: animation7 16s 40s linear;
}

.board:hover #bonus_10 {
    animation: animation4 16s 45s linear;
}

.board:hover #enemy_01 {
    animation: animation1 6s 0s linear;
}

.board:hover #enemy_02 {
    animation: animation2 5s 2s linear;
}

.board:hover #enemy_03 {
    animation: animation3 3s 3s linear;
}

.board:hover #enemy_04 {
    animation: animation4 6s 4s linear;
}

.board:hover #enemy_05 {
    animation: animation5 4s 5s linear;
}

.board:hover #enemy_06 {
    animation: animation2 3s 6s linear;
}

.board:hover #enemy_07 {
    animation: animation7 2s 8s linear;
}

.board:hover #enemy_08 {
    animation: animation4 5s 8s linear;
}

.board:hover #enemy_09 {
    animation: animation8 3s 9s linear;
}

.board:hover #enemy_10 {
    animation: animation6 4s 10s linear;
}

.board:hover #enemy_11 {
    animation: animation1 6s 10s linear;
}

.board:hover #enemy_12 {
    animation: animation6 4s 11s linear;
}

.board:hover #enemy_13 {
    animation: animation2 8s 12s linear;
}

.board:hover #enemy_14 {
    animation: animation9 4s 13s linear;
}

.board:hover #enemy_15 {
    animation: animation3 5s 13s linear;
}

.board:hover #enemy_16 {
    animation: animation10 7s 14s linear;
}

.board:hover #enemy_17 {
    animation: animation7 3s 15s linear;
}

.board:hover #enemy_18 {
    animation: animation3 5s 16s linear;
}

.board:hover #enemy_19 {
    animation: animation6 4s 16s linear;
}

.board:hover #enemy_20 {
    animation: animation1 3s 17s linear;
}

.board:hover #enemy_21 {
    animation: animation2 4s 17s linear;
}

.board:hover #enemy_22 {
    animation: animation1 5s 18s linear;
}

.board:hover #enemy_23 {
    animation: animation4 9s 19s linear;
}

.board:hover #enemy_24 {
    animation: animation9 2s 20s linear;
}

.board:hover #enemy_25 {
    animation: animation7 3s 20s linear;
}

.board:hover #enemy_26 {
    animation: animation1 5s 20s linear;
}

.board:hover #enemy_27 {
    animation: animation9 6s 21s linear;
}

.board:hover #enemy_28 {
    animation: animation3 3s 22s linear;
}

.board:hover #enemy_29 {
    animation: animation6 4s 23s linear;
}

.board:hover #enemy_30 {
    animation: animation4 5s 24s linear;
}

.board:hover #enemy_31 {
    animation: animation9 4s 24s linear;
}

.board:hover #enemy_32 {
    animation: animation6 2s 25s linear;
}

.board:hover #enemy_33 {
    animation: animation3 3s 26s linear;
}

.board:hover #enemy_34 {
    animation: animation4 5s 26s linear;
}

.board:hover #enemy_35 {
    animation: animation10 8s 27s linear;
}

.board:hover #enemy_36 {
    animation: animation2 3s 27s linear;
}

.board:hover #enemy_37 {
    animation: animation7 2s 28s linear;
}

.board:hover #enemy_38 {
    animation: animation4 5s 28s linear;
}

.board:hover #enemy_39 {
    animation: animation1 3s 29s linear;
}

.board:hover #enemy_40 {
    animation: animation6 4s 30s linear;
}

.board:hover #enemy_41 {
    animation: animation9 4s 24s linear;
}

.board:hover #enemy_42 {
    animation: animation6 2s 25s linear;
}

.board:hover #enemy_43 {
    animation: animation3 3s 26s linear;
}

.board:hover #enemy_44 {
    animation: animation4 5s 26s linear;
}

.board:hover #enemy_45 {
    animation: animation10 8s 27s linear;
}

.board:hover #enemy_46 {
    animation: animation2 3s 27s linear;
}

.board:hover #enemy_47 {
    animation: animation7 2s 28s linear;
}

.board:hover #enemy_48 {
    animation: animation4 5s 28s linear;
}

.board:hover #enemy_49 {
    animation: animation1 3s 29s linear;
}

.board:hover #enemy_50 {
    animation: animation6 4s 30s linear;
}

@keyframes animation1 {
    0% {
        left: 80%;
        top: -10%;
    }

    100% {
        left: 80%;
        top: 100%;
    }
}

@keyframes animation2 {
    0% {
        left: 15%;
        top: -10%;
    }

    100% {
        left: 17%;
        top: 100%;
    }
}

@keyframes animation3 {
    0% {
        left: 50%;
        top: -10%;
    }

    100% {
        left: 70%;
        top: 100%;
    }
}

@keyframes animation4 {
    0% {
        left: 100%;
        top: -10%;
    }

    100% {
        left: 80%;
        top: 100%;
    }
}

@keyframes animation5 {
    0% {
        left: 50%;
        top: -10%;
    }

    100% {
        left: 50%;
        top: 100%;
    }
}

@keyframes animation6 {
    0% {
        left: 30%;
        top: -10%;
    }

    100% {
        left: 78%;
        top: 100%;
    }
}

@keyframes animation7 {
    0% {
        left: 100%;
        top: -10%;
    }

    100% {
        left: 20%;
        top: 100%;
    }
}

@keyframes animation8 {
    0% {
        left: 0%;
        top: -10%;
    }

    100% {
        left: 290%;
        top: 100%;
    }
}

@keyframes animation9 {
    0% {
        left: 60%;
        top: -10%;
    }

    100% {
        left: 50%;
        top: 100%;
    }
}

@keyframes animation10 {
    0% {
        left: 50%;
        top: -10%;
    }

    100% {
        left: 30%;
        top: 100%;
    }
}

@keyframes animation99 {
    0% {
        left: 22%;
        top: -40%;
    }

    100% {
        left: 14%;
        top: 30%;
    }
}

@keyframes animation1 {
    0% {
        left: 70%;
        top: -10%;
    }

    100% {
        left: 80%;
        top: 100%;
    }
}

@keyframes animation2 {
    0% {
        left: 20%;
        top: -10%;
    }

    100% {
        left: 15%;
        top: 100%;
    }
}

@keyframes animation3 {
    0% {
        left: 50%;
        top: -10%;
    }

    100% {
        left: 70%;
        top: 100%;
    }
}

@keyframes animation4 {
    0% {
        left: 100%;
        top: -10%;
    }

    100% {
        left: 65%;
        top: 100%;
    }
}

@keyframes animation5 {
    0% {
        left: 50%;
        top: -10%;
    }

    100% {
        left: 50%;
        top: 100%;
    }
}

@keyframes animation6 {
    0% {
        left: 7%;
        top: -10%;
    }

    100% {
        left: 68%;
        top: 100%;
    }
}

@keyframes animation7 {
    0% {
        left: 100%;
        top: -10%;
    }

    100% {
        left: 20%;
        top: 100%;
    }
}

@keyframes animation8 {
    0% {
        left: 5%;
        top: -10%;
    }

    100% {
        left: 100%;
        top: 100%;
    }
}

@keyframes animation9 {
    0% {
        left: 70%;
        top: -10%;
    }

    100% {
        left: 50%;
        top: 100%;
    }
}

@keyframes animation10 {
    0% {
        left: 70%;
        top: -10%;
    }

    100% {
        left: 20%;
        top: 100%;
    }
}

@keyframes animation99 {
    0% {
        left: 15%;
        top: -40%;
    }

    100% {
        left: 5%;
        top: 30%;
    }
}

.board #finish {
    position: absolute;
    top: -40%;
    left: 50px;
    text-align: center;
    display: none;
    width: 200px;
    padding: 20px 50px;
    background: #fff;
    box-shadow: 4px 4px 4px #ccc;
    border-radius: 10px;
}

.board:hover #finish {
    -webkit-animation: animation99 5s 30s linear;
    animation: animation99 5s 30s linear;
    animation-fill-mode: forwards;
    display: block;
}
</style>