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
        description: "Hello Player One! Welcome to Atlas Ski-resort. You have now jumped out of the lift, standing on top of the ski mountain. Which lane do you want to shred down on? Red lane or Green Lane?",
        choices: ["Green lane", "Red lane"],
        nextScene: [2, 1]
    }, 
    //HÄNDELSEFÖRLOPP
    { //Röd bana 1
        description: "Alright Player one! Shredding down the red lane, you are now facing a big jump! Do you want to jump, Yes or No?",
        choices: ["Yes", "No"],
        nextScene: [3, 5]
    },
    { //Grön bana 2
        description: "You chose the green lane! Whilst shredding down you are looking around and the view is incredible! Do you want to stop and take a pic to your instagram?",
        choices: ["Yes", "No"],
        nextScene: [4, 6]
    },
    { //Röd bana 3
        description: "Wow! You are actually flying Player one! But something is happening with your left ski-boot. Help! If you want to try to turn in the sky write 'Try', if youy want to hope for the best and just land, write 'Land'. ",
        choices: ["Turn", "Land"],
        nextScene: [-,-]
    },


    //SLUT-VAL
    {// Röd bana -, slut
        description: "Wow! What a jump!!!! You are really good at this Player one! You are now at the end of the mountain. Do you want to go again?",
        choices: ["Yes", "No"],
        nextScene: [0,7]
    },
    { // Grön bana -, slut
        description: "Wow what a picture! You'll get 30 likes in one minute! You are now at the end of the hill, do you want to go again?",
        choices: ["Yes", "No"],
        nextScene: [0, 7]
    },
    { // Röd bana -, ej hopp
        description: "Safety first! You chose not to jump, you are now safe and sound down by the lift, do you want to go again?",
        choices: ["Yes", "No"],
        nextScene: [0, 7]
    },
    { // Grön bana -, ej kort
        description: "Player one! You are not into the social media, you want to be in the moment! You have now shredded down the beautiful mountain and are at the end. Do you want to go again?",
        choices: ["Yes", "No"],
        nextScene: [0, 7]
    },
    { // Quit 7
        description: "Good job Player one! You are well deserved some nice cold beers at the after-skii. Have fun and stay  safe!",
        
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