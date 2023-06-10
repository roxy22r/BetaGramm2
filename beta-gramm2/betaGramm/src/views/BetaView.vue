<template>

<div class="beta">
  <button>

<RouterLink to="/createGamer">
    CREATE
</RouterLink>
</button>
    <h1>This is an Beta page</h1>
  </div>
</template>

<style>
body{
  background-color: black;
}
@media (min-width: 1024px) {
  .beta {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


</style>
