var fs = require('fs');
var words = require("an-array-of-english-words");

var previousWord = "";
var shortWords = words.filter(function(w) {
  if (w === (previousWord.concat("s"))) {
    return false;
  } else if ( w === (previousWord.concat("es"))) {
    return false;
  } else if ((Math.random() * (50 - 0) + 0) <= 1) {
    return false;
  } else if (w.length <= 10) {
    previousWord = w;
    return true;
  }
  return false;
});

 fs.writeFileSync('./shortWords.json', JSON.stringify(shortWords));

console.log(shortWords.length);
