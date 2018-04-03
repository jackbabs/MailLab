import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'

const Landing = () => <div>Landing</div>
const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>

class App extends Component {
  componentDidMount(){
    this.props.fetchUser()
  }
  render(){
    return (
      <div className="container">
        <Header/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/surveys" component={Dashboard}/>
            <Route path="/surveys/new" component={SurveyNew}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)