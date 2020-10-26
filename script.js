function startGame() {
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
