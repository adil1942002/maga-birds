// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import {
    getDatabase,
     ref
    , set
    , push
    ,onValue
    ,remove
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
var bName = document.getElementById('bName');
var bdes = document.getElementById('bdes');
var bprice = document.getElementById('bprice');
var bimg = document.getElementById("bimg")


function emt(){
    bName.value = ""
    bdes.value = ""
    bprice.value = ""
    bimg.value = ""
}
var admindata = document.getElementById("admindata")



var pathRef = ref(database, "product/");
var idRef = push(pathRef).key
var proRef = ref(database,`product/${idRef}/`);


window.addpro = function () {
    var proObj = {
        id: idRef,
        bName: bName.value,
        bdes: bdes.value,
        bprice: bprice.value,
        bimg: bimg.value
    }
    set(proRef, proObj)        
    window.location.replace("../admin/admin.html")
}

function getprodata(){
    var getRef = ref(database, "product/");
    onValue(getRef,function(data){
        var getArry = Object.values(data.val()) ;
        showdata(getArry)
    })
}

function showdata(dataArry){
    // admindata.innerHTML = ""
    for(var i = 0 ;i <dataArry.length; i++){
        
        
        admindata.innerHTML += ` <div class="card my-3" style="width: 18rem;">
        <img src="${dataArry[i].bimg}" class="card-img-top " alt="..." width="18rem"
        height = "200px">
        <div class="card-body">
        <h5 class="card-title">${dataArry[i].bName}</h5>
        <p class="card-text">${dataArry[i].bdes}</p>
        </div>
            <ul class="list-group list-group-flush">
            
            <li class="list-group-item">Rs ${dataArry[i].bprice}</li>
            <button type="button" class="btn btn-outline-danger" onclick = "del('${dataArry[i].id}')">Delete</button>
            </ul>
            </div>
            `
        }
        emt()
    }
    
    getprodata()
    
    window.del = function(id){
    remove(ref(database,`product/${id}`))
    window.location.replace("../admin/admin.html")
}
window.back = function () {
    window.location.replace("../../../index.html")
    
}

window.reset = function () {
    window.location.replace("../setPassword/setPasswordindex.html")

}

