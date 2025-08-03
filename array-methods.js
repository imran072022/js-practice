let jets = ["f35", "f-16", "B2", "Rafael", "J-35"];

console.log(jets);
console.log(typeof jets);
console.log(Array.isArray(jets));

// 1. Length
console.log(jets.length); // Know the total length
jets.length = 3; // removes extra items (truncates)
console.log(jets);
jets.length = 7; // adds empty items
console.log(jets);

// 2. toString (returns comma separated string)
let cars = ["BMW", "Mercedes", "Lamborghini", "Ferrari"];
console.log(cars.toString());

// 3. At (to get an element)
console.log(cars.at(2)); // get by "at" method
console.log(cars[2]); // get by []

// 4. Join (separable by anything ( ,|) )
console.log(cars.join()); // returns like "toString"
console.log(cars.join("")); //No separation
console.log(cars.join(" ")); //separated by spaces
console.log(cars.join("|")); // separated by vertical bar

// 5. Pop (removes last element)
let flowers = ["Rose", "Daisy", "Sunflower", "Lily"];
console.log(flowers.pop()); // truncates the last element
console.log(flowers);
console.log(flowers.pop());
console.log(flowers);

// 6. Push (add an element to the end)
let fruits = ["apple", "mango", "orange"];
console.log(fruits);
console.log(fruits.push("lemon")); //pushes (1)new element, (2)tells the total numbers of elements
console.log(fruits);

// 7. Shift (removes the first element)
// 8. Unshift (add an element at the beginning)
// *** Changing elements by index number
fruits[1] = "Watermelon";
console.log(fruits);
// *** Length (adding items at the end like "Push" method)
fruits[fruits.length] = "Strawberry";
console.log(fruits);

// 9. Concatenation
let txt = ["one", "two", "three"];
let num = [1, 2, 3];
let mix = [4, "four"];
console.log(txt.concat(num, mix));

// 10. copywithin
let list = ["one", "two", "three", "four", "five"];
console.log(list.copyWithin(2, 0));
let list1 = ["one", "two", "three", "four", "five"];
console.log(list1.copyWithin(2, 1));
let list2 = [1, 2, 3, 4, 5, 6];
console.log(list2.copyWithin(0, 3, 5));
// 11. flat (skipped)
// 12. flatMap (skipped)

// 13. Splice (add/remove/replace items inside an array) > Mutable
let city = ["Dhaka", "Bogura", "Sylhet", "Gazipur"];
city.splice(1, 0, "Chittagong", "Khulna"); //replacing
console.log(city);
let country = [
  "England",
  "USA",
  "China",
  "Japan",
  "France",
  "Germany",
  "India",
];
country.splice(2, 3, "Russia", "Korea"); //both replacing & removing
console.log(country);
let sub = ["Bangla", "English", "Math", "Physics", "Chemistry"];
sub.splice(2, 2); // removing
console.log(sub);

// 14. toSpliced
let mobile = ["Iphone", "Samsung", "Xiaomi", "Nokia"];
console.log(mobile.toSpliced(1, 1)); //removing
let roll = [28, 14, 23, 5, 9];
console.log(roll.toSpliced(2, 0, 65, 45)); //adding
let ram = [4, 8, 16, 32, 64, 128];
console.log(ram.toSpliced(2, 2, 256, 512)); //replacing

// 15. Slice (shows only sliced part)
let fish = ["rui", "katla", "boal", "ilish", "magur"];
console.log(fish.slice(1, 3));
console.log(fish.slice(2));
