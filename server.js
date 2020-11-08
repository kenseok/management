const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길동이',
            'birthday' : '961212',
            'gender' : '남자',
            'job' : '대학생'
        },
        {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '나동빈',
            'birthday' : '900512',
            'gender' : '남자',
            'job' : '프로그래머'
        },
        {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '수요일',
            'birthday' : '960312',
            'gender' : '남자',
            'job' : '벡수'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));