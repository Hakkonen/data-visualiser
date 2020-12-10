import getRandomInt from "./getRandomInt"

function generateArray() {
    let numberArray = []
    let arrayCounter = 0
    while(arrayCounter < 10) {
        let newNumber = getRandomInt(20)
        if(!numberArray.includes(newNumber)) {
            numberArray.push(newNumber)
            arrayCounter += 1
        }
    }
    return numberArray
}

export default generateArray