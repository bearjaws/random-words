var fs = require('fs');
var list = [""];
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
        var checkWord = list[p];
        if (word[0] === checkWord[0] && word[1] === checkWord[1] && word[2] === checkWord[2]) {
          break;
        } else if (p === list.length -1) {
          list.push(word);
          break;
        }
      }
    }
  }
  console.log(list.length);
  fs.writeFileSync('./finalWords.json', JSON.stringify(list));
});

function addToList(currentList, word) {
  for (var i = 0; i < currentList.length; i++) {
    var checkWord = currentList[i];
    if (word[0] === checkWord[0] && word[1] === checkWord[1]) {
      continue;
    } else {
      list.push(word);
      break;
    }
  }
}