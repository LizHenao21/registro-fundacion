const scriptURL = "https://script.google.com/macros/s/AKfycbxQU1KSkL9l2rQNUuGOsGdUKMKZDtNZuyz1PGZySPZQaUtnmEmtcs3EqXchdo9X00oAcQ/exec";

document.getElementById("registroForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("mensaje").innerText = "Guardando...";

    const file = document.getElementById("firma").files[0];

    convertirBase64(file).then(firmaBase64 => {

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

        fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(datos)
        });

        document.getElementById("mensaje").innerText =
            "Registro enviado correctamente";

        document.getElementById("registroForm").reset();
    });
});

function convertirBase64(file){
    return new Promise((resolve)=>{
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });
}
