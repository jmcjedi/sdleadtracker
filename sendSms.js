#!usr/bin/env node 

// Your accountSid and authToken from twilio.com/user/account
// JM Account:
//var accountSid = 'AC8ec28bbd437857b8d6ab16b7022a6567';
//var authToken = "27019bb0e54d4899aa4220b45d64e77b";

// Nate Account:
var accountSid = 'AC417e499b19b69cf88893c98eaad7945b';
var authToken = "46c0cf46bb2d70165f8ad234f109971f";
//var fs = require('fs');
//var twilio = require('twilio');
//var client = new twilio.RestClient(accountSid, authToken);


var client = require('twilio')(accountSid, authToken);
 
/*client.usage.records.list(function(err, data) {
    data.records.forEach(function(record) {
        console.log(record.Count);
    });
});*/

client.calls.list(function(err, data) {
    data.calls.forEach(function(call) {
        console.log(call.price);
    });
});
 
/*client.sms.messages.create({
    to:'+12165778088',
    from:'+15056290908',
    body:'Hello World'
}, function(error, message) {
    if (error) {
        console.log(error.message);
    }
});*/

/*client.usage.records.list(function(err, data) {
    data.records.forEach(function(record) {
        console.log(record.Count);
    });
});*/

/*client.usage.records.thisMonth.list(function(err, data) {
    data.records.forEach(function(record) {
        console.log(record.Count);
    });
});*/
