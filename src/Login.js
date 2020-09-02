import { Button, Form } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';
import img from './images/pexels-retha-ferguson-3820312.jpg';



class Login extends React.Component {
    render(){
        return(
            <div>
            <div className='first-container'>
            <div className='quote'>
              <h3>It's Our Anxiety, you're not alone!</h3><br></br>
              <p>
                "If the ocean can calm itself, so can you. We are both salt water mixed with air."<br></br><br></br>
                -Nayyirah Waheed
              </p> 
          </div>
          <div className='form'>
            <h4>Welcome, please sign in or continue as a guest!</h4>

            <Form>
                <Form.Group controlId='username'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type='text' placeholder='username'/>
                </Form.Group>
                <Form.Group controlId='passcode'>
                  <Form.Label>Passcode</Form.Label>
                  <Form.Control type='text' placeholder='passcode'/>
                </Form.Group>
                <Button className='button' variant='light' type='submit'>
                  Log In
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className='button' variant='light' type='button'>
                  Guest
                </Button>
            </Form>
            
          </div>
          </div>
          </div>
        )
    }
}

export default Login;