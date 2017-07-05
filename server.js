const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();
const websockify = require('koa-websocket');

const appc = websockify(new Koa());

// app.use(ctx => {
//   ctx.body = 'Hello World';
// });
appc.ws.use(route.all('/', function (ctx) {
  // `ctx` is the regular koa context created from the `ws` onConnection `socket.upgradeReq` object.
  // the websocket is added to the context on `ctx.websocket`.
  ctx.websocket.send('Hello World');
  ctx.websocket.on('message', function(message) {
    // do something with the message from client
    console.log(message);
  });
}));

console.log("started...");
appc.listen(1979);//loanservicing@providentcu.org