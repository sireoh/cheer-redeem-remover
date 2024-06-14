/* #region constants. */
const cheerRewardRemovalDelay = 3 * 60 * 1000;
const initDelay = 10 * 1000;
const cardRemovalDelay = 1 * 1000;
var cheerCardDelayer = null;
/* #endregion constants. */

function removeCheerButton() {
    //Remove CheerIcon from Button
    const cheerIcon = document.querySelectorAll('.kKpGeT');
    const cheerText = document.querySelector('.cFdOrq');
    cheerIcon[0].innerHTML = "";
    cheerText.innerHTML = "";

    setTimeout(removeCheerButton, cheerRewardRemovalDelay);
    console.log("Removing cheer reward button.");

    //Add Event to on-click to remove the cards
    const rewardPointButton = document.querySelector('[aria-label="Bits and Points Balances"]');
    rewardPointButton.addEventListener('click', function() {
        console.log("Menu has been open.");
        cheerCardDelayer = setTimeout(removeCheerCards, cardRemovalDelay);
    });
}

function removeCheerCards() {
    //Remove Labels
    const labels = document.querySelectorAll('.ZvPWT');
    labels.forEach(e => {
        e.innerHTML = "";
        e.classList.remove('ZvPWT');
    });

    //Remove PowerUps
    const powerUps = document.querySelectorAll('.iqUbUe');
    for (let i = 1; i <= 3; i++) {
        powerUps[i].innerHTML = "";
        powerUps[i].classList.remove('iqUbUe');
    }

    //Remove PowerUps Header
    const powerUpHeader = document.querySelector('.fTcnjG');
    powerUpHeader.innerHTML = "";
    powerUpHeader.classList.remove('fTcnjG');

    //Move the X Button Back
    const redeemHeader = document.querySelector('.gNStSQ');
    redeemHeader.style.justifyContent = 'flex-end';
    redeemHeader.style.alignItems = '';
    redeemHeader.classList.remove('gNStSQ');

    //HeaderButtons
    const headerButtons = document.querySelector('.krMWyI');
    headerButtons.innerHTML = "";
    headerButtons.classList.remove('krMWyI');

    //Remove the Kebab Menu in the Header
    const headerDivs = document.querySelectorAll('.nvdeE');
    const headerKebab = headerDivs[0];
    const redeemClose = headerDivs[1];

    headerKebab.innerHTML = "";
    headerDivs.forEach(e => {
        e.style.justifyContent = "flex-end";
        e.style.flexDirection = "";
        e.style.marginLeft = '0';
        e.style.marginRight = '0.5rem';
    });
    console.log("Removing cheer cards.");
    clearTimeout(cheerCardDelayer);
}

setTimeout(removeCheerButton, initDelay);