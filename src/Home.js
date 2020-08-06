import React from 'react';
import styled from 'styled-components';

const Body = styled.body`
    background-color: black;
    text-align: center;
    color: white;
    background-image: none;
    height: 100vh; width: 100vw;
`;

class Home extends React.Component {
    render(){
        return(
           <Body>
                <h1>This is my Home page</h1>
           </Body>
        )
    }
}

export default Home;