



var numCase = 0 ;

fetch('data.json').then(function (response) {
    response.json().then(function (data) {
        console.log(data);

        data.forEach(function (e) {
            document.querySelector(".liste-analogies").innerHTML +=
                '<div class="block"' + " id='id" + numCase + "'>"
                +"<p class='titre'> Si j'étais" + 
                data[numCase]['analogie'] + ', je serais' + data[numCase]['valeursAnalogies']
                + "<img class=image src=" +  data[numCase]['illustration'] + ">"  
                +"<div class='texte'>" + data[numCase]['explication']  + "</div>"  
                numCase +=1 ;
        })

///couleur de fond//
var click = true; 

//block couleur//
var selectors = document.querySelectorAll('#id0')
 selectors.forEach ( function select (select){
    select.addEventListener('click', function(e){
        if(click==true){
            select.style.backgroundColor = '#AAACA9'
             click = false
        }
        else{
            select.style.backgroundColor = '#F5FFFF'
             click = true
        }
          })

 })

 //block objet//
 var selectors = document.querySelectorAll('#id1')
 selectors.forEach ( function select (select){
    select.addEventListener('click', function(e){
        if(click==true){
            select.style.backgroundColor = '#ABC3B6'
             click = false
        }
        else{
            select.style.backgroundColor = '#F5FFFF'
             click = true
        }
          })

 })

  //block sport//
 var selectors = document.querySelectorAll('#id2')
 selectors.forEach ( function select (select){
    select.addEventListener('click', function(e){
        if(click==true){
            select.style.backgroundColor = '#DFDEDC'
             click = false
        }
        else{
            select.style.backgroundColor = '#F5FFFF'
             click = true
        }
          })

 })

//block paysage//
 var selectors = document.querySelectorAll('#id3')
 selectors.forEach ( function select (select){
    select.addEventListener('click', function(e){
        if(click==true){
            select.style.backgroundColor = '#98D3F1'
             click = false
        }
        else{
            select.style.backgroundColor = '#F5FFFF'
             click = true
        }
          })

 })

//block animal//
var selectors = document.querySelectorAll('#id4')
selectors.forEach ( function select (select){
   select.addEventListener('click', function(e){
       if(click==true){
           select.style.backgroundColor = '#4E6D41'
            click = false
       }
       else{
           select.style.backgroundColor = '#F5FFFF'
            click = true
       }
         })

})

//block élément//
var selectors = document.querySelectorAll('#id5')
selectors.forEach ( function select (select){
   select.addEventListener('click', function(e){
       if(click==true){
           select.style.backgroundColor = '#EBF2FA'
            click = false
       }
       else{
           select.style.backgroundColor = '#F5FFFF'
            click = true
       }
         })

})

//block etre vivant//
var selectors = document.querySelectorAll('#id6')
selectors.forEach ( function select (select){
   select.addEventListener('click', function(e){
       if(click==true){
           select.style.backgroundColor = '#AF8F5C'
            click = false
       }
       else{
           select.style.backgroundColor = '#F5FFFF'
            click = true
       }
         })

})
 
 
})
})

//formulaire API
 document.querySelector('#valider').addEventListener('click', function(e){
    //  console.log("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=" + document.querySelector('#mail').value + "&message=Si j'étais..." + document.querySelector('#analogie').value + " je serais... " + document.querySelector('#valeursAnalogies').value);

    var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=" + document.querySelector('#mail').value + "&message=Si j'étais..." + document.querySelector('#analogie').value + " je serais... " + document.querySelector('#valeursAnalogies').value + " parce que " + document.querySelector("#explication").value;

     fetch(urlVisitee).then(function(response) {
        response.json().then(function(data){
             console.log("Réponse reçue : ")
             console.log(data);
            if(data.status == "success"){
            document.querySelector("#messageApresEnvoi").innerHTML = "Votre message a bien été reçu"
        }else{
            document.querySelector("#messageApresEnvoi").innerHTML = "Le message n'a pas été reçu" ;
        }
        })
      })
      

 })





// let url = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=andrea.laizeau&courriel=" + document.querySelector("#mail").value + "&message= Si j'étais..." + document.querySelector("#analogie").value + " je serais..." + document.querySelector("#valeursAnalogie").value + " parce que " + document.querySelector("#explication").value

//     //Envoi des données
//     fetch(url).then(function(response) {

//         //Affichage de la réponse
//         response.json().then(function(data) {
//             console.log(data)

//         })
//     })

    

