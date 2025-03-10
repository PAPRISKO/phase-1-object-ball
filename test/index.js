function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return null; 
  }
  
  function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return null; 
  }
  
  function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null;
  }
  
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
    return [];
  }
  
  function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return null; 
  }
  
  function bigShoeRebounds() {
    let game = gameObject();
    let biggestShoeSize = 0;
    let playerWithBiggestShoe = null;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > biggestShoeSize) {
          biggestShoeSize = game[team].players[player].shoe;
          playerWithBiggestShoe = player;
        }
      }
    }
  
    return playerWithBiggestShoe ? gameObject().home.players[playerWithBiggestShoe]?.rebounds || gameObject().away.players[playerWithBiggestShoe]?.rebounds : null;
  }
  
  
  console.log(numPointsScored("Ben Gordon")); 
  console.log(shoeSize("Brook Lopez"));
  console.log(teamColors("Brooklyn Nets")); 
  console.log(teamNames()); 
  console.log(playerNumbers("Charlotte Hornets"));
  console.log(playerStats("Alan Anderson"));
  console.log(bigShoeRebounds());
  