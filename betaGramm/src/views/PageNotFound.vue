<script setup>
</script>
<template>
    <div >
        <div class="cube ">
            <div></div>
   
        </div>
        <div class="cube ">
            <div></div>
   
        </div>
        <div class="cube ">
            <div></div>
   
        </div>
        <div class="cube ">
            <div></div>
   
        </div>
        <div class="cube ">
            <div></div>
   
        </div>
     
    
    </div>
    
<div class="glitch ">

    <div class=".error-container">
        
        <h1 class=".error-heading ">
            
            404
  </h1>
  <p></p> 
      Page Not Found


</div>
<div class="goHomeContainer">

    <button class="goHome"><RouterLink to="/">
        Go Home
    </RouterLink>   </button> 
</div>

</div>             

      


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
* {
    box-sizing: border-box;
}

nav {
visibility: hidden;
}

body {
    font-family: 'Press Start 2P', cursive;
    background-color: black;
    font-family: Arial, sans-serif;
    color: #fff;
}

.error-container {
    font-family: 'Press Start 2P', cursive;
    display: flex;
    justify-content: center;
    text-align: center;
}

h1 {
    font-family: 'Press Start 2P', cursive;
    font-size: 6rem;
    margin-top: 0;
}

p {
 
    font-family: 'Press Start 2P', cursive;
    font-size: 2rem;

    margin-top: 0;
}
.goHomeContainer{
    width: 100%;
}
header{
    visibility: hidden;
}
.goHome {
    font-family: 'Press Start 2P', cursive;
    display: flex;
    padding: 15px;
    background-color: #3498db;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    border-radius: 5px;
    border-radius: 50px;
    margin-top: 100px;
    justify-content: center;
    text-align: center;
    width: 500px;
    transition: background-color 0.5s ease ;
}

.goHome:hover {
    background-color: #2980b9;
    animation: spin 1s linear infinite;

}
.glitch {
  margin-top: 10%;
  order: 1;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 48px;
  animation: glitch-effect 1s infinite;
}
@keyframes glitch-effect {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-5px, 5px);
    text-shadow: 0 0 10px #00ff00,
                0 0 20px #00ff00,
                0 0 30px #00ff00,
                0 0 40px #00ff00,
                0 0 50px #00ff00;
                font-size: small;
  }
  40% {
    transform: translate(5px, -5px);
    text-shadow: 0 0 10px #ff00ff,
                0 0 20px #ff00ff,
                0 0 30px #ff00ff,
                0 0 40px #ff00ff,
                0 0 50px #ff00ff;
  }
  60% {
    transform: translate(-5px, 5px);
    text-shadow: 0 0 10px #00ffff,
                0 0 20px #00ffff,
                0 0 30px #00ffff,
                0 0 40px #00ffff,
                0 0 50px #00ffff;
  }
  80% {
    transform: translate(5px, -5px);
    text-shadow: 0 0 10px #ffff00,
                0 0 20px #ffff00,
                0 0 30px #ffff00,
                0 0 40px #ffff00,
                0 0 50px #ffff00;
  }
  100% {
    transform: translate(0);
    text-shadow: none;
  }

}


.cube {
  width: 20px;
  height: 20px;
  background-color: #fff;
  position: absolute;
  top: 30%;
  display: flex;
  justify-content: center;
  justify-items: center;
  margin: 0;
  left: 50%;

}

.cube:nth-child(1) {
    animation-name: disco;
  animation-duration: 3s; 
  animation-iteration-count: infinite;
  left: 10%;
  animation-delay: 0.3s;
}

.cube:nth-child(2) {
  animation-name: disco;
  animation-duration: 3s; 
  animation-iteration-count: infinite;
  left: 30%;
  
  animation-delay: 0.3s;
}

.cube:nth-child(3) {
    animation-name: disco;
  animation-duration: 3s; 
  animation-iteration-count: infinite;
  left: 50%;
  animation-delay: 0.5s;
}
.cube:nth-child(4) {
    animation-name: disco;
  animation-duration: 3s; 
  animation-iteration-count: infinite;
  left: 70%;
  animation-delay: 0.5s;
}
.cube:nth-child(5) {
    animation-name: disco;
  animation-duration: 3s; 
  animation-iteration-count: infinite;
  left: 90%;
  animation-delay: 0.5s;
  transform: translateX(-50%);
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
    background-color: #00FF00;
  }
  to {
    background-color:#ffff00;

    transform: rotate(360deg);
  }
}
@keyframes disco {
  0% {     transform: translateY(1000%);
 background-color: #FF0000;}
  20% {background-color: #FF00FF;  transform: translateY(1000%)}
  40% {background-color: #0000FF;  transform: translateY(1000%)}
  60% {background-color: #00FFFF;  transform: translateY(500%)}
  80% {background-color: #00FF00;  transform: translateY(1000%)}
  100% {background-color: #FFFF00;  transform: translateY(500%)}
}

</style>
