<template>
  <div class="gamelist"></div>
  <div class="content">
    <form @submit="onSubmit" @reset="onReset">
      <h1>Games To Buy</h1>
      <input v-model="form.title" required />
      <button class="btn btn-dark" type="submit">Add</button>
    </form>
    <ul style="color: white; list-style: none" v-for="game in games">
      <div :class="game.isDone?'OK':'NOK'">

        {{game.title}}
        <input type="checkbox" :checked="game.isDone" @click="toggleIsDone($event, game.id)" />
      </div>

      <button class="btn btn-dark" @click="onEdit($event, game.id)">Edit</button>
      <button class="btn btn-dark" @click="onDelete($event, game.id)">Delete</button>
    </ul>
  </div>
</template>
<script>
import { computed } from '@vue/reactivity'
import { isGloballyWhitelisted } from '@vue/shared'
import router from '@/router'
import GameService from '../service/gameService.js'

let service = new GameService()
export default {

  name:'GameListView',
  data() {
    return {
      form: {
        title: ''
      },
      games: service.getAllGames()
    }
  },
  editingGame: {},
  methods: {
    onSubmit(event) {
      event.preventDefault()
      let newGame = {
        id: null,
        title: this.form.title,
        isDone: false
      }
      service.addGame(newGame)
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.title = ''
    },
    onEdit(event,gamesId){
      event.preventDefault;
      console.log(gamesId);
      let game =service.getGame(gamesId);
      this.$router.push({ name: 'editGame',params:{id:game.id,title:game.title,isDone:game.isDone} })

    },
    onDelete(event, gamesId) {
      event.preventDefault;
      service.deleteGame(gamesId)
      
      this.games=service.getAllGames();
    },
    toggleIsDone(event, gamesId){
      event.preventDefault;
      let game = service.getGame(gamesId)
      game.isDone=!service.getGame(gamesId).isDone;
      service.editGame(game);
    }
  }
}
</script>
<style>
body {
  color: white;
  background-color: black;
}

.content {
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
  .gamelist {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
button {
  width: fit-content;
  border-color: none;
  background-color: black;
}

.OK{
background-color: red;
}
.NOK{
background-color: green;
}
</style>
