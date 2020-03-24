import React, {Component} from "react" 
import { ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'; 

class CatIndex extends Component{
    render(){
        return(
          <React.Fragment>
            <ListGroup>
              <ListGroupItemHeading>Cat One</ListGroupItemHeading>
              <ListGroupItemText>Cat Age - Cat Enjoys</ListGroupItemText>
             </ListGroup>
          </React.Fragment>
        )
      }
}
export default CatIndex