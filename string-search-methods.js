// 1. IndexOf (searches form left, counts from left ) (can't take regex)
let text_1 = "please do what I'm doing and he does";
console.log(text_1.indexOf("a"));
console.log(text_1.indexOf("do"));
console.log(text_1.indexOf("c")); // returns -1 if not found
// 1.1 LastIndexOf (searches form right, counts from left)
console.log(text_1.lastIndexOf("do"));
//2nd parameter > stars searching from the 2nd parameter instead of beginning but counts from the first.
console.log(text_1.indexOf("do", 8)); //search from 8 to right
console.log(text_1.lastIndexOf("do", 30)); //search from 30 to left

// 2. Search (can't take 2nd parameters)
console.log(text_1.search("do"));

// 3. Match, MatchAll

// 4. Includes
let text_2 = "USA is the only one superpower currently";
console.log(text_2.includes("only"));
console.log(text_2.includes("cow"));

// 5. Starts With
console.log(text_2.startsWith("the")); //false
console.log(text_2.startsWith("USA")); //true
console.log(text_2.startsWith("is", 2)); //false
console.log(text_2.startsWith("superpower", 20)); // 20 is the length. 's' is the start of length 20.

// 6. Ends With
console.log(text_2.endsWith("y")); //true
console.log(text_2.endsWith("currently")); //true
console.log(text_2.endsWith("n", 18)); //18 is the length. 'n' is at the end of length 18.
