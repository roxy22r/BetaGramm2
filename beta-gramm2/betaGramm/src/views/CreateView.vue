<template>
  <form @submit="onSubmit" @reset="onReset">
    <label>Firstname</label>
    <input type="text" v-model="form.firstname" required />
    <label>Lastname</label>
    <input type="text" v-model="form.lastname" required />
    <label>Kill Score</label>
    <input type="number" v-model="form.killscore" required />
    <label>Kindness Score</label>
    <input type="number" v-model="form.kindnessScore" required />
    <label>Associal</label>
    <input type="number" v-model="form.associal" required />
    <label>Magic</label>
    <input type="number" v-model="form.magic" required />
    <label>IQ</label>
    <input type="number" v-model="form.iq" required />
    <label>Strength</label>
    <input type="number" v-model="form.strength" required />
    <button type="submit">Submit</button>
  </form>
  <div class="beta">
    <h1>This is an CREATE page</h1>
  </div>
  // eslint-disable-next-line vue/require-v-for-key
  <li style="color: white;" v-for="player in players ">
    {{ player.firstname }}
  </li>
</template>
<script>
export default {
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        killscore: 0,
        kindnessScore: 0,
        associal: 0,
        magic: 0,
        iq: 0,
        strength: 0,

      },
      players: [
        {
          firstname: "Gunter",
          lastname: "Melloe",
          killscore: 0,
          winnings: 1,
          loses: 30,
          associal: 20,
          magic: 1,
          iq: 150,
          strength: 20
        }
      ]
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.players.push({
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        killscore: this.form.killscore,
        kindnessScore: this.form.associal,
        magic: this.form.magic,
        iq: this.form.iq,
        strength: this.form.strength
      });
      alert(JSON.stringify(this.players))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.firstname = ''
      this.form.lastname = ''
      // Trick to reset/clear native browser form validation state
    }
  }
}
</script>
<style>
body {
  background-color: black;
}

template {}

#forme {
  display: flexbox;
}


form label {
  color: white;
}

@media (min-width: 1024px) {
  .beta {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

