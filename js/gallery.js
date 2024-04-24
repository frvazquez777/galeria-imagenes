/*Name this external file gallery.js*/

function upDate(previewPic){
        console.log("Evento upDate disparado");
        console.log("Alt: ", previewPic.alt);
        console.log("Fuente: ", previewPic.src);
        
        // Cambiar el texto del elemento con id "image"
        document.getElementById('image').textContent = previewPic.alt;
        
        // Cambiar la imagen de fondo del elemento con id "image"
        document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";


       }
   
       function unDo(){
        console.log("Evento unDo disparado");
    
        // Restaurar la imagen de fondo original del elemento con id "image"
        document.getElementById('image').style.backgroundImage = "url('')";
        
        // Restaurar el texto original del elemento con id "image"
        document.getElementById('image').textContent = "Hover over an image below to display here.";
     
       }