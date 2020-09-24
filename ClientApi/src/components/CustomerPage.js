import React,{Component} from 'react';

class getAgent extends Component {
    constructor(props){
        super(props);
        this.state = {
            customerData:[],
         
        }
    }
    componentDidMount = () => {
        fetch('http://localhost:8080/customer_page/'+this.props.match.params.customers_id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            }).then(res=>res.json())
                .then(data => {
                this.setState({ customerData: data  })
            }); 
    }
    render(){
        console.log(this.state);
        return(
            <div>
                <h1>Agent Page</h1>
                <div className="Agent_page">
                    <div>Company: {this.state.customerData.company}</div>
                    <div>Agent_id: {this.state.customerData.agent_id}</div>
                    <div>Guid: {this.state.customerData.guid}</div>
                    <div>Balance: {this.state.customerData.balance}</div>
                    <div>Age: {this.state.customerData.age}</div>
                    <div>EyeColor: {this.state.customerData.eyeColor}</div>
                    <div>Email: {this.state.customerData.email}</div>
                    <div>Phone: {this.state.customerData.phone}</div>
                    <div>Address: {this.state.customerData.address}</div>
                    <div>Registered: {this.state.customerData.registered}</div>
                    <div>Latitude: {this.state.customerData.latitude}</div>
                    <div>Longitude: {this.state.customerData.longitude}</div>
                </div>
            </div>
        )
    }
    
}
export default getAgent;