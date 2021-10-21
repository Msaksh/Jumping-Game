let slide = 100;
let score = 0;
let game = true;

document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode)
    if(e.keyCode == 38) {
        character = document.querySelector('.humanBody');
        character.classList.add('jump');
        setTimeout(() =>{
            character.classList.remove('jump')
        }, 700);

    // adding class to spread left hand while jump
        spreadLeftHand = document.querySelector('.hand');
        spreadLeftHand.classList.remove('stopHand1');
        spreadLeftHand.classList.add('left');
        setTimeout(() =>{
            spreadLeftHand.classList.add('stopHand1');
            spreadLeftHand.classList.remove('left');
        }, 500);

    // adding class to spread right hand while jump        
        spreadRightHand = document.querySelector('.handd');
        spreadRightHand.classList.remove('stopHand2');
        spreadRightHand.classList.add('right');
        setTimeout(() =>{
            spreadRightHand.classList.add('stopHand2');
            spreadRightHand.classList.remove('right');
        }, 500);

    // Adding class to spread left leg while jump
        spreadLeftLeg = document.querySelector('.leg');
        spreadLeftLeg.classList.remove('stopLeg1');
        spreadLeftLeg.classList.add('left');
        setTimeout(() =>{
            spreadLeftLeg.classList.add('stopLeg1');
            spreadLeftLeg.classList.remove('left');
        }, 500);

    // adding class to spread right leg while jump    
        spreadRightLeg = document.querySelector('.legg');
        spreadRightLeg.classList.remove('stopLeg2');
        spreadRightLeg.classList.add('right');
        setTimeout(() =>{
            spreadRightLeg.classList.add('stopLeg2');
            spreadRightLeg.classList.remove('right');
        }, 500);    
    }

// left arrow key
    if (e.keyCode == 37) {
        character = document.querySelector('.humanBody');
        characterX = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
        character.style.left = (characterX - slide) + 'px';
    }
// right arrow key
    if (e.keyCode == 39) {
        character = document.querySelector('.humanBody');
        characterX = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
        character.style.left = (characterX + slide) + 'px';
    }
}

setInterval(() =>{
    // obstacle
    obstacle = document.querySelector('.obstacle');
    obstacleX = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    obstacleY = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    
    // character
    character = document.querySelector('.humanBody');
    characterX = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
    characterY = parseInt(window.getComputedStyle(character, null).getPropertyValue('top'));
    
    // GAp between
    gapBetweenX = Math.abs(characterX - obstacleX);
    gapBetweenY = Math.abs(characterY - obstacleY);
    console.log(gapBetweenX, gapBetweenY);

// what to do when obstacle hit character
    if (gapBetweenX < 100 && gapBetweenY < 100){
    gameOver = document.querySelector('.gameOver');
    stop = document.querySelector('.obstacle');
    
    gameOver.style.visibility = 'visible';
    stop.classList.remove('obstacle2nd');
    // character.style.visibility = 'hidden';

    // removing animation classes from humanBody
    hand1 = document.querySelector('.hand1');
    hand2 = document.querySelector('.hand2');
    leg1 = document.querySelector('.leg1');
    leg2 = document.querySelector('.leg2');
    
    hand1.classList.remove('stopHand1');
    hand2.classList.remove('stopHand2');
    leg2.classList.remove('stopLeg2');
    leg1.classList.remove('stopLeg1');


    }
    else if (gapBetweenX < 165 && game) {
        score++;
        updateScore(score);
        game = false;
        setTimeout(() => {
            game = true;
        }, 1000);
    }
},100);

console.log(score);
function updateScore(score) {
    // scoreId = document.querySelector('#scoreId');
    scoreId.innerHTML = "Score: " + score;
}