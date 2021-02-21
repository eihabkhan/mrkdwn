import React from 'react'
import styled from 'styled-components'

import Logo from '../../assets/logo.png'

// STYLES
const HeaderWrapper = styled.div`    
    width: 100vw;
    height: 50px;
    background-color: #1d1f1e;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ControlButton = styled.button`
    cursor: pointer;
    margin: 8px 16px;
    border: none;
    text-transform: uppercase;
    padding: 8px 12px;
    font-weight: bold;    
    transition: all 0.5s ease;
    border-radius: 5px;
    background-color: #000;
    color: #fff;

    &:hover {
        box-shadow: 0px 4px 8px #60dcbd59;
    }
    
`

const ControlsWrapper = styled.div`
    margin-right: 16px;    
`

const AppLogo = styled.img`
    margin-left: 16px;
`


// COMPONENTS
const Header = ({onClick}) => {

    return ( 
        <HeaderWrapper>
            <AppLogo src={Logo} width="30px" height="30px" alt="MD LOGO"/>
            <ControlsWrapper>
                <ControlButton onClick={onClick}>Export</ControlButton>
            </ControlsWrapper>
        </HeaderWrapper>
     );
}
 
export default Header;