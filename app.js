document.getElementById("registroForm").addEventListener("submit", function(e){
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
        habilidades: document.getElementById("habilidades").value,
        fechaRegistro: new Date().toISOString()
    };

    console.log("Hoja de vida registrada:", datos);

    document.getElementById("mensaje").innerText =
        "Información registrada correctamente";

    document.getElementById("registroForm").reset();
});
