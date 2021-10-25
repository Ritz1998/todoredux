import React ,{useState}from 'react'

import {Form,Button} from "react-bootstrap"

function Login() {

    const [Input,setInput]=useState("");
    const [change,setChange]=useState([]);


    const Inputarea=(e)=>{
        setInput(e.target.value);

    }
    const Submit=()=>{


    }



    
    return (
        <div>
            <Form className="Login">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="Label" >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={Inputarea} value={Input} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="Label">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={Inputarea} value={change}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={Submit}>
    Submit
  </Button>
</Form>

   {/* <ol>
      { <li>{}</li>
   </ol>
             */}
        </div>
    )
}

export default Login
