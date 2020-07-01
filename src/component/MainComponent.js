import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Gallery from './CardComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { intern } from '../shared/source';

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
        <Route
          path='/home'
          exact
          component={() => <Gallery key={intern.id} data={intern} />}
        />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Main);
