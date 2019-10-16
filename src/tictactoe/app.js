

// find location of click and add x or o
//determine player1 or player2
//keep score
//find winner via 3 in a row


console.log('hey app.js here')
let previousGamePiece = null

function addGamePiece(selectedElement) {
    //create new element
 let newElement =  document.createElement('h1')
 // add text to element 
 newElement.innerHTML = 'x'
 selectedElement.style.backgroundColor = "pink"
 // add element with text to selectedElement on page
 selectedElement.appendChild(newElement)
console.log('show clicked div', selectedElement)
}
if (player1 = 'x') {
    newElement.innerHTML = '0'

} else {
    newElement.innerHTML = 'x'

}