const firebaseConfig = {
  apiKey: "AIzaSyBW5QR5IkZ3ZZJ05-WPTxnsQbN6d5azgJk",
  authDomain: "projeto2miateste-d9ace.firebaseapp.com",
  projectId: "projeto2miateste-d9ace",
  storageBucket: "projeto2miateste-d9ace.appspot.com",
  messagingSenderId: "1050654415338",
  appId: "1:1050654415338:web:86cb05bbb5b237f4fbba93"
};

firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log("Usuário logado : ", user)
    })
    .catch((error)=>{
      const errorMessage = error.message;
      console.error("Erro de autenticação : ", errorMessage)
    });
});

