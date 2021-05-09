let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abc:LDxqCmgbBdEFTQE0@cluster0.ciuva.mongodb.net/<dbname>?retryWrites=true&w=majority', (err) => {

    if (!err) {
        console.log('db connected')
    } else {
        console.log(err);
    }

});