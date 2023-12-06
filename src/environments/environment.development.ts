import { initializeApp } from "firebase/app";
export const environment = {
  firebaseConfig : {
    apiKey: "AIzaSyDrsC3V5oArVdYjbHqu7a_vqADLD4Z6iLE",
    authDomain: "easywarehouse-d2722.firebaseapp.com",
    projectId: "easywarehouse-d2722",
    storageBucket: "easywarehouse-d2722.appspot.com",
    messagingSenderId: "655089985598",
    appId: "1:655089985598:web:1eda1fc2b136ce3161496f"
  },
  production: true
};
// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
