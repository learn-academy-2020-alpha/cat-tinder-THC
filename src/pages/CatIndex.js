import React, {Component} from "react"
import { ListGroup, ListGroupItemHeading, ListGroupItemText }
 from 'reactstrap'; 
 import cats from '../cats'


class CatIndex extends Component{


    render(){
        return(
          <React.Fragment>
          { this.props.cats.map((cat, index) => {
            return(
              <ListGroup key={ index }>
                <h4>{ cat.name }</h4>
                <small>{ cat.age } - { cat.enjoys }</small>
              </ListGroup>
              )
            })}
          </React.Fragment>
        )
      }
}
export default CatIndex
