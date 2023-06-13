1 |
<!-- eslint-disable no-undef -->
<template>
  <div class="beta">
    <div>
      <div class="content">
        <form @submit="onSubmit" @reset="onReset">
          <li>
            <h1 class="centerTitle">Create new Player</h1>
          </li>

          <li>
            <label>Firstname</label>
            <input type="text" v-model="form.firstname" required />
          </li>
          <li>
            <label>Lastname</label>
            <input type="text" v-model="form.lastname" required />
          </li>
          <li>
            <label>Kill Score</label>
            <input type="number" v-model="form.killscore" required />
          </li>
          <li>
            <label>Kindness Score</label>
            <input type="number" v-model="form.kindnessScore" required />
          </li>
          <li>
            <label>Associal</label>
            <input type="number" v-model="form.associal" required />
          </li>
          <li>
            <label>Magic</label>
            <input type="number" v-model="form.magic" required />
          </li>
          <li>
            <label>IQ</label>
            <input type="number" v-model="form.iq" required />
          </li>
          <li>
            <label>Strength</label>
            <input type="number" v-model="form.strength" required />
          </li>
          <button type="submit" class="btn btn-dark BG_btn">Submit</button>
        </form>
        <div class="fightersContainerWithTitle">
          <h1>{{ winnerText }}</h1>

          <div class="fightersContainer">
            <div class="card" id="fighterOne">
              <li class="cardHead">
                <h4>
                  {{ playerOne.firstname + ' ' + playerOne.lastname }}
                </h4>
              </li>
              <div class="cardImg">
                <li><img alt="img" src="..\assets\face.png" /></li>
              </div>
              <div class="cardInfo">
                <li>ID: {{ playerOne.id }}</li>

                <li>IQ: {{ playerOne.iq }}</li>
                <li>Strength: {{ playerOne.strength }}</li>
                <li>Magic: {{ playerOne.magic }}</li>
                <li>Associal: {{ playerOne.associal }}</li>
                <li>Kindness: {{ playerOne.kindnessScore }}</li>
                <li>Winnings: {{ playerOne.winnings }}</li>

                <button
                  type="button"
                  class="btn btn-dark BG_btn"
                  v-on:click="deltePlayer($event, playerOne.id)"
                >
                  Delete
                </button>
                <button type="button" class="btn btn-dark BG_btn">Edit</button>
                <li>
                  <button
                    type="button"
                    class="btn btn-dark BG_btn"
                    v-on:click="onPlay($event, playerOne.id)"
                  >
                    Play
                  </button>
                </li>
              </div>
            </div>
            <div class="fightOptionBtn">
              <button class="btn btn-dark BG_btn" @click="fight">FIGHT</button>
              <button class="btn btn-dark BG_btn" @click="resetfighter">clear Fighters</button>
            </div>

            <div class="card" id="fighterTwo">
              <li class="cardHead">
                <h4>
                  {{ playerTwo.firstname + ' ' + playerTwo.lastname }}
                </h4>
              </li>
              <div class="cardImg">
                <li><img alt="img" src="..\assets\face.png" /></li>
              </div>
              <div class="cardInfo">
                <li>ID: {{ playerTwo.id }}</li>

                <li>IQ: {{ playerTwo.iq }}</li>
                <li>Strength: {{ playerTwo.strength }}</li>
                <li>Magic: {{ playerTwo.magic }}</li>
                <li>Associal: {{ playerTwo.associal }}</li>
                <li>Kindness: {{ playerTwo.kindnessScore }}</li>
                <li>Winnings: {{ playerTwo.winnings }}</li>

                <button
                  type="button"
                  class="btn btn-dark BG_btn"
                  v-on:click="deltePlayer($event, player.id)"
                >
                  Delete
                </button>
                <button type="button" class="btn btn-dark BG_btn">Edit</button>
                <li>
                  <button
                    type="button"
                    class="btn btn-dark BG_btn"
                    v-on:click="onPlay($event, player.id)"
                  >
                    Play
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div class="showAllPlayer">
          <ul style="color: white; list-style: none" v-for="player in players">
            <div class="card">
              <li class="cardHead">
                <h4>
                  {{ player.firstname + ' ' + player.lastname }}
                </h4>
              </li>
              <div class="cardImg">
                <li><img alt="img" src="..\assets\face.png" /></li>
              </div>
              <div class="cardInfo">
                <li>ID: {{ player.id }}</li>

                <li>IQ: {{ player.iq }}</li>
                <li>Strength: {{ player.strength }}</li>
                <li>Magic: {{ player.magic }}</li>
                <li>Associal: {{ player.associal }}</li>
                <li>Kindness: {{ player.kindnessScore }}</li>
                <li>Winnings: {{ player.winnings }}</li>

                <button
                  type="button"
                  class="btn btn-dark BG_btn"
                  v-on:click="deltePlayer($event, player.id)"
                >
                  Delete
                </button>
                <button type="button" class="btn btn-dark BG_btn">Edit</button>
                <li>
                  <button
                    type="button"
                    class="btn btn-dark BG_btn"
                    v-on:click="onPlay($event, player.id)"
                  >
                    Play
                  </button>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable no-undef -->

