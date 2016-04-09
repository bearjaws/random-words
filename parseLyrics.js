var notFound = ["Sorry,","We","dont","have","lyrics","for","this","song","yet."];
var frequency = {};

for (var i = 0; i < 930; i++) {
  var data = require('./lyrics/' + i + ".json");
  for (var w = 0; w < data.length; w++) {
    var word = data[w].toLowerCase();
    word = word.replace('\'', '');
    word = word.replace(',', '');
    word = word.replace(':', '');
    var words = word.split('-');
    if(words.length > 1) {
      continue;
    }
    if (word[0] === notFound[0] && word[1] === notFound[1]) {
      continue;
    }
    if (typeof frequency[word] !== "number") {
      frequency[word] = 0;
    }

    frequency[word]++;
  }
}

var final = []
for (var p in frequency) {
  if(frequency[p] > 3) {
    final.push(p);
  }
}
console.log(final.length);