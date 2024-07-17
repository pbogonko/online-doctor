import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import doctorRoute from './Routes/doctors.js'
import reviewRoute from './Routes/review.js'
import bookingRoute from './Routes/booking.js'
dotenv.config() 
const app = express()
const corsOptions={
    origin:true
}
app.use(express.json())
const port=process.env.PORT||8000

app.get('/',(req,res)=>{
    res.send('Hello from the server!')
})
//database connection
mongoose.set('strictQuery',false)//allows querying fields that are not defined in the schema
const DBconnection=async ()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL,{
       // useNewUrlParser:true,// tells Mongoose to use the new MongoDB driver’s URL parser
    //    useUnifiedTopology:true,//enables the new unified topology layer in the MongoDB driver
         
    })
    console.log('DATABASE CONNECTED SUCCESSIFULLY')
}catch(e){
    console.error('database connection failed with :'+e)
    process.exit(1)
}
}
//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/doctors',doctorRoute)
app.use('/api/v1/reviews',reviewRoute)
app.use('/api/v1/bookings',bookingRoute)
app.listen(port,()=>{
    DBconnection()//connect to the database before starting the server
    console.log(`Server running on port ${port}`)})

   




