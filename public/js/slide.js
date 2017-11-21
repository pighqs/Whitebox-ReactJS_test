var React = require('react');



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


module.exports = Slide;
