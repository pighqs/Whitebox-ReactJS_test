var React = require('react');

var Header = require('./header');
var Home = require('./home');


class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <Home/>
            </div>
           );
    }
}


module.exports = App;
