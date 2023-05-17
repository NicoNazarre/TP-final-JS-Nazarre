const botonFondo = document.getElementById("botonFondo");

botonFondo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "light");
    }
})

const modo = localStorage.getItem("modo");

if(modo === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark")
}

