
const bodyParser = require('body-parser');
const express = require('express');
const { fileClaim1, trackStatus1, contactAgent1 } = require('./db/body');
const app = express()
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// TODO ENDPOINTS
app.post('/fileClaim', async (req, res) => {
    const  body= req.body;

    const claim = await fileClaim1.create({
        date: body.date,
        location: body.location,
        damageDesc: body.damageDesc,
        photo: body.photo,
        additionalInfo: body.additionalInfo,
    });

    claim ? res.status(201).json({msg: "Success", data: claim}) : res.status(500).json({msg: "Error", data: claim})
})

app.post('/trackClaim', async (req, res) => {
    const  body= req.body;

    const track = await trackStatus1.create({
        claimId: body.claimId,
        date: body.date,
        description: body.description,
        claimStatus: body.claimStatus,
        progressUpdate: body.progressUpdate,
    });

    track ? res.status(201).json({msg: "Success", data: track}) : res.status(500).json({msg: "Error", data: track})
})

app.post('/contact', async (req, res) => {
    const  body= req.body;

    const contact = await contactAgent1.create({
        concern: body.concern,
    });

    contact ? res.status(201).json({msg: "Success", data: contact}) : res.status(500).json({msg: "Error", data: contact})
})
/*app.delete('/delete/:id', async (req, res) => {
    const todoId = req.params.id;
    const deletedTodo = await todos.deleteOne({_id: todoId})

    deletedTodo ? res.status(200).json({msg: "Success", data: deletedTodo}) 
                : res.status(500).json({msg: "Error", data: deletedTodo}) 
})

app.put('/update/:id', async (req, res) => {
    const todoId = req.params.id;
    const updatedTodo = req.body;

    //                                         id            newtodo
    const todo = await todos.findOneAndUpdate({_id: todoId}, updatedTodo);

    todo ?  res.status(200).json({msg: "Success", data: todo}) 
                : res.status(500).json({msg: "Error", data: todo}) 
})

app.put('/enable/:id', async (req, res) => {
    const todoId = req.params.id;
    const todo = await todos.findOneAndUpdate({_id: todoId}, {active: true});

    todo ? res.status(200).json({msg: "Success", data: todo}) 
                : res.status(500).json({msg: "Error", data: todo}) 
})

app.put('/disable/:id', async (req, res) => {
    const todoId = req.params.id;
    const todo = await todos.findOneAndUpdate({_id: todoId}, {active: false});

    todo ? res.status(200).json({msg: "Success", data: todo}) 
                : res.status(500).json({msg: "Error", data: todo}) 
})

// USERS ENDPOINTS
app.post('/user/create', async (req, res) => {
    const user = req.body;
    const newUser = await users.create(user);

    newUser ? res.status(201).json({msg: "Success", data: newUser}) 
            : res.status(500).json({msg: "Error", data: newUser})
})
*/

// Login

app.post("/login", (req, res) => {
    const body = req.body;
    const username = body.username;
    const pass = body.pass;

    if(username === "sohil" && pass === 123)
        res.json({
            data: "success",
        })
    else 
        res.end("Incorrect creds")
})

app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))
