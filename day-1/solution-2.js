import { calibrationStrings } from "./calibration.js";

const calibrationArray =calibrationStrings.split("\n");


function getFirstAndLastNumberWithinString ( argString ) {
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
    const numberKeys = Array.from( numbersWordsMap.keys() );

    const numbersInString = []; 

    function startsWithAnyNumberKey ( stringToCheck ) {
        for ( const numberKey of numberKeys ) {
            if ( stringToCheck.startsWith( numberKey ) ) {
                return numberKey;
            }
        }
        return null;
    }

    function getNumberOrCropString ( stringToCrop ){
        if ( stringToCrop.length === 0 ) {
            return;
        }

        if ( ! Number.isNaN( parseInt ( stringToCrop[0] ) ) ) { 
            numbersInString.push( parseInt ( stringToCrop[0] ) );
            getNumberOrCropString( stringToCrop.slice(1) );
        } else if ( startsWithAnyNumberKey( stringToCrop ) ){
            numbersInString.push( numbersWordsMap.get( startsWithAnyNumberKey( stringToCrop ) ) );
            getNumberOrCropString( stringToCrop.slice(1) );
        } else {
            getNumberOrCropString( stringToCrop.slice(1) );
        }
    }

    getNumberOrCropString( argString );
    
    let finalNumber = 0;
    if ( numbersInString.length === 0 ) {
        //return 0;
        finalNumber = 0;
    } else if ( numbersInString.length === 1 ) {
        finalNumber =  numbersInString[0] * 11;
    } else {
        finalNumber =  ( numbersInString[0] * 10 ) + numbersInString[ numbersInString.length - 1 ];
    }
    console.log( argString, numbersInString, finalNumber );

    return finalNumber;
}

const calibrationArrayNumbers = calibrationArray.map( getFirstAndLastNumberWithinString );
console.log( calibrationArrayNumbers );

const answer = calibrationArrayNumbers.reduce( ( a, b ) => a + b, 0 ); 
console.log(answer);

const answerElement = document.getElementById( "result-2" );
if ( answerElement ) {
    answerElement.innerHTML = `The answer for part 2 is: ${answer}`;
}