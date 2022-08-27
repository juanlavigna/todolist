let input = document.querySelector("#input");
let botonAgregar = document.querySelector(".boton-agregar")
let contenedor = document.querySelector(".container")

class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }

    crearDiv(nuevaTarea){
        let $inputItem = document.createElement("input")
        $inputItem.type = "text"
        $inputItem.value = nuevaTarea
        $inputItem.disabled = true
        $inputItem.classList.add("item-input")

        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";
        botonEditar.classList.add("boton-editar");

        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");

        let $item = document.createElement("div");
        $item.appendChild($inputItem);
        $item.appendChild(botonEditar);
        $item.appendChild(botonRemover);
        contenedor.appendChild($item)
    }
}