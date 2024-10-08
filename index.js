// ----------------------------TESTING -----------------------------------------------
function handleMessage(request, sender, sendResponse) {
    console.log(`Message from background script: ${JSON.stringify(request)}`);
    
    // Process the data
    let data = request;
    // console.log(data);
    
    // For example, you can set this data into some global variable or directly use it
    setRewardsPointIcon(data.src, data.alt);
    localStorage.setItem("src", data.src);
    localStorage.setItem("alt", data.alt);
    
    // Send response back to the background script
    sendResponse({ response: "Data received in content script" });
}

// Listen for messages from the background script
browser.runtime.onMessage.addListener(handleMessage);
// ----------------------------TESTING -----------------------------------------------
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

    setRewardsPointIcon(localStorage.getItem("src"), localStorage.getItem("alt"));
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

function buildIcon(src, alt) {
    console.log("data from buildIcon", src, alt);
    return `<div class="Layout-sc-1xcs6mc-0 gfgICc channel-points-icon channel-points-icon--medium">
        <img src="${ src }" alt="${ alt }" />
    </div>`;
}

function setRewardsPointIcon(src, alt) {
    const icon = document.getElementsByClassName("Layout-sc-1xcs6mc-0 gfgICc channel-points-icon channel-points-icon--medium")[0].children[0].children[0];
    icon.parentElement.outerHTML = buildIcon(src, alt);
}