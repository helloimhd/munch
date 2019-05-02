function createFruitMobile(leftPosition) {
    var newFruit = document.createElement("div");
    newFruit.className = "fruits";
    newFruit.style.left = `${leftPosition}px`;

    //console.log(fruitIcons);

    // choose different kind of fruits
    shuffle(fruitIcons);
    for (var i = 0; i < fruitIcons.length; i++) {
        newFruit.textContent = fruitIcons[i];
    }

    var top = 0;
    newFruit.style.top = top;
    gameContainer.appendChild(newFruit);
    moveFruits();


    function moveFruits() {
        top += 5;   // speed of the fruits... the higher, the faster
        newFruit.style.top= `${top}px`;

       if (top < 299){
            startFalling = window.requestAnimationFrame(moveFruits);   // to keep repeating the above

        } else if (top >= 299) {   // once fruit touch the bottom
            // collect fruits and score point
            var fruitContent = newFruit.textContent;
            //console.log(fruitContent)
            var scoreBoard = document.getElementById("scoreBoard")

            // collect one point for each fruit
            if (isCollapsed(newFruit, bar, fruitContent) === "fruit") {
                closeMouth()
                playCorrectAudio();
                score += 1;
                scoreBoard.textContent = `Score: ${score}`;


                //  minus one live if collect tool
            } else if (isCollapsed(newFruit, bar, fruitContent) === "bad") {
                if (lives !== 0){
                    closeMouth()
                    playWekAudio()

                    // get position of current fruit
                    var fruitLeftPosition = newFruit.style.left;
                    createDeductPoint(fruitLeftPosition)

                    //  get deduction element
                    var deductPoint = document.getElementById("deduct");
                    setTimeout(function() {
                        deductPoint.remove();
                    }, 500)

                    //score -= 1;
                    removeLives();
                    lives--;

                    //console.log(lives);
                    scoreBoard.textContent = `Score: ${score}`;

                } else if (lives === 0) {
                    gameOver()
                }

                // game over if bomb
            } else if (isCollapsed(newFruit, bar, fruitContent) === "bomb") {
                closeMouth()
                playBombAudio()
                gameOver();
               // window.cancelAnimationFrame(startFalling)
                return;

                //  deduct lives if miss fruit
                //  check if item hit the gamecontainer
            } else if (gameContainerNFruit(newFruit, gameContainer) === "yes") {
                if (fruitContent !== "🔪" && fruitContent !== "🔨" && fruitContent !== "✂️" && fruitContent !== "💣") {
                    if (lives !== 0) {
                        playSplatAudio()
                        var fruitLeftPosition = newFruit.style.left;
                        var deductPoint = createDeductPoint(fruitLeftPosition)

                        //  get deduction element
                       // var deductPoint = document.getElementById("deduct");
                        setTimeout(function() {
                            deductPoint.remove();
                        }, 500)

                        removeLives();
                        lives--;

                    } else if (lives === 0) {
                          gameOver();
                    }
                }
            }
            //console.log(score);
            newFruit.remove();
       }
   }
   //return newFruit;

}

var mobileNameInput = document.getElementById("mobile");
var startMobile = document.getElementById("startMobile");

function startGameMobile() {
    startMobile.remove();
    bar.style.visibility = "visible";
    mobileNameInput.style.visibility = "hidden";
    createLives();
    document.querySelector(".highScore").style.visibility  = "visible";
    updateHighScore(playerName, playerScore)
    moveBar();

    // for when game on phone
    control()

    //  after 10 seconds, append the badIcons tgt so that badIcons will appear
    setTimeout(function() {
        fruitIcons = fruitIcons.concat(badIcons);
        //console.log(fruitIcons)
    }, 10000);


    //  every 5 secs create a new bomb
    function addBombs() {
        createBombs = setInterval(function() {
            fruitIcons = fruitIcons.concat(bombIcons);
            //console.log(fruitIcons)
        }, 5000);
    }
    //  but only start making bombs 15 secs after the game start
    setTimeout(addBombs, 15000);

    // clearInteval after 40 secs
    setTimeout(function() {
        clearInterval(createBombs);
    }, 45000);

    fruitFalling = setInterval(function() {
        var randomPosition = Math.floor(Math.random() * 300) ;  // left = 0 to 300
       // console.log(randomPosition);
        currentFruit = createFruitMobile(randomPosition)
        //console.log(test);

        //score();
      }, 500)

    createScoreBoard()
}