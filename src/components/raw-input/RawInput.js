import React from 'react'
import styled from 'styled-components'

const TextArea = styled.textarea`
    resize: none;
    font-family: 'Poppins';
    background: #eff1f5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 20px;
    font-size: 22px;
`

const RawInput = ({onChange, value}) => {
    return ( 
        <TextArea onChange={onChange} value={value}/>
     );
}
 
export default RawInput;