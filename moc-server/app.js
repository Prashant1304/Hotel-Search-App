//creating json server  that allows you to build fake REST APIs very fast

const jsonServer = require('json-server');
const server = jsonServer.create()
const route = jsonServer.router("db.json")
const middleware = jsonServer.defaults()

server.use((req,res,next) => {
    setTimeout(()=>next(),2000)
})

server.use(middleware);
server.use(route);
server.listen(4000, () => {
   console.log(`JSON Server is running...`);
});