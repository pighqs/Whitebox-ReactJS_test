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


app.get('/carouselDatas', function(req, res) {
    const carouselDatas = [
    { target:"slide1", image: "images/slider/slide1_bg.jpg"},
    { target:"slide2", image: "images/slider/slide2_bg.jpg"},
    { target:"slide3", image: "images/slider/slide3_bg.jpg"},
    ];
    res.json(carouselDatas);
});

app.get('/captionDatas', function(req, res) {
    const captionDatas = [
        {liClass:"slide1", classPar1: "title1 captionDelay2 FromTop", classPar2:"title2 captionDelay4 FromTop", classPar3:"title3 captionDelay6 FromTop", classPar4:"title4 captionDelay7 FromTop", city: "Lyon", title:"vacances été", year: "2017" , desc: "Vacances au calme dans une petite maison de campagne" },
        {liClass:"slide2", classPar1: "title1 captionDelay6 FromLeft", classPar2:"title2 captionDelay4 FromLeft", classPar3:"title3 captionDelay2 FromLeft", classPar4:"title4 captionDelay7 FromLeft", city: "Sarcelles", title:"weekend de mai", year: "2016" , desc: "Un moment de detente en famille" },
        {liClass:"slide3", classPar1: "title1 captionDelay1 FromBottom", classPar2:"title2 captionDelay2 FromBottom", classPar3:"title3 captionDelay3 FromBottom", classPar4:"title4 captionDelay5 FromBottom", city: "Biarritz", title:"Anniversaire Allan", year: "2016" , desc: "Surf and fun entre amis" }
        ];
    res.json(captionDatas);
});


//////// LISTEN
// process.env.PORT est le port attribué par hénergeur
var port = (process.env.PORT || 8080);
app.listen(port, function() {
    console.log("server listening on port: " + port);
});
