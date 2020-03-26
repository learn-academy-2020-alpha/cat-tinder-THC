import React, {Component} from "react"
import { ListGroup, Button }
 from 'reactstrap'; 
import cats from '../cats'
import {Link, BrowserRouter as Router, Switch} from "react-router-dom"
import CrazyCat from "./crazyCat.png"



class CatIndex extends Component{
    constructor(props) {
      super(props)
      this.state = {
        allCats: cats
      }
    }
    render(){
        return(
          <React.Fragment>


              <div>
              <a href ="/catCreate/" id="button"><Button>Add New Cat</Button></a>
              <br/>
              <br/>
              <br/>
              <div id="center">
            {this.state.allCats.map((cat, index) => {
              return(
                <ListGroup id="box" key={ index }>
                  <a href ={`/cat/${cat.id}`}><h4 id= "name"> { cat.name }</h4></a>
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


          </React.Fragment>
        )
      }
}
export default CatIndex
