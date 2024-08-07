let addedEventListener = false;

function getNodes() {
    const elem = document.getElementsByClassName("Layout-sc-1xcs6mc-0 chMBew");
    let obj = {
        "length": elem[0].children.length,
        "arr": []
    };
    for (let i = 0; i < elem[0].children.length; i++) {
        obj.arr.push(elem[0].children[i]);
    }
    return obj;
}

function update() {
    if (getNodes().length === 1) {
        return;
    }

    if (!addedEventListener) {
        const rewardsButton = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonText-sc-ocjdkq-3 ljgEdo fuXDrj");
        rewardsButton[0].addEventListener("click", updatePowerups);
        addedEventListener = true;
    }

    getNodes().arr[0].innerHTML = "";
    getNodes().arr[1].innerHTML = "";
}

setInterval(update, 700);

function updatePowerups() {
    console.log("Updating powerups ...");

    setTimeout(() => {
        for (let i = 0; i <= 6; i++) {
            const elem = document.getElementsByClassName("Layout-sc-1xcs6mc-0 ftDwiu rewards-list");
            elem[0].children[i].innerHTML = "";
        }

        //Debug
        updateTopMenu();
    }, 700);
}

// function getChildren(str) {
//     let arr = [];
//     const elem = document.getElementsByClassName(str);
//     const btn = elem[0].children;
//     for (let i = 0; i < btn.length; i++) {
//         arr.push(btn[i]);
//     }
//     return arr;
// }

function updateTopMenu() {
    //Setup Constants
    const elem = document.getElementsByClassName("Layout-sc-1xcs6mc-0 gNStSQ");
    const botRow = document.getElementsByClassName("Layout-sc-1xcs6mc-0 krMWyI");
    
    //Update Top Row
    const kebab = elem[0].children[1];
    kebab.innerHTML = "";
    const topText = elem[0].children[0].children[0].children[0].children[0].children[1];
    topText.outerHTML = "";

    //Add Close Button
    botRow[0].children[1].innerHTML = "";
}