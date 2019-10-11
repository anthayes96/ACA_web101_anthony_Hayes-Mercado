console.log('$', $)



function additem () {
    //get input
 let input = $('input')
 console.log('input', input)
 //get value of input
 let inputVal = input.val()
 console.log('inputVal', inputVal)
 // add valur to a list of items
}
let list = $('.todo-list')
// create element to append to list
let listItem = $("<Li>Hi</Li>")
list.append(listItem)