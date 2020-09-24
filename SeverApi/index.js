const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/all_agents', (req, res) => {
    fs.readFile('agents.json', (err,data) => {
        if(err) throw err;
        let agents = JSON.parse(data);
        res.send(agents);
    });
});
app.post('/new_agent', (req, res) => {
  console.log(req.body);
  fs.readFile('agents.json', (err,data) => {
    if(err) throw err;
    let customers = JSON.parse(data);
    const agent = {
      "_id":Math.floor(Math.random() * 1000),
      "name":req.body.agentData.name,
      "address":req.body.agentData.address,
      "city":req.body.agentData.city,
      "state":req.body.agentData.state,
      "zipCode":req.body.agentData.zipCode,
      "tier":req.body.agentData.tier,
      "phone":{
        "primary":req.body.agentData.primary,
        "mobile":req.body.agentData.mobile
      }
    };
    console.log(agent);
    customers.push(agent);
    const jsonString = JSON.stringify(customers)
    fs.writeFile('./agents.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.send(customers);
  });
});
app.post('/edit_agent', (req, res) => {
  fs.readFile('agents.json', (err,data) => {
    if(err) throw err;
    let customers = JSON.parse(data);
    let getAgentinfo  = customers.find(obj => obj._id === req.body.agentData._id);
      getAgentinfo.name = req.body.agentData.name;
      getAgentinfo.address = req.body.agentData.address;
      getAgentinfo.city = req.body.agentData.city;
      getAgentinfo.state = req.body.agentData.state;
      getAgentinfo.zipCode = req.body.agentData.zipCode;
      getAgentinfo.tier = req.body.agentData.tier;
      getAgentinfo.phone.primary = req.body.agentData.primary;
      getAgentinfo.phone.mobile = req.body.agentData.mobile;
    const jsonString = JSON.stringify(customers)
    fs.writeFile('./agents.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.send(customers);
  });
});
 
app.get('/agent_page/:agent_id', function (req, res) {
  let id = req.params.agent_id;
  fs.readFile('agents.json', (err,data) => {
        if(err) throw err;
        let getAgent = JSON.parse(data).find(el => el._id === parseInt(id));
        res.send(getAgent);
  });
});
app.get('/customers_agentid/:agent_id', function (req, res) {
  let id = req.params.agent_id;
  fs.readFile('customers.json', (err,data) => {
        if(err) throw err;
        let customers = JSON.parse(data);
        let getAgentinfo  = customers.filter(obj => obj.agent_id === parseInt(id));
        res.send(getAgentinfo);
  });
});


app.get('/all_customers', (req, res) => {
  fs.readFile('customers.json', (err,data) => {
      if(err) throw err;
      let customers = JSON.parse(data);
      res.send(customers);
  });
});

app.get('/customer_page/:customers_id', function (req, res) {
  let id = req.params.customers_id;
  fs.readFile('customers.json', (err,data) => {
        if(err) throw err;
        let getAgent = JSON.parse(data).find(el => el._id === parseInt(id));
        res.send(getAgent);
  });
});

app.post('/edit_customers', (req, res) => {
  fs.readFile('customers.json', (err,data) => {
    if(err) throw err;
    let customers = JSON.parse(data);
    let getAgentinfo  = customers.find(obj => obj._id === req.body.agentData._id);
        getAgentinfo.address = req.body.agentData.address;
        getAgentinfo.age = req.body.agentData.age;
        getAgentinfo.agent_id = req.body.agentData.agent_id;
        getAgentinfo.balance = req.body.agentData.balance;
        getAgentinfo.company = req.body.agentData.company;
        getAgentinfo.email = req.body.agentData.email;
        getAgentinfo.phone.eyeColor = req.body.agentData.eyeColor;
    const jsonString = JSON.stringify(customers);
    fs.writeFile('./customers.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.send(customers);
  });
});

app.post('/new_customer', (req, res) => {
  console.log(req.body);
  fs.readFile('customers.json', (err,data) => {
    if(err) throw err;
    let customers = JSON.parse(data);
    const customer = {
      "_id":Math.floor(Math.random() * 1000),
      "address":req.body.agentData.address,
      "age":req.body.agentData.age,
      "agent_id":req.body.agentData.agent_id,
      "balance":req.body.agentData.balance,
      "email":req.body.agentData.email,
      "eyeColor":req.body.agentData.eyeColor,

    };
    customers.push(customer);
    const jsonString = JSON.stringify(customers)
    fs.writeFile('./customers.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.send(customers);
  });
});

app.post('/delete_customer', (req, res) => {
  console.log(req.body);
  fs.readFile('customers.json', (err,data) => {
    if(err) throw err;
    let customers = JSON.parse(data);
    let getAgentinfo  = customers.findIndex(obj => obj._id === req.body.id);
    customers.splice(getAgentinfo,1);
    const jsonString = JSON.stringify(customers);
    fs.writeFile('./customers.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.send(customers);
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});