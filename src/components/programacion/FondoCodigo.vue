<template>
    <div id="codeBackground" ref="codeBackground">
        <div ref="list" class="list">
        <Item
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            :delta="scrollAmount"
            :speed="speed"
        ></Item>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import Item from "./ItemComponent.vue";


export default {
  components: {
    Item,
  },
  setup() {
    const todos = ref([
    {
    "id": 1,
    "title": "<template>",
  },
  {
    "id": 2,
    "title": "  <div class=\"item\" :style=\"transform\">",
  },
  {
    "id": 3,
    "title": "    <div class=\"text\">{{ title }}</div>",
  },
  {
    "id": 4,
    "title": "<div class=\"yellow\" :style=\"glitchTop\">{{ title }}</div>",
  },
  {
    "id": 5,
    "title": "<div class=\"magenta\">{{ title }}</div>",
  },
  {
    "id": 6,
    "title": "<div class=\"cyan\" :style=\"glitchBottom\">{{ title }}</div>",
  },
  {
    "id": 7,
    "title": "</div>",
  },
  {
    "id": 8,
    "title": "</template>",
  },
  {
    "id": 9,
    "title": "<script>",
  },
  {
    "id": 10,
    "title": "import { ref, computed, watch } from \"vue\";",
  },
  {
    "id": 11,
    "title": "import { gsap } from \"gsap\";",
  },
  {
    "id": 12,
    "title": "export default {",
  },
  {
    "id": 13,
    "title": "props: [\"todo\", \"delta\", \"speed\"],",
  },
  {
    "id": 14,
    "title": "setup(props) {",
  },
  {
    "id": 15,
    "title": "const translateY = ref(0);",
  },
  {
    "id": 16,
    "title": "const title = computed(() => props.todo.title);",
  },
  {
    "id": 17,
    "title": "const easing = computed(() => 0.4 - (props.todo.id * 1.2 + 10) / 100);",
  },
  {
    "id": 18,
    "title": "const transform = computed(() => ({",
  },
  {
    "id": 19,
    "title": "transform: `translateY(${translateY.value}px) skewY(${skewY.value * 2}deg) scale(1, 1)`,",
  },
  {
    "id": 20,
    "title": "filter: `blur(${Math.abs(skewY.value / 4)}px)`,",
  },
  {
    "id": 21,
    "title": "}));", // cambiar a partir de aqui
  },
  {
    "id": 22,
    "title": "<template>"
  },
  {
    "id": 23,
    "title": "  <div class=\"item\" :style=\"transform\">"
  },
  {
    "id": 24,
    "title": "    <div class=\"text\">{{ title }}</div>"
  },
  {
    "id": 25,
    "title": "<div class=\"yellow\" :style=\"glitchTop\">{{ title }}</div>"
  },
  {
    "id": 26,
    "title": "<div class=\"magenta\">{{ title }}</div>"
  },
  {
    "id": 27,
    "title": "<div class=\"cyan\" :style=\"glitchBottom\">{{ title }}</div>"
  },
  {
    "id": 28,
    "title": "</div>"
  },
  {
    "id": 29,
    "title": "</template>"
  },
  {
    "id": 30,
    "title": "<script>"
  },
  {
    "id": 31,
    "title": "import { ref, computed, watch } from \"vue\";"
  },
  {
    "id": 32,
    "title": "import { gsap } from \"gsap\";"
  },
  {
    "id": 33,
    "title": "export default {"
  },
  {
    "id": 34,
    "title": "props: [\"todo\", \"delta\", \"speed\"],"
  },
  {
    "id": 35,
    "title": "setup(props) {"
  },
  {
    "id": 36,
    "title": "const translateY = ref(0);"
  },
  {
    "id": 37,
    "title": "const title = computed(() => props.todo.title);"
  },
  {
    "id": 38,
    "title": "const easing = computed(() => 0.4 - (props.todo.id * 1.2 + 10) / 100);"
  },
  {
    "id": 39,
    "title": "const transform = computed(() => ({"
  },
  {
    "id": 40,
    "title": "transform: `translateY(${translateY.value}px) skewY(${skewY.value * 2}deg) scale(1, 1)`,"
  },
  {
    "id": 41,
    "title": "filter: `blur(${Math.abs(skewY.value / 4)}px)`,"
  },
  {
    "id": 42,
    "title": "}));"
  }
    ]);
    const scrollAmount = ref(0);
    const speed = ref(0);
    const codeBackground = ref(null);
    const list = ref(null);

    const scroll = (scroll) => {
  let amount;
  amount = scrollAmount.value + scroll;
  if (scrollAmount.value + scroll > 200) {
    amount = 200;
  } else if (
    scrollAmount.value + scroll <
    -list.value.offsetHeight + codeBackground.value.offsetHeight - 300
  ) {
    amount = -list.value.offsetHeight + codeBackground.value.offsetHeight - 300;
  } else {
    scrollAmount.value += scroll;
    gsap.to(speed, {
      duration: 0.25,
      value: Math.sign(scroll) * Math.abs(scroll / 100),
      onComplete: () => {
        gsap.to(speed, { duration: 0.25, value: 0 });
      },
    });
  }
};

onMounted(() => {
  const handleWheel = (e) => {
    const deltaY = e.deltaY || -e.detail * 1.5 * 20;
    scroll(-1 * (deltaY * 1.5));
  };

  window.addEventListener("wheel", handleWheel, false);
});


    return {
      todos,
      scrollAmount,
      speed,
      codeBackground,
      list,
      scroll,
    };
  },
};

</script>


<style scoped>

#codeBackground{
	height:100%;
	/* margin:auto; */
	width:100%;
  position: absolute;
  top:0;
  left: 0;
  overflow:hidden;
  filter: blur(3px);
  z-index: 2;
}
.list {
	margin:0 auto;
	height: 100%;
  padding-left: 2%;
  /* padding-top: 2%; */
  position: absolute;
  top: 0;
  left: 0;
}


</style>