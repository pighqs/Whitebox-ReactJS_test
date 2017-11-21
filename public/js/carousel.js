var React = require('react');


var CarouselSlide = require('./carouselSlide');


class Carousel extends React.Component {

    constructor() {
        super();
        this.checkActiveCarouselSlide = this.checkActiveCarouselSlide.bind(this);
        // par défaut le activeSlide est celui qui a la data-target "slide1"
        this.state = { activeSlide: "slide1" };
    }


    checkActiveCarouselSlide(clickedSlide) {
        //console.log("le slide activé est " + clickedSlide);
        this.setState({
            // le activeSlide est celui cliqué (renvoyé par la fonction handleClick de CarouselSlide)
            activeSlide:clickedSlide
        });
        this.props.handleSlideActive(clickedSlide);
    }


    render() {
       const carouselDatas = [
       { target:"slide1", image: "images/slider/slide1_bg.jpg"},
       { target:"slide2", image: "images/slider/slide2_bg.jpg"},
       { target:"slide3", image: "images/slider/slide3_bg.jpg"},
       ];

       let carouselList = [];

       for (var i = 0; i < carouselDatas.length; i++) {
        var className;
        // si la propriété target correspond, la propriété "classN" prend la valeur "flex-active-slide"
        if (carouselDatas[i].target == this.state.activeSlide) {
            className = "flex-active-slide";
        } else {
            className = "";
        }
            carouselList.push(
            <CarouselSlide
                handleCarouselActive={this.checkActiveCarouselSlide}
                key={i} target={carouselDatas[i].target}
                image={carouselDatas[i].image}
                classN={className}
            />);

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

module.exports = Carousel;
