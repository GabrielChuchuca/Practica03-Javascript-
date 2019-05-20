var num = 1

function hola() {
    var participantes = ['images/foto1.jpg', 'images/foto2.jpg', 'images/foto3.jpg', 'images/foto4.jpg', 'images/foto5.jpg', 'images/foto6.jpg', 'images/foto7.jpg', 'images/foto8.jpg', 'images/foto9.jpg'];
    var num_par = participantes.length;
    numero = (Math.floor(Math.random() * num_par))
    document.getElementById("foto").src = participantes[numero]
    var val = document.getElementById("boton").value = 'Parar';
}

function iniciar() {

    if (document.getElementById('boton').value == 'Iniciar') {
        hola()
        a = setInterval(hola, 2000)
        alert('bien')
        //bandera=false
    } else if (document.getElementById('boton').value == 'Parar') {
        clearInterval(a)
        alert('mal')
        var val = document.getElementById("boton").value = 'Iniciar';

    }
}


function siguiente() {
    var participant = ['images/foto1.jpg', 'images/foto2.jpg', 'images/foto3.jpg', 'images/foto4.jpg', 'images/foto5.jpg', 'images/foto6.jpg', 'images/foto7.jpg', 'images/foto8.jpg', 'images/foto9.jpg'];
    var num_pa = participant.length;
    console.log(num_pa)
    numer = (Math.floor(Math.random() * num_pa))
    //console.log(numer)

    if(numer <= 5){
        numer++
        var fot = document.getElementById('foto')
        fot.src = "images/foto" + numer + ".jpg" 
    }


    /*if (num < 5) {
        num++
        var foto = document.getElementById("foto");
        foto.src = "foto" + num + ".jpg";
    }*/
    

    //var foto = document.getElementById("foto");
    //foto.src = "foto" + num + ".jpg";
    //document.getElementById("foto").src = "foto" + num + ".jpg"


}

function anterior() {
    
    var participant = ['images/foto1.jpg', 'images/foto2.jpg', 'images/foto3.jpg', 'images/foto4.jpg', 'images/foto5.jpg', 'images/foto6.jpg', 'images/foto7.jpg', 'images/foto8.jpg', 'images/foto9.jpg'];
    var num_pa = participant.length;
    console.log(num_pa)
    numer = (Math.floor(Math.random() * num_pa))
    //console.log(numer)

    if(numer >= 0){
        numer--
        var fot = document.getElementById('foto')
        fot.src = "images/foto" + numer + ".jpg" 
    }


    /*if (num < 5) {
        num++
        var foto = document.getElementById("foto");
        foto.src = "foto" + num + ".jpg";
    }*/
    

    //var foto = document.getElementById("foto");
    //foto.src = "foto" + num + ".jpg";
    //document.getElementById("foto").src = "foto" + num + ".jpg"
}