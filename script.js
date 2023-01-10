let motSeach = prompt("player 1 please enter letters: ")
let guessedmot = '*'.repeat(motSeach.length)
console.log(`player 2 please guess the letter: ${guessedWord}`)

const tries = 10
let attempts = 0, win = false, guessedLetters = []
do {
    console.log(`[Player 2] ${(tries - attempts)} chances remaining`)
    let letter = prompt(`Player 2: Enter a letter: `)
    if(guessedLetters.includes(letter)) {
        console.log(`You have already guessed this letter`)
        continue
    }
    if(motSeach.indexOf(motSeach) !== -1) {
            guessedLetters.push(letter)
            let arr = guessedWord.split('')
            for (const i in motSeach) {
                if(motSeach[i] === letter) {
                    arr[i] = letter
                }
            }
            guessedWord = arr.join('')
            console.log(`Player 2: Guessed word: ${guessedWord}`)
    }
    if(guessedWord == motSeach) win = true
    attempts++
} while (!win && attempts < tries)
if(!win)
    console.log(`YOU LOSE`)
else
    console.log(`CONGRATS YOU WIN.`)