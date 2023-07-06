// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import {
    getDatabase,
     ref
    ,onValue
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


var home = document.getElementById("home")

var renderRef = ref(database,"product/")
onValue(renderRef,function(data){
    var objarry = Object.values(data.val())
for(var i = 0 ; i < objarry.length; i++){

    home.innerHTML += `<div class="card my-3" style="width: 18rem; ">
    <img src="${objarry[i].bimg}" class="card-img-top" alt="..." width="18rem" height = "200px"
    >
    <div class="card-body">
      <h5 class="card-title">${objarry[i].bName}</h5>
      <p class="card-text">${objarry[i].bdes}</p>
    </div>
    <ul class="list-group list-group-flush">
    
      <li class="list-group-item">Rs ${objarry[i].bprice}</li>
    </ul>
  </div>
`
}

})







window.checking = function(){
    window.location.pathname = "./pages/checkPassword/check.html"  
}