import React, { Component } from 'react'
import { ListGroup, ListGroupItemHeading, ListGroupItemText }
from 'reactstrap';
import cats from '../cats'


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
        <div>
            <ListGroup>
                <h4>{cat.name}</h4>
                <h5>Age: {cat.age}</h5>
                <h5>Bio: {cat.enjoys}</h5>
            </ListGroup>
        </div>
    )
    }
}

export default CatShow