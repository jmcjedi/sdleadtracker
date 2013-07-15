var pg = require('pg');
var conString = "postgres://tdyqrgijyseefo:JvAJsxsFD9TC5jQpLq5eWo9Tfk@ec2-54-235-192-45.compute-1.amazonaws.com:5432/d53m4i2ddtambf";

var client = new pg.Client(conString);
client.connect();

var id = location.pathname.match(/\/id=\/(.*)/)[1];
var accountSid = "";
var query = client.query = "SELECT sid FROM business WHERE id='" + id + "'";

query.on('row', function(row) {
  accountSid = accountSid + row[0];
});

var authToken = "27019bb0e54d4899aa4220b45d64e77b";

document.write("<!DOCTYPE html>\n<html>\n<head>\n<LINK href='bootstrap/less/bootstrap.less' rel='stylesheet' type='text/css'>\n</head>\n<body>");
document.write("<div class='btn-large' onclick=getCostPerCall()>Click for Cost Per Call</div><br><br>");

var client = require('twilio')(accountSid, authToken);
var count = 0;

function getCostPerCall() {
  client.calls.list(function(err, data) 
  {
    data.calls.forEach(function(call) 
    {
      //console.log(call.price);
      var price = -1 * call.price;
      document.write("Call #" + count + ": $" + price + "\n");
      count = count + 1;
    });
  });
}

document.write("\n</body>\n</html>");

query.on('end', function() {
  client.end();
}

