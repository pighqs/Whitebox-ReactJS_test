var React = require('react');
var Link   = require('react-router-dom').Link;


class Header extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <header>
                <div className="menu_block">
                    <div className="container clearfix">
                        <div className="logo pull-left">
                            <Link to="/"><span className="b1">w</span><span className="b2">h</span><span className="b3">i</span><span className="b4">t</span><span className="b5">e</span> <span className="b4">box</span></Link>
                        </div>
                    </div>
                </div>
            </header>
            );
    }
}

module.exports = Header;
