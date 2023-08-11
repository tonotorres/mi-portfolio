<template>
    <ul class="socials">
        <li>
            <a href="mailto:torrescabero@gmail.com" class="u-link-hover">Email</a>
        </li> 
        <li>
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-roche/" target="_blank" rel="noopener noreferrer" class="u-link-hover">LinkedIn</a>
        </li> 
        <li>
            <a href="https://github.com/clementroche" target="_blank" rel="noopener noreferrer" class="u-link-hover">Github</a>
        </li>
    </ul>
  </template>
  
  <script>

  </script>
    
    <style scoped>
@font-face {
  font-family: "Mona Sans SemiBold";
  src: url("../assets/fonts/Mona-Sans-SemiBold.ttf") format("truetype");
}
 .socials {
    display: -webkit-box;
    display: flex;
    position: fixed;
    z-index: 20;
    color: white
}
ul {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
ol, ul {
    list-style: none;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.u-link-hover {
    position: relative;
}
a {
    color: inherit;
    text-decoration: none;
}
ul, li{
    border: 0;
    font-family: "Mona Sans SemiBold";
    font-size: 100%;
    margin: 0;
    padding-right: 10px;
    vertical-align: baseline;
}
a, a:active, a:focus, a:hover {
    outline: 0!important;
}
a, button, input, select, textarea {
    -webkit-tap-highlight-color: transparent;
}
:after, :before {
    box-sizing: border-box;
    margin: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
@media (min-width: 769px){
    .socials {
        bottom: 60px;
        right: 60px;
    }
}

  </style>