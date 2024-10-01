const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("node.js 서버 연결 됨")
});

app.listen(PORT, ()=> {
    console.log(`현재 돌아가고 있는 서버 포트는 ${PORT}`)
})