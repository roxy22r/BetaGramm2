import { uuid } from 'vue-uuid'; 

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
       game.id = uuid.v1();
       this.games.push(game);
       this.setGamesInLocalStorage();

   }

   getGame(gameId){
        console.log(gameId);
       return this.games.find((game) => game.id === gameId);
   }

   deleteGame(gameId){
       let game =this.getGame(gameId);
       this.games.splice(game, 1);
       this.setGamesInLocalStorage();

   }
   // eslint-disable-next-line no-unused-vars
   editGame(editGame){
      let game = {
            id:editGame.id,
            title:editGame.title,
            isDone: editGame.isDone
        }
        this.deleteGame(game.id);
        this.addGame(game);
    }
 
   setGamesInLocalStorage(){
    localStorage.setItem('games',JSON.stringify(this.games)) ;

   }
}