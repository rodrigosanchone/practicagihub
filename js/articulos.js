//alert("holaSS")

document.addEventListener('DOMContentLoaded',function(){
  iniciarApp();
  //alert("hola")
}
);

function iniciarApp(){
    mostrarArticulos();
}

async function mostrarArticulos(){
    try{
        
      const traerArticulos = await fetch('js/articulos.json');
      const db= await traerArticulos.json();
      const{
        articulos
        }= db; //extraigo los datos de la db

        //genero el html
        articulos.forEach((articulo)=>{
            const{
                id,
                titulo,
                img,
                texto
            }=articulo;
            //dom scripting
            //generarl el nombre del articulo
            const tituloArticulo = document.createElement('H2');
            tituloArticulo.textContent = titulo;

            //genero la imagen
            const imgArticulo = document.createElement('IMG');
            imgArticulo.src = img;
            imgArticulo.classList.add('imgArticulo');
            //genero el texto
            const textoArticulo = document.createElement('P');
            textoArticulo.textContent = texto;
            textoArticulo.classList.add('textoArticulo');
            //genero el div que contiene el articulos
            const articuloDiv= document.createElement('Div');
            articuloDiv.classList.add('articulo');
            const contenedorArt= document.createElement('DIV');
            //creo un div para contenedr el textto y img
              contenedorArt.classList.add('contenedorArt');
            

             contenedorArt.appendChild(textoArticulo);
             contenedorArt.appendChild(imgArticulo);
              
             articuloDiv.appendChild(tituloArticulo)
             articuloDiv.appendChild(contenedorArt);
             


            //inyectar articulos al html
            document.querySelector('.articulos').appendChild(articuloDiv);


        })
    }catch(error){
        console.log(error)
    }
   


    
}