import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink} from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import Create from './Create.js';
import Stories from './Stories.js';
import Resources from './Resources';
import MyProfile from './MyProfile';
import { Nav } from 'react-bootstrap';





class App extends React.Component {
  render(){
    
    return(
      <div>
        <BrowserRouter>
        <Nav className='navbar' variant='tabs'>
          <Nav.Item>
            <Nav.Link>
              <NavLink ceventKey="link-1" className='nav-link' to='/'>Login</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink ceventKey="link-1" className='nav-link' to='/home'>Home</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link >
              <NavLink  eventKey="link-1" className='nav-link' to='/create'>Create</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink eventKey="link-1" className='nav-link' to='/stories'>Stories</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink ceventKey="link-2" className='nav-link' to='/resources'>Resources</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink ceventKey="link-3" className='nav-link' to='/myprofile'>MyProfile</NavLink>
            </Nav.Link>
          </Nav.Item>
        </Nav>
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/create' component={Create}/>
          <Route exact path='/stories' component={Stories}/>
          <Route exact path='/resources' component={Resources}/>
          <Route exact path='/myprofile' component={MyProfile}/>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
