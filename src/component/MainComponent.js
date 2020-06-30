import React,{Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header/>
                <Switch key={this.props.location}>
                    <Route path='home'>
                    <Redirect to="/home" />
                    </Route>
                </Switch>
            </div>
        );
    }
} 
export default  withRouter(Main);