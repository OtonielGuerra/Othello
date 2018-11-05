var btnSesion = document.getElementById('btnSesion')
var btnLogout = document.getElementById('btnLogout')
var refDataBase = firebase.database().ref('usuario')

console.log(firebase);

btnSesion.addEventListener('click',function(){
    btnSesion.style.display = 'none';
    btnLogout.style.display = 'block';
    /*EVITA QUE SE REFRESQUE LA PAGINA */event.preventDefault();
    /*INDICA DE DONDE VA A AUTENTIFICAR*/var provider = firebase.auth.GoogleAuthProvider();
    console.log(firebase)
    provider.addScope('https:// www.googleapis.com/auth/contacts/readonly')
    var usuario = {
        DisplayName: datosUsuario.user.displayName,
        email: datosUsuario.user.email,
        uid: datosUsuario.user.uid
    };
    ref
    firebase.auth().signInwithPopup(provider).then(function(datosUsuario){
        console.log(datosUsuario);
    });
    
});

btnLogout.addEventListener('click',function(){
    btnSesion.style.display = 'block';
    btnLogout.style.display = 'none';
    
    firebase.auth().singOut().then(function(){
        alert('Sesion finalizada')
    })
})