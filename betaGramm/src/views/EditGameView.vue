

<template>
  
<form onload="setData" @submit="onSubmit($event)" >
  <label>Title: </label>
  <input v-model="title" type="text" color="white" />
  <label>isDone</label>
  <input  type="checkbox" color="white"  v-model="isDone"  />
  <button class="btn btn-dark" type="submit">Update</button>

</form>
<RouterLink to="/gamelist">go Back</RouterLink>
</template>

<script>


import GameService from '../service/gameService.js'
import router from '@/router'

let service = new GameService();

export default {

name:'EditGameView',

data() {
  return {
    form: {
      title: '',
      isDone:null,
    },
    title:this.$route.params.title,
    isDone:this.$route.params.isDone
  }
},
methods: {
  onSubmit(event) {
    event.preventDefault()
    console.log(this.form.id+this.form.title);
    let newGame = {
      id: this.$route.params.id,
      title: this.title,
      isDone: this.isDone
    }
    service.editGame(newGame);
    this.$router.push({ name: 'gamelist' })

  },
  onReset(event) {
    event.preventDefault()
    // Reset our form values
    this.form.title = ''
    this.form.isDone = false,
    this.form.id = '';
  },
  setData(){
    this.id= this.$route.params.id;
    this.title= this.$route.params.title;
    this.isDone= this.$route.params.isDone;

  }

}
}

</script>
<style>


body{
  color: aliceblue;
}
.wellcome{
  padding-bottom: 100%;
}

</style>
