//Routes file
const chatbot = require('../chatbot/chatbot');
const dialogflow = require('dialogflow');
const config = require('../config/keys');
const { query } = require('express');

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);
module.exports = app => {

    app.get('/', (req, res) => {res.send({"hello":"Selva"})});
    
    app.post('/api/df_text_query', async (req, res) => {

        let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
        res.send(responses[0].queryResult);
    });    

    app.post('/api/df_event_query', async (req, res) => {

        let responses = await chatbot.eventQuery(req.body.event, req.body.parameters);
        res.send(responses[0].queryResult);
    });    
}