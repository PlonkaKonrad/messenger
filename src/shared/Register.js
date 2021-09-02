import React, {useState} from 'react';
import styled from 'styled-components';
import {BiCheck} from 'react-icons/bi'
import { v4 as uuid } from 'uuid';


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
    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const registerUser = () => {

        if(name.length < 3 ){
            alert('Imię nie może być krótsze niż 3 znaki')
        }else if(surname.length < 3){
            alert('Nazwisko nie może być krótsze niż 3 znaki')
        }else if(email.length < 6 || !email.includes('@') || !email.includes('.')){
            alert('Podaj prawidłowy email')
        }else if(password.length < 6){
            alert('Hasło nie może być krótsze niż 6 znaków')
        }else{
            fetch('/messenger-api-register',{
                method: 'POST',
                body: JSON.stringify({
                    id: uuid(),
                    name: name,
                    surname: surname,
                    email: email,
                    password: password,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => alert(data.message))
        }
    
    }
 

    const handleForm = (e) => {
        switch(e.target.id){
            case 'name':
                setname(e.target.value)
                break;
            case 'surname':
                setsurname(e.target.value)
                break;
            case 'email':
                setemail(e.target.value)
                break;
            case 'password':
                setpassword(e.target.value)
                break;
        }
    }

    return ( 
        <StyledRegisterWrapper>
            <h1>Zarejestruj się! </h1>
            <input type='text' id='name' value={name} onChange={(e)=> handleForm(e)} placeholder='Imię'></input>
            <input type='text' id='surname' value={surname} onChange={(e)=> handleForm(e)} placeholder='Nazwisko'></input>
            <input type='text' id='email'value={email} onChange={(e)=> handleForm(e)} placeholder='Email'></input>
            <input type='password' id='password'value={password} onChange={(e)=> handleForm(e)} placeholder='Hasło'></input>
            <button onClick={registerUser}>Zarejestruj<BiCheck/></button>
        </StyledRegisterWrapper>
     );
}
 
export default Register;