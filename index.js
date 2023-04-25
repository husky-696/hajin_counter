let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increase() {
    count += 1
    countEl.textContent = count
}

function decrease() {
    count -= 1
    countEl.textContent = count
}

function clearent() {
    saveEl.textContent = "Previous entires: "
}


function save() {
    let enteries = countEl.textContent + " - "
    saveEl.textContent += enteries
    countEl.textContent = 0
    count = 0
    console.log(count)
}





