<!-- eslint-disable no-undef -->
<template>
    <div class="beta">
      <div>
        <h1 class="centerTitle">Create new Player</h1>
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
<button @click="fight">FIGHT</button>
<button @click="resetfighter">clear Fighters</button>

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
        <button v-on:click="deltePlayer($event,player.id)">Delete</button>
        <li><button >Edit</button></li>
        <li><button  v-on:click="onPlay($event,player.id)">Play</button></li>
      </div> 
    </div>
  </ul>

  </div>

</template>
  <!-- eslint-disable no-undef -->

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
      players:JSON.parse(localStorage.getItem('players') || '[]')
      ,
      playerOne: {
          id:0,
          firstname: "",
          lastname: "",
          killscore: 0,
          winnings: 0,
          loses: 0,
          associal: 0,
          magic: 0,
          iq: 0,
          strength: 0
        },
      playerTwo:{
          id:null,
          firstname: "",
          lastname: "",
          killscore: 0,
          winnings: 0,
          loses: 0,
          associal: 0,
          magic: 0,
          iq: 0,
          strength: 0},
      isPlayerOneSet:false,
      isPlayerTwoSet:false,
      countPlayer:0,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.players.push({
        id:    this.players.length,
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        killscore: this.form.killscore,
        kindnessScore: this.form.associal,
        magic: this.form.magic,
        iq: this.form.iq,
        strength: this.form.strength
      });
      let newPlayer = {
        id:    this.players.length,
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
      alert(JSON.stringify(this.players))
      localStorage.setItem('players', JSON.stringify(this.players))

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
    },
    // eslint-disable-next-line no-unused-vars
    deltePlayer(event,playerId){
      event.preventDefault;
      this.players.splice(playerId,1);
      localStorage.setItem('players', JSON.stringify(this.players));

    },
    onPlay(event,playerId){
      if(!this.isPlayerOneSet){

        console.log(playerId);      
        this.playerOne = this.players[playerId];
        console.log(this.playerOne);
        this.isPlayerOneSet = true;
    }
    else if (!this.isPlayerTwoSet& this.playerOne.id!=playerId){
        console.log(playerId);      
        this.playerTwo = this.players[playerId];
        console.log(this.playerTwo);
        this.isPlayerTwoSet = true;
      }
    else {
        console.log("Please remove one of the Player or both to fight the next Player");
      }
      
    },
    fight(event){
      event.preventDefault();
      // eslint-disable-next-line no-unused-vars
      let strikeCount =0;
      strikeCount+= this.playerOne.killscore>this.playerTwo.strength;
      strikeCount+= this.playerOne.associal>this.playerTwo.associal;
      strikeCount+= this.playerOne.magic>this.playerTwo.magic;
      strikeCount+= this.playerOne.iq>this.playerTwo.iq;
      strikeCount+= this.playerOne.strength>this.playerTwo.strength;
      console.log(strikeCount)
      if(strikeCount>2){
          console.log(this.playerOne.firstname+" "+this.playerOne.lastname+" is the winner ");
          this.playerOne.winnings+=1;
      }else{
        console.log(this.playerTwo.firstname+" "+this.playerTwo.lastname+" is the winner ");
      }
    },
    resetfighter(event){
      event.preventDefault();
      this.playerOne = null;
      this.playerTwo = null;
      this.isPlayerOneSet = false;
      this.isPlayerTwoSet = false;  
    }
  }
}
</script>
<style>
body {
  background-color: black;
}
.centerTitle{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
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
  text-align: left;

}
.cardInfo li {
  text-align: left;
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

  width: 100%;
  display: inline-block;
  text-align:  center;
}

form li{
  display: flex;
  flex-wrap:wrap;
  margin-top: 10px;
  align-items: left;
  text-align: left;
  justify-content: left
}
form li input{
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
form li label{
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
  }
}
</style>

