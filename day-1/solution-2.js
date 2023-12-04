import { calibrationStrings } from "./calibration.js";

//const calibrationArray = calibrationStrings.split("\n");
const calibrationArray = ['eightqrssm9httwogqshfxninepnfrppfzhsc'];

function getFirstAndLastNumberWithinString ( calibrationString ) {
    const numbersWordsMap = new Map(
        [
            [ 'zero', 0 ],
            [ 'one', 1 ],
            [ 'two', 2 ],
            [ 'three', 3 ],
            [ 'four', 4 ],
            [ 'five', 5 ],
            [ 'six', 6 ],
            [ 'seven', 7 ],
            [ 'eight', 8 ],
            [ 'nine', 9 ]
         ]
    );

    function startsWithNumberWord ( string ) {
        for ( const key of numKeys ) {
            if ( string.startsWith( key ) ) {
                return key;
            }
        }
        return false;
    }
    
    const numKeys = Array.from(numbersWordsMap.keys());

    const numbersInString =[];

    for ( const char of calibrationString ) {
        if ( ! Number.isNaN( parseInt( char ) ) ) {
            numbersInString.push( parseInt( char ) );
            calibrationString = calibrationString.replace( char, '' );
        } else if ( startsWithNumberWord( calibrationString ) ) {
            const key = startsWithNumberWord( calibrationString );
            numbersInString.push( numbersWordsMap.get( key ) );
            console.log( numbersInString );
            console.log( key );
            calibrationString = calibrationString.replace( key, '' );
        } else {
            console.log( char );
            calibrationString = calibrationString.replace( char, '' );
        }
        console.log( calibrationString );
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
console.log ( calibrationArrayNumbers );


const answer = calibrationArrayNumbers.reduce( ( a, b )=> a + b, 0);

const answerDiv = document.getElementById( 'result-2' );

answerDiv.innerHTML = `The answer for part 2 is ${answer}`;