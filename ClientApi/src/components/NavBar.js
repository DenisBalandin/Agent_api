import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class NavBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="NavBar">
                <div className="menuhome">
                    <Link to="/">
                        <div>Home</div>
                    </Link>
                    <Link to="/agent">
                        <div>Agents</div>
                    </Link>
                    <Link to="/new_agent">
                        <div>New agent</div>
                    </Link>
                    <Link to="/customers">
                        <div>Customers</div>
                    </Link>
                    <Link to="/new_customer">
                        <div>New customer</div>
                    </Link>
                </div> 
            </div>
        )
    }
}
export default NavBar;