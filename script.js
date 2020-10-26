function startGame() {
    alert("Hello Player One! Welcome to Atlas Ski-resort. You have now jumped out of the lift, standing on top of the ski mountain. Which lane do you want to shred down on?")
}

function pickALane() {
    var text;
    var decideLane = prompt("Which lane? Red lane or Green Lane?");
    switch(decideLane) {
        case "Red Lane":
            text = "Great! Head down to the red lane!";
            break;
        case "Green Lane":
            text = "Good choice! Head down to the green lane!";
            break;
        default:
            text = "Pick again!";
            break;

    }
}
console.log(pickALane);