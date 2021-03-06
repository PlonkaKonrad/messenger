import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {BiPlusCircle,BiDotsVerticalRounded,BiMenu,BiMinusBack,BiSearchAlt2, BiSend} from 'react-icons/bi';

///////////////////////////////////////////////////////////////////////////////////////////////////////// MAIN COMPONENT
const StyledHomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;



const Home = (props) => {
    const [conversations, setconversations] = useState([]);
    const [isconversationsLoaded, setisconversationsLoaded] = useState(false);
    const [messages, setmessages] = useState([]);
    const [currentSomeone, setcurrentSomeone] = useState();
  



    
    useEffect(() => {
        getConversationsList()
    });

    const getUser = (id) => {
        fetch('/messenger-api-getUser', {
            method: 'POST',
            body: JSON.stringify({userID:id}),
            headers: {"Content-Type":"application/json"}
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data[0])
            setcurrentSomeone(data[0])
        })
    }

    const getMessages = (id) => {
        setcurrentSomeone(id)
        fetch('/messenger-api-getMessages', {
            method: 'POST',
            body:JSON.stringify({
                id1: props.state.userID,
                id2: id
            }),
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then(result=> result.json())
        .then(data => {
            console.log(data)
                if(data.length>0){
                    setmessages(data[0].messages)

                    data[0].users.forEach(user => {
                        if(user !== props.state.userID){
                            getUser(user)
                        }
                    })
                }else{
                    setmessages([[{from:"none",to:"someone",content:"Napisz coś",createdAt:new Date()}]])
                }
        })
    }

    const sendMessage = (from, content) => {
        fetch('/messenger-api-sendMessage', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                from: from,
                to: currentSomeone.userID, 
                content: content
            })
        })
        .then(result => result.json())
        .then(data => {
            setmessages(data[0].messages)
        })
    }

    const getConversationsList = () => {
        fetch('/messenger-api-getConversationsList',{
            method: "POST",
            body: JSON.stringify({
                userID: props.state.userID // zmienić na dynamiczne
            }),
            headers: {
                "Content-Type":"application/json"
            }

        })
        .then(response => response.json())
        .then(data => {

            


            sessionStorage.setItem('conversationsList', JSON.stringify(data[0].conversations))
            if(isconversationsLoaded == false){
                setconversations(JSON.parse(sessionStorage.getItem('conversationsList')))
                console.log(conversations)
            }
            setisconversationsLoaded(true)

        })
    }





    return ( 
        <StyledHomeWrapper>
            <Contacts 
                conversations = {conversations}
                getMessages = {getMessages}
                state = {props.state}
                getUser = {getUser}
                getConversationsList={getConversationsList}
                setisconversationsLoaded ={setisconversationsLoaded}
            />
            <Messages 
                messages = {messages}
                userID = {props.state.userID}
                currentSomeone = {currentSomeone}
                state = {props.state}
                sendMessage ={sendMessage}
            />
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
    position: relative;

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
const StyledUsersModal = styled.div`
    width: 100%;
    height: 80%;
    color: #bbb;
`;
const StyledUser = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    box-sizing: border-box;
    padding: 5px;
    align-items: center;
    cursor: pointer;

    :hover{
        filter: brightness(0.5);
    }

    div{
        height: 100%;
        width: 40px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 10px;

        img{
            max-width: 100%;
            max-height: 100%;

        }
    }
`;

const Contacts = (props) => {
    const [modalOpened, setmodalOpened] = useState(false);
    const [allUsers, setallUsers] = useState([]);

    const displayContacts = props.conversations.map(conversation => {
        return(
            <Contact 
                conversation = {conversation}
                getMessages = {props.getMessages}
                getUser = {props.getUser}
            /> 
        )
    })

    const toggleModalWithUsers = () => {
        setmodalOpened(!modalOpened)

        fetch('/messenger-api-getAllUsers',{
            method:'POST',
            headers: {
                "Content-Type":"application/json"
            },
        })
        .then(response => response.json())
        .then(data =>{
            setallUsers(data)
        })
    }

    const addUserToConversationList = (someoneID,userName,userSurname) => {
        fetch('/messenger-api-addUserToConversationList', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                userID: props.state.userID,             
                someoneID: someoneID,
                lastMsg: '',
                userName: userName,
                userSurname: userSurname,
            })
        })
        .then(response => response.json())
        .then(data => {
            
            props.setisconversationsLoaded(false)
            props.getConversationsList()
            setmodalOpened(false)
        })

    }
 

    const displayAllUsers = allUsers.map(user => {
        return(
            <StyledUser onClick={() => addUserToConversationList(user.userID,user.userName,user.userSurname)}>
                <div><img src={user.userImage} alt='user'></img></div>
                <h5>{user.userName} {user.userSurname}</h5>
            </StyledUser>
        )
    })

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
                <button onClick={toggleModalWithUsers}><BiPlusCircle/>Nowa wiadomość</button>
            </StyledContactsTopBar>
            <StyledContactsUsersList>
                {modalOpened?
                    <StyledUsersModal>
                        <h4>Do kogo chcesz napisać?</h4>
                        {displayAllUsers}
                    </StyledUsersModal>
                :null}
                {displayContacts}
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
    cursor: pointer;

    :hover{
        filter: brightness(0.8);
    }

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

const Contact = (props) => {

    const handleClickOnUser = () => {
        props.getMessages(props.conversation.userID)
        props.getUser(props.conversation.userID)
    }


    return ( 
        <StyledContactWrapper onClick={handleClickOnUser}>
            <section>
                <div className='user-image' style={{backgroundImage: 'url(https://image.flaticon.com/icons/png/512/149/149071.png)'}}></div>
                <div>
                    <h5>{props.conversation.userName} {props.conversation.userSurname}</h5>
                    <p>{props.conversation.lastMsg}</p>
                </div>
            </section>
            <div className='last-msg-time'>
                <p>{props.conversation.createdAt}</p>
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

const StyledMessagesList = styled.div`
    overflow: auto;
    width: 100%;
    height: 450px;
    -ms-overflow-style: none; 
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
      }
      
