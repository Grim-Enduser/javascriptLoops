// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
//
// for (let i = 0; i <=4; i++){
//     console.log("Hoera!");
// }
// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!

// for (let i = 0; console.log('checking', i), i <= 3; console.log('increment'), i++) {
//     if(i === 1) {
//         continue;
//     }
//     console.log('loop', i);
//     // if (i === 3 ) {
//     //     console.log("klaar!")
//     // }
// }
//
// console.log("klaar!")

// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// for (let i = 0; i < 16; i++ ){
//     if (i === 0) {
//         console.log(x + " is even");
//     }
//     else if (i % 2 === 0) {
//         console.log(x + " is even");
//     }
//     else {
//         console.log(x + " is odd");
//     }
// }

// for (var x=0; x<=15; x++) {
//     if (x === 0) {
//         console.log(x +  " is even");
//     }
//     else if (x % 2 === 0) {
//         console.log(x + " is even");
//     }
//     else {
//         console.log(x + " is odd");
//     }
// }


// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over. Google daarom eens naar 'mdn webdocs remainder operator'.
// ==========================================



// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
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