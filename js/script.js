// GLOBAL VARIABLES
let = id            // THE ID TEXT FIELD
let = name          // THE NAME TEXT FIELD
let = ext           // THE EXT TEXT FIELD
let = email         // THE EMAIL EMAIL FIELD
let = department    // THE DEPARTMENT SELECT FIELD
let = submit        // THE SUBMIT SUBMIT BUTTON
let = numId
let = userName
let = phoneExt
let = userEmail
let = userDept


function init() {
    
    // HELPER FUNCTION TO RETURN DOM ELEMENT
    const $ = (id) => document.getElementById(id)

    // GET THE DOM ELEMENTS
    id              = $('id')
    name            = $('name')
    ext             = $('ext')
    email           = $('email')
    department      = $('department')
    submit          = $('submit ')

  }

  function displayMessage(numId, userName, phoneExt, userEmail, userDept) {
    document.write(`ID:  ${numId} <br>
                    Name: ${userName} <br>
                    Extension: ${phoneExt} <br>
                    Email: ${userEmail} <br>
                    Department: ${userDept} <br>`)
  }


  window.addEventListener('load', init)

  empForm.addEventListener('submit', (event) => {
    event.preventDefault()
    displayMessage(id.value, name.value, ext.value, email.value, department.value)
})