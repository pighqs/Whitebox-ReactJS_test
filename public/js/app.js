class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        // App va retourner la "balise" <ListeBurger/>
        return (
         <div>
         <Header/>
         <Home/>
         </div>
         );
    }
}

class Header extends React.Component {

    constructor() {
        super();
    }

    render() {
        // App va retourner la "balise" <ListeBurger/>
        return (
            <header>
            <div className="menu_block">
            <div className="container clearfix">
            <div className="logo pull-left">
            <a href="index.html" ><span className="b1">w</span><span className="b2">h</span><span className="b3">i</span><span className="b4">t</span><span className="b5">e</span> <span className="b4">box</span></a>
            </div>
            </div>
            </div>
            </header>
            );
    }
}

class Home extends React.Component {

    constructor() {
        super();
    }

    render() {
        // App va retourner la "balise" <ListeBurger/>
        return (
            <section id="home" className="padbot0">
                <Slider/>
                <Carousel/>
            </section>
            );
    }
}

class Slider extends React.Component {

    constructor() {
        super();
    }

    render() {
        const captionDatas = [
        {liClass:"slide1 flex-active-slide", classPar1: "title1 captionDelay2 FromTop", classPar2:"title2 captionDelay4 FromTop", classPar3:"title3 captionDelay6 FromTop", classPar4:"title4 captionDelay7 FromTop", city: "Lyon", title:"vacances été", year: "2017" , desc: "Vacances au calme dans une petite maison de campagne" },
        {liClass:"slide2", classPar1: "title1 captionDelay6 FromLeft", classPar2:"title2 captionDelay4 FromLeft", classPar3:"title3 captionDelay2 FromLeft", classPar4:"title4 captionDelay7 FromLeft", city: "Bretagne", title:"weekend de mai", year: "2016" , desc: "Un moment de detente en famille" },
        {liClass:"slide3", classPar1: "title1 captionDelay1 FromBottom", classPar2:"title2 captionDelay2 FromBottom", classPar3:"title3 captionDelay3 FromBottom", classPar4:"title4 captionDelay5 FromBottom", city: "Biarritz", title:"Anniversaire Allan", year: "2016" , desc: "Surf and fun entre amis" }
        ];

        let slides = [];
        for (var i = 0; i < captionDatas.length; i++) {
            slides.push(<Slide key={"slides_"+i} liClass={captionDatas[i].liClass} classPar1={captionDatas[i].classPar1} classPar2={captionDatas[i].classPar2} classPar3={captionDatas[i].classPar3} classPar4={captionDatas[i].classPar4}
                city={captionDatas[i].city} year={captionDatas[i].year} title={captionDatas[i].title} desc={captionDatas[i].desc}/>);

        }

        return (
           <div className="flexslider top_slider">
                <ul className="slides">
                        {slides}
                </ul>
           </div>
           );
    }
}

class Slide extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <li className={this.props.liClass}>
                <div className="flex_caption1">
                    <p className={this.props.classPar1}>{this.props.city}</p>
                    <p className={this.props.classPar2}>{this.props.title}</p>
                    <p className={this.props.classPar3}>{this.props.year}</p>
                    <p className={this.props.classPar4}>{this.props.desc}</p>
                </div>
            </li>
            );
    }
}



class Carousel extends React.Component {

    constructor() {
        super();
    }

    render() {
         const carouselDatas = [
            { dtarget:"slide1", image: "images/slider/slide1_bg.jpg", classN:"flex-active-slide"},
            { dtarget:"slide2", image: "images/slider/slide2_bg.jpg", classN:""},
            { dtarget:"slide3", image: "images/slider/slide3_bg.jpg", classN:""},
            ];

        let carouselList = [];

        for (var i = 0; i < carouselDatas.length; i++) {
            carouselList.push(<CarouselSlide key={"carouselSlides_"+i} dtarget={carouselDatas[i].dtarget} image={carouselDatas[i].image} classN={carouselDatas[i].classN}/>);
        }

        return (
            <div id="carousel">
                <ul className="slides">
                    {carouselList}
                </ul>
            </div>
         );
    }
}

class CarouselSlide extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <li data-target={this.props.dtarget} className={this.props.classN}>
                <img src={this.props.image} alt="" />
            </li>
            );
    }
}


ReactDOM.render(
   <App/>
   ,
   document.getElementById('page')
   );
