// Immediately Invoked Function Expressions (IIFE)
 
(function Chai(){                        //this is named iife
    console.log(`DB COONNECTED`);  
})();
// must put a semicolon(;) after a iife because it dont know where to stop the context

( () => {                        //this is unnamed iife which should be an arrow fucntion
    console.log(`DB COONNECTED ARROW`);  
})();

//parameter passing
(function Chai(name){                     
    console.log(`DB COONNECTED ${name}`);  
})("Shiv");

( (name) => {                       
    console.log(`DB COONNECTED ARROW ${name}`);  
})("Nidhi"); 

// () () ,second parantheses is for function call
