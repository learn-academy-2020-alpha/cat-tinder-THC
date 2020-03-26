import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatCreate from "./pages/CatCreate"
import cats from "./cats"

class App extends Component{
  constructor(){
   super()
   this.state = {
     allCats: cats,
     cats: [],
   }
   this.getCats()
 }

 componentWillMount(){
    	this.getCats()
    }

    getCats = () => {
      fetch("http://localhost:3000/cats")
      .then((response)=>{
        if(response.status === 200){
          return(response.json())
        }
      })
      .then((catsArray)=> {
        this.setState({cats: catsArray})
      })
    }

  render(){
    return(
      <>
      <br/>
      <br/>

        <Header />
        <Router>
          <Switch>
            <Route exact path="/" render={ (props) =>   <CatIndex cats={ this.state.allCats } /> } />
            <Route exact path="/cat/:id" component={ CatShow }
              render={ (props) => <CatIndex cats={ this.state.allCats }/> }/>
            <Route exact path="/catcreate" render={ (props) =>   <CatCreate cats={ this.state.allCats } /> } />
          </Switch>
        </Router>

      </>
    )
  }
}
export default App
