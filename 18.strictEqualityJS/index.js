//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator

// Operator	    Checks Value?	Checks Data Type?	Converts Types?
// != (Loose)	Yes	            No	                Yes
// !== (Strict)	Yes	            Yes	                No


// you should almost always use !== (and its partner ===).Because != tries to guess and convert types behind the scenes, it can lead to really weird, hard - to - find bugs in your code.Using !== forces you to be explicit and keeps your code predictable!
const PI = 3.14;

if (PI === "3.14") {
    console.log("That is NOT Pi");
}
else {
    console.log("That is Pi");
}