// import getAreas and getGuests from database.js
// import areaServicesList from services.js

import { getAreas, getGuests, getDirections, getDirectionItems } from "./database.js";
import { areaServicesList } from "./services.js"


// export a function named areas() to:
    // Used to iterate through the areas and create an HTML string for each that will display all of their services
    // When a title of an area is clicked it should display how many guests are in the area
    // create an eventListener that matches the areaId with a guestId using the areas a parameter to get a total number of guests in an area

document.addEventListener(
    "click",
    (clickEvent) => {
        const area = clickEvent.target
        let guestList = []

        if (area.dataset.type === "area") {
            
            for (const guest of getGuests) {
                if (area.dataset.areaId == guest.areaId) {
                    guestList.push(guest)
                }
            }

            document.querySelector("#areas-modal-body").innerHTML = `There are ${guestList.length} guests at the ${area.dataset.areaName}`
        }
    }
)

document.addEventListener(
    "click",
    (clickEvent) => {
        const direction = clickEvent.target
        let instructions = []
        const separator = "\n*"

        if (direction.dataset.type === "directions") {
            let alertMessage = ""
            for (const directionObject of getDirections) {
                if (directionObject.areaId == direction.dataset.areaId) {
                    for (const item of getDirectionItems) {
                        if (item.directionsId == directionObject.id) {
                            instructions.push(item.text)
                        }
                    }
                }
            }
            alertMessage = `Directions to the ${direction.dataset.areaName} are below:\n\n*${instructions.join(separator)}`  
            document.querySelector("#modal-body-directions").innerHTML = alertMessage
        } 
    }
)

export const areas = () => {
    let html = 
    `
    <h2 class="areas__header">Park Areas</h2>
    <div class="area__containers">
    `

    for (const area of getAreas) {
        html += 
        `
        <div class="area__container" data-type="area" data-area-id="${area.id}" data-area-name="${area.name}">
            <div class="area__upper">
                <img src="${area.image}" alt="${area.name}" class="area__image" data-type="area" data-area-id="${area.id}" data-area-name="${area.name}"> 
                <h3 id="area__header" data-type="area" data-bs-toggle="modal" data-bs-target="#areaModal" data-area-id="${area.id}" data-area-name="${area.name}">${area.name}</h3>
                <section class="area__services">
                    ${areaServicesList(area)}
                </section>
            </div>
            <div class="map__icon area__lower">
                <img src="./images/map.png" alt="Map Icon" class="icon" data-type="directions" data-bs-toggle="modal" data-bs-target="#directionsModal" data-area-id="${area.id}" data-area-name="${area.name}">
            </div>
        </div>
        `
    }

    html += `</div>`
    return html
}