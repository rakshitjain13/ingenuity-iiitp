import React, {useState,useEffect} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Postblog from './PostComponent.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';
import { api } from '../authentication';
import Load from '../component/LoaderComponent';
import Loadertest from './LoadertestComponent';
import Loadable from "react-loadable"
import Home from './HomeComponent';
const View = Loadable({
	loader: () => import('./ViewComponent'),
	loading() {
		return <div><Loadertest/></div>
	}
});
const Show = Loadable({
	loader: () => import('./ShowComponent'),
	loading() {
		return <div><Loadertest/></div>
	}
});
const TeamPage = Loadable({
	loader: () => import('./AboutUsComponent'),
	loading() {
		return <div><Loadertest/></div>
	}
});
const Main =(props)=> {

  const [store,SetStore]=useState(null);
 useEffect(()=> {
    axios
      .get(baseUrl + 'api/data', {
        auth: {
          username: api.user,
          password: api.pass,
        },
      })
      .then((res) => {
        const sto = res.data;
       SetStore(sto);
      });
  },[]);

    
    const ShowwithId = ({ match }) => {
      let articleid = match.params.articleId;
       let res = articleid.split("-");
       const index = parseInt(res[res.length - 1], 10);
      const data = store;
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
      if (store != null) {
        return <Home home={store} />;
      } else return <Home />;
    };
    if (store) {
      return (
        <div>
          <Header />
          <Switch location={props.location}>
            <Route
              exact
              path='/editorials'
              component={() => (
                <View type='editorials' content={store} />
              )}
            />
            <Route
              exact
              path='/experience'
              component={() => (
                <View type='experience' content={store} />
              )}
            />
            <Route
              exact
              path='/achievements'
              component={() => (
                <View type='achievements' content={store} />
              )}
            />
            <Route exact path='/ourteam' component={() => <TeamPage />} />
            <Route path='/home' component={Homepage} />
            <Route exact path='/experience/:articleId' component={ShowwithId} />
            <Route exact path='/editorials/:articleId' component={ShowwithId} />
            <Route
              exact
              path='/achievements/:articleId'
              component={ShowwithId}
            />
            <Route exact path='/postBlog' component={() => <Postblog />} />
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Load />
        </div>
      );
    }
}
export default withRouter(Main);
