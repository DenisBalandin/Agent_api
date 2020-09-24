import React,{Component} from 'react';

class NewAgent extends Component{
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
    addNewAgent = () => {
        fetch('http://localhost:8080/new_agent', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                agentData: this.state,
            })
        }).then(res=>res.json()).then(
            this.setState({
                name:'',address:'',city:'',state:'',zipCode:"",tier:"",primary:'',mobile:"",finish:true
            })
        );    
    }
    render(){

        return(
            <div>
                <h1>Add new agent</h1>
                {this.state.finish? <div>You add new Agent</div>:<div></div> }
                <form className="agent_form">
                    <div>
                        <p>Name:</p>
                        <input className="emailInput" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Address:</p>
                        <input className="passwordInput" name="address" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>City:</p>
                        <input className="passwordInput" name="city" value={this.state.city} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>State:</p>
                        <input className="passwordInput" name="state" value={this.state.state} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>zipCode:</p>
                        <input className="passwordInput" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Tier:</p>
                        <input className="passwordInput" type="number" name="tier" value={this.state.tier} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Primary phone:</p>
                        <input className="passwordInput"  name="primary" value={this.state.primary} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>Mobile phone:</p>
                        <input className="passwordInput"  name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input className="logInButton"  onClick={this.addNewAgent} type="button" value="Ok" />
                    </div>
                </form>
            </div>
        )
    }
}
export default NewAgent;