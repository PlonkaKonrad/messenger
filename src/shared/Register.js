import React from 'react';
import styled from 'styled-components';
import {BiCheck} from 'react-icons/bi'


const StyledRegisterWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        font-size: 16px;
        padding: 10px;
        border: none;
        background: #F4F7FF;
        margin: 10px;
        width: 250px;
    }

    button{
        font-size: 16px;
        padding: 10px;
        background: #7252F1;
        color: #fff;
        border: none;
        width: 250px;
        margin: 10px;
        cursor: pointer;

    }

`;

const Register = () => {
    return ( 
        <StyledRegisterWrapper>
            <h1>Zarejestruj się! </h1>
            <input type='text' placeholder='Imię'></input>
            <input type='text' placeholder='Nazwisko'></input>
            <input type='text' placeholder='Email'></input>
            <input type='password' placeholder='Hasło'></input>
            <button>Zarejestruj<BiCheck/></button>
        </StyledRegisterWrapper>
     );
}
 
export default Register;