//Llamando a un node del DOM
let root = document.querySelector("#root");

//Comentario
//root.innerHTML = `Hola mundo`;


//Elemento de tipo div
let div_formularios = document.createElement("div");
div_formularios.className = "div-formularios";

//Lista de textos
let formularios = [
    {nombre: "login", link:"componentes/login/login.html"},

    {nombre: "Formulario de Contacto", link:"Componentes/formularioDeContacto/formularioDeContacto.html"},
    {nombre: "Formulario de Regristro", link:"componentes/formularioDeRegistro/formularioDeRegistro.html"},
    {nombre: "Formulario De Busqueda", link:"componentes/formularioDeBusqueda/formularioDeBusqueda.html"},
    {nombre: "Formulario de Pedido de Compras", link:"componentes/formularioDePedidoCompras/formularioDePedido.html"},
    {nombre: "Formulario de Comentarios de Reseñas", link:"componentes/formularioDeComentariosReseñas/formularioComentario.html"},

];  

// forEach



//se les llama metodos o funciones
// forEach
formularios.forEach( itemlista =>{

    let div_item = document.createElement("a");
        div_item.className = "Item";
        div_item.href = itemlista.link;
        div_item.innerText = itemlista.nombre;

        div_formularios.appendChild(div_item);
 });

 root.appendChild(div_formularios);

// Agrego al nodo root, el elemento div_formulario
    //root.appendChild(div_formularios); 