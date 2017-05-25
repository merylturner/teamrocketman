'use strict';

var colorNarrator = new Narrator();
var colorUser = new User();
var currentPhase = 1;

colorNarrator.getGuest();
colorNarrator.popContent();
colorNarrator.popStyles();

var colorPhaseOne = new Phase(
    'Welcome to a world of color! Black and white can be very appealing, but color can also add a lot to a page. Let\'s experiment! First, choose a color for the background of your page.',
    '<input type="submit" value="Grey">',
    null,
    null,
    '<input type="submit" value="Light Blue">'
);

var colorPhaseTwo = new Phase(
    'Next, choose a color for your header.',
    '<input type="submit" value="Dark Green">',
    null,
    null,
    '<input type="submit" value="Maroon">'

);

var colorPhaseThree = new Phase(
    'Lastly, choose a color for the text in your paragraph.',
    '<input type="submit" value="Dark Blue">',
    null,
    null,
    '<input type="submit" value="Red">'
);

var colorPhaseFour = new Phase(
    'What do you think? If you\'re happy with it, submit it to see your changes, so far.',
    '<input type="submit" value="Onward!">',
    null,
    null,
    '<p>You\'re doing so well.</p>'
);
colorNarrator.popPageUser = function () {
    colorUser = this.guest;
};

var onLoadPage = function () {
    colorNarrator.talkLoc.innerText = colorPhaseOne.talkAt;
    colorNarrator.buttonOne.innerHTML = colorPhaseOne.buttonOne;
    colorNarrator.listenLocOne.innerHTML = colorPhaseOne.inputOne;
    colorNarrator.listenLocTwo.innerHTML = colorPhaseOne.inputTwo;
    colorNarrator.buttonTwo.innerHTML = colorPhaseOne.buttonTwo;
    colorNarrator.popPageUser();
};

Phase.prototype.executePhase = function () {
    colorNarrator.talkLoc.innerText = this.talkAt;
    colorNarrator.buttonOne.innerHTML = this.buttonOne;

    if (this.inputOne) {
        colorNarrator.listenLocOne.innerHTML = this.inputOne;
    }

    if (this.inputTwo) {
        colorNarrator.listenLocTwo.innerHTML = this.inputTwo;
    }

    if (this.buttonTwo) {
        colorNarrator.buttonTwo.innerHTML = this.buttonTwo;
    }
};

colorNarrator.saveGuest = function () {
    this.guest = colorUser;
};

onLoadPage();

colorPhaseOne.executePhase();

var submitButton = document.getElementById('buttonDiv');
submitButton.addEventListener('click', submitHandler);

function submitHandler() {
    event.preventDefault();
    // if (!event.target.id) {
    //     return;
    // }
    if (currentPhase === 1 && event.target.value) {
        var selectedColor = event.target.value;
        console.log(selectedColor);
        colorUser.color1 = selectedColor;
        document.getElementsByTagName('body')[0].setAttribute('class', selectedColor);
        colorPhaseTwo.executePhase();
        currentPhase += 1;
    }
    else if (currentPhase === 2 && event.target.value) {
        var selectedColor = event.target.value;
        console.log(selectedColor);
        colorUser.color2 = selectedColor;
        document.getElementsByTagName('h1')[0].setAttribute('class', selectedColor);
        colorPhaseThree.executePhase();
        currentPhase += 1;
    }
    else if (currentPhase === 3 && event.target.value) {
        var selectedColor = event.target.value;
        console.log(selectedColor);
        colorUser.color3 = selectedColor;
        document.getElementsByTagName('p')[0].setAttribute('class', selectedColor);
        colorPhaseFour.executePhase();
        currentPhase += 1;
    }
    else if (currentPhase === 4 && event.target.value) {
        //save to localstorage and move to next page
        colorNarrator.saveGuest();
        colorNarrator.locallyStoreUser();
        window.location.href = './roughdraft.html';
    }
}





// var inputSpotOne = document.getElementById('inputOne');
// inputSpotOne.innerHTML = '<input type="radio" value="grey">';
