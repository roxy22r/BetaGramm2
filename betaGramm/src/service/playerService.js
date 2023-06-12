export default class PlayerService {
     players = JSON.parse(localStorage.getItem('players') || '[]');
        sendRequest() {
      }
     getAllPlayers() {
        console.log(this.players);
        this.players=JSON.parse(localStorage.getItem('players') || '[]');
        return   this.players;
    }
    addPlayer(player){
        player.id = this.players.length+2;
        console.log(player);
        this.players.push(player);
        this.setPlayersInLocalStorage();

    }

    getPlayer(playerId){
        return this.players.find((player) => player.id === playerId);

    }

    deletePlayer(playerId){
        let player =this.getPlayer(playerId);
        this.players.splice(player, 1);
        this.setPlayersInLocalStorage();
    }
    winningsPlusOne(playerId){
        this.getPlayer(playerId).winnings+=1;

    }
    setPlayersInLocalStorage(){
        localStorage.setItem('players',JSON.stringify(this.players)) ;

    }
}