import './style.css';
import { leaderboard } from './modules/api';
import postScore from './modules/score';

const playerName = document.querySelector('#player-name');
const playerScore = document.querySelector('#player-score');
const score = document.querySelector('#score');
const refresh = document.querySelector('#refresh');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(playerName.value === '' || playerScore.value === '') {
        playerName.reportValidity();
        playerScore.reportValidity();
    }else {
        leaderboard(playerName.value, playerScore.value);
        postScore(score);
        playerName.value = '';
        playerScore.value = '';
    }
})

refresh.addEventListener('click', () => {
    window.location.reload();
});

postScore(score);