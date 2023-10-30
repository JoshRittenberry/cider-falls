import { areas } from "./areas.js"
import { guests } from "./guests.js"
import { parkServices } from "./services.js"

document.querySelector(".services").innerHTML = parkServices()

// const areasContainer = document.querySelector(".areas")
// const areasList = areas()
// areasContainer.innerHTML = areasList

document.querySelector(".areas").innerHTML = areas()

// const guestsContainer = document.querySelector(".guests")
// const guestsList = guests()
// guestsContainer.innerHTML = guestsList

document.querySelector(".guests").innerHTML = guests()

