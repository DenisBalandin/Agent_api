import React,{Component} from 'react';

class EditCustomers extends Component{
    constructor(props){
        super(props);
        this.state = {
            finish:false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    componentDidMount = () => {
        console.log(this.props.match.params.customers_id);
        fetch('http://localhost:8080/customer_page/'+this.props.match.params.customers_id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        }).then(res=>res.json())
            .then(data => {
                console.log(data);
                this.setState({ 
                    _id: data._id,
                    address: data.address,
                    age: data.age,
                    balance: data.balance,
                    agent_id: data.agent_id,
                    company: data.company,
                    email: data.email,
                    eyeColor: data.eyeColor,
                    firstname: data.phone.firstname,
                    lastname: data.phone.lastname
                })
        });
    }
    addNewAgent = () => {
        fetch('http://localhost:8080/edit_customers', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                agentData: this.state
            })
        }).then(res=>res.json()).then(
            this.setState({
                finish:true
             })
        );    
    }
    render(){
        return(
            <div>
                <h1>Edit Customer</h1>
                {this.state.finish? <div>You make Customer update</div>:<div></div> }

                <form className="agent_form">
                    <div>
                        <p>Address:</p>
                        <input className="emailInput" name="address" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Age:</p>
                        <input className="emailInput" name="age" value={this.state.age} onChange={this.handleChange} />
                    </div>     
                    <div>
                        <p>Agent id:</p>
                        <input className="emailInput" name="agent_id" value={this.state.agent_id} onChange={this.handleChange} />
                    </div>         
                    <div>
                        <p>Balance:</p>
                        <input className="emailInput" name="balance" value={this.state.balance} onChange={this.handleChange} />
                    </div>     
                    <div>
                        <p>Company:</p>
                        <input className="emailInput" name="company" value={this.state.company} onChange={this.handleChange} />
                    </div>   
                    <div>
                        <p>Email:</p>
                        <input className="emailInput" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>  
                    <div>
                        <p>EyeColor:</p>
                        <input className="emailInput" name="eyeColor" value={this.state.eyeColor} onChange={this.handleChange} />
                    </div>  
                    <div>
                        <p>First Name:</p>
                        <input className="emailInput" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                    </div> 
                    <div>
                        <p>Last Name:</p>
                        <input className="emailInput" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input className="logInButton"  onClick={this.addNewAgent} type="button" value="Ok" />
                    </div>
                </form>
            </div>
        )
    }
}
export default EditCustomers;