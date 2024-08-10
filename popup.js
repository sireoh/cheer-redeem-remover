const previewIcon = document.getElementById("icon");
const inputBox = document.getElementById("input")

function setPreset() {
    const parent = document.getElementById("presets");
    for (let i = 0; i < parent.childElementCount; i++) {
        const elem = document.getElementById(`preset-${i}`);
        elem.addEventListener("click", (event) => {
            previewIcon.src = event.target.src;
            inputBox.value = event.target.src;

            localStorage.setItem("alt", event.target.alt);
            localStorage.setItem("src", event.target.src);

            sendToContentPage(localStorage.getItem("src"), localStorage.getItem("alt"));
        });
    }
}

function setup() {
    const src = localStorage.getItem("src");

    previewIcon.src = src;
    inputBox.value = src;

    document.getElementById("btn").addEventListener("click", (event) => {
        const inputVal = event.target.previousElementSibling.value;
        const previewIcon = event.target.previousElementSibling.previousElementSibling;
        previewIcon.src = inputVal;
        localStorage.setItem("src", inputVal);

        sendToContentPage(localStorage.getItem("src"), "rewardspoint");
    });
    setPreset();
}
setup();

// ----------------------------------------------------------------------------------------------
// ------------------------------ POST TO CONTENT PAGE ------------------------------------------
// ----------------------------------------------------------------------------------------------
function sendToContentPage(src, alt) {
    // Send a message to the background script
    browser.runtime.sendMessage({
        src: src,
        alt: alt
    })
    .then(response => {
        // Handle the response from the background script
        console.log(`Message from the background script: ${response.response}`);
    })
    .catch(error => {
        // Handle errors that occurred during the message sending
        console.log(`Error: ${error}`);
    });
}
// Send message using data from localStorage
sendToContentPage(localStorage.getItem("src"), localStorage.getItem("alt"));