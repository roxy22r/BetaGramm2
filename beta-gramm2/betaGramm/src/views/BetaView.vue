<template>

<div class="beta">
</div>
<div class="content">

    <RouterLink class="btn btn-dark" to="/createGamer">
      CREATE
    </RouterLink>
  <h1>This is an Beta page</h1>

</div>


</template>

<style>
body{

background-color: black;
}

.content{
  order: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-self: center;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
}

@media (min-width: 1024px) {
.beta {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
}
button{
  width: fit-content;
  border-color: none;
  background-color: black;
}
</style>
