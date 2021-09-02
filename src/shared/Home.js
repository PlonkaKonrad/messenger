import React from 'react';
import styled from 'styled-components';
import {BiPlusCircle,BiDotsVerticalRounded,BiMenu,BiMinusBack,BiSearchAlt2, BiSend} from 'react-icons/bi';

///////////////////////////////////////////////////////////////////////////////////////////////////////// MAIN COMPONENT
const StyledHomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
const Home = () => {
    return ( 
        <StyledHomeWrapper>
            <Contacts />
            <Messages />
        </StyledHomeWrapper>
     );
}
 
export default Home;

////////////////////////////////////////////////////////////////////////////////////////////////////////// CONTACTS
const StyledContactList = styled.div`
    width: 40%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;

`;

const StyledContactsTopBar = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;


    button{
        border: none;
        background: transparent;
        color: #f73b92;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
    }

    div{
        display: flex;
        margin-bottom: 10px;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        

        button{
            color: #4743A8;
            font-weight: 700;
            font-size: 25px;
        }

        section{
            display: flex;
        }
    }
`;

const StyledContactsUsersList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Contacts = () => {
    return ( 
        <StyledContactList>
            <StyledContactsTopBar>
                <div>
                    <button><BiMenu/></button>
                    <section>
                        <button><BiSearchAlt2/></button>
                        <button><BiMinusBack/></button>
                        <button><BiDotsVerticalRounded/></button>
                    </section>
                </div>
                <button><BiPlusCircle/>Nowa wiadomość</button>
            </StyledContactsTopBar>
            <StyledContactsUsersList>
                <Contact /> 
                <Contact /> 
                <Contact /> 
                <Contact /> 
            </StyledContactsUsersList>
        </StyledContactList>
     );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////// CONTACT
const StyledContactWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 10px;

    section{
        display: flex;
        height: 100%;
    }

    .user-image{
        width: 30px;
        height: 100%;
        border-radius: 50px;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        margin-right: 10px;


        img{
            max-height: 100%;
            max-width: 100%;
        }
    }
    h5{
        color: #000;
    }

    p{
        font-size: 10px;
        color: #bbb;
    }

    .last-msg-time{
        height: 100%;
        display: flex;
        align-items: center;
        align-self: flex-end;
    }
    
`;

const Contact = () => {
    return ( 
        <StyledContactWrapper>
            <section>
                <div className='user-image' style={{backgroundImage: 'url(https://image.flaticon.com/icons/png/512/149/149071.png)'}}></div>
                <div>
                    <h5>Jan Nowak</h5>
                    <p>Ty: Siema co robisz?</p>
                </div>
            </section>
            <div className='last-msg-time'>
                <p>21.37</p>
            </div>

        </StyledContactWrapper>
     );
}
 

////////////////////////////////////////////////////////////////////////////////////////////////////////// MESSAGES 
const StyledMessages = styled.div`
    height: 100%;
    width: 60%;
    background: #F4F7FF;
    box-sizing: border-box;
    padding: 50px;
    padding-bottom: 0;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 100px;
`;

const StyledNewMessageForm = styled.div`
    width: 100%;
    position: absolute;
    height: 80px;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 10px;


    section{
        width: 100%;
        height: 100%;
        border-top: 1px solid #e6e9f0;
        display: flex;
        justify-content: space-between;

        button{
            background: transparent;
            border: none;
            color: #4743A8;
            display: flex;
            align-items: center;
            font-size: 30px;
            cursor: pointer;
        }

        input{
            flex-grow: 1;
            background: transparent;
            border: none;
            box-sizing: border-box;
            padding: 10px;
        }
    }
`;

const StyledMessagesTopbar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    aling-items: center;
    box-sizing: border-box;
    padding: 20px;
    position: sticky;
    top: 0;
    color: #000;
    font-weight: 700;
