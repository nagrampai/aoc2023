import { partNumbers } from "./partNumbers.js";

const partNumbersInputArray = partNumbers.split( '\n' );

// Is the character a number?
function isNum( char ) {
    return ! Number.isNaN( parseInt( char ) );
}

// Is the character a symbol?
function isSymbol( char ) {
    // check if character is a symbol using regex
    const symbolRegex = /[^a-zA-Z0-9]/;
    return symbolRegex.test( char );
}

// A function that takes a string and returns an array of number and its index in the string
function getNumbersAndIndex( partNumbersString, rowNumber ) {
    const numbersAndIndex = [];
    let numArray = [];
    
    for( let i = 0; i <= partNumbersString.length; ++i ){
        const numberAndIndex = {
            number: null,
            index: null,
            rowNumber: rowNumber,
        }
        // if character is a number
        if ( isNum( partNumbersString[i] ) ) {

           // if ( numberAndIndex[ 'index' ] === null ){
            //    numberAndIndex[ 'index' ] = i;
            //}

            numArray.push( partNumbersString[i] );
            
            if( ! isNum( partNumbersString[ i + 1 ] ) ) {
                numberAndIndex[ 'number' ] = parseInt( numArray.join( '' ) );
                numberAndIndex[ 'index' ] = i - ( numArray.length - 1 );
                numbersAndIndex.push( numberAndIndex );
                numArray = [];
            }
        }
    } // for loop

    return numbersAndIndex;
}

console.log( partNumbersInputArray.map( ( partNumbersString, index ) => getNumbersAndIndex( partNumbersString, index ) ) );