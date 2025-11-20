// ============================================
// TEAM PROFILE PAGE
// Team Members: [Add your names here!]
// ============================================

// ============================================
// MEMBER 1 VARIABLES
// ============================================

let member1Name = "Dylan";
let member1Age = 16;
let member1Game ="Roblox";
let member1Music = "Deftones";
let member1BestFood = "burritos";
let member1Restaurant = "Chipotle";
let member1PitBull = "No, they're sweet!";
let member1Basketball = "LeBron";
let member1Future = "Sports medicine doctor";


// ============================================
// MEMBER 2 VARIABLES
// ============================================

let member2Name = "Illia";
let member2Age = 17;
let member2Game = "GTA5";
let member2Music = "Nervy";
let member2BestFood = "Sushi";
let member2Restaurant = "Chipotle";
let member2PitBull = "No, they're sweet!";
let member2Basketball = "LeBron";
let member2Future = "Music Producer";


//Just copy from member 1 and change values: 
// let's debug the member2Age issue here - we need to define the member2Age variable or the .js won't run //


// ============================================
// TEAM CALCULATIONS
// ============================================

// How many team members?
let totalMembers = 2;  // Change this to 3 if you have 3 people!

 // Calculate total age
 let totalAge = member1Age + member2Age;  // Add member3Age if needed

// caculate average age
 let averageAge = totalAge / totalMembers;

// ============================================
// DISPLAY TEAM STATS
// ============================================

document.getElementById('total-members').textContent = totalMembers;
 document.getElementById('total-age').textContent = totalAge;
 document.getElementById('average-age').textContent = averageAge.toFixed(1);

// ============================================
// DISPLAY MEMBER 1
// ============================================

document.getElementById('member1Name').textContent = member1Name;
document.getElementById('member1Age').textContent = member1Age;
document.getElementById('member1Game').textContent = member1Game;
document.getElementById('member1Music').textContent = member1Music;
document.getElementById('member1BestFood').textContent = member1BestFood;
document.getElementById('member1Restaurant').textContent = member1Restaurant;
document.getElementById('member1PitBull').textContent = member1PitBull;
document.getElementById('member1Basketball').textContent = member1Basketball;
document.getElementById('member1Future').textContent = member1Future;




// ============================================
// DISPLAY MEMBER 2
// ============================================

// again copy from member 1, but remember to change the element IDs: 'member2-name' etc.

document.getElementById('member2Name').textContent = member2Name;
document.getElementById('member2Age').textContent = member2Age;
document.getElementById('member2Game').textContent = member2Game;
document.getElementById('member2Music').textContent = member2Music;
document.getElementById('member2BestFood').textContent = member2BestFood;
document.getElementById('member2Restaurant').textContent = member2Restaurant;
document.getElementById('member2PitBull').textContent = member2PitBull;
document.getElementById('member2Basketball').textContent = member2Basketball;
document.getElementById('member2Future').textContent = member2Future;


// ============================================
// LOG TO CONSOLE (for testing)
// ============================================

console.log("Team loaded!");
console.log("Total members:", totalMembers);
// console.log("Total age:", totalAge);
// console.log("Average age:", averageAge);