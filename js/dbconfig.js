const admin = require('firebase-admin');
const serviceAcoount = require('../json/key.json');
console.log(serviceAcoount);

admin.initializeApp({
    Credential: admin.credential.cert(serviceAcoount),
    databaseURL: 'https://simulacion-inventarios.firebaseio.com',
    databaseAuthVariableOverride: null
});
var db = admin.database();
var ref = db.ref()
    // Your web app's Firebase configuration
ref.once("value", function(snapshot) {
    console.log(snapshot.val());
});
/*
var firebaseConfig = {
    apiKey: "AIzaSyDaFj5TltNgYSfYM593vVXdIwTtlGVimqE",
    authDomain: "simulacion-inventarios.firebaseapp.com",
    databaseURL: "https://simulacion-inventarios.firebaseio.com",
    projectId: "simulacion-inventarios",
    storageBucket: "simulacion-inventarios.appspot.com",
    messagingSenderId: "871397150874",
    appId: "1:871397150874:web:f7ada6f4d24fb976234f23",
    measurementId: "G-F6LC5F11CC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.database();*/