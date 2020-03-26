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
                
                  <Link to ="/catcreate/" id="button"><Button>Add New Cat</Button></Link>
                  <br/>
                  <br/>
                  <br/>
                  <div id="center">
                    {this.state.allCats.map((cat, index) => {
                      return(
                        <ListGroup id="box" key={ index }>
                          <Link to={`/cat/${cat.id}`}><h4 id= "name"> { cat.name }</h4></Link>
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
                <Switch> 
                    <Route path="/catcreate/" component={CatCreate} />
                    <Route exact path="/cat/:id" component={ CatShow }
              render={ (props) => <CatShow cats={ this.state.allCats }/> }/>
                </Switch>
              </Router>
        )
      }
}
export default CatIndex
