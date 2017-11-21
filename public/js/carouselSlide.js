var React = require('react');


class CarouselSlide extends React.Component {

    constructor() {
        super();
        //Toujours "binder" la fonction de l'événement :  ici le this fait référence à CarouselSlide, le bind sert a indiquer la valeur du this
        this.handleClick = this.handleClick.bind(this);
   }


   handleClick() {
    // on evoie à la propriété "handleCarouselActive" du parent la "data-target" du li cliqué
    this.props.handleCarouselActive(this.props.target);
  }


  render() {


    return (
        <li
        onClick={this.handleClick}
        data-target={this.props.target}
        className={this.props.classN}>
        <img src={this.props.image} alt="" />
        </li>
        );
    }
}


module.exports = CarouselSlide;
