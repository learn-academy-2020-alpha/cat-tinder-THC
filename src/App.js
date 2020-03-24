import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import cats from "./cats"

class App extends Component{
  constructor(){
   super()
   this.state = {
     allCats: cats
   }
 }
 
  render(){
    return(
      <React.Fragment>

        <Header />
        <Router>
          <Switch>
            <Route exact path="/cat/:id" component={ CatShow } />
            <Route exact path="/" render={ (props) => <CatIndex cats={ this.state.allCats } /> } />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
