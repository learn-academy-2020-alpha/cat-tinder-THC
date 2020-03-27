import React from "react"
import "../App.css"
import OkCatnip from './okcatnip.png'
import Purrfect from './purrfect.png'

const Header = () =>{
        return(
            <>
            <br/>
            
            <img id="logo" src={OkCatnip}/>
            <img id="sublogo" src={Purrfect}/>
            <br/>
            </>

        )
}
export default Header
