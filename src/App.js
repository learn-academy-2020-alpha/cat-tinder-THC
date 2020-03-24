import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/cat/:id" component={ CatShow } />
            <Route exact path="/" component={ CatIndex } />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App