import Game from './Game'

document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => Game)
})
