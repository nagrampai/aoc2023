import { gamesRecord  } from "./gamesRecord.js";

const gamesArray = gamesRecord.split("\n");
const max = {
    'red': 12,
    'green': 13,
    'blue': 14,
}

function findPossibleGameID( singleGame ){
    const singleGameArray = singleGame.split(/[:;]/g ).map( (x) => x.trim() );
    let [ gameID, ...gamePlays ] = singleGameArray;
    gameID = parseInt( gameID.split(" ")[1].trim() );
    gamePlays = gamePlays.map( (x) => 
    x.split(",") ).flat().map( (x) => x.trim() );

    console.log( gamePlays ); 

    const isPossibleGamePlay = gamePlays.every ( ( play ) => {
        const [ number, color ] = play.split(" ");
        return parseInt( number ) <= max[color];
    })
     if ( isPossibleGamePlay ) {
        return gameID 
    } else {
        return 0;
    }
}

const possibleGameIDArray = gamesArray.map( (x) => findPossibleGameID( x ) );
console.log( possibleGameIDArray );
const answer = possibleGameIDArray.reduce( ( a, b ) => a + b, 0 );

const answerElement = document.getElementById("part-1-result");
answerElement.innerHTML = `The answer to part 1 is ${answer}`;