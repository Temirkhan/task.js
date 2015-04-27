var read = require('read');

read({ prompt : 'vvedite x: ' }, function (err, x) {
  read({ prompt : 'vvedite y: '}, function (err, y) {
var a = Number (x);
var b = Number (y);
   
      console.log('x =', x);
      console.log('y =', y);
    process.stdin.destroy();
      console.log('summa=', a+b);
      console.log('vychitanie=', a-b);
      console.log('otnoshenie=', a/b);
      console.log('proizvedenie=', a*b);
      
  });
    
})
