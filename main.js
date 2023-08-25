function cambiarTabla() {
    var tabla1 = document.getElementById("tabla1");
    var tabla2 = document.getElementById("tabla2");

    if (tabla1.classList.contains("hidden")) {
        tabla1.classList.remove("hidden");
        tabla2.classList.add("hidden");
    } else {
        tabla1.classList.add("hidden");
        tabla2.classList.remove("hidden");
    }
}
