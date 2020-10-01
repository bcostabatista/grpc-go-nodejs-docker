const express = require('express');
const { MsCalculatorProductsService } = require('./main/grpc/services');

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});

app.get('/products', async (req, res) => {
    const products = await MsCalculatorProductsService.getProducts({ id: "1" });
    res.json(products);
})