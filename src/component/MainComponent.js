import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import View from './ViewComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import Show from './ShowComponent';
import Postblog from './PostComponent';
import TeamPage from './AboutUsComponent';
import { baseUrl } from '../shared/baseUrl';
import Load from './LoaderComponent';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: this.props.store,
    };
  }
  componentDidMount() {
    axios.get(baseUrl + 'data').then((res) => {
      const store = res.data;
      this.setState({ store });
    });
  }
  render() {
    const ShowwithId = ({ match }) => {
      const index = parseInt(match.params.articleId, 10);
      const data = this.state.store;
      if (data != null) {
        if (index === 1) {
          return (
            <Show
              prevdata={data[data.length - 1]}
              data={data[index - 1]}
              nextdata={data[index]}
            />
          );
        } else if (index === data.length) {
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
      } else {
        return <Load />;
      }
    };
    const Homepage = () => {
      if (this.state.store != null) {
        return <Home home={this.state.store} />;
      } else return <Home />;
    };
    return (
      <div>
        <Header />
        <Switch location={this.props.location}>
          <Route
            exact
            path='/editorials'
            component={() => (
              <View type='editorials' content={this.state.store} />
            )}
          />
          <Route
            exact
            path='/experience'
            component={() => (
              <View type='experience' content={this.state.store} />
            )}
          />
          <Route
            exact
            path='/achievements'
            component={() => (
              <View type='achievements' content={this.state.store} />
            )}
          />
          <Route exact path='/ourteam' component={() => <TeamPage />} />
          <Route path='/home' component={Homepage} />
          <Route exact path='/experience/:articleId' component={ShowwithId} />
          <Route exact path='/editorials/:articleId' component={ShowwithId} />
          <Route exact path='/postBlog' component={() => <Postblog />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(Main);
