// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT = 7000;

// Here we create a generic function to handle requests and responses
function goodComment(request, response) {

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('CHANGE FONT ');
  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("Good Job! " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(goodComment);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT);

});

// Here we define a port to listen to
var PORT2 = 7500;

// Here we create a generic function to handle requests and responses
function badComment(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You Suck! " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(badComment);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT2);

});