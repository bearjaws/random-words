var bluebird = require('bluebird');
var rand = require('random-seed').create();
var fs = require('fs');

var list = fs.readFileSync('./list.txt');


function generateRandomWords(num, cb) {
  var words = [];
  var buffs = [];

  return fs.open('./list.txt', 'r', function(err, fd) {
    //for (var i = 0; i < num; i++) {
    //  var buff = new Buffer(128);
    //  fs.read(fd, buff, i*32, 32, rand.intBetween(0, 1329335), function(err) {
    //    if (err) {
    //      cb(err, null);
    //    }
    //    var items = buff.toString('utf-8').split(';');
    //    console.log(items);
    //    items.pop();
    //    items.shift();
    //    console.log(items[0]);
    //    words.push(items[rand.intBetween(0, items.length -1)]);
    //    if(words.length === num) {
    //      cb(null, words);
    //    }
    //  });
    //
    //}
    //console.log(words)

  });
}

generateRandomWords(4, function(err, data) {

});

function readNearestWord(offset, cb) {
  var buff = new Buffer(32);
  var res = {
    "index": offset,
    "word": ""
  };
  var start = false;
  return fs.open('./list.txt', 'r', function(err, fd) {
    fs.read(fd, buff, 0, 32, offset, function(err) {
      var string = buff.toString('utf-8');
      for(var c = 0; c < string.length; c++) {
        var character = string[c];
        if (!start) {
          res.index += 1;
        }
        if (character === ";" && !start) {
          start = true; // Start appending characters to word
          res.index += 1; // Sets index to first character of word
        } else if (start && character !== ";") {
          res.word += character;
        } else if (start && character === ";") {
          // Done reading word
          break;
        }
      }
      cb(null, res);
    });
  })
}

readNearestWord(4232, function(err, data) {
  console.log(data);
});