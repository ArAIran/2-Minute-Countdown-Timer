const start = document.querySelector("#Start")
const stop = document.querySelector("#Stop")
const reset = document.querySelector("#Reset")
const minuteElement = document.querySelector("#Minute")
const secondElement = document.querySelector("#Second")

let minute = 2
let second = 0
let interval




minuteElement.textContent = String(minute).padStart(2, "0")
secondElement.textContent = String(second).padStart(2, "0")

start.addEventListener("click", function () {

    start.disabled = true

    interval = setInterval(function () {





        if (second > 0) {
            second--
            secondElement.textContent = String(second).padStart(2, "0")
        }

        else if (minute > 0) {
            minute--
            minuteElement.textContent = String(minute).padStart(2, "0")

            second = 59
            secondElement.textContent = String(second).padStart(2, "0")
        }

        else {
            clearInterval(interval)
        }

    }, 1000)

})

stop.addEventListener("click", function () {

    clearInterval(interval)
    start.disabled = false


})
reset.addEventListener("click", function () {

    clearInterval(interval)
    minute = 2
    second = 0
    minuteElement.textContent = String(minute).padStart(2, "0")
    secondElement.textContent = String(second).padStart(2, "0")
    start.disabled = false
})