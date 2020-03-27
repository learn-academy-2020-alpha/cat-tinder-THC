import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import cats from '../cats'
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import CrazyCat from "./crazyCat.png"
import CatIndex from './CatIndex'
import CatCreate from './CatCreate'


class CatShow extends Component {
    

    render() {
        const {id} = this.props.match.params
        console.log(this.props.cats);
        
        const cat = this.props.cats.find((v) => v.id === parseInt(id))
    return (
        <>
        <Router>
        <Link to="/" id="button"><Button>Back Home</Button></Link>

        <div id="middle">
            <ListGroup>
                <br/>
                <br/>
                <img src={CrazyCat}/>
                <br/>
            <div id= "box">
                <h4>{cat.name}</h4>
                <small>Age: {cat.age}</small>
                <br/>
                <small>Hobby: {cat.enjoys}</small>
            </div>
            </ListGroup>
        </div>

          <Switch>
            <Route exact path="/" />
            <Route exact path="/catcreate" />
          </Switch>
        </Router>
        </>
    )
    }
}

export default CatShow
