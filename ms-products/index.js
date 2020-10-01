const express = require('express');

const app = express();
const port = 3000;

const routers = {}
routers.v1 = express.Router();
routers.v1.use(require('./api/business/v1/routes'));

app.use('/v1', routers.v1);
app.use('/', routers.v1);

app.use(express.json());

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
