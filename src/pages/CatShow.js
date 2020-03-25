import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import cats from '../cats'
import {Link} from "react-router-dom"
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
        <Link to="/" id="button"><Button>Back Home</Button></Link>
        <div id="middle">
            <ListGroup class="description">
                <br/>
                <br/>
                <img src={CrazyCat}/>
                <br/>
                <h4>{cat.name}</h4>
                <h5>Age: {cat.age}</h5>
                <h5>Bio: {cat.enjoys}</h5>
            </ListGroup>
        </div>
        </>
    )
    }
}

export default CatShow