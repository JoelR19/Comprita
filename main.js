let conteo = 0;


function agregarCosas(nombre, descripcion, precio, imagen){

    if ( conteo === 0){
        document.getElementById('producto').innerHTML = ``;
    }
    document.getElementById('producto').innerHTML += `
    <div onclick="Mostrar('${nombre}','${descripcion}','${precio}','${imagen}')" class="productico"> 
    <img src="${imagen}" alt="">
    <h2>${nombre}</h2>
    <h3>${descripcion}</h3>
    <p>${precio}</p>
    </div>
    `
    conteo++;
    document.getElementById('carrito').textContent = conteo;
}

function vaciar(){
    document.getElementById('producto').innerHTML = ``
    document.getElementById('carrito').textContent = "";
    conteo= 0;

}

function Mostrar(nombre, descripcion, precio, imagen){
    document.querySelector('.modal-content').innerHTML = `
    <img src="${imagen}" alt="">
    <h2>${nombre}</h2>
    <h3>${descripcion}</h3>
    <p>${precio}</p>

    `
    document.querySelector('.modal').style.display = "block";
}
