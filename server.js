//////// PACKAGES
var express = require('express');
// on stocke l'app express dans une variable app : initialisation
var app = express();

app.set('view engine', 'ejs');

// permet de charger des fichiers statiques (css, images, fichiers js externes), ils doivent etre placés dans le dossier "public"
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');

});




//////// LISTEN
// process.env.PORT est le port attribué par hénergeur
var port = (process.env.PORT || 8080);
app.listen(port, function() {
    console.log("server listening on port: " + port);
});