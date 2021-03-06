import express, { response } from 'express';
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
const mongodbNAME = 'Messenger';



///////////////////////////////////////////////////////////////////////////////////////// LOGIN USER

app.post('/messenger-api-loginUser', (req,res) => {

    MongoClient.connect(mongodbURL, {}, (error,client) => {
        if(error) console.log('Cannot connect to the database', error)
        else{
            const db = client.db(mongodbNAME)
            db.collection('Users').find({
                userEmail: req.body.email
            }).toArray((error,result) => {
                console.log(req.body.email)
                if(error) {
                    console.log(error)
                }else if(result.length === 0){
                    console.log('Nie ma takiego konta')

                    res.send({message:'Konto z podanym adresem email nie istnieje', error: true})
                }else if(result.length > 0){

                    if(passwordHash.verify(req.body.password,result[0].userPassword)){
                        
                        db.collection('Users').updateOne(
                            { email: req.body.email },
                            { $set: { lastLogin: new Date() }},
                            { upsert: true }
                        )
                        console.log('zalogowano pomy??lnie')
                        res.send({message:'Zalogowano pomy??lnie', error: false, account:result[0]})
                    }else{
                        console.log('Nieprawid??owe has??o')

                        res.send({message:'Nieprawid??owe has??o', error: true})
                    }
                }
        })

    }})
})
    
///////////////////////////////////////////////////////////////////////////////////////// REGISTER NEW USER

app.post('/messenger-api-register', (req,res) => {

    MongoClient.connect(mongodbURL, {}, (error,client) => {
        if(error) console.log('Cannot connect to the database', error)
        else{
            const db = client.db(mongodbNAME)

            db.collection('Users').find({
                email: req.body.email
            }).toArray((error,result) => {
                if(error) {
                    console.log(error)
                }else{
                    if(result.length > 0 && result[0].email == req.body.email){
                        res.send({message:'Email jest ju?? zaj??ty', error: true});
                        res.end()
                    }else{
                        
                        db.collection('Users').insertOne({
                                userID: req.body.id,
                                userName: req.body.name,
                                userSurname: req.body.surname,
                                userEmail: req.body.email,
                                userPassword: passwordHash.generate(req.body.password),
                                userImage: 'https://image.flaticon.com/icons/png/512/149/149071.png',
                                createdAt: new Date(),
                                lastLogin: new Date(),
                            }, (error, result)=>{
                            if(error) {
                                res.send({message:'Nie uda??o si?? zarejestrowa?? u??ytkownika', error: true})
                                res.end()
                            }
                            else{
                                // console.log(result.acknowledged)
                               
                                if(result.acknowledged){
                                     res.send({message: 'Zarejestrowano poprawnie', error: false});
                                }
                                
                            }
                        })  
                    }
                }
            })
          
            
        }    
        
    })
})
///////////////////////////////////////////////////////////////////////////////////////// SEND MESSAGE 

app.post('/messenger-api-sendMessage', (req,res) => {

    MongoClient.connect(mongodbURL, {}, (error,client) => {
        if(error) console.log('Cannot connect to the database', error)
        else{
            const db = client.db(mongodbNAME)

            
            db.collection('Messages').updateOne({
                users:  [req.body.from,req.body.to],
            },{
                $setOnInsert: {messages: []}
            },{
                upsert:true 
            })



            db.collection('Messages').findOneAndUpdate({
                users: [req.body.from,req.body.to],

            },{
                $addToSet: {messages: {
                            from:req.body.from, 
                            to:req.body.to, 
                            content: req.body.content,
                            createdAt: new Date()
                        }}
            })


            db.collection('Messages').find({
                users: [req.body.from,req.body.to]
            
            }).toArray((error,result) => {
                if(error) {
                    console.log(error)
                }else{
                    console.log('....................................................................')
                    res.send(result)
                }
            })
          
            
        }    
        
    })
})

//////////////////////////////////////////////////////////////////////////////////////// GET CONVERSATIONS LIST 

app.post('/messenger-api-getConversationsList', (req,res) => {

    MongoClient.connect(mongodbURL, {}, (error,client) => {
        if(error) console.log('Cannot connect to the database', error)
        else{
            const db = client.db(mongodbNAME)
            db.collection('ConversationsLists').find({
                userID: req.body.userID
            }).toArray((error,result) => {
                if(error) {
                    console.log(error)
                }else if(result.length === 0){
                    console.log('Brak listy znajomych')

                    res.send({message:'Brak listy znajomych', error: true})
                }else if(result.length > 0){  

                        res.send(result)

                }
        })

    }})
})

////////////////////////////////////////////////////////////////////////////////////// GET MESSAGES

app.post('/messenger-api-getMessages', (req,res) => {
    MongoClient.connect(mongodbURL, {}, (error,client) => {
        if(error) console.log('Cannot connect to the database', error)
        else{
            const db = client.db(mongodbNAME)

            db.collection('Messages').find({
                users: {$all: [req.body.id1,req.body.id2]}
            }).toArray((error,result) => {
                if(error) {
                    console.log(error)
                }else{
                        res.send(result)
                }
            })
        
        }    
        
    })
})

/////////////////////////////////////////////////////////////////////////////////////// GET USER

app.post('/messenger-api-getUser', (req,res) => {
    MongoClient.connect(mongodbURL, {}, (error,client) => {
        if(error) console.log('Cannot connect to the database', error)
        else{
            const db = client.db(mongodbNAME)

            db.collection('Users').find({
                userID: req.body.userID
            }).toArray((error,result) => {
                if(error) {
                    console.log(error)
                }else{
                    // console.log(result)
                        res.send(result)
                }
            })
        
        }    
        
    })
})

/////////////////////////////////////////////////////////////////////////////////////// GET ALL USERS 

app.post('/messenger-api-getAllUsers', (req,res) => {
    MongoClient.connect(mongodbURL, {}, (error,client) => {
        if(error) console.log('Cannot connect to the database', error)
        else{
            const db = client.db(mongodbNAME)

            db.collection('Users').find({
            }).toArray((error,result) => {
                if(error) {
                    console.log(error)
                }else{
                    // console.log(result)
                        res.send(result)
                }
            })
        
        }    
        
    })
})

/////////////////////////////////////////////////////////////////////////////////////// ADD USER TO CONVERSATIONS LIST

app.post('/messenger-api-addUserToConversationList', (req,res) => {

    MongoClient.connect(mongodbURL, {}, (error,client) => {
        if(error) console.log('Cannot connect to the database', error)
        else{
            const db = client.db(mongodbNAME)


            db.collection('ConversationsLists').updateOne({
                userID: req.body.userID
            },{
                $setOnInsert: {conversations: []}
            },{
                upsert:true 
            })




            db.collection('ConversationsLists').find({
                userID: req.body.userID   
            }).toArray((error,result) => {
                if(error) {
                    console.log(error)
                }else{ 

                    
                    if(result[0].conversations.some(conversation => conversation.userID === req.body.someoneID)){
                        res.send({error:'contactAlreadyAdded',message: 'U??ytkownik zosta?? ju?? dodany'})
                    }else{

                        db.collection('ConversationsLists').findOneAndUpdate({
                                userID: req.body.userID
                            },{
                                
                            
                                $addToSet:{conversations:{
                                    userID: req.body.someoneID,
                                    lastMsg: req.body.lastMsg,
                                    createdAt: new Date(),
                                    userName: req.body.userName,
                                    userSurname: req.body.userSurname
                                }}
                
                
                            },{
                                upsert: true,
                            },() => {
                                res.send(result)
                            })


                           
                    }


                 
                }
            })

        }    
        
    })
})

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

