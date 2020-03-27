import React, {Component} from "react"
import { ListGroup, Button }
 from 'reactstrap'; 
import cats from '../cats'
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom"
import CrazyCat from "./crazyCat.png"
import CatCreate from "./CatCreate"
import CatShow from "./CatShow"



class CatIndex extends Component{ 

    render(){
      console.log("INDEX PROPS", this.props.cats)
        return(
              <Router>
                <div>
                  <a href="/catcreate/" id="button"><Button>Add New Cat</Button></a>
                  <br/>
                  <br/>
                  <br/>
                  <div id="center">
                    {this.props.cats.map((cat, index) => {
                      return(
                        <ListGroup id="box" key={ index }>
                          <Link to={`/cat/${cat.id}`}><h4 id= "name"> { cat.name }</h4></Link>
                          <br/>
                          <img src={CrazyCat}/>
                          <br/>
                          <small>Age: { cat.age }  </small>
                          <br/>
                          <small>Hobby: { cat.hobby} </small>
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
