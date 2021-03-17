//alert("hola")

/**Funciones para la galería  */


const imagen =  document.querySelectorAll('.tarjeta-zapato img');
const tarjeta =  document.querySelectorAll('.tarjeta-zapato span')
const body=document.querySelector('body');
 
for(let i=0; i<imagen.length; i++){
    

  imagen[i].onclick= function(){
   // imagen[i].classList.add('imgGrande');
    //alert('Hola')
    const overlay= document.createElement('Div');
    overlay.appendChild(imagen[i]);
    overlay.classList.add('overlay');
   
    //mostrar img
  
    body.appendChild(overlay);
    body.classList.add('fijar-body');

   
    
   
     overlay.onclick = function(){
      overlay.remove();
      tarjeta[i].appendChild(imagen[i]);
      body.classList.remove('fijar-body');
     }
     
   
   
  } 

 
    
   
  }


    

