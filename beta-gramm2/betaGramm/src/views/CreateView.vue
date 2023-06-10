<template>
    <div class="beta">
      <div>

        <form @submit="onSubmit" @reset="onReset">
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
    <button type="submit">Submit</button>
  </form>
</div>
</div>
<div class="showAllPlayer">

  <ul style="color: white; list-style: none;" v-for="player in players ">
    <div class="card">
      <li class="cardHead"><h4>
        {{ player.firstname +' '+ player.lastname}}
        
      </h4>
    </li>
      <div class="cardImg">
        <li ><img alt="img" src="..\assets\face.png"/></li>
      </div>
     <div class="cardInfo">

      
        <li>IQ: {{player.iq}}</li>
        <li>Strength: {{player.strength}}</li>
        <li>Magic: {{player.magic}}</li>
        <li>Associal: {{player.associal}}</li> 
        <li>Kindness: {{player.kindnessScore}}</li>
        <li>Winnings: {{player.winnings}}</li>
        <li><button>Edit</button></li>
        <li><button>Play</button></li>
      </div> 
    </div>
  </ul>

  </div>
  // eslint-disable-next-line vue/require-v-for-key

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
      this.form.killscore= ''
      this.form.winnings= '' 
      this.form.loses='' 
      this.form.associal= '' 
      this.form.magic =''
      this.form.iq = ''
      this.form.strength = ''
      // Trick to reset/clear native browser form validation state
    }
  }
}
</script>
<style>
body {
  background-color: black;
}

@media (min-width: 1024px) {

.showAllPlayer {
  width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-flow: wrap;
    gap: 20px;
    flex-direction: row;
    
  }
}
.cardHead{
  padding-left: 20%;

}
.card{
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 550px;
  padding:20px;
  
  margin-left: 30px;
  border-color: aqua;
  background-color: black;
  color: white;
  list-style: none;
}
.cardInfo{
  margin-top: 10px;
  padding-left: 20%;
  order: 2;

}
.cardImg{

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

button{
  margin-top: 20px;
  width: 100px;
  font-weight: bold;
  border-color: greenyellow;
  background-color: black;
  color: white;
}
template {}
form {
  display: inline-block;
  text-align:  center;
}

form li{
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: center}


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

