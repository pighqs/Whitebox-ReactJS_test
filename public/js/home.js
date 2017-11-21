var React = require('react');


var Slider = require('./slider');
var Carousel = require('./carousel');


class Home extends React.Component {

    constructor() {
        super();
        this.activateSlide = this.activateSlide.bind(this);
        this.state = { selectSlide: "slide1" };
    }

    activateSlide(cible) {
        this.setState({
            // le activeSlide est celui cliqué (renvoyé par la fonction handleClick de CarouselSlide)
            selectSlide:cible
        });
    }

    render() {
        // App va retourner la "balise" <ListeBurger/>
        return (
            <section id="home" className="padbot0">
                <Slider slideActif={this.state.selectSlide}  />
                <Carousel handleSlideActive={this.activateSlide} />
            </section>
            );
    }
}


module.exports = Home;
