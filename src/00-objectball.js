function gameObject(){
    let obj = {
      home: {
          teamName: "Brooklyn Nets",
          colors: ["black", "white"],
          players: {
            "Alan Anderson": {
              number: 0,
              shoe: 16,
              points: 22,
              rebounds: 12,
              assists: 12,
              steals: 3,
              blocks: 1,
              slamDunks: 1,
            },
            "Reggie Evans": {
              number: 30,
              shoe: 14,
              points: 12,
              rebounds: 12,
              assists: 12,
              steals: 12,
              blocks: 12,
              slamDunks: 7,
            },
            "Brook Lopez": {
              number: 11,
              shoe: 17,
              points: 17,
              rebounds: 19,
              assists: 10,
              steals: 3,
              blocks: 1,
              slamDunks: 15,
            },
            "Mason Plumlee": {
              number: 1,
              shoe: 19,
              points: 26,
              rebounds: 12,
              assists: 6,
              steals: 3,
              blocks: 8,
              slamDunks: 5,
            },
            "Jason Terry": {
              number: 31,
              shoe: 15,
              points: 19,
              rebounds: 2,
              assists: 2,
              steals: 4,
              blocks: 11,
              slamDunks: 1,
            },
          },
        },

        away: {
          teamName: "Charlotte Hornets",
          colors: ["Turquoise", "Purple"],
          players: {
            "Jeff Adrien": {
              number: 4,
              shoe: 18,
              points: 10,
              rebounds: 1,
              assists: 1,
              steals: 2,
              blocks: 7,
              slamDunks: 2,
            },
            "Bismak Biyombo": {
              number: 0,
              shoe: 16,
              points: 12,
              rebounds: 4,
              assists: 7,
              steals: 7,
              blocks: 15,
              slamDunks: 10,
            },
            "DeSagna Diop": {
              number: 2,
              shoe: 21,
              points: 24,
              rebounds: 12,
              assists: 12,
              steals: 4,
              blocks: 5,
              slamDunks: 5,
            },
            "Ben Gordon": {
              number: 8,
              shoe: 15,
              points: 33,
              rebounds: 3,
              assists: 2,
              steals: 1,
              blocks: 1,
              slamDunks: 0,
            },
            "Brendan Haywood": {
              number: 33,
              shoe: 15,
              points: 6,
              rebounds: 12,
              assists: 12,
              steals: 22,
              blocks: 5,
              slamDunks: 12,
            },
          },
        },
      };
    //   console.log(obj)
      return obj
    }

//    console.log(gameObject())


//  Function used to get points of a certain player.
function numPointsScored(name){
    let object = gameObject() // Reference to our object.
    if (object.home.players[name]){
        return object.home.players[name].points
    }else if (object.away.players[name]){
        return object.away.players[name].points
    }else {
        return 'No player with that name found!'
    }
}

console.log(shoeSize("Ben Gordon"))
// Shoe size 
function shoeSize(name){
    let object = gameObject() // Reference to our object.
    if (object.home.players[name]){
        return object.home.players[name].shoe
    }else if (object.away.players[name]){
        return object.away.players[name].shoe
    }else {
        return 'No player with that name found!'
    }
}

function teamColors(nameTeam){
    let object = gameObject()
    if (object.home.teamName === nameTeam){
        return object.home.colors
    }else if (object.away.teamName === nameTeam){  
        return object.away.colors
    }else {
      return `Team not found!`
    }
}

console.log(playerNumbers("Brooklyn Nets"))

function playerNumbers(nameTeam){
  let object = gameObject()
  const playerNumbers = []
  if (object.home.teamName === nameTeam){
    for (const player in object.home.players){
      const jersey = object.home.players[player].number
      playerNumbers.push(jersey)
    }
  }else if (object.away.teamName === nameTeam){
    for (const player in object.away.players){
      const jersey = object.away.players[player].number
      playerNumbers.push(jersey)
      }
  }
    return playerNumbers
}

// console.log(playerStats("Reggie Evans"))
// function playerStats(playerName){
//   let object = gameObject()
//   for (const player in object.home.players[playerName]){
//     return `${player}`
//   }
// }

function playerStats(playerName){
  let object = gameObject()
  for (const player in  object.home.players){
    if (player === playerName){
      return  object.home.players[playerName]
    }else {
        return  object.away.players[playerName]
    }
  }
}

console.log(playerStats("Brendan Haywood"))


function bigShoeRebounds(){
  let object = gameObject()
  // this eeps track of the largest size
  let shoeSize = 0
  // variable to store info of player with largest shoe
  let playerWithLargestShoeSize = {}
  // A variable to store the player name
  let playerName = ''

  for (let player in object.home.players){
    if (object.home.players[player].shoe > shoeSize){
      shoeSize = object.home.players[player].shoe
      playerWithLargestShoeSize = object.home.players[player]
      playerName = player
    }
  }
  for (let player in object.away.players){
    if (object.away.players[player].shoe > shoeSize){
      shoeSize = object.away.players[player].shoe
      playerWithLargestShoeSize = object.away.players[player]
      playerName = player
    }
  }
  return {
    [playerName] : playerWithLargestShoeSize
  }
}

// console.log(bigShoeRebounds())