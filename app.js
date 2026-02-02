const scriptURL = "https://script.google.com/macros/s/AKfycbxQU1KSkL9l2rQNUuGOsGdUKMKZDtNZuyz1PGZySPZQaUtnmEmtcs3EqXchdo9X00oAcQ/exec";

document.getElementById("registroForm").addEventListener("submit", async function(e){
    e.preventDefault();

    document.getElementById("mensaje").innerText = "Guardando...";

    const file = document.getElementById("firma").files[0];

    const firmaBase64 = await convertirBase64(file);

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
        habilidades: document.getElementById("habilidades").value,
        firma: firmaBase64
    };

    await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(datos)
    });

    document.getElementById("mensaje").innerText =
        "Registro guardado correctamente";

    document.getElementById("registroForm").reset();
});

function convertirBase64(file){
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
