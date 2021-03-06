////////////////////////////////////////////////////////////////// IMPORTS ////////////////////////////////////////////////// 

import React, { Component } from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// pink background #F3EDFF
// blue msg background #F4F7FF
// pink details #f73b92
// purple messages #7252F1
// green online #91E04C

////////////////////////////////////////////////////////////////// MAIN COMPONENT STYLEDCOMPONENT STYLING /////////////////// 
const StyledWrapper = styled.div`
    background-color: #F3EDFF;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const StyledInnerWrapper = styled.div`
    width: 800px;
    height: 600px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 20px 1px rgba(114, 100, 255, 0.3);
    overflow: hidden;

`;

class App extends Component {
    state = {
        userID: '5e264cf0-f5bb-4115-9763-6fa4a0ae4ed2',
        currentSomeoneID: '',
    }

    render() {
        
        return ( 
            <>
        <StyledWrapper>

            <StyledInnerWrapper>
                <Switch > {
                    routes.map(({ path, exact, component: C, ...rest }) => ( 
                        
                        <Route 
                            key = { path }
                            path = { path }
                            exact = { exact }
                            render = {
                                (props) => ( 
                                    <C 
                                        state ={this.state}
                                        /> 
                                )
                            }
                        />
                    ))
                } 
                </Switch> 
            </StyledInnerWrapper>
        </StyledWrapper>
            </>
        );
    }
}

export default App;

// TODO naprawić powielanie użytkowników w liście konwersacji 
// TODO naprawić tworzenie obiektu wiadomości przy pierwszej wiadomości a w innym wypoadku dopisywanie do już istniejącego obiektu
// TODO pobieranie listy konwersacji jeśli ktoś napisał do kogoś wiadomość to powinna zostać dla drugiego użytkownika automatycznie lista konwersacji 
// TODO wysyłanie wiadomości po naciśnięciu entera 