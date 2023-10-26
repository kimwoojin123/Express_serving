const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

// 루트 경로에 대한 라우트
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// /about 경로에 대한 라우트
app.get("/about", (req, res) => {
  res.send('이것은 "About" 페이지입니다.');
});

// /contact 경로에 대한 라우트
app.get("/contact", (req, res) => {
  res.send('이것은 "Contact" 페이지입니다.');
});

// /submit 경로에 대한 POST 요청 라우트
app.post("/submit", (req, res) => {
  const data = req.body;
  console.log("POST 요청을 받았습니다. 데이터:", data);
  res.send("POST 요청을 받았습니다.");
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
