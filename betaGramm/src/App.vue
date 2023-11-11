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
<div class="content">
  <router-view />


</div>

</template>
<script>

</script>
<style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
body{
  background-color: var(--background-color);
}
wrapper{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

nav ul {
  padding: 0;
  display: flex;
 justify-content: center;
 text-align: center;
 align-self: center;
 
 align-items: center;
 align-content: center;
 align-self: center;
  list-style: none;
}
nav li {
  text-align: center;
  padding-top: 20px;
  padding-left:2% ;
  padding-right:2% ;
  margin-left: 2%;
  background-color: cadetblue;
  transition: background 0.3s, color 0.3s;
  transform: skew(20deg); /* SKEW */
}

nav li a {
  font-family:'Press Start 2P', cursive !important;

  display: block; /* block or inline-block is needed */
  text-decoration: none;
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

.logo{
  background-color: transparent;
}
.logo:hover{
  background-color: transparent;
}
.logo img{
  margin-right: 10px;
  background-color: transparent;
  display: block; /* block or inline-block is needed */
  text-decoration: none;
  padding: 5px 10px;
  transform: skew(-20deg); /* UNSKEW */
  color: inherit;
}

</style>
