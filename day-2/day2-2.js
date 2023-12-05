import { gamesRecord } from "./gamesRecord.js";

const gamesArray = gamesRecord.split("\n");

function getGamePower( singleGame ) {
    const singleGameArray = singleGame.split( /[:;]/g ).map( (x) => x.trim() );
    let [ gameID, ...gamePlays ] = singleGameArray;
    gamePlays = gamePlays.map( (x) => 
    x.split(",") ).flat().map( (x) => x.trim() );

    const countCubesByColor = {
        'red': 0,
        'green': 0,
        'blue': 0,
    }

    gamePlays.forEach( ( play ) => {
        const [ number, color ] =  play.split( " " );

        if( parseInt( number ) > countCubesByColor[ color ] ){
            countCubesByColor[ color ] =  parseInt( number ); 
        }
    });

    const gamePower = Object.values( countCubesByColor ).reduce( ( a , b ) => a * b, 1 );

    return gamePower;
}

const gamesPowersArray = gamesArray.map( getGamePower );
const sumOfPowers = gamesPowersArray.reduce( ( a , b ) => a + b, 0 );

const answerDiv = document.getElementById( 'part-2-result' );
answerDiv.innerHTML = `The answer to part 2 is ${ sumOfPowers }`;
