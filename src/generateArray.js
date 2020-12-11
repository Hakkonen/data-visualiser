import getRandomInt from "./getRandomInt"

function generateArray(max) {
    let numberArray = []
    let arrayCounter = 0
    while(arrayCounter < max) {
        let newNumber = getRandomInt(45)
        if(!numberArray.includes(newNumber)) {
            numberArray.push(newNumber)
            arrayCounter += 1
        }
    }
    return numberArray
}

export default generateArray