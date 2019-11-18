function startGame() {
   prompt("Do you want to play?", "type yes or no");
   let username = prompt("Name your character:");
   startCombat(username);
  }

function startCombat(name){
    let play = prompt("Would you like to attack or quit?");
  if (play.toLowerCase() === 'attack') {
    let grant = {
      grantHP: 10,
      name: "Grant",
      numberOfWins: 0,
      getDamage() {
        randomNumber = Math.floor(Math.random() * 5) + 1;
        this.grantHP -= randomNumber
      }
    }
    let player = {
      playerHP: 40,
      name: name,
      numberOfWins: 0,
      getDamage() {
        randomNumber = Math.ceil(Math.random() * 4) + 1;
        this.playerHP -= randomNumber
      }
    }

    while(player.playerHP > 0 && player.numberOfWins < 3){ 
      player.getDamage();
      grant.getDamage();
    console.log(`${name} has ${player.playerHP} health points left.`);
    console.log(`Grant the Mighty Chicken has ${grant.grantHP} health points left.`);
    //if grant loses game, adds one loss and one win to player starts grant over at 10
      if (grant.grantHP <= 0 && player.numberOfWins < 3) {
        player.numberOfWins++;
        grant.grantHP = 10
        console.log(`Grant has been defeated and ${name} has ${player.numberOfWins} wins!`);
      } else if (grant.numberOfWins < 3 && player.playerHP <= 0) {
        grant.numberOfWins++;
        console.log(`${name} hes been defeated and Grant has ${grant.numberOfWins} wins!`);
         }
      if (player.numberOfWins === 3 && player.playerHP >= 0) {
        console.log(`${name} wins the battle!`);
       } else if (grant.numberOfWins < 3 && player.playerHP <= 0 ) {
        console.log (`Grant the Mighty Chicken wins the battle!`);
        }
     }
    } else {
    alert("Game Over!");
  }
}
  startGame();
