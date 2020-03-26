import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import cats from '../cats'
import {Link, BrowserRouter as Router} from "react-router-dom"
import CrazyCat from "./crazyCat.png"


class CatShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
          cats: cats
        }
      }

    render() {
        const {id} = this.props.match.params
        const cat = this.state.cats.find((v) => v.id === parseInt(id))
    return (
        <>

        <a href ="/" id="button"><Button>Back Home</Button></a>

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
        
        </>
    )
    }
}

export default CatShow
