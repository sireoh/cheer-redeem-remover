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
    }, 700);
}
