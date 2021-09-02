import express from 'express';
import cors from 'cors';
import { renderToString} from 'react-dom/server';
import App from '../shared/App';
import React from 'react';
import { serialize } from 'uri-js';
import { matchPath, StaticRouter } from 'react-router-dom';
import routes from '../shared/routes'
import { ServerStyleSheet } from 'styled-components';
import cookieParser from "cookie-parser";
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';
import passwordHash from 'password-hash';
const MongoClient = require('mongodb').MongoClient;

// express middleware 
const app = express()
app.use(cors())
const sheet = new ServerStyleSheet()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser());

// MONGO database parameters
const mongodbURL = 'mongodb://127.0.0.1:27017';
const mongodbNAME = 'CKZ';



///////////////////////////////////////////////////////////////////////////////////////// LOGIN USER

// app.post('/ckz-api-loginUser', (req,res) => {
    // console.log('siema')
//     MongoClient.connect(mongodbURL, {}, (error,client) => {
//         if(error) console.log('Cannot connect to the database', error)
//         else{
//             const db = client.db(mongodbNAME)
//             db.collection('Users').find({
//                 email: req.body.email
//             }).toArray((error,result) => {
//                 if(error) {
//                     console.log(error)
//                 }else if(result.length === 0){
//                     res.send({message:'Konto z podanym adresem email nie istnieje', error: true})
//                 }else if(result.length > 0){

//                     if(passwordHash.verify(req.body.password,result[0].password)){
                        
//                         db.collection('Users').updateOne(
//                             { email: req.body.email },
//                             { $set: { lastLogin: new Date() }},
//                             { upsert: true }
//                         )
                       
//                         res.send({message:'Zalogowano pomyślnie', error: false, account:result[0]})
//                     }else{
//                         res.send({message:'Nieprawidłowe hasło', error: true})
//                     }
//                 }
//         })

//     }})
// })
    
///////////////////////////////////////////////////////////////////////////////////////// REGISTER NEW USER

// app.post('/ckz-api-registerNewUser', (req,res) => {
    
//     MongoClient.connect(mongodbURL, {}, (error,client) => {
//         if(error) console.log('Cannot connect to the database', error)
//         else{
//             const db = client.db(mongodbNAME)

//             db.collection('Users').find({
//                 email: req.body.email
//             }).toArray((error,result) => {
//                 if(error) {
//                     console.log(error)
//                 }else{
//                     if(result.length > 0 && result[0].email == req.body.email){
//                         res.send({message:'Email jest już zajęty', error: true});
//                         res.end()
//                     }else{
//                         db.collection('Users').insertOne({
//                                 name: req.body.name,
//                                 surname: req.body.surname,
//                                 email: req.body.email,
//                                 password: passwordHash.generate(req.body.password),
//                                 createdAt: new Date(),
//                                 lastLogin: new Date(),
//                                 accountConfirmed: false,
//                             }, (error, result)=>{
//                             if(error) {
//                                 res.send({message:'Nie udało się zarejestrować użytkownika', error: true})
//                                 res.end()
//                             }
//                             else{
//                                 console.log(result.acknowledged)
                               
//                                 if(result.acknowledged){
//                                     res.send({message: 'Zarejestrowano poprawnie', error: false});
//                                 }
                                
//                             }
//                         })  
//                     }
//                 }
//             })
          
            
//         }    
        
//     })
// })



/////////////////////////////////////////////////////////////////////////////////////// SERVER SIDE RENDERING
app.get('*', (req,res,next) => {
    const activeRoute = routes.find((route)=> matchPath(req.url, route)) || {}
    const sheet = new ServerStyleSheet();
    const context = req.query.coreCartId
    const markup = renderToString(sheet.collectStyles(<StaticRouter location={req.url} context={context}><App /></StaticRouter>))

    

res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title> Messenger </title>
            <script src='/bundle.js' defer></script>
            ${sheet.getStyleTags()}
            <link rel="stylesheet" href="App.css">
            <script>window.__INITIAL_DATA__ = "${context}"</script>
            <meta
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://mapa.ecommerce.poczta-polska.pl/widget/scripts/ppwidget.js ">   </script> 
            <script async src="https://geowidget.easypack24.net/js/sdk-for-javascript.js"></script>
            <link rel="stylesheet" href="https://geowidget.easypack24.net/css/easypack.css"/>
        </head>
        <body style="margin: 0">
            <div id='app'>${markup}</div>
        <body/>
    </html>
    `)
})

app.listen(4000, () =>{
    console.log('server run  on 4000')
})

