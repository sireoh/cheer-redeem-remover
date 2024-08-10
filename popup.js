const data = {
    presets:  [
        {
            alt: "huhcat",
            src: "https://res.cloudinary.com/dodz2eoby/image/upload/v1723259424/huhcat_asgbyj.gif",
        },
        {
            alt: "catwalk",
            src: "https://res.cloudinary.com/dodz2eoby/image/upload/v1723259433/catwalk_hqvjgy.gif",
        },
        {
            alt: "dogwiggle",
            src: "https://res.cloudinary.com/dodz2eoby/image/upload/v1723259434/dogwiggle_ik45ex.gif",
        },
        {
            alt: "dogsniff",
            src: "https://res.cloudinary.com/dodz2eoby/image/upload/v1723259437/dogsniff_yep4lj.gif",
        },
        {
            alt: "catblink",
            src: "https://res.cloudinary.com/dodz2eoby/image/upload/v1723259461/catblink_chqrqc.gif",
        },
        {
            alt: "rickroll",
            src: "https://res.cloudinary.com/dodz2eoby/image/upload/v1723259689/rickroll_cjwqy1.gif",
        },
    ]
}
const previewIcon = document.getElementById("icon");
const inputBox = document.getElementById("input")

function createPresets() {
    const parent = document.createElement("div");

    for (let i = 0; i < data.presets.length; i++) {
        const child = document.createElement("img");
        child.src = data.presets[i].src;
        child.alt = data.presets[i].alt;
        child.width = "28px";
        child.height = "28px";
        parent.appendChild(child);
    }
}

function setPreset() {
    const parent = document.getElementById("presets");
    for (let i = 0; i < parent.childElementCount; i++) {
        const elem = document.getElementById(`preset-${i}`);
        elem.addEventListener("click", (event) => {
            previewIcon.src = event.target.src;
            inputBox.value = event.target.src;

            localStorage.setItem("alt", event.target.alt);
            localStorage.setItem("src", event.target.src);
        });
    }
}

function setup() {
    const src = localStorage.getItem("src");

    previewIcon.src = src;
    inputBox.value = src;

    document.getElementById("btn").addEventListener("click", update);
    setPreset();
}

function update() {
    const inputVal = document.getElementById("input").value;
    previewIcon.src = str;
    localStorage.setItem("src", inputVal);
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

  