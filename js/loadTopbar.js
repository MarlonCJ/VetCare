document.addEventListener("DOMContentLoaded", function() {
    fetch("components/topbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("topbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el topbar:", error));
});
