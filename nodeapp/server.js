const express = require("express");
const cors = require('cors');
const path = require('path');  // 경로 모듈 추가
const app = express();
const port = 5000;

// 미들웨어
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// 라우터 연결
const registerRoute = require('./routes/register');
app.use('/register', registerRoute);

// React 정적 파일 제공
app.use(express.static(path.join(__dirname, '../reactapp/build')));

// 모든 경로에 대해 React의 index.html 반환
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../reactapp/build', 'index.html'));
});

// 서버 실행
app.listen(port, () => {
    console.log(`서버가 연결한 포트는 ${port}`);
});
