var React = require('react');


var Slide = require('./slide');

class Slider extends React.Component {

    constructor() {
        super();
        this.state = { captionDatas: [] };
    }

    componentDidMount(){
        var ctx = this;
        fetch('/captionDatas')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
          console.log(data);
           ctx.setState({captionDatas: data});
        })
        .catch(function(error) {
            console.log('Request failed', error);
        });
    }

    render() {


        let slides = [];
        for (var i = 0; i < this.state.captionDatas.length; i++) {
            if (this.state.captionDatas[i].liClass == this.props.slideActif) {
                var popo = this.state.captionDatas[i].liClass + " flex-active-slide";
            } else {
                var popo = this.state.captionDatas[i].liClass
            }

            slides.push(
                    <Slide
                        key={i}
                        liClass={popo}
                        classPar1={this.state.captionDatas[i].classPar1}
                        classPar2={this.state.captionDatas[i].classPar2}
                        classPar3={this.state.captionDatas[i].classPar3}
                        classPar4={this.state.captionDatas[i].classPar4}
                        city={this.state.captionDatas[i].city}
                        year={this.state.captionDatas[i].year}
                        title={this.state.captionDatas[i].title}
                        desc={this.state.captionDatas[i].desc}
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
