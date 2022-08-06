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
    try{ // starting a try block to do something
        const response = await fetch('deleteItem', { // creates a response variable that waits on a fetch to get data from the result of the deleteItem route 
            method: 'delete', // sets the CRUD method for the route
            headers: {'Content-Type': 'application/json'}, // specifying the type of content expected, which is JSON
            body: JSON.stringify({ // declare the message content being passed, and stringify that content
              'itemFromJS': itemText // setting the content of the body to the inner text of the list item, and making it "itemFromJS"
            }) // closing the body 
          }) // closing the object
        const data = await response.json() // waiting on JSON from the response to be converted
        console.log(data) // log the data to the console
        location.reload() // reloads the page to update what is displayed

    }catch(err){ // if an error occurs, pass the error into the catch block
        console.log(err) // log the error to the console
    } // close the catch block
} // end/close the function

async function markComplete(){ // declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list item and grabs only the text within the list span.
    try{ // starting a try block to do something
        const response = await fetch('markComplete', { // creates a response variable that waits on a fetch to get data from the result of the markComplete route
            method: 'put', // setting the CRUD method to 'udpate' for the route
            headers: {'Content-Type': 'application/json'}, // specifying the type of content expected, which is JSON
            body: JSON.stringify({ // declare the message content being passed, and stringify that content
                'itemFromJS': itemText // setting the content of the body to the inner text of the list item, and making it 'itemFromJS'
            }) // closing the body
          }) // closing the object
        const data = await response.json() // waiting on JSON from the response to be converted
        console.log(data) // log the data to the console
        location.reload() // reload the page to update what is being displayed

    }catch(err){ // if an error occurs, pass the error into the catch block
        console.log(err) // log the error to the console
    } // close the catch block
} // end/close the function

async function markUnComplete(){ // declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list item and grabs only the text within the list span.
    try{ // starting a try block to do something
        const response = await fetch('markUnComplete', { // creates a response variable that waits on a fetch to get data from the result of the markUncomplete route
            method: 'put', // setting the CRUD method to 'update' for the route
            headers: {'Content-Type': 'application/json'}, // specifying the type of content expected, which is JSON
            body: JSON.stringify({ // declare the message content being passed, and stringify that content
                'itemFromJS': itemText // setting the content of the body to the inner text of the list item, and making it 'itemFromJS'
            }) // closing the body
          }) // closing the object
        const data = await response.json() // waiting on JSON from the response to be converted
        console.log(data) // log the data to the console
        location.reload() // reloads the page to update what is being displayed

    }catch(err){ // if an error occurs, pass the error into the catch block
        console.log(err) // log the error to the console
    } // close the catch block
} // end/close the function