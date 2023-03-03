const ws = new require('ws');

const wsServer = new ws.Server({ port: 5000 });

const clients = [];

wsServer.on('connection', newClient => {
  clients.push(newClient);
  newClient.send('Hello from ws');
  newClient.on('message', message => {
    console.log(message.toString());
  });

  clients.forEach(user => {
    if (user !== newClient) {
      user.send('New user connected');
    }
  });
});
