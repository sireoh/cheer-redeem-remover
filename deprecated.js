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