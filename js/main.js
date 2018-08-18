window.addEventListener('load', init);

/* LEVELS */
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

const currentLevel = levels.easy;

/* GLOBAL VARIABLES */
let time = currentLevel;
let score = 0;
let isPlaying;

/* DOM ELEMENTS */
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
'hat',
'river',
'lucky',
'statue',
'generate',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'javascript',
'nutrition',
'revolver',
'echo',
'siblings',
'investigate',
'horrendous',
'symptom',
'laughter',
'magic',
'master',
'space',
'definition'
];

/* INITIALIZE GAME */
function init() {
    /* SET LEVEL */
    seconds.innerHTML = currentLevel;
    /* LOAD WORD */
    showWord(words);
    /* WORD MATCH */
    wordInput.addEventListener('input', startMatch);
    /* CALL COUNTDOWN */
    setInterval(countDown, 1000);
    /* CHECK GAME STATUS */
    setInterval(checkGameStatus, 50);
}

function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

/* PICK AND SHOW RANDOM WORD */
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}  

function countDown() {
    /* MAKE SURE NOT TIMEOUT */
    if(time > 0) {
        time--;
    } else if(time == 0) {
        isPlaying = false;
    }

    /* SHOW TIME */
    timeDisplay.innerHTML = time;
}

function checkGameStatus() {
    if(!isPlaying && time == 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1
    }
}
