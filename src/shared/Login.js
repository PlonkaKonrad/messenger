import React, {useState} from 'react';
import styled from 'styled-components';
import {BiCheck} from 'react-icons/bi'

const StyledLoginWrapper = styled.div`
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

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleForm = (e) =>{
        switch(e.target.id){
            case 'email':
                setemail(e.target.value)
                break;
            case 'password':
                setpassword(e.target.value)
                break;
        }
    }

    const loginUser = () => {

        if(email.length < 6 || !email.includes('@') || !email.includes('.')){
            alert('Podaj prawidłowy email')
        }else if(password.length < 6){
            alert('Hasło musi mieć conajmniej 6 znaków')
        }else{
            fetch('/messenger-api-loginUser', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then( data => alert(data.message))
        }
    }

    return ( 
        <StyledLoginWrapper>
            <h1>Zaloguj się! </h1>
            <input type='text' id='email' value={email} onChange={e => {handleForm(e)}} placeholder='Email'></input>
            <input type='password' id='password' value={password} onChange={e => {handleForm(e)}} placeholder='Hasło'></input>
            <button onClick={loginUser}>Zaloguj<BiCheck/></button>
        </StyledLoginWrapper>
     );
}
export default Login;