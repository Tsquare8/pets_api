(function() {

  //bring in express library for use
  //just like bringin in jQuery when we are in a browser
  let express = require("express");
  //app == to whatever express returns as functionality/firing express up
  let app = express();

  //default route /
  app.get("/", function(req, res) {
    res.send("<div>Hello World</div>")
  })
  //localhost:port/api/pets
  //hard coding what we want to return
  app.get("/api/pets", function(req, res) {
    res.send({
      "data": {
        "pets": [{
          "id": 1,
          "name": "Fluffy",
          "age": 5,
          "uri": "/api/pets/1"
        }, {
          "id": 2,
          "name": "Bob",
          "age": 6,
          "uri": "/api/pets/1"
        }]
      }
    })
  })

  app.get("/api/pets/1", function(req, res) {
    res.send({
          "id": 1,
          "name": "Fluffy",
          "age": 5,
          "uri": "/api/pets/1"
    });
  });

  app.get("/api/pets/2", function(req, res) {
    res.send({
      "id": 2,
      "name": "Bob",
      "age": 6,
      "uri": "/api/pets/2"
    });
  });

  app.listen(4786, function() {
    console.log('Example app listening on port 4786!')
  })
})();
