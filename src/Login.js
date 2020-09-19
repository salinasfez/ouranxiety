import { Button, Form } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';
import img from './images/pexels-retha-ferguson-3820312.jpg';
import './Login.css';
import Create from './Create';



class Login extends React.Component {
    state = {
      isLoggedIn: true
    }
    toggleLogin = () => {
      const afterLoginPage = this.state.isLoggedIn;
      this.setState({
        isLoggedIn: !afterLoginPage
      })
      
    
    }
    render(){
      const quoteStyle = {
          marginTop: '10%',
          color: 'white'
        }
        const formStyle = {
          marginTop: '10%',
          backgroundColor: 'rgb(13,103,207)',
          padding: '2%',
          width: '25%',
          height: '45%',
          borderRadius: '1em'
        }
        return(
            <div>
              {this.state.isLoggedIn ? 
            <div className='login'>
              <div style={quoteStyle}>
                <h3>It's Our Anxiety, you're not alone!</h3><br></br>
                <p>
                  "If the ocean can calm itself, so can you. We are both salt water mixed with air."<br></br><br></br>
                  -Nayyirah Waheed
                </p> 
              </div>
          <div style={formStyle}>
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
                <Button className='button' variant='light' type='submit' onClick={this.toggleLogin}>
                  Log In
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className='button' variant='light' type='button'>
                  Guest
                </Button>
            </Form>
          </div>
      </div>
      :
      <button onClick={this.toggleLogin}>Log Out</button>}
      <p>This my logged in page</p>
      <div className="featuredContainer">
          <div className='firstFeaturedStory'>
                el capitan se moria de miedo por que era cobarde
                el capitan se moria de miedo por que era cobarde 
          </div>
          <div className='secondFeaturedStory'>
              el capitan se moria de miedo por que era cobarde el man
          </div>
      </div>
      </div>
        )
    }
}

export default Login;