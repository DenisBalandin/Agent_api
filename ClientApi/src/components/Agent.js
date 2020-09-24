import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Agent extends Component{
    constructor(props){
        super(props);
        this.state = {
            agentData:[]
        }
    }
    componentDidMount = () => {
        fetch('http://localhost:8080/all_agents', {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            }).then(res=>res.json())
                .then(data => {
                this.setState({ agentData: data })
            });
    }
    render(){
        return(
            <div>
                <h1>All Agents</h1>
                <div className="allUsers">
                    {this.state.agentData.map((item) =>
                        <div className="UserIten" key={item._id}>
                            <div className="userData">
                                <Link to={`/agent_page/${item._id}`}>
                                    <p>Name: {item.name}</p>
                                </Link>
                                <p>Address: {item.address}</p>
                                <p>City:{item.city}</p>
                            </div>
                            <div className="userMove">
                                <Link to={`/edit_agent/${item._id}`}>
                                    <div className="userMoveButton">Edit</div>
                                </Link> 
                                {/* <div className="userMoveButton" onClick={this.deleteUser.bind(this,user.id)}>Delet user</div> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default Agent;