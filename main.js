//alerts
//This is a "alert command" which will display text in a prompt that is given inside brackets on your website, in this case it is Todays weather.
// alert("Today's weather forecast: Sunny with a chance of code!");
// alert("It's time for some JS fun!");


//Practice using variables and alerts
// let petName = "Russel";
// let petType = "Cat";
// let petAge = "6 years old";
// alert(`My pet ${petName} is a ${petType} and is ${petAge}`);


//analyzing and fixing alert code
//this alert is displaying the text directly into the prompt displayed in your website.
// alert(petName);
//while this alert is getting the varible information from petName and displaying the text thats in the varible.
// alert("petName");


//Template strings
// let favouriteBook = "Minecraft Redstone Handbook";
// let pagesInBook = "79 pages";
// alert(`I'm currently reading a book called, ${favouriteBook} which has ${pagesInBook}`); //this is a template string

//This is using a concatenation which is another word for saying combine or add.
// let movieName = "John Wick 2";
// let releaseYear = "February 10, 2017"
// alert("The Movie " + movieName + " was released in " + releaseYear);

// //this is whats needed to make the sentence
// var country = prompt("what country?");
// var days = prompt("How many days?");
// // this is the sentence that shows after youve inputed your information
// alert(`You're planning to visit ${country} for ${days} days, sounds fun!`);

// var item = prompt("What Do You Want?");
// var quantity = prompt("How Many Do You Want?");
// alert(`You want to buy ${item} of ${quantity}. Adding it to your shopping list.`); //template string
// alert("You want to buy " + item + " of " + quantity + " Adding it to your shopping list"); //string concantenation

// alert("Make Your Pizza!")
// var size = prompt("What Size Pizza Do You Want?");
// var topping1 = prompt("Whats A Topping You Want On Your Pizza?");
// var toppping2 = prompt("Whats Another Topping You Would Like?");
// alert(`Your ${size} pizza with ${topping1} and ${toppping2} will be ready in 20 minutes.`);

// Course Marks Application
// alert("What are 2 different courses and your current marks in them?");
// var course1 = prompt("What is the first course your taking?");
// var mark1 = prompt("What is your mark in that course?");
// var course2 = prompt("What is the second course you are taking?");
// var mark2 = prompt("What is your mark for that course?");
// alert(`Course 1: ${course1} with a grade of ${mark1} and course 2: ${course2} with a mark of ${mark2}`);

// Simple Mad Lib Application
alert("Mab Lib Time!");
var adjective = prompt("Enter an Adjective");
var noun = prompt("Enter a Noun");
var verb = prompt("Enter a Verb")
var adjective2 = prompt("Enter Another Adjective")
var pluralNoun = prompt("Enter a Plural Noun")
alert(`The ${adjective} ${noun} is known to be able to ${verb} extremely quickly, even faster than ${adjective2} ${pluralNoun}`)