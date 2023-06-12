<!-- eslint-disable no-undef -->
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

export default {
  data() {
    return {
      form: {
        title: ''
      },
      games: JSON.parse(localStorage.getItem('games') || '[]'),
      count: 0
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.count = this.games.length + 1
      let newGame = {
        id: this.count,
        title: this.form.title,
        isDone: false
      }
      console.log(newGame)
      this.games.push(newGame)
      localStorage.setItem('games', JSON.stringify(newGame))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.title = ''
    },
    onDelete(event, gamesId) {
      event.preventDefault
      this.games.splice(gamesId, 1)
      localStorage.setItem('games', JSON.stringify(this.games))
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
