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
                                        changeQuantity = { this.changeQuantity } 
                                        state={this.state}
                                        handleIsInvoiceNeeded = {this.handleIsInvoiceNeeded}
                                        removeFromCart = {this.removeFromCart}
                                        notification = {this.notification}
                                        choosePaymentMethod = {this.choosePaymentMethod}
                                        notification = {this.notification}
                                        setFormDetails = {this.setFormDetails}
                                        setLoginUser = {this.setLoginUser}
                                        chooseDeliveryForPackage={this.chooseDeliveryForPackage}
                                        setDeliveryDetailsForKurier={this.setDeliveryDetailsForKurier}
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

// TODO obsłużyć załadowanie koszyka z  unikalnym id
// TODO zfetchować koszyk z core na podstawie unikalnego id 
// TODO zapisać koszyk do DB a następnie pobrać go na front tak samo zapisywać wszystkie dane np wysyłkę formularze itd
// TODO przy edytowaniu przekazywać ID koszyka wyszukać w bazie edytować go np ilość i zapisać do bazy
// TODO Wyliczać wartość koszyka na podstawie koszyka pobranego po ID z bazy
// TODO wykonać request do płatności, zapisać dane transakcji do db  i przekierować klienta na strone płatności 
// TODO po potwierdzeniu płatności wysłać do Core zamówienie zgodnie ze strukturą Api


// TODO zintegorwać formy płatności
// TODO change P24 to Production Mode 
// TODO dodać odbieranie potwierdzenia wykonania wpłaty
// TODO obliczać wartość zamówienia na backendzie bo na froncie może klient zmieniać wartość zamówienia i taka wartość idzie do P24


//Mała prośba, żeby id produktu nie nazywał się klucz SKU tylko variation_id bo to i tak bedzie id wariacji z core