const studentList = []
const studentScores = []
let i = 0
const messageContainer = document.querySelector(".message-container")
const submitBtn = document.querySelector("#submit")
const resultsBtn = document.querySelector("#results")
const form = document.querySelector(".score-form")

submitBtn.addEventListener("click", addDetails)
resultsBtn.addEventListener("click", displayResults)

function addDetails() {
    studentList[i] = document.getElementById("student").value
    studentScores[i] = document.getElementById("score").value
    i++ // Instead of this maybe try .push() to add values to the arrays
    form.reset()
    /*const totalResults = studentList.length + studentScores.length
    if (totalResults >= 14) {
        submitBtn.removeEventListener("click", addDetails)
        messageContainer.innerHTML = `${studentList}${studentScores}`
    }*/
    console.log(studentList)
    console.log(studentScores)
    console.log(totalResults)
}

function displayResults() {
    messageContainer.innerHTML = `${studentList}${studentScores}`
}

if (totalResults > 0) {
    resultsBtn.classList.remove("hidden")
    /*messageContainer.innerHTML = `${studentList}${studentScores}`*/
}

/*function displayScore() {
    const nameInput = document.getElementById("student").value
    const scoreInput = document.getElementById("score").value

    for (i = 0; i < 7; i ++) {
        studentList[i] = nameInput
        console.log(nameInput[i])
        console.log(studentList)
    }
}*/