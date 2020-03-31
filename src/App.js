import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatCreate from "./pages/CatCreate"

class App extends Component{
  constructor(){
   super()
   this.state = {
     cats: [],
   }
 }

 componentDidMount(){
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
    createCat = (newcat) => {
      return fetch("http://localhost:3000/cats", {
        // converting an object to a string
        body: JSON.stringify(newcat),
        // specify the info being sent in JSON and the info returning should be JSON
        headers: {
          "Content-Type": "application/json"
        },
        // HTTP verb so the correct endpoint is invoked on the server
        method: "POST"
      })
      .then((response) => {
        // if the response is good call the getCats method
        if(response.ok){
          return this.getCats()
        }
      })
    }

  render(){
    console.log("APP STATES", this.state.cats);
    
    return(
      <>
      <br/>
      <br/>

        <Header />
        <Router>
          <Switch>
            <Route exact path="/catcreate" render={ (props) => <CatCreate handleSubmit={ this.createCat } /> } />

            <Route exact path="/cat/:id" render={ (props) => <CatShow {...props} cats={ this.state.cats }/> }/>

            <Route exact path="/" render={ (props) => <CatIndex cats={ this.state.cats } /> } />
            
          </Switch>
        </Router>

      </>
    )
  }
}
export default App
