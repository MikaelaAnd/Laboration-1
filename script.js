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

// Start button



/**
 * variabel for the current scene
 */
let currentScene = 0
/**
 * the whole story
 */
const scenes = [
    { // Start 0
        description: "Hello Player One! Welcome to Atlas Ski-resort. You have now jumped out of the lift, standing on top of the ski mountain. Which lane do you want to shred down on? Red lane or Green Lane?",
        choices: ["Green lane", "Red lane"],
        nextScene: [2, 1]
    }, 
    //HÄNDELSEFÖRLOPP 1
    { //Röd bana 1
        description: "Alright Player one! Shredding down the red lane, you are now facing a big jump! Do you want to jump, Yes or No?",
        choices: ["Yes", "No"],
        nextScene: [4, 3]
    },
    { //Grön bana 2
        description: "You chose the green lane! Whilst shredding down you are looking around and the view is incredible! Do you want to stop and take a pic to your instagram? Write Yes or No",
        choices: ["Yes", "No"],
        nextScene: [5, 3]
    },
    //HÄNDELSEFÖRLOPP VID VAL 'NEJ'
    {   // Båda banor 3
        description: "You decided to kept on shredding down the mouintain without a care in the world, you are now down by the lift. Do you want to go again? Write 'Yes' or 'No'",
        choices: ["Yes", "No"],
        nextScene: [0, 10]
    },
    //HÄNDELSEFÖRLOPP 2
    { // Röd bana 4
        description: "Wow! You are actually flying Player one! But something is happening with your left ski-boot. Help! If you want to try to turn in the sky write Try, if youy want to hope for the best and just land, write Land. ",
        choices: ["Try", "Land"],
        nextScene: [6, 8]
    },
    { // Grön bana 5
        description: "Argh! Your phone is not acclimatized with the cold weather, you've only got 1% battery left. Ok Player one, you got two options: Write Rush if you want to rush down to the after-ski and charge your phone or write Calm if you don't care about the battery and just wanna enjoy the skiing down to the lift again",
        choices: ["Rush", "Calm"],
        nextScene: [7, 9]
    },
    //ALTERNATIVA SLUT SJUKHUS
    { // Röd bana 6
        description: "You chose to turn! Sadly, you twist so much so you loose balance and land on your knee. Aouch! But no need to worry, Atlas help-scooter is on it's way and will take you to the hospital. You won't be able to ski anymore today! Write Ok and we will se you tomorrow!",
        choices: ["Ok"],
        
        
    },
    { // Grön bana 7
        description: "You chose to rush down the mountain. Not a super idea, in all the white snow you miss to notice a rock and you fall and land flat on your nouse. Aouch! But no need to worry, Atlas help-scooter is on it's way. You won' be able to ski anymore today! Write Ok and we will see you tomorrow!",
        choices: ["Ok"],
        
    //ALTERNATIVA SLUT ALLT GICK BRA
    },
    { // Röd bana 8
        description: "You landed perfectly, you ski-boot was just playing a trick in the wind! You swoosh pass a couple of admirers and you are now in the end of the mountain. Do you want to go again, write 'Yes' or 'No'",
        choices: ["Yes", "No"],
        nextScene: [0, 10]
    },
    { // Grön bana 9
        description: "You calmly kept on skiing down the mountain without the stress of looking at likes on your wonderful picture. Now you are down, do you want to go again? Write 'Yes' or 'No",
        choices: ["Yes", "No"],
        nextScene: [0, 10]
    },
    { // AVSLUT 10
        description: "Good job Player One! You can now grab a well deserved beer fom the after-ski, but remember to keep distance and no dancing on the tables. Stay safe!",
        choices: ["Ok"],
        nextScene: []
        
    }

];

// Run our applications
window.onload = presentScene;



/**
 * this is the description of the present scene
 */
function presentScene() {
    const answer = prompt(scenes[currentScene].description);
    handleUserChoice(answer)
   
}

/**
 * 
 * @param {*} answer 
 */
function handleUserChoice(answer) {
    if (scenes[currentScene].choices[10]) {
        alert('END OF GAME');
        return
    }

    if (answer === scenes[currentScene].choices[0]) {
        currentScene = scenes[currentScene].nextScene[0]
    }
    if (answer === scenes[currentScene].choices[1]) {
        currentScene = scenes[currentScene].nextScene[1]
    } 

    presentScene()
}
