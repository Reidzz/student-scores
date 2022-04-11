const studentList = []
const studentScores = []
let i = 0

const messageContainer = document.querySelector(".message-container")
const submitBtn = document.querySelector("#submit")
const resultsBtn = document.querySelector("#results")
const form = document.querySelector(".score-form")
const studentInput = document.querySelector("#student")
const scoreInput = document.querySelector("#score")
const warning = `<p>Invalid Input</p>`
const formMessage = document.querySelector(".warning-message")

submitBtn.addEventListener("click", addDetails)
resultsBtn.addEventListener("click", displayResults)

function addDetails() {
    if (studentInput.value === "") {
        formMessage.innerHTML = warning
        setTimeout(clearMessage, 3000)
        return false
    } else if (scoreInput.value === "") {
        formMessage.innerHTML = warning
        setTimeout(clearMessage, 3000)
        return false
    }
    studentList[i] = document.getElementById("student").value
    studentScores[i] = document.getElementById("score").value
    i++ // Instead of this maybe try .push() to add values to the arrays
    form.reset()
    const totalResults = studentList.length + studentScores.length
    if (totalResults > 0) {
        resultsBtn.classList.remove("hidden")
    }
    console.log(studentList)
    console.log(studentScores)
    console.log(totalResults)
}

function displayResults() {
    messageContainer.classList.remove("hidden")
    /*let test = ""
    for (i = 0; i < studentList.length; i++) {
        test = `<li>${studentList}<br></li>`
        messageContainer.innerHTML = `<p class="test">${studentList}<br></p>`
    }*/
    /*test = `<li>${studentList}<br></li>`
    messageContainer.innerHTML = test*/
    studentList.forEach((item) => {
        let li = document.createElement("li")
        li.innerText = item
        messageContainer.appendChild(li)
    })
}

function clearMessage() {
    formMessage.innerHTML = ""
}

// Figure out how to display each array item one by one vertically in two columns
// The loop works but the logic is not correct
// Use css grid instead of flex