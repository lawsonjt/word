import Tile from './Tile'
import Words from './Words'

export default {
    guessesAllowed: 3,
    wordLength: 3, // todo
    theWord: 'cat',
    currentRowIndex: 0,
    state: 'active', // pending, active, complete
    errors: false,
    message: '',

    get currentRow() {
        return this.board[this.currentRowIndex]
    },

    get currentGuess() {
        return this.currentRow.map(tile => tile.letter).join('')
    },

    get remainingGuesses() {
        return this.guessesAllowed - this.currentRowIndex - 1
    },

    init() {
        this.board = Array.from({length: this.guessesAllowed}, () => {
            return Array.from({length: this.theWord.length}, () => new Tile)
        })
    },

    onKeyPress(key) {
        this.message = ''
        this.errors = false

        if (/^[A-z]$/.test(key)) {
            this.fillTile(key)
        } else if (key === 'Backspace') {
            this.emptyTile()
        } else if (key === 'Enter') {
            this.submitGuess()
        }
    },

    fillTile(key) {
        for (let tile of this.currentRow) {
            if (!tile.letter) {
                tile.fill(key)
                break
            }

        }
    },

    emptyTile() {
        for (let tile of [...this.currentRow].reverse()) {
            if (tile.letter) {
                tile.empty()
                break
            }

        }
    },

    submitGuess() {
        if (this.currentGuess.length < this.theWord.length) {
            return
        }

        if (! Words.includes(this.currentGuess.toUpperCase())) {
            this.errors = true
            return this.message = 'Invalid word...'
        }

        for (let tile of this.currentRow) {
            tile.updateStatus(this.currentGuess, this.theWord)
        }

        if (this.currentGuess === this.theWord) {
            this.state = 'complete'

            return this.message = 'You Win!'
        }
        if (this.remainingGuesses === 0) {
            this.state = 'complete'

            return this.message = 'Game Over. You Lose.'
        }

        this.currentRowIndex++

        return this.message = 'Incorrect.'
    }
}