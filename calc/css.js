// let f; // we'll assign something to this later

//  function Hello() {
//     let scoped = 42;

//     // The name "scoped" can be used anywhere between the braces
//     // console.log(scoped); // 42

//     // The creation of this function -- this closure -- will "capture", or remember,
//     // the scope it's created within
//     return function imAClosure() {
//          scoped ;
//     }

    

//     // Copy the function closure to a variable outside the braces
   
    
// }
// f= imAClosure(); 

// console.log(f());

// // The name "scoped" can't be used outside the braces; its scope doesn't extend that far
// // console.lhelloog(f); // error

// // Yet the function closure still can
// // console.log(Hello()); // 42