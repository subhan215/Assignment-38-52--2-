// Answer 1 //

// Answer 2 //
/* var year = prompt("Enter year")
function leapyear() {
    if(year % 4 == 0 ){
        alert("its a leap year")
    } else
    {
        alert("Its not a leap year");
    }
}
leapyear(); */
// Answer 3 //
/* var a = +prompt("Enter side 1");
var b = +prompt("Enter side 2 ");
var c = +prompt("Enter side 3 ");
var s;
function s(){
    s = (a+b+c) / 2;
    alert("s: " + s)
 }
s()
function area(){
    area = s *(s - a) * (s-b) * (s-c);
    alert("area:" + area);
   
}
area() */
// Answer 4 //
/* function mainFunction() {
    var mathsMarks = +prompt("Enter your maths marks");
    var phyMarks = +prompt("Enter your physics marks");
    var chemMarks = +prompt("Enter your chemistry marks");
    function average() {
        var average = (mathsMarks + phyMarks + chemMarks) / 3;
        document.write("average: <br>" + average)
    }
    average();
    function percentage() {
        var percentage = ((mathsMarks + phyMarks + chemMarks) / 300) * 100;
        document.write("percentage:" + percentage);
    }
    
    percentage();
}
mainFunction(); */

// Answer 5 //
/* function indexCheck() {
    var text = prompt("Enter the text");
    var indexCheck = prompt("Enter the character that you want to check index of");
    var flag = false;
    for (var i = 0; i < text.length; i++) {
        if (text[i] === indexCheck) {
            flag = true;
            alert(indexCheck + " is at index " + i);

        } 
       
    }
    if (flag == false) {
        alert("Not found!");

    }
    
}
indexCheck(); */

// Answer 6 //
/* var text = prompt("Enter your text");
var textSplit = text.split('');
function deleteChar(){
     for(var i =  0; i < textSplit.length; i++){
         if(textSplit[i] === "a" || textSplit[i] === "e" || 
         textSplit[i] === "i" || textSplit[i] === "o" ||
          textSplit[i] === "u"){
               textSplit[i] = ""
                
         }
     }
      
     console.log(textSplit.join(''));
     
}
deleteChar();
 */

// Answer 7 //
/* function findOccurences() {
    var text = prompt("Enter the text in which you want to check occurences.");
    var textSplit = text.toLowerCase().split('');
    var count = 0;
    for (var i = 0; i < textSplit.length ; i++) {
        var char = textSplit[i];
        var next = textSplit[i + 1] ;
        if (isCorrectChar(char) && isCorrectChar(next)) {
            count++;
        }
    }
    return count;

}
function isCorrectChar(char) {
    switch (char) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
        default:
            return false;

    }

}

var found = findOccurences();
console.log(found); */

// Answer 8 //
/* var distance = prompt("Enter the distance in km");
console.log("distance in km: " + distance);
function meters(){
    var meters = distance * 1000;
    return meters;
}
console.log("Distance in meters: " + meters());
function foot(){
    var foot = distance * 3280;
    return foot;
}
console.log("Distance in foot: " + foot());
function inches(){
    var inches = distance * 10000;
    return inches;
}
console.log("Distance in inches: " + inches());
function centimeters(){
    var centimeters = distance * 100000;
    return centimeters;
}
console.log("Distance in centimeters: " + centimeters()); */

// Answer 9 //
    
/* var hours = prompt("Enter the hours that you have overworked");
function overtime(){
    if(hours > 40){
        var overtime = (hours - 40) * 12;
        return overtime;
    }
    else{
        alert("Sorry! Your over work is less than 40 hours");
    }
    
}
alert(overtime()); */

// Answer 10 //
/* var note1 = 10;
var note2 = 50;
var note3 = 100;
var amount = +prompt("Enter the amount");
function hundredNotes(){
      var hundredNotes = Math.floor(amount/note3);
      return hundredNotes;

}
function fiftyNotes(){
    var remainder1 = amount%100;
    var fiftyNotes = Math.floor(remainder1/note2);
    return fiftyNotes;
    
}
function tenNotes(){
    var remainder1  = amount%100;
    var remainder2 = remainder1 % 50;
    var tenNotes = Math.floor(remainder2/ note1);
    return tenNotes;
}
console.log("You will get " + hundredNotes() + " hundred notes, " + fiftyNotes() + " fifty notes and " + tenNotes() + " ten notes");
 */























