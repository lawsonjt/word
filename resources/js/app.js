import Game from './Game';
import "./bootstrap";

document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => Game)
})
