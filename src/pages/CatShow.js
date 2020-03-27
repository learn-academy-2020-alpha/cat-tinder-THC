import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import CrazyCat from "./crazyCat.png"
import CatIndex from './CatIndex'
import CatCreate from './CatCreate'


class CatShow extends Component {
    render() {
        console.log("SHOW PROPS", this.props.cats); //returns empty array 
        const {id} = this.props.match.params
        const cat = this.props.cats.find((v) => v.id === parseInt(id))
    return (
        <>
        {/* <Router> */}
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
                    <small>Hobby: {cat.hobby}</small>
                </div>
                </ListGroup>

                <Button>Edit</Button>
                <Button>Delete</Button>

            </div>

            {/* <Switch>
                <Route exact path="/" />
            </Switch> */}
        {/* </Router>  */}
        </>
    )
    }
}

export default CatShow
