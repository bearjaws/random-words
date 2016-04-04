var fs = require('fs');

var words = [];
var buff = new Buffer(64);
var list = fs.readFileSync('./list.txt');
return fs.open('./list.txt', 'r', function(err, fd) {
  fs.read(fd, buff, 0, 64, 393983, function(err) {
    var items = buff.toString('utf-8').split(';');
    items.pop();
    items.shift();
    console.log(items)
  });
});