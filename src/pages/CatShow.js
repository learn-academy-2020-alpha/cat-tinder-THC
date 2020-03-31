import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import CrazyCat from "./crazyCat.png"



class CatShow extends Component {
    render() {
        console.log("SHOW PROPS", this.props.cats) //returns empty array - WHY
        const {id} = this.props.match.params
        const cat = this.props.cats.find((v) => v.id === parseInt(id))
        console.log(cat)
    return (
        <>
        {/* "if statement" */}
        {/* before cat gets assigned, code will skip cat (falsey) and not run the following codes */}
        {/* cat will eventually get assigned to an object - become truthy */}
        {cat &&
        <div>
            <Link to="/" id="button"><Button>Back Home</Button></Link>
            <div id="middle">
                <ListGroup>
                    <br/>
                    <br/>
                    <img id="zoom" src={CrazyCat}/>
                    <br/>
                <div id= "box"> 
                    <h4>{cat.name}</h4>
                    <small>Age: {cat.age}</small>
                    <small>Hobby: {cat.hobby}</small>
                </div>
                </ListGroup>
                <br/>
                <br/>
                <Button>Edit</Button> &nbsp;
                <Button>Delete</Button>
            </div>
        </div>
        }
        </>
    )
    }
}

export default CatShow
