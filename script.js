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
    { // Start 0
        description: "Hello Player One! Welcome to Atlas Ski-resort. You have now jumped out of the lift, standing on top of the ski mountain. Which lane do you want to shred down on?",
        choices: ["Green lane", "Red Lane"],
        nextScene: [2, 1]
    }, 
    { //Röd bana 1
        description: "Alright Player one! Shredding down the red lane, you are now facing a big jump! What do you want to do?",
        choices: ["Yes", "No"],
        nextScene: [3, 3]
    },
    { //Grön bana 2
        description: "You chose the green lane! Whilst shredding down you are looking around and the view is incredible! Do you want to stop and take a pic to your instagram?",
        choices: ["Yes", "No"],
        nextScene: [3, 3]
    },
    {//Slutet av spelet 3
        description: "Wow! What a jump!!!! You are really good at this Player one! Ypu are now at the end of the mountain. Do you want to go again?",
        choices: ["Yes", "No"],
        nextScene: [0,0]
    },
    {
        
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