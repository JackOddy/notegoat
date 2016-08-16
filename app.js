var httpServer = require('http-server');
var path = require('path');

var pathToHtmlAndJsFiles = path.join(__dirname, 'src');
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);

console.log("" +
"                                      ,,~~--___---,\n" +
"                                     /            .~,\n" +
"                               /  _,~             )\n" +
"                              (_-(~)   ~, ),,,(  /'\n" +
"      noteGoat is listening    Z6  .~`' ||      ||\n" +
"        on port 3000           /_,/     ||      ||\n" +
"                         ~~~~~~~~~~~~~~~W`~~~~~~W`~~~~~~~~~");
