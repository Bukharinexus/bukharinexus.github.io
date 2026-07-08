function loadNexusModule(url, type) {
    if (type === "css") {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
    } else {
        const script = document.createElement("script");
        script.src = url;
        script.async = false;
        document.body.appendChild(script);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadNexusModule("nexus-contrast.css", "css");
    loadNexusModule("nexus-media.js", "js");
    loadNexusModule("nexus-chat.js", "js");

    setTimeout(() => {
        if (typeof fixMissingCardImages === "function") fixMissingCardImages();
        if (typeof initNexusChat === "function") initNexusChat();
    }, 400);
});

if (document.readyState !== "loading") {
    loadNexusModule("nexus-contrast.css", "css");
    loadNexusModule("nexus-media.js", "js");
    loadNexusModule("nexus-chat.js", "js");
    setTimeout(() => {
        if (typeof fixMissingCardImages === "function") fixMissingCardImages();
        if (typeof initNexusChat === "function") initNexusChat();
    }, 400);
}
