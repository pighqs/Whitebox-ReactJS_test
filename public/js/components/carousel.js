var React = require('react');


var CarouselSlide = require('./carouselSlide');


class Carousel extends React.Component {

    constructor() {
        super();
        this.checkActiveCarouselSlide = this.checkActiveCarouselSlide.bind(this);
        // par défaut le activeSlide est celui qui a la data-target "slide1"
        this.state = { activeSlide: "slide1", carouselDatas: [] };
    }

    checkActiveCarouselSlide(clickedSlide) {
        //console.log("le slide activé est " + clickedSlide);
        this.setState({
            // le activeSlide est celui cliqué (renvoyé par la fonction handleClick de CarouselSlide)
            activeSlide:clickedSlide
        });
        this.props.handleSlideActive(clickedSlide);
    }


     componentDidMount(){
          var ctx = this;
          fetch('/carouselDatas')
          .then(function(response) {
              return response.json();
          })
          .then(function(data) {
             ctx.setState({carouselDatas: data});
          })
          .catch(function(error) {
              console.log('Request failed', error);
          });
       }


    render() {

        console.log(this.state.carouselDatas);

       let carouselList = [];

       for (var i = 0; i < this.state.carouselDatas.length; i++) {
        var className;
        // si la propriété target correspond, la propriété "classN" prend la valeur "flex-active-slide"
        if (this.state.carouselDatas[i].target == this.state.activeSlide) {
            className = "flex-active-slide";
        } else {
            className = "";
        }
            carouselList.push(
            <CarouselSlide
                handleCarouselActive={this.checkActiveCarouselSlide}
                key={i} target={this.state.carouselDatas[i].target}
                image={this.state.carouselDatas[i].image}
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
