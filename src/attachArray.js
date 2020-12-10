function attachArray(id, array) {
    let div = document.getElementById(id)
    let numberList = document.createElement("ul")
    for(const number of array) {
        let numberItem = document.createElement("li")
        let numberItemText = document.createTextNode(number)
        numberItem.appendChild(numberItemText)
        numberList.appendChild(numberItem)
    }
    if(div.innerHTML) {
        div.innerHTML = ""
    }
    div.appendChild(numberList)
}

export default attachArray