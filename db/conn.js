const mongoose = require('mongoose');
// const DB = process.env.DATABASE
const DB = 'mongodb+srv://haribabu91000:wwnpperHUU2fotQK@cluster0.ykldvtg.mongodb.net/certificateGenerator?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>
console.log(err)
);