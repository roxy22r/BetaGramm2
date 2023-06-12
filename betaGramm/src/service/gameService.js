export default class GameService {
    games = JSON.parse(localStorage.getItem('games') || '[]');
       sendRequest() {
     }
    getAllGames() {
       console.log(this.games);
       this.games=JSON.parse(localStorage.getItem('games') || '[]');
       return   this.games;
   }
   addGame(game){
    console.log(game);
       game.id = this.games.length+2;
       this.games.push(game);
       this.setGamesInLocalStorage();

   }

   getGame(gameId){
       return this.games.find((game) => game.id === gameId);
   }

   deleteGame(gameId){
       let game =this.getGame(gameId);
       this.games.splice(game, 1);
       this.setGamesInLocalStorage();

   }
 
   setGamesInLocalStorage(){
    localStorage.setItem('games',JSON.stringify(this.games)) ;

   }
}