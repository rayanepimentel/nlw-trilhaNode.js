import 'reflect-metadata';
import express from "express";
import "./database";

const app = express();

app.get('/', (req, res) => {
    return res.json({message: 'Hello World' })
})

app.post('/', (req, res) => {
    return res.json({message : 'Os dados foram salvos'})
})

app.listen(1313, () => console.log(`Server is running!`));
