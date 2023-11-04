<template>
  <ul class="socials">
    <li class="line">
      <a href="mailto:torrescabero@gmail.com" class="word fancy email" id="channel-link">Email</a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/toni-torres-cabero-73649921a/" target="_blank" rel="noopener noreferrer" class="u-link-hover fancy linkedin">LinkedIn</a>
    </li>
    <li>
      <a href="https://github.com/tonotorres" target="_blank" rel="noopener noreferrer" class="u-link-hover fancy github">Github</a>
    </li>
  </ul>
</template>

<script>
export default {
  mounted() {
    
  },
};
</script>
    
<style scoped lang="scss">
    :root {
  --green: rgb(42, 252, 152);
  --blue: rgb(41, 121, 255);
}

ul li a:before {
  content: "";
  width: 0;
  height: 5px;
  background-color: #00bcd4;
  position: absolute;
  top: 120%;
  left: 0;
  transition: all 0.5s;
}

ul li a:after {
  content: "";
  width: 0;
  height: 5px;
  background-color: #f0f;
  position: absolute;
  top: 120%;
  right: 0;
  transition: all 0.5s;
}

ul li a:hover:before {
  width: 50%;
  transform: translateX(100%);
}

ul li a:hover:after {
  width: 50%;
  transform: translateX(-100%);
}
.socials {
  display: -webkit-box;
  display: flex;
  position: fixed;
  z-index: 10000;
  color: white;
}
.email:hover {
  color: #f0f;
}
.linkedin:hover {
  color: #00bcd4;
}
.github:hover {
  color: #f0f;
}
ul {
  list-style: none;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
li {
  border: 0;
  font-family: "Mona Sans SemiBold";
  font-size: 100%;
  margin: 0;
  padding-right: 10px;
  vertical-align: baseline;
}

a,
a:active,
a:focus,
a:hover {
  outline: 0 !important;
}

a,
button,
input,
select,
textarea {
  -webkit-tap-highlight-color: transparent;
}

:after,
:before {
  box-sizing: border-box;
  margin: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 769px) {
  .socials {
    bottom: 40px;
    right: 60px;
  }
}

  </style>