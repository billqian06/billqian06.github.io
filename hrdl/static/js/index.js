// Replaces an <img>/<video> whose file has not been added yet with a labeled placeholder box,
// so a figure appears automatically once it is saved at the path shown in the box.
// Called from inline onerror handlers, so it must be defined before the page body loads.
function hrdlPlaceholder(el) {
    var media = el.tagName === "SOURCE" ? el.parentNode : el;
    if (!media || !media.parentNode || media.getAttribute("data-placeholder-shown")) {
        return;
    }
    media.setAttribute("data-placeholder-shown", "1");

    var box = document.createElement("div");
    box.className = "figure-placeholder";
    if (media.getAttribute("data-ratio")) {
        box.style.aspectRatio = media.getAttribute("data-ratio");
    }

    var icon = document.createElement("span");
    icon.className = "icon is-large";
    icon.innerHTML = media.tagName === "VIDEO"
        ? '<i class="fa-regular fa-file-video fa-2x"></i>'
        : '<i class="fa-regular fa-image fa-2x"></i>';

    var title = document.createElement("p");
    title.className = "placeholder-title";
    title.textContent = media.getAttribute("data-label") || "Figure placeholder";

    var path = document.createElement("p");
    path.className = "placeholder-path";
    path.textContent = "hrdl/" + el.getAttribute("src");

    box.appendChild(icon);
    box.appendChild(title);
    box.appendChild(path);
    media.parentNode.replaceChild(box, media);
}

function copyBibtex(button) {
    var text = document.getElementById("bibtex-text").textContent;
    navigator.clipboard.writeText(text).then(function () {
        var label = button.querySelector(".copy-label");
        label.textContent = "Copied!";
        setTimeout(function () {
            label.textContent = "Copy";
        }, 1500);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.hljs) {
        hljs.highlightAll();
    }
});
