import 'reflect-metadata';
import express from 'express';
import router from './routes';
const app: express.Application = express();
const port: string = process.env.PORT || '8080';
app.use(function(req: express.Request, res: express.Response, next: Function) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
app.use(express.json());
app.use(router);
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
