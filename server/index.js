const express = require('express'); //this is to import modules - the reason that we do not use import is because node cannot use import
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there'})
});

const PORT = process.env.PORT || 5000; // this will listen to the port provided by the deployment services
                                       // if || 5000 means that if the port is not defined than it will route to 5000
                                       // this is simply to route it to 5000 when we are developing the app
app.listen(PORT);