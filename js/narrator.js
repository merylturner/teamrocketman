'use strict';

function Narrator() {

    this.guest = {};
    this.talkLoc = document.getElementById('talkLoc');
    this.listenLocOne = document.getElementById('inputOne');
    this.listenLocTwo = document.getElementById('inputTwo');
    this.buttonOne = document.getElementById('buttonOne');
    this.buttonTwo = document.getElementById('buttonTwo');

    this.locallyStoreUser = function () {
        var userInfoStringified = JSON.stringify(this.guest);
        localStorage.setItem('userInfo', userInfoStringified);
    };

    this.getGuest = function () {
        this.guest = JSON.parse(localStorage.getItem('userInfo'));
    };

    this.popSubHeader = function () {
        var subHeader = document.getElementsByTagName('h2')[0];
        var critterNamed = this.guest.marsupial.critterName;
        var userCalled = this.guest.userName;
        subHeader.innerText = 'This is a Webpage about ' + critterNamed + 's, by ' + userCalled + '.';
    };

    this.popNavBar = function () {
        var navBar = document.getElementsByTagName('ul')[0];
        var navContent = '<li>' + this.guest.color + '</li><li>' + this.guest.mood + '</li><li>' + this.guest.particle + '</li>';
        navBar.innerHTML = navContent;
    };

    this.popArticleHeading = function () {
        var articleHeadingLoc = document.getElementsByTagName('h3')[0];
        var articleHeading = this.guest.marsupial.critterName;
        articleHeadingLoc.innerText = articleHeading;
    };

    this.popCritterBlurb = function () {
        var critterBlurbLoc = document.getElementsByTagName('p')[0];
        var critterBlurb = this.guest.marsupial.blurb;
        critterBlurbLoc.innerHTML = '<img src=\'\'/>' + critterBlurb;
    };

    this.popCritterPic = function () {
        var critterPic = document.getElementsByTagName('img')[0];
        var critterSrc = this.guest.marsupial.filepath;
        critterPic.src = critterSrc;
    };

    this.popContent = function () {
        this.popSubHeader();
        this.popNavBar();
        this.popArticleHeading();
        this.popCritterBlurb();
        this.popCritterPic();
    };

    this.popFontSize = function () {
        var userFontSize = this.guest.fontSize;
        var headerLoc = document.getElementsByTagName('h1')[0];
        headerLoc.style.fontSize = userFontSize + 'px';
    };

    this.popFloat = function () {
        var floatProp = this.guest.float;
        var critterPicLoc = document.getElementsByTagName('img') [0];
        critterPicLoc.style.float = floatProp;
        // critterPicLoc.setAttribute('class', floatProp);
    };

    this.popMargin = function () {
        var marginProp = this.guest.margin;
        var marginEle = document.getElementsByTagName('main') [0];
        marginEle.style.marginLeft = marginProp; 
        marginEle.style.marginRight = marginProp; 
    };

    this.popFont = function () {
        var fontProp = this.guest.pFont;
        var fontEle = document.getElementsByTagName('body')[0];
        fontEle.style.fontFamily = fontProp;
    };

    this.popStyles = function () {
        this.popFontSize();
        this.popFloat();
        this.popMargin();
        this.popFont();
    };

    this.popColors = function () {
        var bodyBody = document.getElementsByTagName('body')[0];
        var headerText = document.getElementsByTagName('h1')[0];
        var pText = document.getElementsByTagName('p');
        bodyBody.style.backgroundColor = this.guest.color1;
        headerText.style.color = this.guest.color2;
        for (var i = 0; i < pText.length-2; i++) {
            pText[i].style.color = this.guest.color3;
        }
    };

    this.clearThroat = function () {
        this.buttonOne.removeChild(document.getElementById('actualButtonOne'));
        if (document.getElementById('inputFieldOne')) {
        this.listenLocOne.removeChild(document.getElementById('inputFieldOne'));
        }
        if (document.getElementById('inputFieldTwo')) {
        this.listenLocTwo.removeChild(document.getElementById('inputFieldTwo'));
        }
        if (document.getElementById('actualButtonTwo')) {
        this.buttonTwo.removeChild(document.getElementById('actualButtonTwo'));
        }

    };
}

window.addEventListener('keypress', checkKeyPressed, false);
function checkKeyPressed(e){
    if (e.charCode === 47 && document.getElementById('narrator').className === 'hidden') {
        console.log('Look at me!');
        document.getElementById('narrator').style.right = '0px';
        document.getElementById('narrator').className = 'visible';
    } else if (e.charCode === 47 && document.getElementById('narrator').className === 'visible') {
        console.log('!Look at me');
        document.getElementById('narrator').style.right = '-380px';
        document.getElementById('narrator').className = 'hidden';
    }
}
