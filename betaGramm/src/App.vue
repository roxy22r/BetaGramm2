<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      

        <nav>
        <ul>
          <div>

            <li class="logo">
              
              <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            </li>
          </div>

          <li>
            
            <RouterLink class="routLink"  to="/">Home</RouterLink>
          </li>
          <li>
            
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            
            <RouterLink to="/betaGramm">BetaGramm</RouterLink>
          </li>
          <li>
            
            <RouterLink to="/gamelist">Gamelist</RouterLink>
          </li>
        </ul>

      </nav>
    </div>
  <div>
    
  </div>
</header>
<RouterView />

</template>

<style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
body{
  background-color: var(--background-color);

}
header{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
nav{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  order: 1;
  
}
nav ul {
  
  margin-top: 20px;
  padding: 0;
  display: flex;

  list-style: none;
}
nav li {

  padding-top: 10%;
  padding-left:5% ;
  padding-right:5% ;

  margin-left: 20px;
  background-color: cadetblue;
  transition: background 0.3s, color 0.3s;
  transform: skew(20deg); /* SKEW */
}

nav li a {
  font-family:'Press Start 2P', cursive !important;

  display: block; /* block or inline-block is needed */
  text-decoration: none;
  font: 30px/1 sans-serif;
  transform: skew(-20deg); /* UNSKEW */
  color: inherit;
}

nav li.active,
nav li:hover {
  background:  var(--background-hover-green);
  color:#374B43 ;
  animation: navSizeOnHover;
  animation-duration: 0.2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;


}
@keyframes navSizeOnHover {
  0% {padding-left: 20px ; padding-right: 20px;}
  25% {padding-left: 40px ; padding-right: 40px;}
  50% {padding-left: 60px ; padding-right: 60px;}
  75% {padding-left: 80px ; padding-right: 80px;}
  100% {padding-left: 100px ;padding-right: 100px;}

}
.logo{
  background-color: transparent;
}
.logo:hover{
  background-color: transparent;
}
.logo img{
  margin-right: 100px;
  background-color: transparent;
  display: block; /* block or inline-block is needed */
  text-decoration: none;
  padding: 5px 10px;
  font: 30px/1 sans-serif;
  transform: skew(-20deg); /* UNSKEW */
  color: inherit;
}

</style>
