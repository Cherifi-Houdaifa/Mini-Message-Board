var express = require('express');
var router = express.Router();

// Thu Sep 29 2022 21:02

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
  },
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messages Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('new', { title: 'Mini Messages Board' });
});

router.post('/new', function (req, res, next) {
  messages.unshift({
    text: req.body.messagetext,
    user: req.body.username,
    added: new Date().toLocaleString(),
  });
  res.redirect('/');
});

module.exports = router;
