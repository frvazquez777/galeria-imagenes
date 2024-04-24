/*Name this external file gallery.js*/

function upDate(previewPic){
        console.log('Cargando Imagen...')
    
        document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
        document.getElementById('image').innerHTML = previewPic.alt;

       }
   
       function unDo(){
        console.log('CRestaurando Div')

       document.getElementById('image').style.backgroundImage = "url('')";
       document.getElementById('image').innerHTML = "Hover over an image below to display here.";
   
       }