<script>
import PlayerService from '../service/playerService.js'
let service = new PlayerService()
const playerDefault = {
  id: 0,
  firstname: '',
  lastname: '',
  killscore: 0,
  winnings: 0,
  loses: 0,
  associal: 0,
  magic: 0,
  iq: 0,
  strength: 0
}
export default {
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        killscore: 0,
        kindnessScore: 0,
        associal: 0,
        magic: 0,
        iq: 0,
        strength: 0
      },

      playerOne: playerDefault,
      players: service.getAllPlayers(),

      playerTwo: playerDefault,
      isPlayerOneSet: false,
      isPlayerTwoSet: false,
      winnerText: '',
      countPlayer: JSON.parse(localStorage.getItem('countPlayer') || 1)
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      let newPlayer = {
        id: null,
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        winnings: 0,
        loses: 0,
        killscore: this.form.killscore,
        kindnessScore: this.form.associal,
        magic: this.form.magic,
        iq: this.form.iq,
        strength: this.form.strength
      }
      service.addPlayer(newPlayer)
      localStorage.setItem('countPlayer', JSON.stringify(this.countPlayer))
      this.players = service.getAllPlayers()
      this.onReset()
    },
    onReset(event) {
      event.preventDefault()
      // Reset form values
      this.form.firstname = ''
      this.form.lastname = ''
      this.form.killscore = ''
      this.form.winnings = ''
      this.form.loses = ''
      this.form.associal = ''
      this.form.magic = ''
      this.form.iq = ''
      this.form.strength = ''
    },
    deltePlayer(event, playerId) {
      event.preventDefault
      service.deletePlayer(playerId)
    },
    onPlay(event, playerId) {
      event.preventDefault
      let fightingPlayer = service.getPlayer(playerId)
      if (!this.isPlayerOneSet) {
        this.playerOne = fightingPlayer
        this.isPlayerOneSet = true
      } else if (!this.isPlayerTwoSet) {
        this.playerTwo = fightingPlayer
        this.isPlayerTwoSet = true
      } else {
        this.winnerText = 'Please remove one of the Player or both to fight the next Player'
      }
    },
    fight(event) {
      event.preventDefault()
      let strikeCount = 0
      strikeCount += this.playerOne.killscore > this.playerTwo.strength
      strikeCount += this.playerOne.associal > this.playerTwo.associal
      strikeCount += this.playerOne.magic > this.playerTwo.magic
      strikeCount += this.playerOne.iq > this.playerTwo.iq
      strikeCount += this.playerOne.strength > this.playerTwo.strength
      console.log(strikeCount)
      if (strikeCount > 2) {
        this.winnerText =
          this.playerOne.firstname + ' ' + this.playerOne.lastname + ' is the winner '
        service.winningsPlusOne(this.playerOne.id)
      } else {
        this.winnerText =
          this.playerTwo.firstname + ' ' + this.playerTwo.lastname + ' is the winner '
        service.winningsPlusOne(this.playerTwo.id)
      }
    },

    resetfighter(event) {
      event.preventDefault()
      this.playerOne = playerDefault
      this.playerTwo = playerDefault
      this.isPlayerOneSet = false
      this.isPlayerTwoSet = false
      this.winnerText = ''
      console.log(this.playerOne + '\n' + this.playerTwo)
    }
  }
}
</script>
<style>
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.fightersContainer {
  order: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  padding-bottom: 100px;
  flex-wrap: nowrap;
}
.fightOptionBtn {
  margin-top: 25%;
  height: fit-content;
  justify-content: center;
  text-align: center;
  padding-bottom: 80px;
}
body {
  background-color: black;
}

.centerTitle {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
}

.showAllPlayer {
  order: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: row;
}
.fightersContainerWithTitle {
  order: 1;
}

.cardHead {
  padding-left: 20%;
}

.card {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 550px;
  padding: 20px;

  margin-left: 30px;
  border-color: aqua;
  background-color: black;
  color: white;
  list-style: none;
}

.cardInfo {
  margin-top: 10px;
  padding-left: 20%;
  order: 2;
  text-align: left;
}

.cardInfo li {
  text-align: left;
}

.cardImg {
  width: 100%;
  padding-left: 20%;
}

.cardImg img {
  order: 1;
  background-color: antiquewhite;
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
  justify-content: center;
}

#fighterOne,
#fighterTwo {
  border-color: royalblue;
  border-width: 3px;

  background-color: rgb(82, 57, 19);
}

form {
  order: 1;
  width: 100%;
  display: inline-block;
  text-align: center;
}

form li {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  align-items: left;
  text-align: left;
  justify-content: left;
}

form li input {
  background-color: black;
  border-color: turquoise;
  color: white;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 300px;
  height: 30px;
  border-radius: 10px;
}

form li label {
  margin-right: 30px;

  width: 100px;
}

form label {
  color: white;
}

@media (min-width: 1024px) {
  .beta {
    min-height: 100vh;
    display: flex;
    align-items: center;
    order: 1;
  }
}
</style>
