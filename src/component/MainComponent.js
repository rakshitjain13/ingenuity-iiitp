import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Switch location={this.props.location}>
          <Route path='/home' component={() => <Home />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(Main);
