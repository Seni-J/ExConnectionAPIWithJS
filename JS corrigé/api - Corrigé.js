//Création d'une requête XMLHttp
let xhr = new XMLHttpRequest();
//l'API doit retourner la liste des races de chien.
xhr.open('GET', 'https://dog.ceo/api/breeds/list/all', true)
//Au chargement de notre page HTML, on doit mettre à jour notre dropdown list avec la liste des races. 
xhr.onload = function() 
{
  //check if the status is 200(means everything is okay)
  if (this.status === 200) 
  {
  	//Notre requête est retournée en JSON. Il faut donc le parser.
    for (breed in JSON.parse(this.responseText).message) {
      var x = document.getElementById("mySelect");
      var option = document.createElement("option");
      option.text = breed;
      x.add(option);
    }
  }
}
//Envoi de la réponse au serveur
xhr.send();


//Fonction pour le clique sur le bouton. Cette fonction doit:
//1) Retrouver le chien sélectionné dans la dropdown list
//2) Ouvrir une nouvelle requête XML
//3) Utiliser le lien de l'API désiré pour afficher UNE image de la race sélectionnée.
//4) Trouver la bonne fonction pour l'Event Handler
//5) Mettre l'image dans la balise img   
randomImageForSelectedDog = function() {  
	  var dropdownselect = document.getElementById("mySelect");
    //Récupérer 
    var selectedbreed = dropdownselect.options[dropdownselect.selectedIndex].text;
  
    //On a une nouvelle requête avec un nouveau URL.
    let xhrrandomimage = new XMLHttpRequest();
 
    //Notre nouvelle requête XML doit ouvrire une connexion sur l'API des chien et retourner une image aléatoire pour la race de chien sélectionnée.
    xhrrandomimage.open('GET', 'https://dog.ceo/api/breed/'+selectedbreed+'/images/random', true);
  
    xhrrandomimage.onreadystatechange = function() {
        document.getElementById("myImage").src = JSON.parse(this.responseText).message;   
    }
    
    //Envoi de la réponse au serveur
    xhrrandomimage.send();
}   
