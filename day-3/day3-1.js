import { partNumbers } from "./partNumbers.js";

const partNumbersInputArray = partNumbers.split( '\n' );

// Is the character a number?
function isNum( char ) {
    return Number.isNaN( parseInt( char ) );
}


function getValidPartNumbers( partNumbersInputArray ) {
    
    // get complete number
    // find row number above
    // find row number below
    // find if previous and next cells in same row are symbol, if yes push number as valid and move ahead
    // in previous row find if there is a symbol in the range between ( first digit index - 1) and ( last digit index + 1)
    // in next row find if there is a symbol in the range between ( first digit index - 1 ) and ( last digit index + 1 )
    
    // Array to collect all valid part numbers.
    const validPartNumbers = [];
    
    // start scanning one row at a time.
    for ( let rowNumber = 0; rowNumber < partNumbersInputArray.length; ++rowNumber ) {
        
        const currentRow = partNumbersInputArray[ rowNumber ];

        // Find the row before and after current row.
        // const rowBefore = rowNumber ? rowNumber - 1 : 0;
        // const rowAfter  = rowNumber === partNumbersInputArray.length - 1 ? 
        //   rowNumber :
         //   rowNumber + 1;
        // const partNumberArray = [];

        let index = 0;

        while ( index < currentRow.length ){

            const num = {
                'numArray'  : [],
                'startIndex': null,
                'endIndex'  : null,
            }
        
            if ( ! isNum( currentRow[ index ] ) ){
                ++index;
                continue;
            } else {
                num[ 'startIndex' ] = index;
                num[ 'numArray' ].push( currentRow[ index ] );
                while( index < currentRow.length && isNum( currentRow[ index + 1 ] ) ){
                    ++index;
                    num[ 'numArray' ].push( currentRow[ index ] );
                }
                num[ 'endIndex' ] = index;
                const partNumber = num[ 'numArray' ].join('');
                console.log( partNumber );
            }
        }
    }
}

getValidPartNumbers( partNumbersInputArray[0] );