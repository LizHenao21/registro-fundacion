// Importaciones Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3bqzkdKkCfaqDznHC75iVZyMKFuFpVNA",
  authDomain: "registro-fundacion.firebaseapp.com",
  projectId: "registro-fundacion",
  storageBucket: "registro-fundacion.firebasestorage.app",
  messagingSenderId: "494634663720",
  appId: "1:494634663720:web:9902f9987a5c84a5185a1d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Evento formulario
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
        habilidades: document.getElementById("habilidades").value,
        fechaRegistro: new Date()
    };

    await addDoc(collection(db, "participantes"), datos);

    document.getElementById("mensaje").innerText =
        "Información guardada correctamente";

    document.getElementById("registroForm").reset();
});
