const express = require('express');

const router = express.Router();
const contacts = [
  { id: '1', username: 'Felix', surname: 'Brown', email: 'felix@test.com' },
  { id: '2', username: 'Sonya', surname: 'Redhead', email: 'sonya@test.com' },
  { id: '3', username: 'Conan', surname: 'Barbarian', email: 'conan@test.com' },
];

router.get('/', (req, res, next) => {
  res.json(contacts);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const result = contacts.filter(contact => contact.id === id);
  res.json(result);
});

module.exports = router;
