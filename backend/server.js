import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";



//app config
const app = express()
const port = 4000

// middleware
app.use(express.json())  //all frontend requests are parsed here
app.use(cors()) //to access backend from frontend

//db connection
connectDB();

//api endpoint
app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

//we can request data from server
app.get("/",(req,res)=>{  
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://atlas-sample-dataset-load-67fcea624e33ef295929be8a:<db_password>@cluster0.ock9qyy.mongodb.net/?
//mongodb+srv://shankar159:<db_password>@cluster0.ock9qyy.mongodb.net/?
// connected link : mongodb+srv://shankar159:Laddu232@cluster0.ock9qyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
