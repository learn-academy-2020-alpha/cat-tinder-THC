import React, {Component} from "react"
import { ListGroup, Button }
 from 'reactstrap'; 
import cats from '../cats'
import {Link} from "react-router-dom"
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
            <Link to="/catCreate/" id="button"><Button>Add New Cat</Button></Link>
            <br/>
            <br/>
            <br/>
            <div id="center">
          {this.state.allCats.map((cat, index) => {
            return(
              <ListGroup id="box" key={ index }>
                <Link to={`/cat/${cat.id}`}><h4> { cat.name }</h4></Link>
                <br/>
                <img src={CrazyCat}/>
                <br/>
                <small>Age:{ cat.age }  </small>
                <br/>
                <small>Bio: { cat.enjoys} </small>
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
