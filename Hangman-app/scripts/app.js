// HTTP
// Request - what do we want to do
// Response - what was actually done

let puzzle = $('#puzzle')
$guesses = $('#guesses')
$status = $('#status')
let wordOne
console.log(wordOne)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    wordOne.makeGuess(guess)
    render()
})

const render = () => {
    puzzle.html('')
    $guesses.html(wordOne.remainingGuesses)
    $status.html(wordOne.status)
    // puzzle.html(wordOne.puzzle)

    wordOne.puzzle.split('').forEach((element) => {
        const span = $('<span></span>')
        span.html(element)
        puzzle.append(span)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    wordOne = new Hangman(puzzle, 5)
    render()
}

startGame()


$('#reset-button').on('click', startGame)



/*
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
})
*/

/*
getCurrentCountry().then((country) => {
console.log(country.name)
}).catch((err) => {
    console.log(err)
})
*/