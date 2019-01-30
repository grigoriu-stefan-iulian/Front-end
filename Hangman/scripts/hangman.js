'use strict'

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'Playing'
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {  
          
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    get statusMessage() {
        const check = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = `Nice try! The word was "${this.word.join('').toUpperCase()}"`
        } else if (check) {
            this.status = 'Great work! you guessed the word'
        } else {
            this.status = 'Playing'
        }
    }
    makeGuess(userGuess) {
        userGuess = userGuess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(userGuess)
        const isBadGuess = !this.word.includes(userGuess)

        if (this.status !== 'Playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(userGuess)
        }

        if (isBadGuess && isUnique) {
            this.remainingGuesses--
        }

        this.statusMessage
    }
}