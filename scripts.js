function toggleContent(buttonElement) {
    const contentElement = buttonElement.nextElementSibling;
    if (contentElement.style.display === "none" || contentElement.style.display === "") {
        contentElement.style.display = "block";
    } else {
        contentElement.style.display = "none";
    }
}
