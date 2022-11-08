const express = require('express');
//const bodyParser = require('body-parser');
const app = express();

//app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send({'hello':'there'})

});
//require('./routes/dialogFlowRoutes')(app);

const port = process.env.PORT || 5000;
app.listen(port);