var pg = require('pg');
var conString = "postgres://tdyqrgijyseefo:JvAJsxsFD9TC5jQpLq5eWo9Tfk@ec2-54-235-192-45.compute-1.amazonaws.com:5432/d53m4i2ddtambf";

var client = new pg.Client(conString);
client.connect();

var accountSid = location.pathname.match(/\/AccountSid=\/(.*)/)[1];
var id = "";

var query = client.query = "SELECT id FROM business WHERE sid='" + accountSid + "'";
if(query)
{
  query.on('row', function(row) {
    id = id + row[0];
  });
}
else
{ 
  query = client.query = "SELECT count(*) FROM business";   
  query.on('row', function(row) {
    var totalBusinesses = $rs1[0];
  });

  query = client.query = "INSERT INTO business VALUES (" + totalBusinesses + ", " + accountSid + ")";
  id = id + totalBusinesses; 
}  

query.on('end', function() {
  client.end();
}

// redirect back to my app when done
var location = "http://sdleadtracker.herokuapp.com/myapp.php?id=" + id;
self.location=location;
