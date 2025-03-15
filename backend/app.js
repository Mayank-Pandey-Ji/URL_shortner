import express from 'express'
import {uploadURL} from './controllers/urlController.js'
import {getUrl} from './controllers/urlController.js'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());
app.post('/',uploadURL);
app.get('/:id' , getUrl)

export default app;