`;

const StyledNoMessages = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #bbb;

`;


const Messages = (props) => {
        const [messageContent, setmessageContent] = useState('');

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


        const displayMessages = props.messages.map(message => {
            
            if(message.from === props.userID){
                return(
                    <UserMessage
                        content = {message.content}
                        createdAt = {message.createdAt}
                    />
                )
            }else if(message.from === props.currentSomeone.userID){
                return(
                    <SomeoneMessage
                        content = {message.content}
                        createdAt = {message.createdAt}
                    />
                )
            }else {

                console.log(message)
                return(
                    <StyledNoMessages>
                        <h4>{message[0].content}</h4>
                    </StyledNoMessages>
                )
            }

        })
        

        const handleSendingMessage =() => {
            setmessageContent('')
            props.sendMessage(props.state.userID, messageContent)
        }

        const handleKeyPress = (event) => {
            if(event.key === 'Enter'){
                handleSendingMessage();
              }
        }


        
    return ( 
        <StyledMessages>
            <StyledMessagesTopbar>
                <p>{props.currentSomeone? `${props.currentSomeone.userName} ${props.currentSomeone.userSurname}`: null}</p>
            </StyledMessagesTopbar>
            <StyledMessagesList >
                {displayMessages}
            </StyledMessagesList>
            <StyledNewMessageForm>
                <section>
                    <input value={messageContent} onKeyPress={handleKeyPress} onChange={(e)=>setmessageContent(e.target.value)}type='text' placeholder='Wiadomość'></input>
                    <button onClick={handleSendingMessage} ><BiSend/></button>
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

const SomeoneMessage = (props) => {
    return ( 
        <StyledSomeoneMessageWrapper>
            <section>
                <div className='user-image' style={{backgroundImage: 'url(https://image.flaticon.com/icons/png/512/149/149071.png)'}}></div>
                <p>
                    {props.content}
                </p>
            </section>
            <span>{props.createdAt}</span>
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

const UserMessage = (props) => {
    return ( 
        <StyledUserMessageWrapper>
            <section>
                <p>
                    {props.content}
                </p>
                <div className='user-image' style={{backgroundImage: 'url(https://image.flaticon.com/icons/png/512/149/149071.png)'}}></div>
            </section>
            <span>{props.createdAt}</span>
        </StyledUserMessageWrapper>
     );
}
 