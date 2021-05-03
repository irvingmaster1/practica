
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAjgm14NGsCDyJ1G_gpljXZB7XfroZR8As",
    authDomain: "irvinglogin.firebaseapp.com",
    projectId: "irvinglogin",
    storageBucket: "irvinglogin.appspot.com",
    messagingSenderId: "55542577008",
    appId: "1:55542577008:web:88c739e7a72e538c6201b5",
    measurementId: "G-L7DGWD4Q1E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //login
  var firebasel=
  document.querySelector(".buttons");
  var firebaseEmail=
  document.querySelector(".correo");
  var firebasecontraseña=
  document.querySelector(".contraseña");

  //registro
  var firebaseR=
  document.querySelector(".botons");
  var firebaseREmail=
  document.querySelector(".mail");
  var firebaseRcontraseña=
  document.querySelector(".contra");
  
  

  let guardar=
document.querySelector(".form-register");
let enter=
document.querySelector(".form-login");

function ward(){
    guardar.style.display="block";
    enter.style.display="none";
  }
  function regresar(){
    guardar.style.display="none";
    enter.style.display="block";
  }
function registro(){
  firebase.auth().createUserWithEmailAndPassword(firebaseREmail.value, firebaseRcontraseña.value)
  .then((user) => {
    // Signed in
    alert("gracias por tus datos crack!");
    //dat.style.display="block";
    //guardar.style.display="none";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
function entrar(){
    // [START auth_signin_password]
  firebase.auth().signInWithEmailAndPassword(firebaseEmail.value, firebaseP.value)
    .then((userCredential) => {
      // Signed in
      entrar.style.display="none";
      dat.style.display="block"
      alert("Ajas sabe escribir su contraseña");
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      alert("Uhhhh no sabe escribir");
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  // [END auth_signin_password]
}
function regisGoogle(provider) {
  var provider = new firebase.auth.GoogleAuthProvider();
  // [START auth_google_signin_popup]
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      //al entrar
      alert("Dinero!, gracias bro.");
      dat.style.display="block";
      entrar.style.display="none";
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
function regisFacebook(provider) {
  var provider = new firebase.auth.FacebookAuthProvider();
  // [START auth_facebook_signin_popup]
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // The signed-in user info.
      var user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;
      //al entrar
      alert("por FB pagan mas ñam ñam.");
      dat.style.display="block";
      entrar.style.display="none";
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      // ...
    });
}
//Lo