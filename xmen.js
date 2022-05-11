const xMenCharacters = [
    {
        character: "Professor X",
        age: 65,
        name: "Charles Francis Xavier",
        abilities: [ "Telepathy", "Induce Mental Illusions", "Mental or Physical Paralysis", "Amnesia" ],
        gender: "male"
    },
    {
        character: "Magneto",
        age: 70,
        name: "Erik Magnus",
        abilities: [ "Magnetism", "Shoot Electromagnetic Pulses" ],
        gender: "male"
    },
    {
        character: "Cyclops",
        age: 28,
        name: "Scott Summers",
        abilities: [ "Energy Beams" ],
        gender: "male"
    },
    {
        character: "Storm",
        age: 2000,
        name: "Ororo Munroe",
        abilities: [ "Expert Tactician", "Manipulate Weather" ],
        gender: "female"
    },
    {
        character: "Wolverine",
        age: 300,
        name: "Logan",
        abilities: [ "Strength", "Reflexes", "Enhanced Senses", "Tracking Abilities", "Healing Power" ],
        gender: "male"
    },
    {
        character: "Rogue",
        age: 18,
        name: "Anna Marie LeBeau",
        abilities: [ "Absorb and Remove Memories", "Physical Strength", "Superpowers of anyone she Touches"],
        gender: "female"
    },
]

for (let i = 0; i < xMenCharacters.length; i++) {
    if (xMenCharacters[i].gender === "female") {
        continue;
    }

    if (xMenCharacters[i].age < 50) {
        continue;
    }

    if (xMenCharacters[i].abilities.length < 3) {
        continue;
    }

    console.log(xMenCharacters[i].name);
}

console.log("totaal aantal xmen!", xMenCharacters.length);


// }
// for (let i = 0; i < xMenCharacters.length; i ++) {
//     if (xMenCharacters[i].abilities.lenght >= 3) {
//         console.log(xMenCharacters[i].character);
//     }
// }


// for (let i = 0; i < xMenCharacters.length ; i++) {
//     if (xMenCharacters[i].abilities.length >= 3) {
//         console.log(xMenCharacters[i].character);
//     }
// }

// for (let i = 0; i < xMenCharacters.length ; i ++) {
//     if (xMenCharacters[i].abilities.length >= 4) {
//         console.log(xMenCharacters[i].character);
//     }
// }

// for (let i = 0; i < xMenCharacters.length ; i ++){
//     if (xMenCharacters[i].age >= 200){
//         console.log(xMenCharacters[i].name)
//     }
// }

// for (let i = 0; i < xMenCharacters.length; i ++) {
//     console.log(xMenCharacters[i].character);
// }


// for (let i = 0; i < xMenCharacters.length; i ++) {
//     if (xMenCharacters[i].abilities.length >= 4) {
//         console.log(xMenCharacters[i].character);
//         }
// }

//bovenstaand voorbeeld zoekt door de hele length van de array (xmenCharacters.length ; is gelijk aan i <= 16 bij getalen.