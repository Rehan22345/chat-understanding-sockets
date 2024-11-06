const express = require("express");
const app = express();
const {Server} = require("socket.io")
const port = 3000;

app.set('views', './views'); 
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.render("chat")
});

const server = app.listen(port);
const io =  new Server(server);

io.on("connection",(socket)=>{
    console.log("hello user connected");
    socket.on("messages",(data)=>{
        io.emit("msg",data);
    })
})