const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid');

const tasks = [
  {
    id: '1',
    title: 'Work',
    text: 'Do it!',
    done: false,
  },
  {
    id: '2',
    title: 'Rest',
    text: 'Do it!',
    done: true,
  },
];

router
  .get('/tasks', (req, res) => {
    return res.json({
      status: 'success',
      code: 200,
      result: {
        tasks,
      },
    });
  })
  .post('/tasks', (req, res) => {
    const { title, text } = req.body;
    const newTask = {
      id: nanoid(),
      title,
      text,
      done: false,
    };
    tasks.push(newTask);
    return res.status(201).json({
      status: 'success',
      code: 200,
      result: {
        tasks: newTask,
      },
    });
  });

router
  .get('/tasks/:id', (req, res) => {
    const idx = tasks.findIndex(task => task.id === req.params.id);
    if (idx === -1) {
      throw new Error();
      return;
    }
    return res.json({
      status: 'success',
      code: 200,
      result: {
        task: tasks[idx],
      },
    });
  })
  .put('/tasks/:id', (req, res) => {
    const { text, title } = req.body;
    const id = req.params.id;
    const task = tasks.find(item => item.id === id);
    if (!task) {
      throw new Error();
      return;
    }
    task.text = text;
    task.title = title;
    return res.json({
      status: 'success',
      code: 200,
      result: {
        task,
      },
    });
  })
  .delete('/tasks/:id', (req, res, next) => {
    const idx = tasks.findIndex(item => item.id === req.params.id);
    if (idx === -1) {
      throw new Error();
      return;
    }
    const task = tasks.splice(idx, 1);
    return res.json({
      status: 'success',
      code: 200,
      result: {
        task,
      },
    });
  });

router.patch('/tasks/:id/status', (req, res, next) => {
  const { done } = req.body;
  const id = req.params.id;
  const task = tasks.find(item => item.id === id);
  if (!task) {
    throw new Error();
    return;
  }
  task.done = done;
  return res.json({
    status: 'success',
    code: 200,
    result: {
      task,
    },
  });
});

module.exports = router;
