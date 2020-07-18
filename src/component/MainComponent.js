import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import View from './ViewComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Show from './ShowComponent';
import { data } from '../shared/source';
import Background from './BackgroundComponent';
import TeamPage from './AboutUsComponent';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ShowwithId = ({ match }) => {
      const index = parseInt(match.params.articleId, 10);
      if (index == 1) {
        return (
          <Show
            prevdata={data[data.length - 1]}
            data={data[index - 1]}
            nextdata={data[index]}
          />
        );
      } else if (index == data.length) {
        return (
          <Show
            prevdata={data[data.length - 2]}
            data={data[index - 1]}
            nextdata={data[0]}
          />
        );
      } else {
        return (
          <Show
            prevdata={data[index - 2]}
            data={data[index - 1]}
            nextdata={data[index]}
          />
        );
      }
    };
    return (
      <div>
        <Background />
        <Header />
        <Switch location={this.props.location}>
          <Route path='/home' exact component={() => <Home />} />
          <Route
            exact
            path='/editorials'
            exact
            component={() => <View type='editorials' />}
          />
          <Route
            exact
            path='/experience'
            exact
            component={() => <View type='experience' />}
          />
          <Route
            exact
            path='/achievments'
            exact
            component={() => <View type='achievements' />}
          />
          <Route exact path='/ourteam' component={() => <TeamPage />} />
          <Route path='/home' component={() => <Home />} />
          <Route exact path='/experience/:articleId' component={ShowwithId} />
          <Route exact path='/editorials/:articleId' component={ShowwithId} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(Main);
