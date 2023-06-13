<template>
  <div class="gamelist"></div>
  <div class="content">
    <form @submit="onSubmit" @reset="onReset">

      <!-- Most of the desgin is Used from this template->"https://codepen.io/paulj05hua/pen/LYGLJYQ" and fount on this Webpage:"https://freefrontend.com/bootstrap-to-do-lists/" abut it is a bit personalised to our Website Desgins-->
      <div class="container m-5 p-2 rounded mx-auto bg-dark shadow">
        <!--  title of List -->
        <div class="row m-1 p-4">
          <div class="col">
            <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <i class="fa fa-check bg-primary text-white rounded p-2"></i>
              <u>Games To Buy</u>
            </div>
          </div>
        </div>
        <!-- Create Games To Buy section -->
        <div class="row m-1 p-3">
          <div class="col col-11 mx-auto">
            <form @submit="onSubmit" @reset="onReset">

              <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div class="col">
                  <input class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text"
                    placeholder="Add new .." v-model="form.title">
                </div>
                <div class="col-auto px-0 mx-0 mr-2">
                  <button type="submit" class="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="p-2 mx-4 border-black-25 border-bottom"></div>
        <!-- View options section -->

        <div class="row mx-1 px-5 pb-3 w-80">
          <div class="col mx-auto">
            <!-- Todo Item 1 -->
            <div v-for="game in games">

              <div class=" row px-3 align-items-center todo-item rounded" :class="game.isDone ? 'Done' : 'NDone'">
                <div class="col-auto m-1 p-0 d-flex align-items-center">
                  <h2 class="m-0 p-0">
                    <i class="fa fa-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip"
                      data-placement="bottom" title="Mark as complete"></i>
                    <i class="fa fa-check-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom"
                      title="Mark as todo"></i>
                  </h2>
                </div>
                <div class="col px-1 m-1 d-flex align-items-center">
                  <h3>{{ game.title }}</h3>

                  <input type="checkbox" :checked="game.isDone" @click="toggleIsDone($event, game.id)" />


                  <button class="btn btn-secondary" @click="onEdit($event, game.id)">Edit</button>
                  <button class="btn btn-danger" @click="onDelete($event, game.id)">Delete</button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>



<script>
import { computed } from '@vue/reactivity'
import { isGloballyWhitelisted } from '@vue/shared'
import router from '@/router'
import GameService from '../service/gameService.js'

let service = new GameService()
export default {

  name: 'GameListView',
  data() {
    return {
      form: {
        title: ''
      },
      games: service.getAllGames(),
      disableSubmitbtn: false,
    }
  },
  editingGame: {},
  methods: {
    onSubmit(event) {
      this.disableSubmitbtn = true;

      event.preventDefault()
      let newGame = {
        id: null,
        title: this.form.title,
        isDone: false
      }
      service.addGame(newGame)
      this.onReset();
      this.activate();
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.title = ''
    },
    onEdit(event, gamesId) {
      event.preventDefault;
      console.log(gamesId);
      let game = service.getGame(gamesId);
      this.$router.push({ name: 'editGame', params: { id: game.id, title: game.title, isDone: game.isDone } })

    },
    onDelete(event, gamesId) {
      event.preventDefault;
      service.deleteGame(gamesId)

      this.games = service.getAllGames();
    },
    toggleIsDone(event, gamesId) {
      event.preventDefault;
      let game = service.getGame(gamesId)
      game.isDone = !service.getGame(gamesId).isDone;
      service.editGame(game);
    },
    activate() {
      setTimeout(() => this.disableSubmitbtn = false, 2000);
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

.Done {
  background-color: green;
  text-decoration: line-through;

}

.NDone {
  background-color: none;

}
</style>

