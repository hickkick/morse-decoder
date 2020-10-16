const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let word  = '',
          arr = expr.match(/.{1,10}/g);

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === '**********') {
            word += " ";
            i++
        }
        let subArr = arr[i].match(/.{1,2}/g),
            letter = '';
            
        for(let k = 0; k < subArr.length; k++) {
            switch(subArr[k]) {
                case '10':
                    letter += '.';
                    break;
                case '11':
                    letter += '-';
                    break;  
            }
        }
        word += MORSE_TABLE[letter];
    } 
    return word; 
}

module.exports = {
    decode
}