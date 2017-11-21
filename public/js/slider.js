var React = require('react');


var Slide = require('./slide');

class Slider extends React.Component {

    constructor() {
        super();
    }

    render() {

        const captionDatas = [
        {liClass:"slide1", classPar1: "title1 captionDelay2 FromTop", classPar2:"title2 captionDelay4 FromTop", classPar3:"title3 captionDelay6 FromTop", classPar4:"title4 captionDelay7 FromTop", city: "Lyon", title:"vacances été", year: "2017" , desc: "Vacances au calme dans une petite maison de campagne" },
        {liClass:"slide2", classPar1: "title1 captionDelay6 FromLeft", classPar2:"title2 captionDelay4 FromLeft", classPar3:"title3 captionDelay2 FromLeft", classPar4:"title4 captionDelay7 FromLeft", city: "Sarcelles", title:"weekend de mai", year: "2016" , desc: "Un moment de detente en famille" },
        {liClass:"slide3", classPar1: "title1 captionDelay1 FromBottom", classPar2:"title2 captionDelay2 FromBottom", classPar3:"title3 captionDelay3 FromBottom", classPar4:"title4 captionDelay5 FromBottom", city: "Biarritz", title:"Anniversaire Allan", year: "2016" , desc: "Surf and fun entre amis" }
        ];

        let slides = [];
        for (var i = 0; i < captionDatas.length; i++) {
            if (captionDatas[i].liClass == this.props.slideActif) {
                captionDatas[i].liClass = captionDatas[i].liClass + " flex-active-slide";
            }

            slides.push(
                    <Slide
                        key={i}
                        liClass={captionDatas[i].liClass}
                        classPar1={captionDatas[i].classPar1}
                        classPar2={captionDatas[i].classPar2}
                        classPar3={captionDatas[i].classPar3}
                        classPar4={captionDatas[i].classPar4}
                        city={captionDatas[i].city}
                        year={captionDatas[i].year}
                        title={captionDatas[i].title}
                        desc={captionDatas[i].desc}
                    />);

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

module.exports = Slider;
