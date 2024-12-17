// Importação da configuração do Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configuração do Firebase (use sua configuração real aqui)
const firebaseConfig = {
  apiKey: "AIzaSyAV4ufNzH_l-o7YWueyzccFirjSpCXaBEw",
  authDomain: "equascience-5653d.firebaseapp.com",
  databaseURL: "https://equascience-5653d-default-rtdb.firebaseio.com",
  projectId: "equascience-5653d",
  storageBucket: "equascience-5653d.firebasestorage.app",
  messagingSenderId: "495646348438",
  appId: "1:495646348438:web:23dbe97f4adf6fcfbc5eb7",
  measurementId: "G-BBCPLPH301"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Recupera o banco de dados
const database = getDatabase(app);

// Exporta a instância do banco de dados para ser usada em outros arquivos
export { database };
