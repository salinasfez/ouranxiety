import React from 'react';
import styled from 'styled-components';

const Body = styled.body`
width: 100vw;
height: 100vh;
background: black;
color: white;
`


class Home extends React.Component {
    render(){
        return(
           <Body>
                <h1 className='test'>This is my Home page</h1>
           </Body>
        )
    }
}

export default Home;