import express from 'express'
import {uploadURL} from './controllers/urlController.js'
import {getUrl} from './controllers/urlController.js'
import cors from 'cors'
const app = express();
app.use(
    cors({
      origin: "https://url-consiser.vercel.app", // ✅ Only allow frontend domain
      credentials: true, // ✅ Allow credentials (cookies, authorization headers, etc.)
    })
  );
app.use(express.json());
app.use(cors());
app.post('/',uploadURL);
app.get('/:id' , getUrl)
app.get('/' , (req ,res) =>{
    res.json({
        message :"for testing purpose"
    });
})

export default app;