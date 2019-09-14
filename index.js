// Code your solutions in this file
function writeCards(namesArr,event) {
    let cards = []
    for (let i = 0; i < namesArr.length; i++) {
        cards.push(`Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`)
            }
        return cards
        }

function countdown(number) {
        while (number > 0) {
            console.log(number);
            number -= 1;
        }
    console.log(number);
}