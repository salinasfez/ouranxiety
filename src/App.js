import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Link} from 'react-router-dom';
import Login from './Login.js';
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
              <NavLink as={Link} eventkey="link-1" className='nav-link' to='/'>Home</NavLink>
              <NavLink  eventkey="link-1" className='nav-link' to='/create'>Create</NavLink>
              <NavLink eventkey="link-1" className='nav-link' to='/stories'>Stories</NavLink>
              <NavLink ceventkey="link-2" className='nav-link' to='/resources'>Resources</NavLink>
              <NavLink ceventkey="link-3" className='nav-link' to='/myprofile'>MyProfile</NavLink>
        </Nav>
          <Route exact path='/' component={Login}/>
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
