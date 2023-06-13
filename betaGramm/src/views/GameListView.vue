<template>
  <div class="gamelist"></div>
  <div class="content">
    <form @submit="onSubmit" @reset="onReset">
      <h1>Games To Buy</h1>
      <input v-model="form.title" required />
      <button class="btn btn-dark" type="submit">Add</button>
    </form>
    <ul style="color: white; list-style: none" v-for="game in games">
      {{
        game.title
      }}
      <input type="checkbox" :checked="game.isDone" />

      <button class="btn btn-dark" @click="edit">Edit</button>
      <button class="btn btn-dark" @click="onDelete">Delete</button>
    </ul>
  </div>
</template>
<script>
import { computed } from '@vue/reactivity'
import { isGloballyWhitelisted } from '@vue/shared'
import GameService from '../service/gameService.js'

let service = new GameService()
export default {
  data() {
    return {
      form: {
        title: ''
      },
      games: service.getAllGames()
    }
  },
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
    onDelete(event, gamesId) {
      event.preventDefault
      service.deleteGame(gamesId)
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
</style>
