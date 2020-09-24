import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Agent from './Agent';
import NewAgent from './NewAgent';
import AgentPage from './AgentPage';
import Customers from './Customers';
import EditAgent from './EditAgent';
import EditCustomer from './EditCustomer';
import NewCustomer from './NewCustomer';
import CustomerPage from './CustomerPage';
class Body extends Component{
    render(){
        return(
            <div>
                {/* <Route exact path="/allusers"  component={AllUsers}/>
                <Route exact path="/login"  component={LogIn}/>
                <Route exact path="/signup"  component={SignUp}/>
                <Route exact path="/newuser"  component={NewUser}/> */}
                <Route exact path="/customer_page/:customers_id"  component={CustomerPage}/>
                <Route exact path="/edit_customer/:customers_id"  component={EditCustomer}/>
                <Route exact path="/edit_agent/:agent_id"  component={EditAgent}/>
                <Route exact path="/customers"  component={Customers}/>
                <Route exact path="/new_customer"  component={NewCustomer}/>
                <Route exact path="/new_agent"  component={NewAgent}/>
                <Route exact path="/agent"  component={Agent}/>
                <Route exact path="/"  component={Home}/>
                <Route exact path="/agent_page/:agent_id" component={AgentPage} />
                {/* <Route exact path="/editpage/:userid" component={EditPage} /> */}
            </div>
        );
    }
}
export default Body;