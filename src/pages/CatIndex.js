import React, {Component} from "react"
import { ListGroup, Button }
 from 'reactstrap'; 
import cats from '../cats'
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom"
import CrazyCat from "./crazyCat.png"
import CatCreate from "./CatCreate"
import CatShow from "./CatShow"



class CatIndex extends Component{
    constructor(props) {
      super(props)
      this.state = {
        allCats: cats
      }
    }
    render(){
        return(
              <Router>
                <div>
                  <a href="/catcreate/" id="button"><Button>Add New Cat</Button></a>
                  <br/>
                  <br/>
                  <br/>
                  <div id="center">
                    {this.state.allCats.map((cat, index) => {
                      return(
                        <ListGroup id="box" key={ index }>
                          <a href={`/cat/${cat.id}`}><h4 id= "name"> { cat.name }</h4></a>
                          <br/>
                          <img src={CrazyCat}/>
                          <br/>
                          <small>Age: { cat.age }  </small>
                          <br/>
                          <small>Hobby: { cat.enjoys} </small>
                        </ListGroup>
                      )
                    })}
                  </div>
                </div>
                <br/>
                <br/>
                <br/>
              </Router>
        )
      }
}
export default CatIndex
