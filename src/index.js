const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ': ' '
};

function decode(expr) {
    const newArr = expr.split('');
    const decodeArr = [];
    for (let i = 0; i < newArr.length; i += 10) {
        decodeArr.push(newArr.slice(i, i + 10))
    }
    const decodeSymb = decodeArr.map((x) => {
        let symbol = x.join('').match(/11|10/g)
        if (symbol === null) {
            symbol = [' '];
        }
        const key = symbol.map((y) => {
            return y == 10 ? '.' : y == ' ' ? ' ' : '-'
        }).join('')
        return MORSE_TABLE[key]
    })
    return decodeSymb.join('')
}

module.exports = {
    decode
}
