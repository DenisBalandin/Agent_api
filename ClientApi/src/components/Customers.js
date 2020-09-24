import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Customers extends Component{
    constructor(props){
        super(props);
        this.state = {
            customersData:[]
        }
    }
    componentDidMount = () => {
        fetch('http://localhost:8080/all_customers', {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        }).then(res=>res.json())
            .then(data => {
            this.setState({ customersData: data })
        });
    }
    deleteUser = (id) => {
        fetch('http://localhost:8080/delete_customer', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: id,
            })
        }).then(res=>res.json(
           // let remove = this.state.fruits.indexOf(e.target.value)
     
            this.setState({
                customersData: this.state.customersData.filter(el => el._id !== id)
            })
        ));  
    }
    render(){
        return(
            <div>
                <h1>All Customers</h1>
                <div className="allUsers">
                    {this.state.customersData.map((item) =>
                        <div className="UserIten" key={item._id}>
                            <div className="userData">
                                <Link to={`/customer_page/${item._id}`}>
                                    <p>Company: {item.company}</p>
                                </Link>
                                <p>Phone: {item.phone}</p>
                                <p>Balance: {item.balance}</p>
                                <p>Age: {item.age}</p>
                            </div>
                            <div className="userMove">
                                <Link to={`/edit_customer/${item._id}`}>
                                    <div className="userMoveButton">Edit</div>
                                </Link> 
                                <div className="userMoveButton" onClick={this.deleteUser.bind(this,item._id)}>Delete</div>
                            </div>
                        </div>
                    )}
                </div>
                
            </div>
        )
    }
}
export default Customers;