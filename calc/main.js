 const ecranE = document.querySelector("#ecran");

 const clearLastEl = document.querySelector(".clearLastEl");

 const clear = document.querySelector(".clear");

 const dot = document.querySelector(".changeop");

 const numbersEl = document.querySelectorAll(".number");

// On stocke la valeur de l'écran "précédent"
let precedent = 0;

// On stocke l'affichage
let affichage = "";
// let  newaffichage = "";

// On stocke l'opération
let op = "";

let point = false ;
// let newaffichage = "";

// let newaffichage = "";


    // On écoute les clics sur les touches
    let touches = document.querySelectorAll("button");

    
    touches.forEach(touche => {
        touche.addEventListener("click", gererTouches );
        
    });

 
function gererTouches(){
    
  let touche = this.innerText ;
    // console.log(this.innerText );

    if (touche === "." && point === false) {
      point = true ;

    }else if (touche === "." && point) {
      return ;
    }
   
      
   
 

    
    // On vérifie si chiffre ou .
     if(parseFloat(touche) >= 0 || touche === "." ){


      // if (affichage === "") {
   
      //   affichage = touche;
        
      // }else{
      //   affichage= affichage + touche;
      // }

       
      //  affichage= touche;
      affichage = (affichage === "")? touche : affichage + touche ;
    
   
        ecranE.innerText = affichage;

        console.log(ecranE.innerText);

    }else{
        switch(touche){
            
            case "+":
            case "-":
            case "*":
            case "/":   
  
              
                precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), op);
            
                ecranE.innerText = precedent ;
                 
                op = (op === touche && !point)  ? touche :touche + (point = false)  ;
              
                op = touche ;
                
                affichage = "" ;

                break;

            case "=":
        
                precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), op);
                
                ecranE.innerText = precedent;
                
                affichage = precedent;
            
                precedent = 0;

                // affichage = "";

                break;
      
        }

     



        clear.addEventListener("click", () => {
         
           affichage = "";  
           ecranE.innerText = 0;
           point = false ;
          
        });


      //   dot.addEventListener("click", () => {
         
      //            if (touche === "." && !point) {
      //              point = true;
      //            }elseif(touche === "." && point){
      //              return;
      //            }
      //  });


       clearLastEl.addEventListener("click", () => {
         
     
         ecranE.innerText = affichage.slice(0,-1)
           

      });
      


      



      }
 
    
}







function calculer(a, b, op) {

   
  switch (op) {
     
  
      case '+':
        return a + b
        break;
      case '-':
        return a - b
        break;
      case '*':
        return a * b
        break;
      case '/':
        return a / b
        break;

       
      
    }
  
  }
  
  
// console.log(calculer(6, 8, x));

// const  x = 2;
//   x = 1;
// function hilali (){
   
//   console.log(x);
// }

// hilali();
































///////////////////////////////////:::::::::::::::::::::::::::::::::::::::::::::





