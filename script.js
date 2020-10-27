/*function startGame() {
    alert("Hello Player One! Welcome to Atlas Ski-resort. You have now jumped out of the lift, standing on top of the ski mountain. Which lane do you want to shred down on?")
}

function pickALane() {
    let decideLane = prompt("Which lane? Red lane or Green Lane?");

        if (decideLane == "Red Lane") {
            alert("Great! Head down to the red lane!");
            return(decideLane);
        } else (decideLane == "Green Lane") 
            alert("Good choice! Head down to the green lane!");

}

function changeLane() {

    let elem = document.getElementById("change");
    if (elem.value=="Pick a lane!") elem.value = "Shred away!";
    else elem.value = "Pick a lane!";
}

function redLane() {
    alert("Alright Player one! Shredding down the red lane, you are now facing a big jump! What do you want to do?");
}*/


// define the state for our application
let currentScene = 0

const scenes = [
    {
        description: "Du befinner dig högst uppe på en skidbacke, ser två banor att åka nedför. Vill du åka ner för Gröna banan eller Röda?",
        choices: ["grön bana", "röd bana"],
        nextScene: [2, 1]
    }, 
    { //Röd bana
        description: "Du har nu valt röd bana och möter ett stort hopp. Vill du hoppa?",
        choices: ["Ja", "Nej"],
        nextScene: [2, 0]
    },
    { //Grön bana
        description: "Du valde grön bana! Du kommer till en väldigt vacker vy. Vill du stanna och ta en bild till din snygga insta?",
        choices: ["Ja", "Nej"],
        nextScene: [2, 0]
    },
    {//Slutet av spelet
        description: "Grattis! Du har nu åkt ner för hela banan och står vid liften. Vill du åka en gång till?",
        choices: ["Ja", "Nej"],
        nextScene: [2,0]
    }
];
// Run our applications
window.onload = presentScene;


//Define the actions for our applications
function presentScene() {
    const answer = prompt(scenes[currentScene].description);
    handleUserChoice(answer)

}

function handleUserChoice(answer) {
    console.log(answer);

    if (answer === scenes[currentScene].choices[0]) {
        currentScene = scenes[currentScene].nextScene[0]
    }
    if (answer === scenes[currentScene].choices[1]) {
        currentScene = scenes[currentScene].nextScene[1]
    }

    presentScene()
}