var React = require('react');
var ReactDOM = require('react-dom');

// ROUTER
var Router = require('react-router-dom').BrowserRouter;
var Route  = require('react-router-dom').Route;
var Link   = require('react-router-dom').Link;



var App = require('./app');



ReactDOM.render(
    <Router>
            <div>
                <Route exact path="/" component={App}/>
            </div>
    </Router>
 ,
 document.getElementById('page')
 );



