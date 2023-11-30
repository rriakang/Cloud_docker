// server.js
var express = require('express');
var app = express();
var router = require('./router/main')(app); // 라우터 모듈인 main.js를 불러와서 app에 전달해줌


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

var server =app.listen(8080, () => {
  console.log(`Server is running at http://localhost:8080`);
});

app.use(express.static('views'));