// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCKB1QddlO1FCPLUmJHNNMnZbMhxZuM2qQ",
	authDomain: "brincarcura.firebaseapp.com",
	projectId: "brincarcura",
	storageBucket: "brincarcura.appspot.com",
	messagingSenderId: "632103255052",
	appId: "1:632103255052:web:9da592eb4c72d0d5f38229",
	measurementId: "G-8BBYBW9GRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const collectionHCB = collection(db, "hcb");



// Variaveis 
let txtName = document.getElementById('txtName');
let btnEnviar = document.getElementById("btnEnviar");
let txtEscola = document.getElementById("txtEscola");



// 
btnEnviar.addEventListener("click", () => {

	const subscription = {
		name: txtName.value,
		escola: txtEscola.value,

	}
	salvarDados(subscription);
	// window.location.href = "https://hcb.mjtom.com.br/";

	aviso();
});

// Função enviar para o banco 

async function salvarDados(subscription) {
	const docRef = await addDoc(collectionHCB, subscription);
	return docRef.id
}

// Função para Voltar a Home 

function aviso(Name, Escola) {
	alert(`Continue Doando Voltando para Home da HCB 10 segundos `);
	setTimeout(voltarHome, 10000);
}
function voltarHome() {
	window.location.href = "https://www.hcb.org.br/";
};

// Funcão para Select



function selecionar() {
	var select = document.getElementById("selectDoacao");

	var opcaoTexto = select.options.text;
	var opcaoValor = select.options.value;

	console.log(opcaoTexto); 
	console.log(opcaoValor); 
}


// Função retornar para home 

setTimeout(function() {
	window.location.href = "https://www.hcb.org.br/";
}, 100);