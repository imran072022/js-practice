// STRING METHODS
// 1. Indexing (use "at and []")
let index = "Javascript";
console.log(index[2]);
console.log(index.at(-3)); //Can be used for negative
console.log(index.charAt(4));
console.log(index.charCodeAt(5)); //gives Unicode of that character

// 2. Concat
let txt1 = "How";
let txt2 = "are";
let txt3 = "you?";
console.log(txt1.concat(txt2));
console.log(txt1.concat(" ").concat(txt2)); //Space between them
console.log(txt1.concat(" ", txt2));
console.log(txt1.concat(" ", txt2, " ", txt3)); //Multiple strings and spaces among them

// 3. Slice - 1st / (only one) value is starting point(from index 0), 2nd value is ending point.
let str = "Javascript, C++ and Python";
console.log(str.slice(0, 10));
console.log(str.slice(12, 15));
console.log(str.slice(-14, -11)); //Negative values
console.log(str.slice(20)); //(if one value) starting from it, keeps the rest
console.log(str.slice(-6));
console.log(str.slice(-6, str.length)); //length property > the rest

// 4. Substring > (Use "slice" instead of it and "substr" is deprecated.)
let text1 = "Javascript";
console.log(text1.substring(4, 10)); //same as slice
console.log(text1.substring(10, 4)); //it swaps. "slice" does't swap
console.log(text1.substring(4)); //same as slice
console.log(text1.substring(-6)); //doesn't support negative values. treat them as 0.

// 5. "Upper case and Lower case"
let text2 = "The Quick Brown";
console.log(text2.toUpperCase());
console.log(text2.toLowerCase());

// 6. Trim (Remove whitespaces)
let text3 = "  Javascript  ";
console.log(text3.trim());
console.log(text3.trimStart());
console.log(text3.trimEnd());

// 7. Padding
let text4 = "padding";
console.log(text4.padStart(10, "x"));
console.log(text4.padEnd(15, "0"));

// 8. Repeat
let text5 = "Python";
console.log(text5.repeat(4));
console.log((text5 + " ").repeat(4)); //for spaces among them
console.log((text5 + " ").repeat(4).trim()); //trim to remove last space

// 9. Replace and Replace All
let text6 = "Go to facebook. Do you have a facebook id? I have 5 facebook id";
console.log(text6.replace("facebook", "YouTube")); //first one changes by default
console.log(text6.replace(/FACEBOOK/i, "X")); //Case sensitive. use "//i" > i = insensitive
console.log(text6.replace(/facebook/g, "Discord")); //Change all matches by "//g" > g = global
console.log(text6.replaceAll("facebook", "fb")); //can't use regex to "replaceAll"

// 10. Split (Converts strings to arrays)
let text7 =
  "Amazing cats dance gracefully across vast landscapes at dawn daily.";
console.log(text7.split());
console.log(text7.split(""));
console.log(text7.split(" "));
console.log(text7.split("a"));
