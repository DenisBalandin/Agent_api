import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class getAgent extends Component {
    constructor(props){
        super(props);
        this.state = {
            agentData:[],
            phone:[],
            customers:[]
        }
    }
    componentDidMount = () => {
        fetch('http://localhost:8080/agent_page/'+this.props.match.params.agent_id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            }).then(res=>res.json())
                .then(data => {
                this.setState({ agentData: data,phone:data.phone  })
            });
        fetch('http://localhost:8080/customers_agentid/'+this.props.match.params.agent_id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                }).then(res=>res.json())
                    .then(data => {
                    this.setState({ customers: data  })
                });  
    }
    // "_id": 321, 
    // "name": "Abe Simpson",
    // "address": "2445 Onion Belt Ave",
    // "city": "Springfield",
    // "state": "IL",
    // "zipCode": "62701",
    // "tier": 1,
    // "phone":{
    //     "primary": "217-345-2345",
    //     "mobile": "217-987-3211"
    // }
    render(){
        console.log(this.state);
        return(
            <div>
                <h1>Agent Page</h1>
                <div className="Agent_page">
                    <div>Name: {this.state.agentData.name}</div>
                    <div>Address: {this.state.agentData.address}</div>
                    <div>City: {this.state.agentData.city}</div>
                    <div>State: {this.state.agentData.state}</div>
                    <div>ZipCode: {this.state.agentData.zipCode}</div>
                    <div>Tier: {this.state.agentData.tier}</div>
                    <div>Primary phone: {this.state.phone.primary}</div>
                    <div>Primary mobile: {this.state.phone.mobile}</div>
                </div>

                <h1>Customers List</h1>
                <div className="customers_list">
                {this.state.customers.map((item) =>
                        <div className="customers_list_item" key={item._id}>
                            <div className="userData">
                                <Link to={`/customer_page/${item._id}`}>
                                    <p>Company: {item.company}</p>
                                </Link>
                            </div>
                            <div>
                                <p>Phone: {item.phone}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    
}
export default getAgent;