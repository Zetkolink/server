const express = require('express');
const router = express.Router();

var fakeTasks = [{
    id: '1',
    username: 'zetkolink',
    email: 'z.chalimov@yandex.ru',
    text: 'Server test text',
    status: 'false'
}, {
    id: '2',
    username: 'test',
    email: 'test@mail.ru',
    text: 'SERVER Test TEXT',
    status: 'false'
}];

router.get('/', function (req, res, next) {
    res.status(200).send({
        data: fakeTasks
    })
});

router.get('/:id', function (req, res, next) {
    const id = req.params.id

    const picked = fakeNews.find(o => o.id === id);

    res.status(200).send({
        data: picked
    })

});

module.exports = router;