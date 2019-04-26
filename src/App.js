import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Division from './Division';
import Approach from './Approach';
import Beeswarm from './Beeswarm';
import DelayTransition from './DelayTransition';
import './App.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class DrawerSimpleExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    handleClose = () => this.setState({
        open: false
    });

    render() {
        return (
            <div>
              <AppBar className="app-bar" onClick={ this.handleToggle } title="Strata 2019" iconClassNameRight="muidocs-icon-navigation-expand-more" />
              <Drawer docked={ false } width={ 200 } open={ this.state.open } onRequestChange={ (open) => this.setState({
                                                                                                    open
                                                                                                }) }>
                <Link to="/">
                <MenuItem onClick={ this.handleClose }>Resources
                </MenuItem>
                <Link to="/approach">
                <MenuItem onClick={ this.handleClose }>Conceptual Approach
                </MenuItem>
                </Link>
                </Link>
                <Link to="/division">
                <MenuItem onClick={ this.handleClose }>Division
                </MenuItem>
                </Link>
                <Link to="/beeswarm">
                <MenuItem onClick={ this.handleClose }>Beeswarm
                </MenuItem>
                </Link>
                <Link to="/delayTransition">
                <MenuItem onClick={ this.handleClose }>Delay Transition
                </MenuItem>
                </Link>
                
              </Drawer>
            </div>
            );
    }
}
class App extends Component {
    componentDidMount() {
        document.title = "Strata 2019 by @mf_viz"
    }
    render() {
        return (
            <MuiThemeProvider>
              <Router>
                <div>
                  <DrawerSimpleExample/>
                  <Route exact path="/" component={ Home } />
                  <Route path="/division" render={ (props) => (<Division maxState={ 4 } />) } />
                  <Route path="/approach" component={ Approach } />
                  <Route path="/delayTransition" component={ DelayTransition } />
                  <Route path="/beeswarm" render={ (props) => (<Beeswarm />) } />
                </div>
              </Router>
            </MuiThemeProvider>
        )
    }
}
;
const Home = () => (
    <div className="container">
      <h1>Resources</h1>
      <p>These resources were used in <a href="http://mfviz.com" target="_blank">Michael Freeman's</a> talk on
        <em>Visualizing Statistical and Machine Learning Concepts</em> at <a href="https://conferences.oreilly.com/strata/strata-eu" target="_blank">Strata Data</a> Conference in 2019.
        See side navigation menu for small demos, or the links below for external sites.
      </p>
      <ul>
        <li><a href="http://mfviz.com/strata-2019-slides" target="_blank">Interactive slides from the presentation</a></li>
        <li><a href="http://mfviz.com/hierarchical-models" target="_blank">A Visual Introduction to Hierarchical Modeling</a></li>
        <li><a href="http://mfviz.com/central-limit" target="_blank">An Explanation of the Central Limit Theorem</a></li>
        <li><a href="http://mfviz.com/binary-predictions" target="_blank">An exploration of metrics of performance for binary predictions.</a></li>        
        <li><a href="http://www.r2d3.us/visual-intro-to-machine-learning-part-1/" target="_blank">A Visual Introduction to Machine Learning (Tony Chu and Stephanie Yee)</a></li>
      </ul>
      <p>Code used to build this website + demos is available <a href="https://github.com/mkfreeman/strata-2019" target="_blank">here</a>.</p>
    </div>
)
export default App;