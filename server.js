const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/customers', function (req, res) {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '최경수',
      'birthday': '971111',
      'gender': '남자',
      'job': '대학생'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '김경수',
      'birthday': '970211',
      'gender': '여자',
      'job': '프로그래머'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '정범수',
      'birthday': '921131',
      'gender': '남자',
      'job': '디자이너'
    }
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));