var logger = document.getElementById("logger");
logger.innerHTML += `- starting script execution: ${performance
    .now()
    .toFixed(2)}ms<br>`;

async function isReady() {
    let ready = await document.fonts.ready;
    if (ready) {
        document.getElementById("overlay").classList.add("hide");
        logger.innerHTML += `- fonts are loaded: ${performance
            .now()
            .toFixed(2)}ms<br>`;
    }
}

isReady();
