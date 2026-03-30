const mongoose = require('mongoose');
// const DB = process.env.DATABASE
// const DB = 'mongodb+srv://haribabu91000:wwnpperHUU2fotQK@cluster0.ykldvtg.mongodb.net/certificateGenerator?retryWrites=true&w=majority'
const DB = 'mongodb+srv://akhandasevasamsthanass_db_user:jO89CFnqWYwuEV9b@assngo-online-certifica.zywn0ue.mongodb.net/?appName=assngo-online-certificate-editor-validator-server'
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>
console.log(err)
);