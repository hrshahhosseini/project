const express = require('express');
const application = express();
require('./bootstrap').config(application);
require('./routes').myRouter(application)



module.exports = () => {
    let port = process.env.APP_PORT;
    application.listen(port, () => {
        console.log('application is running on port ' + port + ' ...')
    })
}
