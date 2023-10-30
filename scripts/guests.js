// import getGuests() from database.js
import {getAreas, getGuests, getParkServices } from "./database.js"


//export a function named guests()
//generates HTML string to display in DOM 
export const guests = () => {
    let htmlString = 
    `
    <h2 id="guest_header">Guest List</h2>
    <div id="guest_list" class="list-group" data-bs-spy="scroll">
    `

    for (let guest of getGuests) {
        htmlString +=
        `
        <a 
        class="list-group-item list-group-item-action"
        href="#list-item-${guest.id}"
        data-bs-toggle="modal" 
        data-bs-target="#guestModal"
        data-areaid="${guest.areaId}" 
        data-service-id="${guest.serviceId}"
        data-type="guest"
        data-name="${guest.firstName}">
            ${guest.firstName} ${guest.lastName}
        </a>`
    } 
    htmlString += `</div>`
    return htmlString
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const guestClicked = clickEvent.target
        if (guestClicked.dataset.type === "guest") {
            let alertMessage = `${guestClicked.dataset.name} is at `
            for(let area of getAreas) {
                if(parseInt(guestClicked.dataset.areaid) === area.id) {
                    alertMessage += `${area.name}`
                }
            } for (const service of getParkServices) {
                if(parseInt(guestClicked.dataset.serviceId) === service.id) {
                    alertMessage += ` enjoying ${service.name}`
                }
            }
            document.querySelector("#modal-body-guests").innerHTML = alertMessage
        }
    }
)






// export const guestInfo = () => {
//     let html = `<h4>${guestClicked.dataset.firstName} is at `
//         for (const area of getAreas) {
//             if(parseInt(guestClicked.dataset.areaid) === area.id) {
//                 html += `${area.name}`
//         } 
//         html += `</h4>`
//         return html
//     }
// }



// data-bs-toggle="modal" data-bs-target="#exampleModal"

