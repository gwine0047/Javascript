const express = require('express');
const mongoose = require("mongoose");
const Product = require('./models/product.models')

const app = express();
app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Hello world!");
})

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/products/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message : error.message});
    }
})

app.post('/api/products', async (req, res) =>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) {
            return res.status(404).json({message: error.message})
        }

        const UpdatedProducts = await Product.find({})
        res.status(200).json(UpdatedProducts);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
})

mongoose.connect("mongodb+srv://gwinedev:EGyV6Pgrk2YsmUwb@backenddb.ak9ip.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () =>{
        console.log("Server is running on port 3000");
});
    
})
.catch(() => {
    console.log("Connection failed");
});

// gwinedevnpm i mo
// EGyV6Pgrk2YsmUwb