const express = require('express');
const imgRouter = require('./routes/img');

const app = express();

app.use('/api', imgRouter);

app.use(express.static('uploads'));

app.listen(4000, () =>{
    console.log('4000번 포트 서버 실행');
})
