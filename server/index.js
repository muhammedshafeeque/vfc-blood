import express from 'express'
import cors from 'cors'
import  dotenv from 'dotenv'
import { connectDb } from './Config/Db.js'
import router from './Routes/index.js'

const app =express()
dotenv.config()
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/',router)
connectDb()
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
    }
    const errStatus = err.status || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
    });
});
app.listen((process.env.PORT),()=>{
    console.log('Server running on PORT:'+process.env.PORT)
})