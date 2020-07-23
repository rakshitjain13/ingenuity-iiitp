import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import View from './ViewComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import Show from './ShowComponent';
import { data } from '../shared/source';
import Background from './BackgroundComponent';
import TeamPage from './AboutUsComponent';
import { baseUrl } from '../shared/baseUrl';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      store:[]
    }
  }
  componentDidMount() {
    axios.get(baseUrl+'home')
      .then(res => {
        const store = res.data;
        this.setState({ store });
      });
  }
  render() {
    console.log(this.state.store);
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
    const Homepage=()=>{
      if(this.state.store!=null){
        return(<Home home={this.state.store}/>);
      }
    }
    return (
      <div>
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
          <Route exact path='/ourteam'   component={() => <TeamPage /> } />
          <Route path='/home'  component={Homepage} />
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
