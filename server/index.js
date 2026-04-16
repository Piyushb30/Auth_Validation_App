const express = require('express')
const app = express();
require('dotenv').config();
require('./Models/db')
const cors = require('cors')
const PORT = process.env.PORT || 8080
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> {
    res.send('home page')
})

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter)

app.listen(PORT, () => {
    console.log('server is running...')
})
