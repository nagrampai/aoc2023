import { calibrationString } from "./calibration.js";

// convert callibration string to array of strings
const calibrationArray = calibrationString.split("\n");

function getFirstAndLastNumberWithinString ( string ) {
    const numbersInString = [];

    for ( const char of string ) {
        if ( !Number.isNaN( parseInt( char ) ) ) {
            numbersInString.push( parseInt( char ) );
        }
    }

    if ( numbersInString.length === 0 ) {
        return 0;
    } else if ( numbersInString.length === 1 ) {
        return numbersInString[0] * 11;
    } else {
        return ( numbersInString[0] * 10 ) + numbersInString[ numbersInString.length - 1 ];
    }
}

const calibrationArrayNumbers = calibrationArray.map ( getFirstAndLastNumberWithinString );

const answer =  calibrationArrayNumbers.reduce ( ( a, b ) => a + b, 0 );

const answerElement = document.getElementById ( "result" );
answerElement.innerHTML = `The answer is: ${ answer }`;