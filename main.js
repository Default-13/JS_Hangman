import { randWord } from './words.js'
const hangmanImage = document.getElementById('image-src')
const score = document.querySelector('#score')
const word = randWord()
const wordSpaces = document.querySelector('.current-word')
const submitLetter = document.getElementById('guessed-letter')
const letter = document.getElementById('input')
const table = document.getElementById('current-word')

let wordArry = word.split('')
    
const hangmanGif = [{
        index: 0,
        src: './img/hang0.gif'
    },
    {
        index: 1,
        src: './img/hang1.gif'
    },
    {
        index: 2,
        src: './img/hang2.gif'
    },
    {
        index: 3,
        src: './img/hang3.gif'
    },
    {
        index: 4,
        src: './img/hang4.gif'
    },
    {
        index: 5,
        src: './img/hang5.gif'
    }
]

function init() {
    currentWord()
    console.log(word)
}

function currentWord() {

    var newRow = tabel.insertRow()
    var newCell = newRow.insertCell(0)
    wordArry.forEach((c) => {
        newCell.appendChild(c)
    });

    wordSpaces.textContent = wordArry.join(' ')
}

function changeImage() {
    hangmanImage.src=hangmanGif[i].src
}

function scoreChange() {
    score.innerHTML = 0
}

// Submit button action
submitLetter.addEventListener('submit', (e) => {
    e.preventDefault()

    guessedLetter(letter.value);
})

function guessedLetter(str) {

    if (wordArry.includes(str)) {

        console.log("Letter Match");
        let i = wordArry.indexOf(str)
        console.log(i);

    }
    else {
        console.log("Wrong!");
    }

}



init()