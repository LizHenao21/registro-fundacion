const scriptURL = "https://script.google.com/macros/s/AKfycbxQU1KSkL9l2rQNUuGOsGdUKMKZDtNZuyz1PGZySPZQaUtnmEmtcs3EqXchdo9X00oAcQ/exec";

document.getElementById("registroForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        documento: document.getElementById("documento").value,
        nacimiento: document.getElementById("nacimiento").value,
        direccion: document.getElementById("direccion").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        perfil: document.getElementById("perfil").value,
        educacion: document.getElementById("educacion").value,
        experiencia: document.getElementById("experiencia").value,
        habilidades: document.getElementById("habilidades").value
    };

    document.getElementById("mensaje").innerText = "Guardando...";

    await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(datos)
    });

    document.getElementById("mensaje").innerText =
        "Registro guardado correctamente";

    document.getElementById("registroForm").reset();
});
