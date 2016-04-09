var famousPeople = require('./finalFamous.json');
var adj = require('./adjectives.json');

var fs = require('fs');
var list = famousPeople.concat(adj);
console.log(list.length);
fs.readFile('wiki-100k.txt', function(err, data) {
  if(err) throw err;
  var array = data.toString().split("\n");
  for(i in array) {
    var word = array[i].toLowerCase();
    if (word.indexOf('comment') !== -1 || word.indexOf('!') !== -1 || word.indexOf('\'') !== -1
      || word.indexOf('«') !== -1 || word.indexOf('.') !== -1) {
      continue;
    }
    if (word.length >= 4) {
      for (var p = 0; p < list.length; p++) {
        var checkWord = list[p].toLowerCase();
        if (word[0] === checkWord[0] && word[1] === checkWord[1] && word[2] === checkWord[2]) {
          break;
        } else if (p === list.length -1) {
          list.push(word);
          break;
        }
      }
    }
    if (list.length === 4095) {
      break;
    }
  }
  console.log(list.length);
  fs.writeFileSync('./maybedone.json', JSON.stringify(list));
});