`;
const Messages = () => {

    // uzyc useeffect i fetchować po jsona na podstawie id użytkownika
    /*
        users: ['UserId1','Userid2']
        messages: [
            {from:'userID1', to:"userID2", content:'Siema co tam?', createdAt: '10.10.2020, 14.58'}
            {from:'userID2', to:"userID1", content:'No nic a tam?', createdAt: '10.10.2020, 14.59'}
        ] 

        sprawdzać w bazie czy tabela users zawiera id zalogowanego użutkownika oraz id tego na którego kliknął
        jeśli tak to 
        zmapować wszystkie wiadomości jeśli zalogowany uzytkownik zgadza się z from wyświetlić komponent User jeśli się nie zgadza wyświetlić komponent someone


        druga tabela z danymi to lista użytkowników z którymi pisał już user oraz ostatnia wiadomość z każdym z nich i godzina/data

        userID: '123r34ferfv34v141g45g'
        conversations: [
            {userID: '12dsec3424cced', lastMsg: 'nara', createdAt:'20.03.12, 12.33'}
        ]





        trzecia tabela to informacje zawierające dane użytkoników do której będzie trzeba się odwoływać by zdobyć imie nazwisko i zdjęcie 
        userID: '21yc328347fh834h4',
        userName: 'Konrad'
        userSurname: 'Płonka',
        userEmail: 'dasd@adw.pl',
        userPassword: '1232dj43983493n4i8h43h934ucvnkjnviuqer'
        userImage: 'link do zdjęcia'


    */
    return ( 
        <StyledMessages>
            <StyledMessagesTopbar>
                <p>Jan Nowak</p>
            </StyledMessagesTopbar>
                <SomeoneMessage/>
                <UserMessage />
                <SomeoneMessage/>
                <SomeoneMessage/>
                <UserMessage />
                <UserMessage />
            <StyledNewMessageForm>
                <section>
                    <input type='text' placeholder='Wiadomość'></input>
                    <button><BiSend/></button>
                </section>
            </StyledNewMessageForm>
        </StyledMessages>
     );
}


////////////////////////////////////////////////////////////////////////////////////////////////////////// SOMEONE MESSAGE
const StyledSomeoneMessageWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    flex-direction: column;

    span{
        font-size: 10px;
        color: #bbb;
    }

    section{
        display: flex;
        width: auto;
        max-width: 60%;
    }

    .user-image{
        width: 40px;
        height: 40px;
        border-radius: 50px;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        margin-right: 10px;


        img{
            max-height: 40px;
            max-width: 40px;
        }
    }

    p{
        border-radius: 5px;
        background: #7252F1;
        box-sizing: border-box;
        padding: 10px;
        color: #fff;
        font-size: 12px;

    }
`;

const SomeoneMessage = () => {
    return ( 
        <StyledSomeoneMessageWrapper>
            <section>
                <div className='user-image' style={{backgroundImage: 'url(https://image.flaticon.com/icons/png/512/149/149071.png)'}}></div>
                <p>
                    siema co tam porabiasz? bo u mnie w sumie nic ciekawe :D  
                </p>
            </section>
            <span>21.37</span>
        </StyledSomeoneMessageWrapper>
     );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////// USER MESSAGE
const StyledUserMessageWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-end;
    margin-top: 10px;
    flex-direction: column;

    span{
        font-size: 10px;
        color: #bbb;
    }

    section{
        display: flex;
        width: auto;
        max-width: 60%;
        height: auto;
        
    }

    .user-image{
        width: 40px ;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        background-size: cover;
        background-position: center
    }

    p{
        flex-grow: 1;
        border-radius: 5px;
        background: #fff;
        box-sizing: border-box;
        padding: 10px;
        color: #000;
        font-size: 12px;
        margin-right: 10px;
    }
`;

const UserMessage = () => {
    return ( 
        <StyledUserMessageWrapper>
            <section>
                <p>
                    siema co tam porabiasz?  Bo u mnie też nic ciekawego wiec ... 
                </p>
                <div className='user-image' style={{backgroundImage: 'url(https://image.flaticon.com/icons/png/512/149/149071.png)'}}></div>
            </section>
            <span>21.38</span>
        </StyledUserMessageWrapper>
     );
}
 