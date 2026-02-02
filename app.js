document.getElementById("registroForm").addEventListener("submit", function(e){
    e.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        documento: document.getElementById("documento").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        perfil: document.getElementById("perfil").value,
        fecha: new Date().toISOString()
    };

    console.log("Datos enviados:", datos);

    document.getElementById("mensaje").innerText =
        "Datos guardados correctamente";

    document.getElementById("registroForm").reset();
});
