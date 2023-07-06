// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpJsOrR_ylK3RSsQ1cdE7hw4kEab9UXsE",
    authDomain: "maga-birds.firebaseapp.com",
    databaseURL: "https://maga-birds-default-rtdb.firebaseio.com",
    projectId: "maga-birds",
    storageBucket: "maga-birds.appspot.com",
    messagingSenderId: "912870320397",
    appId: "1:912870320397:web:278d08d89ab762fdfda844",
    measurementId: "G-44K5W1WHE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var password = document.getElementById("password")
function call() {   

    window.location.replace("/index.html")
}
window.setPassword = function () {
    
    var userRef = ref(database, "setPassword/");
    
    var obj = {
        password: password.value
    }
    set(userRef,obj)
    setTimeout(function(){
        call()
        },3000)
        password.value = ""
}

window.Back = function(){
    window.location.replace('../admin/admin.html')
}
