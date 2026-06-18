//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator

// Operator	    Checks Value?	Checks Data Type?	Converts Types?
// != (Loose)	Yes	            No	                Yes
// !== (Strict)	Yes	            Yes	                No

const PI = 3.14;

if(PI === "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}