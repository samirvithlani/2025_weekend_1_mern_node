require("dotenv").config(); //.env file load..
const express = require("express");
//express -->referance...
const app = express();
const cron = require("node-cron");
const dbConnection = require("./src/utils/DBConnection");
dbConnection(); //db connnection function call..
app.use(express.json()); //allowing data type as json "ALSO"
const Redis = require("ioredis");
const { Queue } = require("bullmq");

const userRoutes = require("./src/routes/UserRoutes");
app.use("/user", userRoutes);

const productRoutes = require("./src/routes/ProductRoutes");
//app.use(productRoutes)
app.use("/product", productRoutes);

const categoryRoutes = require("./src/routes/CategoryRoutes");

app.use("/category", categoryRoutes);

//server calling..
//port variable dec
//const PORT = 3000

// cron.schedule("*/10 * * * * *",()=>{
//     console.log("every minute...")
// })

const redisConnection = new Redis({
  host: "127.0.0.1",
  port: 6379,
});

//queue

const myQueue = new Queue("taskQueue", { connection: redisConnection });

app.post("/add-job",async(req,res)=>{

    const {name} = req.body;
    await myQueue.add("task",{name},{delay:0})
    res.json({
        message:`task created for ${name}`
    })

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
