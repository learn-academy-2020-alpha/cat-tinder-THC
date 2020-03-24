import React, {Component} from "react"
import { ListGroup, ListGroupItemHeading, ListGroupItemText }
 from 'reactstrap'; 
 import cats from '../cats'


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
          {this.state.allCats.map((cat, index) => {
            return(
              <ListGroup key={ index }>
                <h4>{ cat.name }</h4>
                <small>{ cat.age } - { cat.enjoys }</small>
              </ListGroup>
              )
            })}
            </div>
          </React.Fragment>
        )
      }
}
export default CatIndex
