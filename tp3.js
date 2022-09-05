/* Pour le premier slide */
var i = 0;//start point
var images = [];//tableau d'image
var time=1000;

//List d'image
images[0] ='image/img1-jumia.jpg';
images[1] ='image/img2-jumia.jpeg';
images[2] ='image/img3-jumia.jpg';
images[3] ='image/img4.jpg';

//fonction change image
function changeimg(){
    document.slide.src = images[i];
    if(i<images.length-1){
    i++;
    } else{
        i=0;
    }
    setTimeout("changeimg()",time);
}
window.onload = changeimg;


//Partie slide2

var monImage=document.getElementsByClassName('imageSlide');
for(var index=0; index<monImage.length; index ++)
{
   monImage[index].innerHTML=monImage;
    console.log(monImage);
}
//Partie boutton

 

function next(){
var pre= document.getElementById("arrow1"); 
var next= document.getElementById("arrow2");
var conteneur= document.getElementById("conteneur");
conteneur.classList.remove("mvt-left");
conteneur.classList.add("mvt-right");
console.log(conteneur);


}
function pre(){
    var pre= document.getElementById("arrow1"); 
    var next= document.getElementById("arrow2");
    var conteneur= document.getElementById("conteneur");
    conteneur.classList.remove("mvt-right");
    conteneur.classList.add("mvt-left");
    console.log(conteneur);
    
    
    }
    //Partie listes d'éléments
   /*  var array = [];
    var j = 0;
    var monI=0;
    array[0]= '<li><a href="#"><i class="fa fa-mobile" aria-hidden="true"></i>Téléphone et tablette</a></li>'
    array[1] =' <li><a href="#"><i class="fa fa-shopping-basket" aria-hidden="true"></i>Supermarché</a></li>'
    array[2] ='<li><a href="#"><i class="fa fa-medkit" aria-hidden="true"></i>Santé et beauté</a></li>'
    array[3] ='<li><a href="#"><i class="fa fa-television" aria-hidden="true"></i>Electronique</a></li>'
   */

 /*     for(var j=0; j<array.length;j++)
{
    var lien = document.getElementById('part1');
    lien.innerHTML=array[i];
    console.log(array);
}  */

/* var recupere=document.getElementsByClassName('lien');
for( monI=0; monI<array.length; monI++)
{
    recupere.innerHTML=array[j];
  /*  monImage[index].innerHTML=monImage; */
  /*   console.log(array);
}
for(j=0; j<array.length; j++){
    array[j].iz
} */
