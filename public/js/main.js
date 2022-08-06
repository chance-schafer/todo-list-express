const deleteBtn = document.querySelectorAll('.fa-trash') // creates a variable and assigning it to a selectionof all elements with a class of "fa-trash"
const item = document.querySelectorAll('.item span') // creates a variable and assigning it to a selection of span tags inside of a parent that has the class of "item "
const itemCompleted = document.querySelectorAll('.item span.completed') // creates a variable and assigning it to a selection of spans with a class of "completed" inside a parent with the class of "item"

Array.from(deleteBtn).forEach((element)=>{ // creating an array from our selection of trash icons and starting a loop
    element.addEventListener('click', deleteItem) // adds an event listener to the current item that waits for a click and then calls the deleteItem function
}) // close our loop

Array.from(item).forEach((element)=>{ // creating an array from our selection of "items" and starting a loop
    element.addEventListener('click', markComplete) // adds an event listener to the current item that waits for a click and then calls the markComplete function
}) // close our loop

Array.from(itemCompleted).forEach((element)=>{ // creates an array from our selection of itemCompleted and starts a loop
    element.addEventListener('click', markUnComplete) // adds an event listener to ONLY completed items and waits for a click and then calls the markUnComplete function 
}) // close our loop

async function deleteItem(){ // declaring an asynchronous function called deleteItem (allows other code to run until function finishes)
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list item and grabs only the inner text within the list span
    try{ // starting a try block
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}