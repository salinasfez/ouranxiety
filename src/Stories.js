
import {connect} from 'react-redux';
import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';



class Stories extends Component {
   
    render(){
        
        return(
            <div>
               <Counter />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);