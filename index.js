function shout (string) {
  return string.toUpperCase();
}

function whisper (string) {
  return string.toLowerCase();
}

function logShout (string) {
  console.log ( string.toUpperCase());
}

function logWhisper (string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var message = null;
 if(string.toUpperCase()===string){
   message = "YES INDEED!";
 }
 else if(string.toLowerCase()===string){
   message =  "I can't hear you!";
 }
 else if(string === "I love you, Grandma"){
   message =  "I love you, too";
 }
 return message;
}


