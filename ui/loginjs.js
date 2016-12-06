var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool; 
var config ={
    user : 'arvindreddydappili',
    database : 'arvindreddydappili',
    host : 'db.imad.hasura-app.io',
    port :'5432',
    password : process.env.DB_PASSWORD,
};

var app = express();
app.use(morgan('combined'));

var pool = new Pool(config);

pool.query('INSERT INTO "login" (email,username, password,sex,dob) VALUES ($1, $2,$3,$4,$5)', [username, dbS], function (err,result){
if (err) {
res.status(500).send(err.toString());
} else {
res.send('user seccessfully registered' + username);
}

});


alert(Welcome_to_login_page);


app.get('/ui/loginjs.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'loginjs.js'));
});

