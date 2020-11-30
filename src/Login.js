import { Button, Form } from 'react-bootstrap';
import React from 'react';
import classes from './Login.module.css';



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
        return(
            <div className={classes.Login}>
             
            <div className={classes.Quote}>
              <div>
                <h1>It's Our Anxiety, you're not alone!</h1><br></br>
                <p>
                  "If the ocean can calm itself, so can you. We are both salt water mixed with air."<br></br><br></br>
                  -Nayyirah Waheed
                </p> 
              </div>
            </div>
          <div className={classes.Form}>
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
                <div className={classes.Buttons}>
                  <Button className='button' variant='light' type='submit' onClick={this.toggleLogin}>
                    Log In
                  </Button>
                  <Button className='button' variant='light' type='button'>
                    Guest
                  </Button>
                </div>
            </Form>
          </div>
      </div>
        )
    }
}

export default Login;