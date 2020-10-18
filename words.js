const words = [
    "reveal",
    "filter",
    "final",
    "literacy",
    "wagon",
    "costume",
    "handicap",
    "photograph",
    "star",
    "horseshoe",
    "death",
    "shed",
    "maze",
    "testify",
    "weapon",
    "jump",
    "pottery",
    "creep",
    "pride",
    "tradition"
    ]

export function randWord() {
    let i = Math.floor((Math.random() * words.length))
    
    let currentWord = words[i]
    return currentWord
}
