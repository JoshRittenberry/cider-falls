const database = {
    guests: [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            areaId: 1, // Chamfort River
            serviceId: 1, // Rafting
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Smith",
            areaId: 2, // Lost Wolf Hiking Trail
            serviceId: 5, // Hiking
        },
        {
            id: 3,
            firstName: "Michael",
            lastName: "Johnson",
            areaId: 3, // Lodge
            serviceId: 3, // Fishing
        },
        {
            id: 4,
            firstName: "Emily",
            lastName: "Williams",
            areaId: 4, // Gander River
            serviceId: 11, // Food
        },
        {
            id: 5,
            firstName: "David",
            lastName: "Brown",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 6,
            firstName: "Sarah",
            lastName: "Jones",
            areaId: 6, // Pine Bluffs Trails
            serviceId: 11, // Food
        },
        {
            id: 7,
            firstName: "Daniel",
            lastName: "Martinez",
            areaId: 1, // Chamfort River
            serviceId: 1, // Rafting
        },
        {
            id: 8,
            firstName: "Olivia",
            lastName: "Garcia",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 9,
            firstName: "Liam",
            lastName: "Rodriguez",
            areaId: 3, // Lodge
            serviceId: 3, // Fishing
        },
        {
            id: 10,
            firstName: "Sophia",
            lastName: "Lopez",
            areaId: 4, // Gander River
            serviceId: 11, // Food
        },
        {
            id: 11,
            firstName: "Ethan",
            lastName: "Miller",
            areaId: 5, // Campgrounds
            serviceId: 6, // Picnicking
        },
        {
            id: 12,
            firstName: "Ava",
            lastName: "Davis",
            areaId: 3, // Lodge
            serviceId: 3, // Fishing
        },
        {
            id: 13,
            firstName: "Matthew",
            lastName: "Hernandez",
            areaId: 1, // Chamfort River
            serviceId: 11, // Food
        },
        {
            id: 14,
            firstName: "Isabella",
            lastName: "Martinez",
            areaId: 2, // Lost Wolf Hiking Trail
            serviceId: 5, // Hiking
        },
        {
            id: 15,
            firstName: "James",
            lastName: "Johnson",
            areaId: 3, // Lodge
            serviceId: 3, // Fishing
        },
        {
            id: 16,
            firstName: "Mia",
            lastName: "Brown",
            areaId: 4, // Gander River
            serviceId: 11, // Food
        },
        {
            id: 17,
            firstName: "Benjamin",
            lastName: "Davis",
            areaId: 5, // Campgrounds
            serviceId: 6, // Picnicking
        },
        {
            id: 18,
            firstName: "Evelyn",
            lastName: "Garcia",
            areaId: 6, // Pine Bluffs Trails
            serviceId: 11, // Food
        },
        {
            id: 19,
            firstName: "William",
            lastName: "Smith",
            areaId: 1, // Chamfort River
            serviceId: 3, // Fishing
        },
        {
            id: 20,
            firstName: "Sofia",
            lastName: "Anderson",
            areaId: 2, // Lost Wolf Hiking Trail
            serviceId: 6, // Picnicking
        },
        {
            id: 21,
            firstName: "Alexander",
            lastName: "Martinez",
            areaId: 3, // Lodge
            serviceId: 9, // Information
        },
        {
            id: 22,
            firstName: "Charlotte",
            lastName: "Lopez",
            areaId: 4, // Gander River
            serviceId: 11, // Food
        },
        {
            id: 23,
            firstName: "Henry",
            lastName: "Williams",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 24,
            firstName: "Amelia",
            lastName: "Brown",
            areaId: 6, // Pine Bluffs Trails
            serviceId: 11, // Food
        },
        {
            id: 25,
            firstName: "Daniel",
            lastName: "Smith",
            areaId: 1, // Chamfort River
            serviceId: 4, // Rock Climbing
        },
        {
            id: 26,
            firstName: "Ava",
            lastName: "Johnson",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 27,
            firstName: "Jackson",
            lastName: "Garcia",
            areaId: 3, // Lodge
            serviceId: 11, // Food
        },
        {
            id: 28,
            firstName: "Emma",
            lastName: "Davis",
            areaId: 4, // Gander River
            serviceId: 6, // Picnicking
        },
        {
            id: 29,
            firstName: "Liam",
            lastName: "Miller",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 30,
            firstName: "Olivia",
            lastName: "Hernandez",
            areaId: 3, // Lodge
            serviceId: 9, // Information
        },
        {
            id: 31,
            firstName: "Lucas",
            lastName: "Wilson",
            areaId: 3, // Lodge
            serviceId: 9, // Information
        },
        {
            id: 32,
            firstName: "Chloe",
            lastName: "Taylor",
            areaId: 5, // Campgrounds
            serviceId: 6, // Picnicking
        },
        {
            id: 33,
            firstName: "Sebastian",
            lastName: "Moore",
            areaId: 6, // Pine Bluffs Trails
            serviceId: 6, // Picnicking
        },
        {
            id: 34,
            firstName: "Zoe",
            lastName: "Anderson",
            areaId: 2, // Lost Wolf Hiking Trail
            serviceId: 5, // Hiking
        },
        {
            id: 35,
            firstName: "Carter",
            lastName: "Martinez",
            areaId: 4, // Gander River
            serviceId: 11, // Food
        },
        {
            id: 36,
            firstName: "Lily",
            lastName: "Johnson",
            areaId: 1, // Chamfort River
            serviceId: 6, // Picnicking
        },
        {
            id: 37,
            firstName: "Andrew",
            lastName: "Garcia",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 38,
            firstName: "Sofia",
            lastName: "Davis",
            areaId: 3, // Lodge
            serviceId: 11, // Food
        },
        {
            id: 39,
            firstName: "William",
            lastName: "Smith",
            areaId: 2, // Lost Wolf Hiking Trail
            serviceId: 5, // Hiking
        },
        {
            id: 40,
            firstName: "Emma",
            lastName: "Brown",
            areaId: 6, // Pine Bluffs Trails
            serviceId: 11, // Food
        },
        {
            id: 41,
            firstName: "Elijah",
            lastName: "Hernandez",
            areaId: 3, // Lodge
            serviceId: 3, // Fishing
        },
        {
            id: 42,
            firstName: "Avery",
            lastName: "Miller",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 43,
            firstName: "Jackson",
            lastName: "Martinez",
            areaId: 1, // Chamfort River
            serviceId: 1, // Rafting
        },
        {
            id: 44,
            firstName: "Scarlett",
            lastName: "Wilson",
            areaId: 4, // Gander River
            serviceId: 6, // Picnicking
        },
        {
            id: 45,
            firstName: "Liam",
            lastName: "Taylor",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 46,
            firstName: "Mila",
            lastName: "Moore",
            areaId: 3, // Lodge
            serviceId: 11, // Food
        },
        {
            id: 47,
            firstName: "Jacob",
            lastName: "Anderson",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 48,
            firstName: "Abigail",
            lastName: "Martinez",
            areaId: 2, // Lost Wolf Hiking Trail
            serviceId: 5, // Hiking
        },
        {
            id: 49,
            firstName: "Ethan",
            lastName: "Garcia",
            areaId: 4, // Gander River
            serviceId: 11, // Food
        },
        {
            id: 50,
            firstName: "Harper",
            lastName: "Brown",
            areaId: 6, // Pine Bluffs Trails
            serviceId: 11, // Food
        },
        {
            id: 51,
            firstName: "Grace",
            lastName: "Garcia",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 52,
            firstName: "Henry",
            lastName: "Brown",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 53,
            firstName: "Aria",
            lastName: "Davis",
            areaId: 3, // Lodge
            serviceId: 3, // Fishing
        },
        {
            id: 54,
            firstName: "Samuel",
            lastName: "Williams",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
        {
            id: 55,
            firstName: "Aurora",
            lastName: "Martinez",
            areaId: 1, // Chamfort River
            serviceId: 11, // Food
        },
        {
            id: 56,
            firstName: "Owen",
            lastName: "Johnson",
            areaId: 6, // Pine Bluffs Trails
            serviceId: 6, // Picnicking
        },
        {
            id: 57,
            firstName: "Penelope",
            lastName: "Taylor",
            areaId: 4, // Gander River
            serviceId: 11, // Food
        },
        {
            id: 58,
            firstName: "Levi",
            lastName: "Moore",
            areaId: 5, // Campgrounds
            serviceId: 5, // Hiking
        },
    ],
    areas: [
        {
            id: 3,
            name: "Lodge",
            image: "https://www.lochsalodge.com/wp-content/uploads/2021/01/facebook-1.jpg",
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            image: "https://www.nps.gov/blri/images/AT-peter-Hamel-web_1.jpg?maxwidth=650&autorotate=false",
        },
        {
            id: 1,
            
            name: "Chamfort River",
            image: "https://cdn.pixabay.com/photo/2020/05/04/16/05/mckenzie-river-5129717_640.jpg",
        },
        {
            id: 4,
            name: "Gander River",
            image: "https://cdn.pixabay.com/photo/2018/02/17/22/15/water-3161063_1280.jpg",
        },
        {
            id: 5,
            name: "Campgrounds",
            image: "https://i0.wp.com/blueridgemountainstravelguide.com/wp-content/uploads/2022/08/Deep-Creek-Campground-in-Bryson-City-NC-featured.jpg?fit=1280%2C628&ssl=1",
        },
        {
            id: 6,
            name: "Pine Bluffs Trails",
            image: "https://images.pexels.com/photos/1009355/pexels-photo-1009355.jpeg?cs=srgb&dl=pexels-pille-kirsi-1009355.jpg&fm=jpg",
        },
    ],
    parkServices: [
        {
            id: 1,
            name: "Rafting",
            image: "images/rafting_canoeing.png"
        }, {
            id: 2,
            name: "Canoeing",
            image: "images/rafting_canoeing.png"
        }, {
            id: 3,
            name: "Fishing",
            image: "images/fishing.png"
        }, {
            id: 4,
            name: "Rock Climbing",
            image: "images/rock_climbing.png"
        }, {
            id: 5,
            name: "Hiking",
            image: "images/hiking.png"
        }, {
            id: 6,
            name: "Picnicking",
            image: "images/picknicking.png"
        }, {
            id: 7,
            name: "Lodging",
            image: "images/lodging.png"
        }, {
            id: 8,
            name: "Parking",
            image: "images/parking.png"
        }, {
            id: 9,
            name: "Information",
            image: "images/information_office-park.png"
        }, {
            id: 10,
            name: "Zip Lines",
            image: "images/zip_line.png"
        }, {
            id: 11,
            name: "Food",
            image: "images/food.png"
        }, {
            id: 12,
            name: "Office Park",
            image: "images/information_office-park.png"
        }, {
            id: 13,
            name: "Children Play Areas",
            image: "images/play_area.png"
        }
    ],
    areaServices: [
        {
            id: 1,
            areaId: 1,
            parkServicesId: 1,  // Rafting
        },
        {
            id: 2,
            areaId: 1,
            parkServicesId: 2,  // Canoeing
        },
        {
            id: 3,
            areaId: 1,
            parkServicesId: 3,  // Fishing
        },
        {
            id: 4,
            areaId: 2,
            parkServicesId: 5,  // Hiking
        },
        {
            id: 5,
            areaId: 2,
            parkServicesId: 6,  // Picnicking
        },
        {
            id: 6,
            areaId: 2,
            parkServicesId: 4,  // Rock Climbing
        },
        {
            id: 7,
            areaId: 3,
            parkServicesId: 7,  // Lodging
        },
        {
            id: 8,
            areaId: 3,
            parkServicesId: 8,  // Parking
        },
        {
            id: 9,
            areaId: 3,
            parkServicesId: 9,  // Information
        },
        {
            id: 10,
            areaId: 3,
            parkServicesId: 6,  // Picnicking
        },
        {
            id: 11,
            areaId: 4,
            parkServicesId: 3,  // Fishing
        },
        {
            id: 12,
            areaId: 4,
            parkServicesId: 5,  // Hiking
        },
        {
            id: 13,
            areaId: 5,
            parkServicesId: 9,  // Information
        },
        {
            id: 14,
            areaId: 5,
            parkServicesId: 7,  // Lodging
        },
        {
            id: 15,
            areaId: 5,
            parkServicesId: 8,  // Parking
        },
        {
            id: 16,
            areaId: 6,
            parkServicesId: 5,  // Hiking
        },
        {
            id: 17,
            areaId: 6,
            parkServicesId: 6,  // Picnicking
        },
        {
            id: 18,
            areaId: 6,
            parkServicesId: 10, // Zip Lines
        },
        {
            id: 19,
            areaId: 6,
            parkServicesId: 11, // Food
        },
        {
            id: 20,
            areaId: 3,
            parkServicesId: 11, // Food
        },
        {
            id: 21,
            areaId: 5,
            parkServicesId: 12, // Office Park
        },
        {
            id: 22,
            areaId: 5,
            parkServicesId: 13, // Children Play Area
        }
    ],
    directions: [
        {
          id: 1,
          areaId: 1,
                  },
        {
          id: 2,
          areaId: 2,
        },
        {
          id: 3,
          areaId: 3,
        },
        {
          id: 4,
          areaId: 4,
        },
        {
          id: 5,
          areaId: 5,
        },
        {
          id: 6,
          areaId: 6,
        },
    ],
    directionItems: [
        // Chamfort River
        {
            id: 1,
            directionsId: 1,
            text: "Exit the main gate and turn left onto Cider Falls Avenue."
        },
        {
            id: 2,
            directionsId: 1,
            text: "Follow Cider Falls Avenue until you reach the first intersection."
        },
        {
            id: 3,
            directionsId: 1,
            text: "Turn right onto Riverbank Road."
        },
        {
            id: 4,
            directionsId: 1,
            text: "Continue on Riverbank Road as it winds through the park."
        },
        {
            id: 5,
            directionsId: 1,
            text: "You will soon arrive at the Chamfort River area on your left."
        },
        {
            id: 6,
            directionsId: 1,
            text: "Rafting: Head to the designated Rafting area along the riverbank."
        },
        {
            id: 7,
            directionsId: 1,
            text: "Canoeing: The Canoeing station is further down the riverbank, easily accessible."
        },
        {
            id: 8,
            directionsId: 1,
            text: "Fishing: Find prime fishing spots along the river's edge."
        },

        // Lost Wolf Hiking Trail
        {
            id: 9,
            directionsId: 2,
            text: "Exit the main gate and turn right onto Cider Falls Avenue."
        },
        {
            id: 10,
            directionsId: 2,
            text: "Drive straight on Cider Falls Avenue until you see the sign for the Lost Wolf Hiking Trail."
        },
        {
            id: 11,
            directionsId: 2,
            text: "Turn left onto Hiker's Path."
        },
        {
            id: 12,
            directionsId: 2,
            text: "Follow the signs for the Lost Wolf Hiking Trail parking area."
        },
        {
            id: 13,
            directionsId: 2,
            text: "Hiking: Begin your hike on the marked trailhead."
        },
        {
            id: 14,
            directionsId: 2,
            text: "Picnicking: Discover cozy picnic spots at various points along the trail."
        },
        {
            id: 15,
            directionsId: 2,
            text: "Rock Climbing: Ascend the challenging rock faces at designated climbing zones."
        },

        // Lodge
        {
            id: 16,
            directionsId: 3,
            text: "Exit the main gate and turn right onto Cider Falls Avenue."
        },
        {
            id: 17,
            directionsId: 3,
            text: "Continue on Cider Falls Avenue until you reach the fork in the road."
        },
        {
            id: 18,
            directionsId: 3,
            text: "Take the left fork to stay on Cider Falls Avenue."
        },
        {
            id: 19,
            directionsId: 3,
            text: "Keep driving until you see the Lodge building on your right."
        },
        {
            id: 20,
            directionsId: 3,
            text: "Lodging: Check-in at the Lodge for comfortable accommodations."
        },
        {
            id: 21,
            directionsId: 3,
            text: "Parking: Convenient parking available near the Lodge entrance."
        },
        {
            id: 22,
            directionsId: 3,
            text: "Information: Visit the Lodge's front desk for park information."
        },
        {
            id: 23,
            directionsId: 3,
            text: "Picnicking: Enjoy a relaxing picnic near the Lodge."
        },
        {
            id: 24,
            directionsId: 3,
            text: "Food: Savor delicious meals at the Lodge's restaurant."
        },

        // Gander River
        {
            id: 25,
            directionsId: 4,
            text: "Exit the main gate and turn left onto Cider Falls Avenue."
        },
        {
            id: 26,
            directionsId: 4,
            text: "Follow Cider Falls Avenue until you reach the roundabout."
        },
        {
            id: 27,
            directionsId: 4,
            text: "Take the second exit onto Riverside Drive."
        },
        {
            id: 28,
            directionsId: 4,
            text: "Continue on Riverside Drive until you reach the Gander River area on your right."
        },
        {
            id: 29,
            directionsId: 4,
            text: "Fishing: Find serene fishing spots along the riverbank."
        },
        {
            id: 30,
            directionsId: 4,
            text: "Hiking: Explore hiking trails that wind through the Gander River area."
        },

        // Campgrounds
        {
            id: 31,
            directionsId: 5,
            text: "Exit the main gate and turn left onto Cider Falls Avenue."
        },
        {
            id: 32,
            directionsId: 5,
            text: "Drive straight on Cider Falls Avenue until you see the Campgrounds entrance sign."
        },
        {
            id: 33,
            directionsId: 5,
            text: "Turn right into the Campgrounds area."
        },
        {
            id: 34,
            directionsId: 5,
            text: "Information: Get park info at the Campgrounds' central information kiosk."
        },
        {
            id: 35,
            directionsId: 5,
            text: "Lodging: Set up camp at designated sites for a memorable stay."
        },
        {
            id: 36,
            directionsId: 5,
            text: "Parking: Conveniently park near the campground entrance."
        },
        {
            id: 37,
            directionsId: 5,
            text: "Office Park: Find a shared workspace for remote work or writing."
        },
        {
            id: 38,
            directionsId: 5,
            text: "Children Play Areas: Kids can enjoy designated play zones within the campground."
        },

        // Pine Bluffs Trails
        {
            id: 39,
            directionsId: 6,
            text: "Exit the main gate and turn left onto Cider Falls Avenue."
        },
        {
            id: 40,
            directionsId: 6,
            text: "Continue on Cider Falls Avenue until you reach the Pine Bluffs Trails parking area on your left."
        },
        {
            id: 41,
            directionsId: 6,
            text: "Hiking: Embark on scenic hikes through the Pine Bluffs Trails."
        },
        {
            id: 42,
            directionsId: 6,
            text: "Picnicking: Take a break and enjoy a picnic at picturesque spots."
        },
        {
            id: 43,
            directionsId: 6,
            text: "Zip Lines: Experience exhilarating zip line adventures amidst the trails."
        },
        {
            id: 44,
            directionsId: 6,
            text: "Food: Refuel with snacks and meals available at designated points."
        }
    ]
}

export const getGuests = structuredClone(database.guests)

export const getAreas = structuredClone(database.areas)

export const getParkServices = structuredClone(database.parkServices)

export const getAreaServices = structuredClone(database.areaServices)

export const getDirections = structuredClone(database.directions)

export const getDirectionItems = structuredClone(database.directionItems)