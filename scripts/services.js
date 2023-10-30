// import database: parkServices, areas, areaServices
// export a function named areaServicesList that matches services with a area using the areaId as a parameter
import { getAreaServices, getParkServices, getAreas } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const service = clickEvent.target
        let areaList = []
        let areaId = []
        let alertMessage = ""
        // This variable is to be used to help separate parks in the window alert
        const separator = "\n"

        // Uses the data-id in a LI element to find the matching areaId's stored in the areaServices array. When it finds a match, it pushes the areaId to the areaId array in this function to be used in the next for...of loop.
        if (service.dataset.type === "service") {
            for (const areaService of getAreaServices) {
                if (areaService.parkServicesId == service.dataset.id) {
                    areaId.push(areaService.areaId)
                }

            }

            // Now that the areaId array is completed with an array of areaIds, this for...of loop goes through and finds a matching area, using the getAreas function imported from database.js, and pushes the the name property of all matching areas to the areaList array to be displayed in the window alert
            for (const area of getAreas) {
                for (const id of areaId) {
                    if (id == area.id) {
                        areaList.push(area.name)
                    }
                }
            }

            // I created an if/else if statement to help the wording be correct for the ammount of areas a service is available in
            if (areaId.length == 1) {
                alertMessage = `The ${service.dataset.serviceName} service is available at the ${areaList} area`
            } else if ( areaId.length > 1) {
                alertMessage = `The ${service.dataset.serviceName} service is available at the following areas:\n\n${areaList.join(separator)}`
            }
        } document.querySelector("#modal-body-services").innerHTML = alertMessage
    }
)

export const parkServices = () => {
    let htmlString = 
    `
    <h2>Park Services</h2>
    <ul class="park__services">
    `
    for (const service of getParkServices) {
        htmlString +=
        `
        <li data-type="service" data-bs-toggle="modal" data-bs-target="#servicesModal" data-id="${service.id}" data-service-name="${service.name}">${service.name}</li>
        `
    }

    return htmlString
}

export const areaServicesList = (area) => {
    let foundAreaService = null
    let htmlString = `<ul class="area__services__list">`

    for (const areaService of getAreaServices) {
        if (area.id === areaService.areaId) { 
            foundAreaService = areaService
            
            for(const parkService of getParkServices) {
                if (foundAreaService.parkServicesId === parkService.id) {
                    htmlString += `<li class="areaServiceId_${parkService.id}">${parkService.name}</li>`
                }
            }

        }
    }
    htmlString += `</ul>`

    return htmlString
}