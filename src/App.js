import React from 'react';
import './App.css';
import {Route, NavLink, Link, withRouter} from 'react-router-dom';
import Login from './Login.js';
import Create from '../src/containers/CreateStory/CreateStory';
import Stories from '../src/containers/Stories';
import Resources from './Resources';
import MyProfile from './MyProfile';
import { Nav } from 'react-bootstrap';
import Story from '../src/containers/Story/Story';


class App extends React.Component {
 
  render(){
    
    return(
      <div>
        
        <Nav className='navbar' variant='tabs'>
              <NavLink as={Link} eventkey="link-1" className='nav-link' to='/'>Home</NavLink>
              <NavLink eventkey="link-1" className='nav-link' to='/stories'>Stories</NavLink> 
              <NavLink  eventkey="link-1" className='nav-link' to='/create'>Create</NavLink>
              <NavLink ceventkey="link-3" className='nav-link' to='/myprofile'>MyProfile</NavLink>
              <NavLink ceventkey="link-2" className='nav-link' to='/resources'>Resources</NavLink> 
        </Nav>
          <Route exact path='/' component={Login}/>
          <Route exact path='/create' component={Create}/>
          <Route exact path='/stories' component={Stories}/>
          <Route  exact path='/stories/:id' component={Story}/>
          {/* <Route path={this.props.match.url + '/:id'} exact component={Story} /> */}
          <Route exact path='/resources' component={Resources}/>
          <Route exact path='/myprofile' component={MyProfile}/>

        
      </div>
    )
  }
}
export default withRouter(App);
